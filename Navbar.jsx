import React from 'react'
import { assets } from '../assets/assets/assets'


const Navbar = () => {
  return (
    <>
    <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
            <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left}></img>
            <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right}></img>
        </div>
        <div className='flex items-center gap-4'>
            <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
            <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>Install App</p>
        </div>
    </div>
    <div className='flex items-center gap-2 mt-4'>
        <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
        <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
        <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>

    </div>
      
    </>
  )
}

export default Navbar