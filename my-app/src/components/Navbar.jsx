import React from 'react'
import Logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div data-aos="fade-down" className='fixed top-0 right-0 w-full z-[99] bg-black/10 backdrop-blur-sm py-4 sm:py-4'>
        <div className='container'>
            <div className='flex justify-between items-center'>
                <div className='flex text-white items-center gap-4 font-bold text-2xl'>
                    <img src={Logo} alt='' className='w-10' />
                    <span>TCJ-SPACE</span>
                </div>
                <div className='text-white hidden md:block'>
                    <ul className='flex items-center gap-6 text-xl py-4 sm:py-0'>
                        <li>
                            <a href='#'>About</a>
                        </li>
                        <li>
                            <a href='#'>Technology</a>
                        </li>
                        <li>
                            <a href='#'>Gallery</a>
                        </li>
                        <li>
                            <a href='#'>Satalite</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className='border-2 text-white border-white px-3 py-1 rounded-md'>Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar