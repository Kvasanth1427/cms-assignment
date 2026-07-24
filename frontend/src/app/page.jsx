"use client";

import { useEffect, useState } from "react";
import { getPages } from "@/services/pageService";

export default function HomePage() {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await getPages(token);

        setPages(response.pages);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPages();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="mb-8 text-4xl font-bold">
        CMS Public Website
      </h1>

      <p className="mb-8 text-lg">
  Content served from the backend
</p>

{pages.length === 0 ? (
  <p className="text-gray-500">
    No pages available.
  </p>
) : (
  <div className="space-y-6">
    {pages.map((page) => (
      <div
        key={page._id}
        className="rounded-lg bg-white p-6 shadow"
      >
        <h2 className="text-2xl font-bold">
          {page.title}
        </h2>

        <p className="mt-2 text-gray-600">
          Slug: {page.slug}
        </p>

        <div
          className="mt-4"
          dangerouslySetInnerHTML={{
            __html: page.content,
          }}
        />
      </div>
    ))}
  </div>
)}
    </div>
  );
}