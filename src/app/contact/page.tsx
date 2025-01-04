"use client";

import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-gray-50 p-2 md:p-0">
      {/* Header */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-800">Get in Touch</h1>
        <p className="text-gray-600 mt-4">
          Contact us today and let’s start your journey with us.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="text-purple-600 text-2xl mb-4">📍</div>
          <h3 className="text-lg font-bold">Office</h3>
          <p className="text-gray-600">Visit us: 10 Downing St, London, UK</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="text-purple-600 text-2xl mb-4">✉️</div>
          <h3 className="text-lg font-bold">Email</h3>
          <p className="text-gray-600">hello@zarrin.com</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="text-purple-600 text-2xl mb-4">📞</div>
          <h3 className="text-lg font-bold">Phone</h3>
          <p className="text-gray-600">+1 800 123 456</p>
        </div>
      </div>

      {/* Map Section */}
      <div className="my-12">
        <iframe
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Karachi City, Sindh&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="w-full max-w-6xl mx-auto rounded-lg"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
      {/* Contact Form */}
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Name"
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="text"
            placeholder="Phone"
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600 sm:col-span-2"
          />
          <input
            type="text"
            placeholder="Subject"
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600 sm:col-span-2"
          />
          <textarea
            placeholder="Message"
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600 sm:col-span-2"
            rows={6}
          ></textarea>
          <button
            type="submit"
            className="bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 sm:col-span-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
