"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mkgvazjy", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <div className="max-w-lg mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Admin</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-card shadow-lg p-6 rounded-xl">
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary"
        />
        <textarea
          name="message"
          required
          placeholder="Your Message"
          rows={4}
          className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>

      {status === "SUCCESS" && (
        <p className="mt-4 text-green-600 text-center font-medium">
          ✅ Thanks! Your message has been sent.
        </p>
      )}
      {status === "ERROR" && (
        <p className="mt-4 text-red-600 text-center font-medium">
          ❌ Oops! Something went wrong. Try again later.
        </p>
      )}

      {/* Extra quick links */}
      <div className="mt-8 text-center space-y-2">
        <p className="text-sm text-muted-foreground">Or reach me directly:</p>
        <p>
          📧 <a href="mailto:pykinsu@outlook.com" className="text-primary underline">pykinsu@outlook.com</a>
        </p>
        <p>
          💻 <a href="https://github.com/pykinsu" target="_blank" className="text-primary underline">GitHub Profile</a>
        </p>
      </div>
    </div>
  );
}
