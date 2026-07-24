"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useDispatch, useSelector } from "react-redux";
import { getPages, deletePage } from "@/services/pageService";
import { setPages } from "@/redux/pageSlice";
import { logout } from "@/redux/authSlice";

export default function Dashboard() {
  const router = useRouter();
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.page.pages);
  const handleLogout = () => {
  localStorage.removeItem("token");

  dispatch(logout());

  router.push("/login");
};
const handleDelete = async (id) => {
  try {
    const token = localStorage.getItem("token");

    const response = await deletePage(id, token);

    alert(response.message);

    window.location.reload();
  } catch (error) {
    alert(error.response?.data?.message || "Delete Failed");
  }
};

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, [router]);
  useEffect(() => {
  const fetchPages = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await getPages(token);

      dispatch(setPages(response.pages));
    } catch (error) {
      console.log(error);
    }
  };

  fetchPages();
}, [dispatch]);

  return (
  <div className="min-h-screen bg-gray-100 p-10">
    <h1 className="text-4xl font-bold">
      CMS Admin Dashboard
    </h1>

    <p className="mt-4 text-lg">
  Welcome Admin 👋
</p>

<h2 className="mt-8 text-2xl font-bold">
  Pages
</h2>

{pages.length === 0 ? (
  <p className="mt-4 text-gray-500">
    No pages found.
  </p>
) : (
  <ul className="mt-4 space-y-3">
    {pages.map((page) => (
      <li
  key={page._id}
  className="rounded-lg border bg-white p-4 shadow"
>
  <h3 className="text-xl font-semibold">
    {page.title}
  </h3>

  <p className="text-gray-600">
    Slug: {page.slug}
  </p>

  <p className="mt-2">
    Status: {page.status}
  </p>

 <div className="mt-4 flex gap-3">
  <button
    onClick={() =>
      router.push(`/dashboard/edit-page/${page._id}`)
    }
    className="rounded bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
  >
    Edit
  </button>

  <button
  onClick={() => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this page?"
    );

    if (confirmDelete) {
      handleDelete(page._id);
    }
  }}
  className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
>
  Delete
</button>
</div>
</li>
    ))}
  </ul>
)}

    <button
      onClick={handleLogout}
      className="mt-8 rounded bg-red-600 px-6 py-3 text-white hover:bg-red-700"
    >
      Logout
    </button>
  </div>
);
}