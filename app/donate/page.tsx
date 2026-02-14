export default function DonatePage() {
  return (
    <main className="bg-[#fdfbf7] py-24 px-6">
      <div className="max-w-4xl mx-auto">

        <div className="bg-white rounded-3xl border p-12">

          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
            Make a Donation
          </h1>

          <a
            href="https://paystack.shop/pay/truepatriots-donations"
            target="_blank"
            rel="noopener noreferrer"
            className="
              block w-full text-center
              bg-[#0f172a] hover:bg-[#020617]
              text-white
              px-6 py-4
              rounded-2xl
              font-medium text-base
              transition
              mb-12
            "
          >
            Donate
          </a>

          <p className="text-center text-sm text-gray-500">
            Thank you for believing in Africa’s future
          </p>

        </div>

      </div>
    </main>
  );
}
