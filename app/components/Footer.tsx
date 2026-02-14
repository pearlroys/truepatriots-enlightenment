import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#faf7f2] border-t">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">

        {/* BRAND */}
        <div>
          <h3 className="text-teal-700 font-semibold text-lg mb-3">
            True Patriots Enlightenment
          </h3>

          <p className="text-gray-700 text-sm leading-relaxed">
            Promoting knowledge, civic awareness and responsible citizenship
            through education, dialogue and community engagement.
          </p>

          {/* ✅ ROUTING SUPPORT BUTTON */}
          <Link
            href="/donate"
            className="
    inline-flex items-center gap-2
    mt-5
    bg-[#F2B705]
    hover:bg-[#d9a304]
    text-[#1F2937]
    px-6 py-3
    rounded-full
    font-semibold
    transition
    shadow-sm
  "
          >
            ♥ Support Our Work
          </Link>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/programs">Programs</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/join-us">Join Us</Link></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><Link href="/donate">Donate</Link></li>
            <li>Partnerships</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold mb-3">Join Us</h4>

          <p className="text-gray-700 text-sm">
            Email: info@truepatriotsenlightenment.com
          </p>

          <p className="text-gray-700 text-sm mt-2">
            Phone: +234 8033 027132
          </p>

        </div>
      </div>

      {/* ✅ BOTTOM BAR */}
      <div className="border-t text-center py-6 text-xs text-gray-500">
        © {new Date().getFullYear()} True Patriots Enlightenment.  
        All rights reserved.
      </div>

    </footer>
  );
}
