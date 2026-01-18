import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">
          True Patriots Enlightenment
        </h1>

        <div className="flex gap-6 text-gray-800 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/achievements">Achievements</Link>
          <Link href="/donate">Donate</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
