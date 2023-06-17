import Link from 'next/link';
import { BsTwitch, BsLinkedin, BsFacebook } from 'react-icons/bs';

const Footer = () => {
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
      link: '/'
    },
    {
      title: 'Horarios',
      link: '/'
    }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container flex flex-col-reverse justify-between px-6 py-8 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-8 md:flex-col md:space-y-0 md:items-start">
          <div className="flex items-center gap-4 hover:text-slate-400">
            <Link href="/">
              <BsTwitch className="w-10 h-10" />
            </Link>
            <h2>Twitch Crew</h2>
          </div>
          <div className="pb-4 lg:pt-8">
            <h2>© 2023 Todos los derechos reservados</h2>
          </div>
        </div>

        <div className="flex flex-col md:flex-row  space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex justify-center lg:flex-row lg:gap-8 flex-col items-center">
            {navlinks.map((item, idx) => (
              <Link key={idx} href={item.link} className="text-white hover:text-gray-300">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
