export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24 text-center">
      <h1 className="text-5xl font-bold mb-6">
        True Patriots Enlightenment
      </h1>

      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
        Promoting knowledge, critical thinking, and civic awareness through
        education, dialogue, and community engagement.
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="/about"
          className="bg-black text-white px-6 py-3 rounded-md"
        >
          Learn more
        </a>

        <a
          href="/contact"
          className="border px-6 py-3 rounded-md"
        >
          Get in touch
        </a>
      </div>
    </main>
  );
}
