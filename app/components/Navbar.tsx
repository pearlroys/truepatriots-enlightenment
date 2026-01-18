import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo/true-patriots-logo.png"
            alt="True Patriots Enlightenment"
            className="h-10 w-auto"
          />

          <span className="text-lg md:text-xl font-semibold text-teal-700 hidden sm:block">
            True Patriots Enlightenment
          </span>
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/achievements">Achievements</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* DONATE */}
        <Link
          href="/donate"
          className="donate-btn bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition"
        >
          ♥ Donate
        </Link>

      </div>
    </header>
  );
}
