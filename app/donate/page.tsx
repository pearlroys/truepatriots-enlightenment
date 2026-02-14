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
            className="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white px-6 py-4 rounded-xl font-semibold text-lg transition mb-10"
          >
            Donate
          </a>

          <div className="text-center">
            <span className="inline-block bg-red-500 text-white px-6 py-3 rounded-full font-semibold">
              Thank you for believing in Africa’s future
            </span>
          </div>

        </div>
      </div>
    </main>
  );
}
