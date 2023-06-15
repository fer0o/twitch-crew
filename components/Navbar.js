import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-slate-900'>
        <Link href='/'>
          logo
        </Link>
        <Link href='/nosotros'>
          nosotros
        </Link>
      </nav>
    </div>
  )
}

export default Navbar