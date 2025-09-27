"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to sent the message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="container max-w-7xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-18 text-center">Contact Me</h1>

      {/* Details Section */}
      <section className="mb-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold mb-3 mt-10">
              Get in Touch with Me
            </h2>
            <p className="text-secondary mb-8">
              If you’re interested in collaborating, have any inquiries, or
              would like to discuss a potential project, please don’t hesitate
              to get in touch.
            </p>
            <div className="flex p-2 items-center gap-4 mb-5">
              <div>
                <FaEnvelope className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Email</h3>
                <Link
                  href="mailto:josephdaniel.lansang@g.batstate-u.edu.ph"
                  className="text-secondary hover:text-primary"
                >
                  josephdaniel.lansang@g.batstate-u.edu.ph
                </Link>
              </div>
            </div>
            <div className="flex p-2 items-center gap-4 mb-5">
              <div>
                <FaPhone className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Phone</h3>
                <p className="text-secondary">(+63) 927 794 7737</p>
              </div>
            </div>
            <div className="flex p-2 items-center gap-4 mb-5">
              <div>
                <FaMapMarkerAlt className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Location</h3>
                <p className="text-secondary">Batangas, Philippines</p>
              </div>
            </div>
          </div>

          {/* Contact Me - Form */}
          <div className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6">
            <form onSubmit={handleSubmit} className="flex flex-row">
              <div className="flex flex-col gap-4 w-full">
                <label htmlFor="name" className="text-md font-semibold">
                  Name
                </label>
                <input
                  required
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your Name"
                  className="mb-4 px-4 py-3 border rounded-lg dark:text-white border-gray-300 dark:border-gray-600 bg-white text-gray-500 dark:bg-dark focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <label htmlFor="email" className="text-md font-semibold">
                  Email
                </label>
                <input
                  required
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="mb-4 px-4 py-3 border rounded-lg dark:text-white border-gray-300 dark:border-gray-600 bg-white text-gray-500 dark:bg-dark focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <label htmlFor="message" className="text-md font-semibold">
                  Message
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={handleChange}
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Enter your message here...."
                  className="mb-4 px-4 py-3 border rounded-lg dark:text-white border-gray-300 dark:border-gray-600 bg-white text-gray-500 dark:bg-dark focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                  {status === "loading" ? "Sending...." : "Send Message"}
                </button>
                {status === "success" && (
                  <p className="text-green-500 text-center">
                    Message sent successfully!
                  </p>
                )}

                {status === "error" && (
                  <p className="text-red-500 text-center">
                    Failed to send the message. Please try again.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
