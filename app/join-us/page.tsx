export default function JoinUsPage() {
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
        <form className="space-y-6">

          <div>
            <label className="block text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1F6F6B]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1F6F6B]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Country
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1F6F6B]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Why do you want to join?
            </label>
            <textarea
              rows={4}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1F6F6B]"
            />
          </div>

          <button
            type="submit"
            className="bg-[#1F6F6B] hover:bg-[#195E5A] text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Submit Registration
          </button>

        </form>
      </section>

    </main>
  );
}
