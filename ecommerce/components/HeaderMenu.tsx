import { headerData } from '@/constants/data'
import Link from 'next/link'
import React from 'react'

export const HeaderMenu = () => {
  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-7 capitalize font-semibold text-lightColor " >
      {headerData?.map((item) =>(
        <Link key={item?.title} href={item?.href} 
        className={`hover:text-shop-light-green 
            hoverEffect relative group`} >
                 {item?.title} 
                 <span className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-shop-light-green
                     group-hover:w-1/2 hoverEffect group-hover:right-0  `} />
                 <span className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-shop-light-green
                     group-hover:w-1/2 hoverEffect group-hover:left-0`} />
                 </Link>
    ))}   
    </div>
  )
}
