const UserDetails = () => (
  <div className="h-full md:flex justify-center mt-20">
      <div>
        <div className="flex flex-col gap-2 mx-6">
          <div className="md:text-6xl oswald-bold text-4xl font-bold">Create your web wallet</div>
          <div className="md:text-2xl oswald-light text-xl font-semibold text-gray-300">Select the blockchain</div>
          <button className="md:py-2 py-1 oswald-semibold tracking-wider cursor-pointer w-[8rem] rounded-lg bg-gray-100 hover:bg-gray-300 duration-200 text-black text-2xl">Ethereum</button>
        </div>
      </div>
      <div className="w-[30vw]"></div>
    </div>
);

export default UserDetails;
