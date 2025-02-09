import React from 'react';

const LegalAgreements = () => (
  <div className="h-full flex justify-center absolute left-[5%] md:left-[22%] mt-20">
  <div>
    <div className="flex flex-col md:gap-3 gap-1">
      <div className="md:text-5xl oswald-bold text-4xl font-bold">Secret Recovery Phrase</div>
      <div className="md:text-2xl oswald-light text-lg font-semibold text-gray-300">
        Save these words in a safe place.
      </div>

      <div className="grid grid-cols-1 gap-4">
        <input
          type="text"
          placeholder="Enter your Secret Phrase (or leave blanke to generate)"
          className=" border-1 px-2 rounded border-gray-600 h-10"
        />

        <button className="md:py-2 py-1 oswald-semibold tracking-wider cursor-pointer w-[10rem] rounded-lg bg-gray-100 hover:bg-gray-300 duration-200 text-black text-xl">
          Generate Wallet
        </button>
      </div>
    </div>
  </div>
  <div></div>
</div>
);

export default LegalAgreements;