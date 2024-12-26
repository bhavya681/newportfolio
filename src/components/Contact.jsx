import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = ({ isDarkMode }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
      message: form.message,
    };

    emailjs
      .send(
        "service_bva52eb", // Replace with your EmailJS Service ID
        "template_92ektbs", // Replace with your EmailJS Template ID
        templateParams,
        'TifqqkMgwGUe0d1OD' // Use your Public Key here
      )
      .then(
        () => {
          setSuccessMessage("Your message has been sent successfully!");
          setErrorMessage("");
          setForm({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          setErrorMessage("Something went wrong. Please try again.");
          console.error("EmailJS Error:", error);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div
      id="contact"
      className={`min-h-screen flex flex-col items-center justify-center px-6 py-16 transition-all duration-300 ${
        isDarkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-900"
      }`}
    >
      <h2 className="text-5xl font-bold text-center mb-10">
        <span>Contact</span>{" "}
        <span
          className={`text-transparent bg-clip-text ${
            isDarkMode
              ? "bg-gradient-to-r from-purple-400 to-blue-500"
              : "bg-gradient-to-r from-purple-600 to-blue-800"
          }`}
        >
          Me
        </span>
      </h2>
      <p className="text-center text-lg opacity-80 mb-12">
        Got a question or proposal, or just want to say hello? Feel free to get
        in touch!
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-opacity-60 rounded-xl shadow-lg p-8 space-y-6"
        style={{
          background: isDarkMode
            ? "rgba(255, 255, 255, 0.05)"
            : "rgba(0, 0, 0, 0.05)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            required
            className="w-full p-4 border rounded-lg bg-transparent focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            required
            className="w-full p-4 border rounded-lg bg-transparent focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-4 border rounded-lg bg-transparent focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full p-4 border rounded-lg bg-transparent focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full p-4 border rounded-lg bg-transparent focus:ring-2 focus:ring-blue-500 transition-all"
        ></textarea>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full p-4 text-lg font-semibold rounded-lg transition-all ${
            isDarkMode
              ? "bg-purple-500 text-white hover:bg-purple-600"
              : "bg-blue-500 text-white hover:bg-blue-600"
          } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
      {successMessage && (
        <p className="text-center text-green-500 mt-4">{successMessage}</p>
      )}
      {errorMessage && (
        <p className="text-center text-red-500 mt-4">{errorMessage}</p>
      )}
    </div>
  );
};

export default Contact;
