"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-[#e6f2f4] px-5 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="text-lg font-bold text-[#2fa4a9]"
        >
          True Patriots Enlightenment
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">

          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-black">
            Home
          </Link>

          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-black">
            About
          </Link>

          <Link href="/programs" className="text-sm font-medium text-gray-700 hover:text-black">
            Programs
          </Link>

          <Link href="/blogs" className="text-sm font-medium text-gray-700 hover:text-black">
            Blogs
          </Link>

          <Link href="/join-us" className="text-sm font-medium text-gray-700 hover:text-black">
            Join Us
          </Link>

          <Link
            href="/donate"
            className="
  bg-red-500
  hover:bg-red-600
  text-white
  px-6
  py-2
  rounded-full
  font-semibold
  transition
"
          >
            ♥ Donate
          </Link>
        </div>

        {/* MOBILE NAV */}
        <div className="md:hidden flex items-center gap-4">

          <Link
            href="/donate"
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:opacity-90"
          >
            ♥ Donate
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="text-sm font-semibold text-[#2fa4a9]"
          >
            More ▾
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden mt-4 rounded-xl bg-white border shadow-sm overflow-hidden">

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50"
          >
            About
          </Link>

          <Link
            href="/programs"
            onClick={() => setOpen(false)}
            className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50"
          >
            Programs
          </Link>

          <Link
            href="/blogs"
            onClick={() => setOpen(false)}
            className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50"
          >
            Blogs
          </Link>

          <Link
            href="/join-us"
            onClick={() => setOpen(false)}
            className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50"
          >
            Join Us
          </Link>
        </div>
      )}
    </nav>
  );
}
