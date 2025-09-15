import { blogs } from "@/contents/blogs";
import Link from "next/link";
import React from "react";
import { FaCalendar, FaCalendarAlt, FaClock } from "react-icons/fa";

const Blogs = () => {
  return (
    <section className="py-20 container max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Latest Blog Posts
      </h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <article
            key={blog.slug}
            className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
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
      <div className="flex justify-center mt-10">
        <Link
          href="/blogs"
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          View All Blogs
        </Link>
      </div>
    </section>
  );
};

export default Blogs;
