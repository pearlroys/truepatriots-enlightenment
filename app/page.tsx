export default function HomePage() {
  return (
    <main className="w-full">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#1F6F6B] text-white py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          {/* TEXT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8 max-w-4xl">
              True Patriots Enlightenment and Empowerment Organization
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
              Building integrity, civic responsibility and patriotic leadership
              for the sustainable development of Africa.
            </p>

            <a
              href="/donate"
              className="inline-block mt-8 bg-[#E76F51] hover:bg-[#D45C42] !text-white no-underline px-7 py-3 rounded-full font-semibold transition"
            >
              ♥ Support Our Mission
            </a>
          </div>

          {/* IMAGE p5 */}
          <div className="hidden md:block">
            <img
              src="/images/patriotism/p10.jpeg"
              alt="Patriotism leadership"
              className="rounded-2xl shadow-xl object-cover w-full h-[420px]"
            />
          </div>

        </div>
      </section>

      {/* ================= WHY WE EXIST ================= */}
      <section className="bg-[#FAF7F2] py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div className="space-y-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937]">
              Why We Exist
            </h2>

            <div className="w-20 h-1 bg-[#F2B705]" />

            <p className="text-gray-700 leading-loose text-lg">
              Africa’s development challenges cannot be solved by natural resources alone.
              They require enlightened citizens, ethical leadership and a renewed sense
              of responsibility to society.
            </p>

            <p className="text-gray-700 leading-loose text-lg">
              True Patriots Enlightenment and Empowerment Organization exists to promote
              integrity, civic awareness and patriotic values that encourage good governance,
              peaceful coexistence and sustainable development across the African continent.
            </p>
          </div>

          {/* IMAGE p6 */}
          <div>
            <img
              src="/images/patriotism/p6.jpeg"
              alt="African unity"
              className="rounded-2xl shadow-lg object-cover w-full h-[380px]"
            />
          </div>

        </div>
      </section>

      {/* ================= CHARACTER & PATRIOTISM ================= */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE p7 */}
          <div className="md:order-2 order-1">
            <img
              src="/images/patriotism/p7.jpeg"
              alt="Integrity and patriotism"
              className="rounded-2xl shadow-lg object-cover w-full h-[380px]"
            />
          </div>

          {/* TEXT */}
          <div className="space-y-8 max-w-4xl md:order-1 order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F6F6B]">
              Integrity, Honesty and True Patriotism
            </h2>

            <div className="w-20 h-1 bg-[#F2B705]" />

            <p className="text-gray-700 leading-loose text-lg">
              Character is the true reflection of who we are. It defines our nature,
              temperament and moral compass. It is not inherited or gifted,
              but developed deliberately through discipline, conscience and responsibility.
            </p>

            <p className="text-gray-700 leading-loose text-lg">
              True patriotism goes beyond slogans or symbols. It is the willingness
              of citizens and leaders to place the interest of the nation above ethnicity,
              religion, greed and personal ambition.
            </p>

            <p className="text-gray-700 leading-loose text-lg">
              When integrity and honesty become the foundation of leadership and citizenship,
              societies prosper, institutions strengthen and nations rise.
            </p>

            <blockquote className="border-l-4 border-[#E76F51] pl-6 italic text-gray-600 text-lg mt-8">
              “Integrity, honesty and true patriotism are not just virtues —
              they are the real solution for Africa.”
            </blockquote>

          </div>
        </div>
      </section>

      {/* PATRIOTISM IMAGES */}
      <section className="bg-[#FAF7F2] py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-12">
            Patriotism in Action
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <img src="/images/patriotism/p1.jpeg" className="rounded-xl object-cover h-64 w-full" />
            <img src="/images/patriotism/p2.jpeg" className="rounded-xl object-cover h-64 w-full" />
            <img src="/images/patriotism/p3.jpeg" className="rounded-xl object-cover h-64 w-full" />
            <img src="/images/patriotism/p4.jpeg" className="rounded-xl object-cover h-64 w-full" />
          </div>

        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1F6F6B] mb-16">
            Our Leadership
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-14">

            <div className="text-center">
              <img
                src="/images/leaders/convener.jpeg"
                className="w-44 h-44 mx-auto rounded-full object-cover shadow-md"
              />
              <h3 className="mt-6 font-semibold text-lg">
                Dr. Roys Okon Ikedionu
              </h3>
              <p className="text-sm text-gray-500 mb-3">Founder and Convener</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Veterinary surgeon, pharmacist and community leader committed to
                integrity, honesty and true patriotism.
              </p>
            </div>

            <div className="text-center">
              <img
                src="/images/leaders/woman2.jpeg"
                className="w-44 h-44 mx-auto rounded-full object-cover shadow-md"
              />
              <h3 className="mt-6 font-semibold text-lg">
                Ezejioha Chioma Victoria
              </h3>
              <p className="text-sm text-gray-500 mb-3">Public Relations Officer</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Oversees media relations, outreach coordination and public communication.
              </p>
            </div>

            <div className="text-center">
              <img
                src="/images/leaders/woman3.jpeg"
                className="w-44 h-44 mx-auto rounded-full object-cover shadow-md"
              />
              <h3 className="mt-6 font-semibold text-lg">
                Olori Henrietta Nonye Borky-Bakre
              </h3>
              <p className="text-sm text-gray-500 mb-3">Treasurer</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Administrator and marketing consultant with strong focus on accountability.
              </p>
            </div>

            <div className="text-center">
              <img
                src="/images/leaders/man1.jpeg"
                className="w-44 h-44 mx-auto rounded-full object-cover shadow-md"
              />
              <h3 className="mt-6 font-semibold text-lg">
                Amb. Dr. Victor Ehiohren Osadolor
              </h3>
              <p className="text-sm text-gray-500 mb-3">Board of Trustees</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                President and CEO of Character Media Inc Network International
                and advocate for ethical leadership.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
