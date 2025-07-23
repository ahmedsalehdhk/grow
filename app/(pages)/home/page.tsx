import React from 'react'
import goku from '@/public/assets/goku.gif'
import Image from 'next/image'

// Components



const Home = () => {
  return (
    <div className='h-full flex flex-col'>
      <h1 className="text-lg md:text-xl font-bold mb-5 md:mb-10">Home</h1>
      <div className="home-content-container flex flex-col md:flex-row flex-1 gap-5">
        <div className="content-left flex flex-2 md:flex-3 flex-col gap-5 order-2 md:order-1">
          <div className="hidden md:block md:flex-1 rounded-lg bg-white">Calendar</div>
          <div className="flex-1 rounded-lg bg-white">Main</div>
        </div>
        <div className="content-right flex flex-3 md:flex-2 flex-col gap-5 order-1 md:order-2">
          <div className="player-and-stats flex-5 rounded-lg p-10 flex flex-col justify-between bg-white">
            <h1 className='text-xl font-bold mb-3'>Goku • Level 176</h1>
            <hr className='border-neutral-200' />
            <Image src={goku} alt='goku' className='w-64 self-center' />
            <ul className="stats space-y-1">
            
            </ul>
          </div>
          <div className="exp-bar flex-2 rounded-lg bg-white">Exp Bar</div>
        </div>
      </div>
    </div>
  )
}

export default Home
