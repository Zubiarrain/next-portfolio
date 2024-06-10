"use client"

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { LinkUrl } from '@/definitions/LinkUrl'
import NavLink from './NavLink'

const links: LinkUrl[] = [
  {url:"/", title:"Home"},
  {url:"/about", title:"About"},
  {url:"/portfolio", title:"Portfolio"},
  {url:"/contact", title:"Contact"},
]


const Navbar = () => {

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-10 lg:px-20 xl:px-40 text-black text-xl'>

      {/* LINKS */}
      <div className='flex gap-4 w-full mr-10 text-sm md:text-xl'>
        {links.map((link, index) =>(
          <NavLink link={link} key={index}/>
        ))}
      </div>
      <div className='flex justify-between w-full'>

      {/* LOGO */}
      <div className=' justify-center'>
        <Link href="/" className='text-sm bg-blue-500 rounded-md p-1 font-semibold flex items-center justify-center'>
          <span className='text-white mr-1'>N</span>
          <span className='w-5 h-5 rounded bg-white text-blue-500 flex items-center justify-center'>Z</span>
        </Link>
      </div>

      {/* SOCIAL */}
      <div className='hidden md:flex gap-4  justify-end'>
        <a href="https://github.com/Zubiarrain" target='_blank'>
          <Image src="/github.png" width={24} height={24} alt='github icon'/>
        </a>
        <a href="https://www.linkedin.com/in/nahuel-zubiarrain/?locale=en_US" target='_blank'>
          <Image src="/linkedin.png" width={24} height={24} alt='linkedin icon'/>
        </a>
      </div>
      </div>

    </div>
  )
}

export default Navbar
