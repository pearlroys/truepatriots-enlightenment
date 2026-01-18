import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f9fafb] border-t mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4 text-sm">

        {/* BRAND */}
        <div>
          <h3 className="text-xl font-bold text-teal-600 mb-3">
            True Patriots Enlightenment
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Promoting knowledge, critical thinking, civic awareness, and
            responsible citizenship through education, dialogue, and community
            engagement.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
          <ul className="space-y-3 text-gray-600">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/programs">Programs</Link></li>
            <li><Link href="/achievements">Achievements</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
          <ul className="space-y-3 text-gray-600">
            <li><Link href="/donate">Donate</Link></li>
            <li><Link href="#">Volunteer</Link></li>
            <li><Link href="#">Partnerships</Link></li>
            <li><Link href="#">FAQs</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
          <ul className="space-y-3 text-gray-600">
            <li>Email: info@truepatriotsenlightenment.org</li>
            <li>Phone: +234 XXX XXX XXXX</li>
            <li>Location: Nigeria</li>
          </ul>

          <Link
            href="/donate"
            className="inline-block mt-5 bg-pink-400 hover:bg-pink-500 text-white px-5 py-2 rounded-full font-semibold transition"
          >
            ♥ Support Our Work
          </Link>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t text-center py-6 text-xs text-gray-500">
        © {new Date().getFullYear()} True Patriots Enlightenment.  
        All rights reserved.
      </div>
    </footer>
  );
}
