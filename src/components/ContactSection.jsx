"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/sendMail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("Mail Sent Successfully ✔");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } else {
      setStatus("Failed to Send ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 px-4 sm:px-8 md:px-10 pt-24 pb-10">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-purple-600 to-orange-400 text-white 
        p-6 sm:p-10 rounded-2xl shadow-lg mb-10 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Get in Touch
          </h1>
          <p className="mt-2 opacity-90 text-sm sm:text-base">
            We'd love to hear from you! Contact us anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* LEFT FORM */}
          <form
            onSubmit={handleSubmit}
            className="md:col-span-2 bg-white rounded-xl p-6 sm:p-8 shadow-xl"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-5">
              Send us a Message
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="border p-3 rounded-md w-full"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="border p-3 rounded-md w-full"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="border p-3 rounded-md w-full"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="border p-3 rounded-md w-full"
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message..."
              value={form.message}
              onChange={handleChange}
              required
              className="border p-3 rounded-md w-full h-32 mt-4"
            />

            <button
              type="submit"
              className="mt-5 w-full sm:w-auto bg-purple-600 hover:bg-purple-700 
              text-white font-medium px-6 py-3 rounded-md shadow-md"
            >
              Send Message
            </button>

            {status && (
              <p className="mt-3 text-purple-700 text-sm sm:text-base">
                {status}
              </p>
            )}
          </form>

          {/* RIGHT INFO */}
          <div className="space-y-6">

            <div className="bg-white p-5 sm:p-6 shadow-xl rounded-xl">
              <h3 className="text-base sm:text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-sm sm:text-base">
                Oviya Nursery School <br />
                18/70, TSK Nagar, Irugur, <br />
                Coimbatore - 641103, Tamil Nadu
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 shadow-xl rounded-xl">
              <h3 className="text-base sm:text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-sm sm:text-base">📞 +91 7811806088</p>
              <p className="text-sm sm:text-base">📞 +91 9363270507</p>
            </div>

            {/* MAP */}
            <div className="bg-white p-5 sm:p-6 shadow-xl rounded-xl">
              <h3 className="text-base sm:text-lg font-semibold mb-3">
                Find Us on Map
              </h3>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930.6310194915039!2d77.06037696955286!3d11.01615559932174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8575e65b1444b%3A0x10ea7b15e8c657be!2soviya%20school!5e1!3m2!1sen!2sin!4v1764758041571!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md"
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
