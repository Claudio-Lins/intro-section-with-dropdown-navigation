import Image from 'next/image'
import React from 'react'
import { Menu } from './Menu'

export function Header() {
  return (
    <div className='w-full md:flex justify-center items-center h-20 hidden'>
      <div className="container mx-auto gap-8 flex justify-between items-center">
        <Image src="/images/logo.svg" width={84} height={27} alt="" />
        <Menu/>
      </div>
    </div>
  )
}
