'use client'
import InstagramCard from '@/components/cards/InstagramCard'
import Hero from '@/components/secciones/Hero'
import TwitchVideo from '@/components/secciones/TwitchVideo'
import React from 'react'


const Info = () => {
  return (
    <div>
      <div className='p-8'>
        <Hero />
      </div>

      <div className='p-4'>
        <TwitchVideo page='gladoop' />
      </div>

      <div>
        <InstagramCard />
      </div>
    </div>
  )
}

export default Info