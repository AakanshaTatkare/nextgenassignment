import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import trade from'../public/tradepro.png'
import gip from '../public/gip.png'
import after from'../public/afterlife.png'

export default function homee() {
  return (
    <div className=''>
      <div className='flex gap-20 bg-neutral-300 mt-0 pt-0 '>
       <Image src={trade} width={150} height={100} />
       <Image src={gip} width={150} height={100} />
       <Image src={after} width={150} height={100} />
       </div>
      <div className='  flex justify-between mt-16'>
       
</div>
    </div>
  )
}
