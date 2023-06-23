import React from 'react';

const StreamerCard = () => {
  const streamers = [
    {
      imageSrc: 'https://starwraith.gg/images/star1.png',
      rectangleLogo:
        'https://e7.pngegg.com/pngimages/841/350/png-clipart-rectangle-quotation-computer-file-rounded-rectangle-reference-box-white-miscellaneous-text-thumbnail.png',
      title: 'Streamer 1',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      imageSrc: 'https://starwraith.gg/images/star1.png',
      rectangleLogo:
        'https://e7.pngegg.com/pngimages/791/561/png-clipart-rectangle-black-m-design-rectangle-black.png',
      title: 'Streamer 2',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      imageSrc: 'https://starwraith.gg/images/star1.png',
      rectangleLogo:
        'https://e7.pngegg.com/pngimages/399/465/png-clipart-wallet-rectangle-banner-blue-electric-blue.png',
      title: 'Streamer 3',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {

      imageSrc: 'https://starwraith.gg/images/star1.png',
      rectangleLogo:
        'https://e7.pngegg.com/pngimages/399/465/png-clipart-wallet-rectangle-banner-blue-electric-blue.png',
      title: 'Streamer 3',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {

      imageSrc: 'https://starwraith.gg/images/star1.png',
      rectangleLogo:
        'https://e7.pngegg.com/pngimages/399/465/png-clipart-wallet-rectangle-banner-blue-electric-blue.png',
      title: 'Streamer 3',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
  
      imageSrc: 'https://starwraith.gg/images/star1.png',
      rectangleLogo:
        'https://e7.pngegg.com/pngimages/399/465/png-clipart-wallet-rectangle-banner-blue-electric-blue.png',
      title: 'Streamer 3',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];

  return (
    <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
      {streamers.map(({ idx, imageSrc, title, description }) => (
        <div key={idx} className='flex flex-col items-center'>
          <div className='group h-80 w-80 [perspective:1000px]'>
            <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
              <div className='absolute inset-0'>
                <img
                  className='h-full w-full rounded-xl object-cover bg-black p-2 shadow-xl shadow-black/40'
                  src={imageSrc}
                  alt='Streamer'
                />
              </div>
              <div className='absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                <div className='flex min-h h-full flex-col items-center justify-center'>
                  <h1 className='text-3xl font-bold'>{title}</h1>
                  <p className='text-base'>{description}</p>
                  <button className='mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900'>
                    <a href='/info'>
                      Conocer más
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StreamerCard;
