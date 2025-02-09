import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ChevronDown, Trash2, EyeOff } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="text-zinc-50 h-screen flex flex-col py-10 bg-zinc-900 ">
      <Navbar />
      <div className="h-full flex justify-center mt-10">
        <div className="w-[80vw] md:w-[55vw]">
          <div className="mb-10 rounded-lg flex justify-between md:px-6 px-4 md:py-8 py-4 border-1 border-gray-600">
            <p className="md:text-2xl text-lg oswald-semibold">Your Secret Phrase</p>
            <div><ChevronDown className="cursor-pointer" /></div>
          </div>
          <div className="mb-10 px-4 rounded-lg flex flex-col md:flex-row justify-between">
            <p className="text-2xl oswald-semibold">Your Secret Phrase</p>
            <div className="flex flex-row gap-4 mt-2">
              <button className="py-1 cursor-pointer w-[7rem] oswald-light rounded-lg bg-gray-100 hover:bg-gray-300 duration-200 text-black text-lg">
                Add Wallet
              </button>
              <button className="py-1 cursor-pointer w-[7rem] oswald-light rounded-lg bg-red-900 hover:bg-red-800 duration-200 text-white text-lg">
                Clear Wallet
              </button>
            </div>
          </div>
          <div className="rounded-xl border-1 border-neutral-700">
            <div className="flex justify-between px-4 py-8 ">
              <p className="md:text-2xl text-xl oswald-semibold">Your Secret Phrase</p>
              <div><Trash2 className="text-red-600 cursor-pointer" /></div>
            </div>
            <div className="px-6 py-4 rounded-xl bg-neutral-800">
              <div className="mb-8">
                <div className="md:text-2xl text-xl tracking-wider oswald-semibold">Public Key</div>
                <div className="md:text-lg text-md flex justify-between text-gray-300">
                  <div className="oswald-light">123123</div>
                  <div><EyeOff className="cursor-pointer" /></div>
                </div>
              </div>
              <div>
                <div className="md:text-2xl text-xl tracking-wider oswald-semibold">Private Key</div>
                <div className="md:text-lg text-md flex justify-between text-gray-300">
                  <div className="oswald-light">123123</div>
                  <div><EyeOff className="cursor-pointer" /></div>
                </div>
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
