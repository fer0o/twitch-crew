'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { BsTwitch } from 'react-icons/bs'
const navlinks = [
  {
    title: 'Inicio',
    link: '/'
  },
  {
    title: 'Nosotros',
    link: '/nosotros'
  },
  {
    title: 'Series',
    link: '/series'
  },
  {
    title: 'Horarios',
    link: '/horarios'
  }
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const handleMenu = () => {
    setOpen(prev => !prev)
  }
  return (
    <div className='bg-violet-600 border-b-2 border-white text-white lg:text-lg pb-2'>
      <nav className=' mx-auto px-4 sm:px-6 lg:px-8'>
        {/* nav completa */}
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center gap-4 '>
            <Link href='/'>
              <BsTwitch className=' w-10 h-10' />
            </Link>
            <Link href='/'>
            Twitch Crew
            </Link>
            
          </div>
          {/* enlaces */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline gap-4'>
              {navlinks.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className=' transition-all duration-300 hover:bg-violet-400 hover:underline hover:underline-offset-2 px-2 py-2 rounded-md'
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          {/* hamburguer menu */}
          <div className='-mr-2 flex md:hidden'>
            <button
              type='button'
              onClick={handleMenu}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-violet-800 hover:border-2 hover:border-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-violet-400 focus:ring-white'
            >
              <span className='sr-only'>Open Menu</span>
              {open ? (
                <FaTimes className='w-6 h-6' />
              ) : (
                <FaBars className='w-6 h-6' />
              )}
            </button>
          </div>
          {/* fin menu */}
        </div>
      </nav>
      {/* menu para mobiles */}
      {open ? (
        <div className='md:hidden'>
          <div className=' pt-2 pb-3 space-y-1 sm:px-3 border-t-2 border-white'>
            {navlinks.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                className=' text-gray-300 hover:bg-violet-800 hover:text-white hover:underline hover:underline-offset-2 block px-3 py-2 rounded-md text-base font-medium'
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Navbar
