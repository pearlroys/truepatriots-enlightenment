"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-[var(--light-blue)] px-5 py-4">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="text-lg font-bold text-[var(--teal)]"
        >
          True Patriots Enlightenment
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 text-sm text-[var(--text-dark)]">

          <Link href="/" className="hover:text-[var(--teal)]">
            Home
          </Link>

          <Link href="/about" className="hover:text-[var(--teal)]">
            About
          </Link>

          <Link href="/programs" className="hover:text-[var(--teal)]">
            Programs
          </Link>

          <Link href="/achievements" className="hover:text-[var(--teal)]">
            Achievements
          </Link>

          <Link
            href="/donate"
            className="bg-[var(--gold)] text-white px-4 py-2 rounded-full font-medium hover:opacity-90"
          >
            ♥ Donate
          </Link>
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden flex items-center gap-4">

          <Link
            href="/donate"
            className="bg-[var(--gold)] text-white px-3 py-1 rounded-full text-sm"
          >
            ♥ Donate
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="text-sm font-medium"
          >
            More ▾
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden mt-3 bg-white border border-[var(--soft-gray)] rounded-lg overflow-hidden text-sm">

          <Link
            href="/about"
            className="block px-5 py-3 hover:bg-[var(--light-blue)]"
          >
            About
          </Link>

          <Link
            href="/programs"
            className="block px-5 py-3 hover:bg-[var(--light-blue)]"
          >
            Programs
          </Link>

          <Link
            href="/achievements"
            className="block px-5 py-3 hover:bg-[var(--light-blue)]"
          >
            Achievements
          </Link>

          <Link
            href="/contact"
            className="block px-5 py-3 hover:bg-[var(--light-blue)]"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
