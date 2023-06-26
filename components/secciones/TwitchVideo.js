'use client'
import React, { useEffect, useState } from 'react'
import { TwitchPlayerNonInteractive } from 'react-twitch-embed'

const TwitchVideo = ({ page }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767) // Ajusta el tamaño de la pantalla para determinar qué se considera como una pantalla móvil
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Verificar el tamaño de la pantalla inicialmente

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className=''>
      {!isMobile && (
        <div>
          <h2 className='text-center text-white text-4xl font-bold'>Puedes echarle un vistazo a su stream :) </h2>
          <div className='flex justify-center items-center p-8 '>
            <TwitchPlayerNonInteractive
              width={970}
              height={480}
              channel={page}
              className='rounded-lg border-2 bg-gradient-to-tr from-teal-500 to-fuchsia-500 shadow-xl shadow-black p-1'
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default TwitchVideo
