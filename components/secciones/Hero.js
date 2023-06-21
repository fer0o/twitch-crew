import React from 'react'

const Hero = () => {
  return (
    <div className="relative border-2 border-white rounded-lg shadow-lg shadow-black">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center filter blur-sm"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/ddxwdqwkr/image/upload/q_65/v1632079580/smashing-articles/photo-1533371452382-d45a9da51ad9_1.webp')",
        }}
      />

      {/* Contenido del héroe */}
      <div className="container mx-auto px-8 py-12 relative z-10 flex flex-col sm:flex-row items-center">
        {/* Div de texto */}
        <div className="w-full sm:w-1/2 my-8 ml-8 lg:order-1 order-2">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">Título del héroe</h1>
          <p className="text-lg sm:text-xl text-white">Descripción del héroe</p>
        </div>

        {/* Imagen */}
        <div className="w-full sm:w-1/2 flex justify-center sm:justify-center mt-8 sm:mt-0 lg:order-2 order-1">
          <img src="https://cdn.wikimg.net/en/zeldawiki/images/1/15/TotK_Link_Artwork.png?version=3b82ab3b1da77397c3a3239e57810376" className="w-64 sm:w-auto lg:rounded-lg rounded-3xl bg-cover bg-transparent" alt="Spider-Gwen" />
        </div>
      </div>
    </div>
  )
}

export default Hero
