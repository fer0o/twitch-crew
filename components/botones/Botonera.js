import React from 'react'
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaTwitch,
  FaTiktok,
  FaDiscord
} from 'react-icons/fa'

const Botonera = () => {
  return (
    <div className=''>
      <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center border-4 border-double border-white p-4 m-8 flex flex-wrap justify-between  space-y-4 '>
        <a href='/'>
          <FaTwitter className='w-28 h-28' />
        </a>
        <a href='/'>
          <FaYoutube className='w-28 h-28' />
        </a>
        <a href='/'>
          <FaInstagram className='w-28 h-28' />
        </a>
        <a href='/'>
          <FaTwitch className='w-28 h-28' />
        </a>
        <a href='/'>
          <FaTiktok className='w-28 h-28' />
        </a>
        <a href='/'>
          <FaDiscord className='w-28 h-28' />
        </a>
      </div>
    </div>
  )
}

export default Botonera
