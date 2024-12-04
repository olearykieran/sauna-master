"use client";

// import { useState } from "react";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../firebase";

const ContactSection = () => {
  // const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  // const [successMessage, setSuccessMessage] = useState("");

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // Add document to the "mail" collection
  //     await addDoc(collection(db, "mail"), {
  //       to: ["kieran@theholygrailstudio.com"], // Email recipient(s)
  //       message: {
  //         subject: `New Contact Form Submission from ${formData.name}`,
  //         html: `
  //           <p><strong>Name:</strong> ${formData.name}</p>
  //           <p><strong>Email:</strong> ${formData.email}</p>
  //           <p><strong>Message:</strong></p>
  //           <p>${formData.message}</p>
  //         `,
  //       },
  //     });

  //     setSuccessMessage("Message sent successfully!");
  //     setFormData({ name: "", email: "", message: "" });
  //   } catch (error) {
  //     console.error("Error adding document: ", error);
  //     alert("An error occurred. Please try again.");
  //   }
  // };

  return (
    <section id="contact" className="py-20 px-4 bg-gray">
      <h2 className="text-4xl font-bold text-center mb-10">Contact</h2>
      <div className="max-w-2xl mx-auto">
        <p className="text-center mb-6">
          Ready to transform your sauna experience? Get in touch:
        </p>
        <div className="text-center space-y-4">
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:5163824166" className="text-blue-500">
              516-382-4166
            </a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:kieran@theholygrailstudio.com" className="text-blue-500">
              kieran@theholygrailstudio.com
            </a>
          </p>
          <p>
            <strong>Instagram:</strong>{" "}
            <a
              href="https://instagram.com/kierannn_o"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              @kierannn_o
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
