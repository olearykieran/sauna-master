"use client";

import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add document to the "mail" collection
      await addDoc(collection(db, "mail"), {
        to: ["kieran@theholygrailstudio.com"], // Email recipient(s)
        message: {
          subject: `New Contact Form Submission from ${formData.name}`,
          html: `
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Message:</strong></p>
            <p>${formData.message}</p>
          `,
        },
      });

      setSuccessMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray">
      <h2 className="text-4xl font-bold text-center mb-10">Contact</h2>
      <div className="max-w-2xl mx-auto">
        <p className="text-center mb-6">
          Ready to transform your sauna experience? Get in touch:
        </p>
        {successMessage && (
          <p className="text-green-500 text-center mb-4">{successMessage}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border px-3 py-2 text-black"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border px-3 py-2 text-black"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1">Message</label>
            <textarea
              name="message"
              className="w-full border px-3 py-2 text-black"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-gold text-white py-2">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
