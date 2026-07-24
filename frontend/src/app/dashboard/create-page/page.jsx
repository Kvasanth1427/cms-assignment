"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { createPage } from "@/services/pageService";

export default function CreatePage() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
  try {
    const token = localStorage.getItem("token");

    const response = await createPage(data, token);

    alert(response.message);

    router.push("/dashboard");
  } catch (error) {
    alert(error.response?.data?.message || "Failed to create page");
  }
};

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="mb-8 text-4xl font-bold">
        Create New Page
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 rounded-lg bg-white p-8 shadow"
      >
        <div>
          <label className="mb-2 block font-semibold">
            Title
          </label>

          <input
            type="text"
            className="w-full rounded border p-3"
            {...register("title")}
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Slug
          </label>

          <input
            type="text"
            className="w-full rounded border p-3"
            {...register("slug")}
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Content
          </label>

          <textarea
            rows={6}
            className="w-full rounded border p-3"
            {...register("content")}
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
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
          className="rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Create Page
        </button>
      </form>
    </div>
  );
}