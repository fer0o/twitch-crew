'use client'
import InstagramCard from '@/components/cards/InstagramCard'
import Hero from '@/components/secciones/Hero'
import TwitchVideo from '@/components/secciones/TwitchVideo'
import React from 'react'

const Info = () => {
  return (
    <div>
      <div className='p-4'>
      <Hero/>
      </div>
     
      <TwitchVideo/>
      
      <div>
        <InstagramCard/>
      </div>
      
      
      
    </div>
  )
}

export default Info