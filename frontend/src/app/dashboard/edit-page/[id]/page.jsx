"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getPageById } from "@/services/pageService";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { updatePage } from "@/services/pageService";


export default function EditPage() {
  const { id } = useParams();
const router = useRouter();const onSubmit = async (data) => {
  try {
    const token = localStorage.getItem("token");

    const response = await updatePage(id, data, token);

    alert(response.message);

    router.push("/dashboard");
  } catch (error) {
    alert(error.response?.data?.message || "Update Failed");
  }
};
  const [page, setPage] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  useEffect(() => {
  const fetchPage = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await getPageById(id, token);

      setPage(response.page);

reset({
  title: response.page.title,
  slug: response.page.slug,
  content: response.page.content,
  status: response.page.status,
});
    } catch (error) {
      console.log(error);
    }
  };

  if (id) {
    fetchPage();
  }
}, [id]);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold">
        Edit Page
      </h1>

      {page ? (
  <form
  onSubmit={handleSubmit(onSubmit)}
  className="mt-6 rounded-lg bg-white p-6 shadow space-y-5"
>
    <div>
      <label className="block mb-2 font-semibold">
        Title
      </label>

      <input
        type="text"
        className="w-full rounded border p-3"
        {...register("title")}
      />
    </div>

    <div>
      <label className="block mb-2 font-semibold">
        Slug
      </label>

      <input
        type="text"
        className="w-full rounded border p-3"
        {...register("slug")}
      />
    </div>

    <div>
      <label className="block mb-2 font-semibold">
        Content
      </label>

      <textarea
        rows={6}
        className="w-full rounded border p-3"
        {...register("content")}
      />
    </div>

    <div>
      <label className="block mb-2 font-semibold">
        Status
      </label>

      <select
        className="w-full rounded border p-3"
        {...register("status")}
      >
        <option value="draft">Draft</option>
        <option value="published">Published</option>
      </select>
    </div>

    <button
      type="submit"
      className="rounded bg-green-600 px-6 py-3 text-white hover:bg-green-700"
    >
      Update Page
    </button>
  </form>
) : (
  <p className="mt-4">Loading...</p>
)}
    </div>
  );
}