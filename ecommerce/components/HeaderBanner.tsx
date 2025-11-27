import React from 'react'
import {Title} from './ui/text'
import Link from 'next/link'

const HeaderBanner = () => {
  return (
    <div className='py-16 md:py-0 bg-shop-light-pink
     rounded-lg px-10 lg:px-24 flex items-center justify-between ' >
        <div>
          <Title>
            Garb Upto 50% off on <br/>
            Selected headphone 
          </Title>
          <Link href={"/shop"}>Buy Now</Link>
        </div>
        </div>
  )
}

export default HeaderBanner