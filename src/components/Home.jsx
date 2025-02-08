const UserDetails = () => (
  <div className="h-full flex justify-center mt-20">
      <div>
        <div className="flex flex-col gap-2">
          <div className="text-5xl font-bold">Create your web wallet</div>
          <div className="text-2xl font-semibold text-gray-300">Select the blockchain</div>
          <button className="py-2 font-semibold cursor-pointer w-[8vw] rounded-lg bg-gray-100 text-black text-2xl">Ethereum</button>
        </div>
      </div>
      <div className="w-[30vw]"></div>
    </div>
);

export default UserDetails;
