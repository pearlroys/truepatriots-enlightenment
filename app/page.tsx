export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          True Patriots Enlightenment
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Promoting knowledge, critical thinking, and civic awareness
          through education, dialogue, and community engagement.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/about"
            className="px-6 py-3 rounded-md bg-black text-white"
          >
            Learn more
          </a>

          <a
            href="/contact"
            className="px-6 py-3 rounded-md border border-gray-300"
          >
            Get in touch
          </a>
        </div>
      </section>
    </main>
  );
}
