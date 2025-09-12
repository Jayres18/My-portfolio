import { blogs } from "@/contents/blogs";
import Link from "next/link";
import React from "react";
import {
  FaCalendar,
  FaClock,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

const Blogs = () => {
  return (
    <section className="py-20 container max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center">Latest Blog Posts</h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <article
            key={blog.slug}
            className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <Link href={`/blogs/${blog.slug}`}>
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="mb-4 ">{blog.excerpt}</p>
            </Link>

            <div className="flex flex-wrap justify-between mt-2">
              <div className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
                <FaCalendar className="w-5 h-5" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
                <FaClock className="w-5 h-5" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link
          href="/blogs"
          className="min-w-[140px] bg-primary hover:bg-blue-500 dark:text-white font-medium hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          View All Blogs
        </Link>
      </div>
    </section>
  );
};

export default Blogs;
