'use client'
import InstagramCard from '@/components/cards/InstagramCard'
import TikTokCard from '@/components/cards/TikTokCard'
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
        <TwitchVideo page='zaycloo' />
      </div>

      <div className='p-4'>
        <InstagramCard />
      </div>
      <div className='p-4'>
        <TikTokCard userName='fer0osennin'/>
      </div>
    </div>
  )
}

export default Info