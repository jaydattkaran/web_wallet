import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Dashboard = () => {
  return (
    <div className="text-zinc-50 h-screen flex flex-col py-10 bg-zinc-900 ">
      <Navbar />
      <div className="h-full flex justify-center mt-10">
        <div className="">
          <div className="w-[57vw] mb-10 rounded-lg flex justify-between px-6 py-8 border-1 border-gray-600">
            <p className="text-2xl font-semibold">Your Secret Phrase</p>
            <div>Show</div>
          </div>
          <div className="w-[57vw] mb-10 rounded-lg flex justify-between">
            <p className="text-2xl font-semibold">Your Secret Phrase</p>
            <div className="flex gap-4">
              <button className="py-1 cursor-pointer w-[6vw] rounded-lg bg-gray-100 text-black text-lg">
                Add Wallet
              </button>
              <button className="py-1 cursor-pointer w-[6vw] rounded-lg bg-red-800 text-white text-lg">
                Clear Wallet
              </button>
            </div>
          </div>
          <div className="rounded-xl border-1 border-neutral-700">
            <div className="w-[57vw] flex justify-between px-6 py-8 ">
              <p className="text-2xl font-semibold">Your Secret Phrase</p>
              <div>Delete</div>
            </div>
            <div className="px-6 py-4 rounded-xl bg-neutral-800">
              <div className="mb-8">
                <div className="text-2xl font-semibold">Public Key</div>
                <div className="text-lg text-gray-300">Key123123123112</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">Private Key</div>
                <div className="text-lg text-gray-300">Key123123123112</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
