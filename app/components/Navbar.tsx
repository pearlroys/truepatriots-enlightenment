"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-lg md:text-xl font-bold text-gray-900">
          True Patriots Enlightenment
        </h1>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 text-gray-800 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/achievements">Achievements</Link>
          <Link href="/donate">Donate</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4 text-gray-800 font-medium">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/programs" onClick={() => setOpen(false)}>Programs</Link>
          <Link href="/achievements" onClick={() => setOpen(false)}>Achievements</Link>
          <Link href="/donate" onClick={() => setOpen(false)}>Donate</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
