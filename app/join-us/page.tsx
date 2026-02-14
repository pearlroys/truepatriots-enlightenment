"use client";

import { useState } from "react";

export default function JoinUsPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name");
    const email = data.get("email");
    const country = data.get("country");
    const reason = data.get("reason");

    const mailtoLink = `mailto:info@truepatriotsenlightenment.org
      ?subject=New Join Us Registration
      &body=
      Full Name: ${name}%0D%0A
      Email: ${email}%0D%0A
      Country: ${country}%0D%0A
      Reason: ${reason}`;

    window.location.href = mailtoLink;
    setSubmitted(true);
    form.reset();
  }

  return (
    <main className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">

      {/* PAGE HEADER */}
      <header className="mb-16 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Join Us
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Become part of a global movement committed to integrity,
          honesty and true patriotism. Membership is open to individuals
          from all backgrounds who share these values.
        </p>
      </header>

      {/* REGISTRATION FORM */}
      <section className="bg-white rounded-2xl shadow-sm p-8 md:p-12 max-w-3xl">

        {submitted && (
          <div className="mb-8 rounded-xl bg-[#FAF7F2] border border-[#F2B705] p-6 text-[#1F2937]">
            <p className="font-semibold mb-1">
              Registration received
            </p>
            <p className="text-sm">
              Thank you for joining True Patriots. Your details have been sent
              and our team will contact you if necessary.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1F6F6B]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1F6F6B]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Country
            </label>
            <input
              name="country"
              type="text"
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1F6F6B]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Why do you want to join?
            </label>
            <textarea
              name="reason"
              rows={4}
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1F6F6B]"
            />
          </div>

          <button
            type="submit"
            disabled={submitted}
            className="bg-[#1F6F6B] hover:bg-[#195E5A] disabled:opacity-60 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Submit Registration
          </button>

        </form>
      </section>

    </main>
  );
}
