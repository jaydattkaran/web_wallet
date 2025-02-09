import React from 'react'
import { WalletMinimal, DollarSign } from 'lucide-react'


const Navbar = () => {
  const handleReload = () => {
    window.location.reload();
  }

  return (
    <div className=''>
        <div className='flex flex-row justify-around'>
            <div 
              className='flex flex-row gap-2 cursor-pointer' 
              onClick={handleReload}
            >
                <WalletMinimal className='mt-1'/>
                <div className='items-center oswald-semibold tracking-wider text-2xl'>Wallet</div>
                <div className='w-12 h-8 rounded-full px-1.5 text-lg py-0 border-1 border-gray-500 bg-neutral-800 font-bold'>v1.0</div>
            </div>
            <div className='flex justify-center items-center'><DollarSign /> <div className='text-2xl font-semibold'>0.0</div></div>
        </div>
    </div>
  )
}

export default Navbar