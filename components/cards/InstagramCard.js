'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const InstagramCard = () => {
  const imagenes = [
    {
      imagen:
        'https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/03/itsuki-nakano-2.jpg'
    },
    {
      imagen:
        'https://is-it-fake.com/wp-content/uploads/2020/12/qq-itsuki-cover-1024x576.png'
    },
    {
      imagen:
        'https://animecorner.me/wp-content/uploads/2021/02/Screenshot-193-1024x576.jpg.webp'
    },
    {
      imagen: 'https://media.tenor.com/0ZGcEOTfNwgAAAAC/itsuki-nakano-tqq.gif'
    }
  ]
  const imagenPerfil = 'https://pbs.twimg.com/media/FO4CvBwXwAcFARp.jpg:large'
  return (
    <div className='bg-white lg:m-16 m-8 border-2 border-black rounded-xl'>
      <div className='flex justify-center p-4 border-b-2 border-black'>
        <img src={imagenPerfil} className='w-20 h-20 object-cover rounded-full' />
        <div className='text-center my-auto mx-8'>
        <h2>Nombre Perfil</h2>
        <h3>texto descriptivo</h3>
        <Link href='#' className='text-blue-500 hover:text-yellow-500 hover:underline'>
        link de instagram
        </Link>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 m-4'>
        {imagenes.map((item, idx) => (
          <div key={idx}>
            <div className='relative rounded-lg shadow-md shadow-black'>
              <img
                src={item.imagen}
                className='w-full h-44 lg:h-80 object-cover m-auto rounded-lg'
              />
            </div>
          </div>
        ))}
      </div>
      <div className='bg-blue-500 p-4 rounded-md m-1 text-center'>
        <Link href='#' className='text-white  hover:text-yellow-500 hover:underline'>
        Link de instagram
        </Link>
        
      </div>
    </div>
  )
}

export default InstagramCard
