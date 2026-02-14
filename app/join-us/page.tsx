"use client";

import { useState } from "react";

export default function JoinUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      country: data.get("country"),
      reason: data.get("reason"),
    };

    const res = await fetch("/api/join-us", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setSubmitted(true);
      form.reset();
    }

    setLoading(false);
  }

  return (
    <main className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">

      <header className="mb-16 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Join Us
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Become part of a global movement committed to integrity,
          honesty and true patriotism.
        </p>
      </header>

      <section className="bg-white rounded-2xl shadow-sm p-8 md:p-12 max-w-3xl">

        {submitted && (
          <div className="mb-8 rounded-xl bg-[#FAF7F2] border border-[#F2B705] p-6">
            <p className="font-semibold">
              Registration received
            </p>
            <p className="text-sm text-gray-700">
              Thank you for joining True Patriots. Your details have been sent
              to our team.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          <input name="name" required placeholder="Full Name"
            className="w-full border rounded-lg px-4 py-3" />

          <input name="email" type="email" required placeholder="Email Address"
            className="w-full border rounded-lg px-4 py-3" />

          <input name="country" required placeholder="Country"
            className="w-full border rounded-lg px-4 py-3" />

          <textarea name="reason" rows={4} required
            placeholder="Why do you want to join?"
            className="w-full border rounded-lg px-4 py-3" />

          <button
            type="submit"
            disabled={loading}
            className="bg-[#1F6F6B] text-white px-6 py-3 rounded-full font-semibold disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit Registration"}
          </button>

        </form>
      </section>

    </main>
  );
}
