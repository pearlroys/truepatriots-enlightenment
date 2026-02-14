export default function DonatePage() {
  return (
    <main className="bg-[#fdfbf7] py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-xl border">

          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            Make a Donation
          </h2>

          <a
            href="https://paystack.shop/pay/truepatriots-donations"
            target="_blank"
            rel="noopener noreferrer"
            className="
              block w-full text-center
              bg-[#1f2937] hover:bg-[#111827]
              text-white
              px-6 py-4
              rounded-xl
              font-semibold text-lg
              transition
              mb-10
            "
          >
            Donate
          </a>

          <div className="text-center">
            <span className="
              inline-block
              bg-[#f87171]
              text-white
              px-6 py-3
              rounded-full
              font-medium
              text-sm
            ">
              Thank you for believing in Africa’s future
            </span>
          </div>

        </div>

      </div>
    </main>
  );
}
