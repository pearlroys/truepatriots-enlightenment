export default function HomePage() {
  return (
    <main className="w-full">

      {/* HERO SECTION */}
      <section className="bg-[#1F6F6B] text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            True Patriots Enlightenment and Empowerment Organization
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-3xl">
            Building integrity, civic responsibility and patriotic leadership
            for the sustainable development of Africa.
          </p>

          <a
            href="/donate"
            className="inline-block mt-8 bg-[#E76F51] hover:bg-[#D45C42] text-white px-7 py-3 rounded-full font-semibold transition"
          >
            ♥ Support Our Mission
          </a>

        </div>
      </section>

      {/* WHY WE EXIST */}
      <section className="bg-[#FAF7F2] py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-6">

          <h2 className="text-3xl font-bold text-[#1F2937]">
            Why We Exist
          </h2>

          <div className="w-20 h-1 bg-[#F2B705]" />

          <p className="text-gray-700 leading-relaxed max-w-4xl">
            Africa’s development challenges cannot be solved by natural resources alone.
            They require enlightened citizens, ethical leadership and a renewed sense
            of responsibility to society.
          </p>

          <p className="text-gray-700 leading-relaxed max-w-4xl">
            True Patriots Enlightenment and Empowerment Organization exists to promote
            integrity, civic awareness and patriotic values that encourage good governance,
            peaceful coexistence and sustainable development across the African continent.
          </p>

        </div>
      </section>

      {/* CHARACTER & PATRIOTISM */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-6">

          <h2 className="text-3xl font-bold text-[#1F6F6B]">
            Integrity, Honesty and True Patriotism
          </h2>

          <div className="w-20 h-1 bg-[#F2B705]" />

          <p className="text-gray-700 leading-relaxed max-w-4xl">
            Character is the true reflection of who we are. It is not inherited or gifted,
            but built deliberately through discipline, conscience and responsibility.
          </p>

          <p className="text-gray-700 leading-relaxed max-w-4xl">
            True patriotism goes beyond slogans or symbols. It is the commitment to place
            the interest of the nation above ethnicity, religion, greed and personal ambition.
          </p>

          <p className="text-gray-700 leading-relaxed max-w-4xl">
            When integrity and honesty become the foundation of leadership and citizenship,
            societies prosper, institutions strengthen and nations rise.
          </p>

          <p className="italic text-gray-600 mt-6">
            “Integrity, honesty and true patriotism are not just virtues,
            they are the real solution for Africa.”
          </p>

        </div>
      </section>

    </main>
  );
}
