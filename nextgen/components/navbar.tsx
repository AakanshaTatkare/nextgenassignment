import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import hero from '../public/hero-img.png'


export default function navbar() {
    return (
        <div className="bg mb-0"

        >
            <div className='container mb-0'>
                <nav className='flex w-full top-0 fixed  bg-transparent rounded-b-lg'>
                    <Link href="/" >
                        <div className='flex items-center cursor-pointer mb-0 pb-0 '>
    
                             
                            <span className='flex'><h3 id="header" className=" hero text-3xl font-bold tracking-widest  text-white  ml-12 pl-12 mt-4 ">
                                NEXTGEN
                            </h3>
                            <ul className='items flex gap-5 ml-20 pl-20 mt-5'>
                                <li><a className=" text-sky-700" href="#hero">Home</a></li>
                                <li><a className="" href="#about">About</a></li>
                                <li><a className="" href="#services">Services</a></li>
                                <li><a className="" href="#portfolio">Portfolio</a></li>
                                <li><a className="" href="#team">Team</a></li>
                                <li><a className="" href="#contact">Contact</a></li>
                                <li><a className="getstarted ml-5" href="#contact">Get Started</a></li>
                            </ul>
                            
                            </span>
                            
                            

                        </div>


                    </Link>
                </nav>
                <div className='flex p-20'>

                    <h1 className=' hero text-5xl text-white   text-left font-bold tracking-wide ml-12   mt-12    '>Better Solutions For<br /> Your Business <br /><p className='text-xl  text-slate-400 text-left font-bold tracking-wide mt-4'>We are team of talented developers making perfect  <br /> technology product</p> <br /><a className="getstarted text-lg bg-cyan-500 px-5 py-3 mb-0 rounded-full" href="#contact">Get Started</a></h1>
                    <Image className="ml-12 mt-0 pt-0 mb-0 pb-0 animate-bounce" src={hero} width={480} height={480} />
                      <br />
                      
                </div>
                

            </div>
        </div>


    )
}
