import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="container max-w-7xl mx-auto py-25">
      <h1 className="text-4xl font-bold mb-18 text-center">Contact Me</h1>

      {/* Details Section */}
      <section className="mb-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold mb-3">Get in Touch with Me</h2>
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
          <div className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6"></div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
