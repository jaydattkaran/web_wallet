import React from 'react';

const LegalAgreements = () => (
  <div className="h-full flex justify-center mt-20">
  <div>
    <div className="flex flex-col gap-3">
      <div className="text-5xl font-bold">Secret Recovery Phrase</div>
      <div className="text-2xl font-semibold text-gray-300">
        Save these words in a safe place.
      </div>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Enter your Secret Phrase (or leave blanke to generate)"
          className="w-[45vw] border-1 px-2 rounded border-gray-600 h-10"
        />

        <button className="py-2 font-semibold cursor-pointer w-[10vw] rounded-lg bg-gray-100 text-black text-xl">
          Generate Wallet
        </button>
      </div>
    </div>
  </div>
  <div></div>
</div>
);

export default LegalAgreements;