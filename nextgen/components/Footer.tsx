import React from 'react'
import Image from 'next/image'
import {FaTwitter,FaInstagram} from"react-icons/fa"

export default function Footer() {
  return (

    <footer className=' left-0 bg-white w-full '>
      <div className='  flex items-center flex-col sm:flex-row py-8    '>
      <a href="" className='flex item-center justify-center md:justify-start '> 
      <span><h6 id="header" className="text-lg font-light tracking-widest    text-slate-600 underline-offset-4 ml-7 ">
                            footer
                        </h6></span>
      </a>
      <div className='text-xl flex md:flex md:flex-grow flex-row justify-end  sm:justify-evenly gap-3 items-center  '>
       <FaInstagram/>
       <FaTwitter/>
       </div>
      </div>
      </footer>

  )
}
