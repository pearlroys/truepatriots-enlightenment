"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-lg sm:text-xl font-bold text-teal-700 whitespace-nowrap"
        >
          True Patriots Enlightenment
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/achievements">Achievements</Link>
          <Link href="/contact">Contact</Link>

          <Link
            href="/donate"
            className="ml-4 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full font-semibold transition"
          >
            ♥ Donate
          </Link>
        </nav>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-3">
          <Link
            href="/donate"
            className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            ♥ Donate
          </Link>
        </div>
      </div>
    </header>
  );
}
