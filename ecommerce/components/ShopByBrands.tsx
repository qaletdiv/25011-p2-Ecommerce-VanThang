import React from 'react'
import { Title } from './ui/text'
import Link from 'next/link'
import { brands } from '@/constants/data'
import Image from 'next/image'

const ShopByBrands = () => {
  return (
    <div className='mb-10 lg:pb-20 bg-shop-light-bg p-5 lg:p-7 rounded-md ' >
        <div className='flex items-center gap-5 justify-between mb-10'    >
            <Title className='text-2xl' > Shop by Brands </Title>
            <Link href={"/shop"} className='text-sm font-semibold tracking-wide hover:text-shop-btn-dark-green hoverEffect '> View all </Link>

        </div>
        <div className='flex items-center justify-between gap-2.5' >
            {brands.map((brand) => (
                <div key={brand.id} >               
                     <Link href={`/brand/${brand.id}`} className='bg-white w-36 h-24 items-center
                      justify-center rounded-md overflow-hidden hover:shadow-lg shadow-shop-dark-green/20 hoverEffect ' >
                     <Image        
                        src= {brand.logo}
                        alt = "BrandLogo"
                        width={250}
                        height={250}
                        unoptimized
                        className='w-32 h-20 object-contain'
                        />
                        </Link>
                    </div>
            
            ) )}
        </div>
    </div>
  )
}

export default ShopByBrands