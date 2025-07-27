import { Bebas_Neue } from "next/font/google";
import Link from 'next/link'
import React from 'react'

// Icons
import { House } from "@deemlol/next-icons";
import { Star } from "@deemlol/next-icons";
import { ShoppingBag } from "@deemlol/next-icons";

const bebasNueu = Bebas_Neue({
  subsets: ["latin"],
  weight: "400"
})

const Navbar = () => {
  return (
    <nav className='flex md:flex-[1.5] lg:flex-[1] md:flex-col justify-between px-5 py-6 md:py-12 bg-white shadow-md md:shadow-lg'>
      <div className="header flex flex-col justify-center">
        <div className={`${bebasNueu.className} text-2xl md:text-4xl tracking-widest cursor-pointer md:mb-10`}>Squire</div>
        <ul className="nav-links hidden w-full md:flex flex-col gap-2">
          <Link href='/home'><li className='nav-link-items group'><House size={24} />Home</li></Link>
          <Link href='/quests'><li className='nav-link-items group'><ShoppingBag size={24} />Quests</li></Link>
          <Link href='/rewards'><li className='nav-link-items'><Star size={24} />Rewards</li></Link>
        </ul>
      </div>
      <div className="footer flex items-center md:gap-3">
        <div className="user-icon h-12 w-12 rounded-lg cursor-pointer bg-gray-600"></div>
        <div className="name-logout">
          <h1 className='hidden md:block font-medium cursor-pointer'>Saleh Ahmed</h1>
          <h1 className='hidden md:block text-neutral-400 hover:text-black transition-colors text-sm cursor-pointer'>Logout</h1>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
