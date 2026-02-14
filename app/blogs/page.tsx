export default function BlogsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">

      {/* PAGE HEADER */}
      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Blogs
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
          Reflections, updates, insights and thought leadership from
          True Patriots Enlightenment and Empowerment Organization.
        </p>
      </header>

      {/* PLACEHOLDER CONTENT */}
      <section className="space-y-10 max-w-4xl">
        <article className="border-l-4 border-[#F2B705] pl-6">
          <h2 className="text-xl font-semibold mb-2">
            Coming Soon
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our blog portal will feature articles on integrity, civic responsibility,
            leadership, patriotism and social development across Africa and the diaspora.
          </p>
        </article>
      </section>

    </main>
  );
}
