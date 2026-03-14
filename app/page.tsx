import About from "./about/page";
import ProgramsPage from "./programs/page";
import BlogsPage from "./blogs/page";

export default function HomePage() {
  return (
    <main className="w-full">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative text-white py-28 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/patriotism/patriot-hero.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"></div>

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <div className="max-w-2xl">
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

          <div></div>

        </div>
      </section>

      {/* ================= WHY WE EXIST ================= */}
      <section className="reveal bg-[#FAF7F2] py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

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

          <div>
            <img
              src="/images/patriotism/p6.jpeg"
              alt="African unity"
              className="rounded-2xl shadow-lg object-cover w-full h-[380px]"
            />
          </div>

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <About />

      {/* ================= PROGRAMS ================= */}
      <ProgramsPage />

      {/* ================= CHARACTER & PATRIOTISM ================= */}
      <section className="reveal bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div className="md:order-2 order-1">
            <img
              src="/images/patriotism/p5.jpeg"
              alt="Integrity and patriotism"
              className="rounded-2xl shadow-lg object-cover w-full h-[380px]"
            />
          </div>

          <div className="space-y-8 max-w-4xl md:order-1 order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F6F6B]">
              Integrity, Honesty and True Patriotism
            </h2>

            <div className="w-20 h-1 bg-[#F2B705]" />

            <p className="text-gray-700 leading-loose text-lg">
              Character is the true reflection of who we are. It defines our nature,
              temperament and moral compass.
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

      {/* ================= JOIN THE MOVEMENT ================= */}
      <section className="reveal bg-[#1F6F6B] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Join the Movement
          </h2>

          <p className="text-white/90 mb-8 text-lg">
            Be part of a community promoting integrity, civic responsibility
            and true patriotism across Africa.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">

            <a
              href="/join-us"
              className="bg-white text-[#1F6F6B] font-semibold px-7 py-3 rounded-full hover:bg-gray-100 transition"
            >
              Join Us
            </a>

            <a
              href="/donate"
              className="bg-[#E76F51] hover:bg-[#D45C42] px-7 py-3 rounded-full font-semibold transition"
            >
              Donate
            </a>

          </div>

        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="reveal bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1F6F6B] mb-16">
            Our Leadership
          </h2>

          {/* Founder Highlight
          <div className="text-center mb-20 transition transform hover:-translate-y-2 hover:shadow-xl duration-300">
          <img
            src="/images/leaders/convener.jpeg"
            className="w-48 h-48 mx-auto rounded-full object-cover shadow-lg"
          />
          <h3 className="mt-6 font-semibold text-xl">
            Dr. Roys Okon Ikedionu
          </h3>
          <p className="text-gray-500 mb-3">Founder and Convener</p>
        </div> */}

          {/* Leadership Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-14">
            <div className="text-center transition transform hover:-translate-y-2 hover:shadow-xl duration-300">
              <img src="/images/leaders/convener.jpeg" className="w-48 h-48 mx-auto rounded-full object-cover shadow-lg" />
              <h3 className="mt-6 font-semibold text-xl">Dr. Roys Okon Ikedionu</h3>
              <p className="text-gray-500 mb-3">Founder and Convener</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                  Veterinary surgeon, pharmacist and community leader committed to
                  integrity, honesty and true patriotism.
              </p>
            </div>

            <div className="text-center transition transform hover:-translate-y-2 hover:shadow-xl duration-300">
              <img src="/images/leaders/man2.jpeg" className="w-40 h-40 mx-auto rounded-full object-cover shadow-md" />
              <h3 className="mt-6 font-semibold text-lg">Dr Jesse Gwandi (Yerima)</h3>
              <p className="text-sm text-gray-500 mb-3">Vice President / BOT Member</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Vice President and Board of Trustees member, dedicated to promoting
                integrity, civic responsibility and true patriotism.
              </p>
            </div>

            <div className="text-center transition transform hover:-translate-y-2 hover:shadow-xl duration-300">
              <img src="/images/leaders/man3.jpeg" className="w-40 h-40 mx-auto rounded-full object-cover shadow-md" />
              <h3 className="mt-6 font-semibold text-lg">Mudassir Mustapha Umar</h3>
              <p className="text-sm text-gray-500 mb-3">Youth & Student Coordinator</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Youth and student coordinator, dedicated to promoting
                integrity, civic responsibility and true patriotism.
              </p>
            </div>

            <div className="text-center transition transform hover:-translate-y-2 hover:shadow-xl duration-300">
              <img src="/images/leaders/woman4.jpeg" className="w-40 h-40 mx-auto rounded-full object-cover shadow-md" />
              <h3 className="mt-6 font-semibold text-lg">Olori Henrietta Nonye Borky-Bakre</h3>
              <p className="text-sm text-gray-500 mb-3">Treasurer</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Treasurer, dedicated to promoting
                integrity, civic responsibility and true patriotism.
              </p>
            </div>

            <div className="text-center transition transform hover:-translate-y-2 hover:shadow-xl duration-300">
              <img src="/images/leaders/man5.jpeg" className="w-40 h-40 mx-auto rounded-full object-cover shadow-md" />
              <h3 className="mt-6 font-semibold text-lg">AMB.DR. VICTOR OSADOLOR</h3>
              <p className="text-sm text-gray-500 mb-3">Board of Trustees</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Board of Trustees member, dedicated to promoting
                integrity, civic responsibility and true patriotism.
              </p>
            </div>

            <div className="text-center transition transform hover:-translate-y-2 hover:shadow-xl duration-300">
              <img src="/images/leaders/man6.jpeg" className="w-40 h-40 mx-auto rounded-full object-cover shadow-md" />
              <h3 className="mt-6 font-semibold text-lg">Comrade Isaac A. Obasi</h3>
              <p className="text-sm text-gray-500 mb-3">General Secretary</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                General Secretary, dedicated to promoting
                integrity, civic responsibility and true patriotism.
              </p>
            </div>

            <div className="text-center transition transform hover:-translate-y-2 hover:shadow-xl duration-300">
              <img src="/images/leaders/woman7.jpeg" className="w-40 h-40 mx-auto rounded-full object-cover shadow-md" />
              <h3 className="mt-6 font-semibold text-lg">Ezejioha Chioma Victoria</h3>
              <p className="text-sm text-gray-500 mb-3">Public Relations Officer</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Public Relations Officer, dedicated to promoting
                integrity, civic responsibility and true patriotism.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= BLOG ================= */}
      <BlogsPage />

    </main>
  );
}