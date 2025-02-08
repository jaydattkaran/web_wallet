import React from 'react'

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
                <img src="src/assets/react.svg" alt="" />
                <div className='items-center font-semibold text-2xl'>Wallet</div>
                <div className='w-14 h-8 rounded-full px-3 text-xl py-0 border-2 border-blue-800'>v0</div>
            </div>
            <div>$ 0.0</div>
        </div>
    </div>
  )
}

export default Navbar