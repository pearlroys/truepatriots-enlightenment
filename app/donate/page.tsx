export default function DonatePage() {
  return (
    <main className="bg-[#fdfbf7] py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Support the Work We’re Doing
        </h1>

        <p className="text-gray-600 max-w-2xl mb-14 text-lg">
          Your support makes civic education, leadership development and community
          enlightenment across Africa possible. Every contribution helps move the work
          forward.
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-xl border">

          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            Make a Donation
          </h2>

          <a
            href="https://paystack.shop/pay/truepatriots-donations"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-semibold text-lg transition mb-8"
          >
            Donate securely via Paystack
          </a>

          <div className="border-t pt-6 space-y-2 text-gray-700 text-sm">
            <p className="font-semibold text-gray-800">
              Prefer a direct bank transfer?
            </p>
            <p>
              <strong>Account Name:</strong> True Patriot Enlightenment and Empowerment Organization
            </p>
            <p>
              <strong>Bank:</strong> Zenith Bank
            </p>
            <p>
              <strong>Account Number:</strong> 1310467426
            </p>
          </div>

          <div className="mt-10 text-center">
            <span className="inline-block bg-red-500 text-white px-6 py-3 rounded-full font-semibold">
              Thank you for believing in Africa’s future
            </span>
          </div>

        </div>
      </div>
    </main>
  );
}
