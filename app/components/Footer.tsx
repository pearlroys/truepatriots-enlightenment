export default function Footer() {
    return (
      <footer className="bg-[#fdfbf7] border-t mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-700">
  
          {/* About */}
          <div>
            <h3 className="text-teal-700 font-bold text-lg mb-3">
              True Patriots Enlightenment
            </h3>
            <p className="text-sm leading-relaxed">
              Promoting knowledge, critical thinking, civic awareness and
              responsible citizenship through education, dialogue and community engagement.
            </p>
          </div>
  
          {/* Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Programs</li>
              <li>Achievements</li>
              <li>Contact</li>
            </ul>
          </div>
  
          {/* Support */}
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>Donate</li>
              <li>Volunteer</li>
              <li>Partnerships</li>
              <li>FAQs</li>
            </ul>
          </div>
  
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <p className="text-sm">Email: info@truepatriotsenlightenment.org</p>
            <p className="text-sm">Phone: +234 8033 027132</p>
            <p className="text-sm mb-4">Location: Nigeria</p>
  
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
              ♥ Support Our Work
            </button>
          </div>
  
        </div>
  
        <div className="text-center text-sm text-gray-500 py-4 border-t">
          © 2026 True Patriots Enlightenment. All rights reserved.
        </div>
      </footer>
    );
  }
  