import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const ContactPage = () => {
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
                <p className="text-secondary">
                  josephdaniel.lansang@g.batstate-u.edu.ph
                </p>
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
            <form className="flex flex-row">
              <div className="flex flex-col gap-4 w-full">
                <label htmlFor="name" className="text-md font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your Name"
                  className="mb-4 px-4 py-3 border rounded-lg dark:text-white border-gray-300 dark:border-gray-600 bg-white text-gray-500 dark:bg-dark focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <label htmlFor="address" className="text-md font-semibold">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter your Address"
                  className="mb-4 px-4 py-3 border rounded-lg dark:text-white border-gray-300 dark:border-gray-600 bg-white text-gray-500 dark:bg-dark focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <label htmlFor="email" className="text-md font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="mb-4 px-4 py-3 border rounded-lg dark:text-white border-gray-300 dark:border-gray-600 bg-white text-gray-500 dark:bg-dark focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
