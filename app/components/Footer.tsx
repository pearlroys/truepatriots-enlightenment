export default function Footer() {
    return (
      <footer className="bg-[#faf7f2] border-t mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 grid md:grid-cols-4 gap-10 text-gray-700">
  
          {/* LOGO */}
          <div>
            <img
              src="/logo/true-patriots-logo.png"
              alt="True Patriots Enlightenment"
              className="h-12 mb-4"
            />
  
            <p className="text-sm leading-relaxed">
              Promoting integrity, civic responsibility and patriotic leadership
              for the sustainable development of Africa.
            </p>
          </div>
  
          {/* LINKS */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>About</li>
              <li>Programs</li>
              <li>Achievements</li>
              <li>Contact</li>
            </ul>
          </div>
  
          {/* SUPPORT */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>Donate</li>
              <li>Volunteer</li>
              <li>Partnerships</li>
              <li>FAQs</li>
            </ul>
          </div>
  
          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm">Email: info@truepatriotsenlightenment.org</p>
            <p className="text-sm mt-1">Phone: +234 8033 027132</p>
            <p className="text-sm mt-1">Location: Nigeria</p>
  
            <button className="mt-4 bg-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold">
              ♥ Support Our Work
            </button>
          </div>
        </div>
  
        <div className="text-center text-sm text-gray-500 py-6 border-t">
          © 2026 True Patriots Enlightenment. All rights reserved.
        </div>
      </footer>
    );
  }
  