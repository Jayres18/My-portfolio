import { blogs } from "@/contents/blogs";
import Link from "next/link";
import React from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

const Blogs = () => {
  return (
    <div className="py-20 container max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Blog Posts</h1>

      {/* Blogs */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <article
            key={blog.slug}
            className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6 hover:scale-[1.02] transition-transform duration-300"
          >
            <Link href={`/blogs/${blog.slug}`}>
              <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                {blog.title}
              </h3>
            </Link>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              {blog.excerpt}
            </p>

            <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
              <span className="flex items-center gap-1">
                <FaCalendarAlt className="mr-2" />
                {new Date(blog.date).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-1">
                <FaClock className="mr-2" />
                {blog.readTime}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
