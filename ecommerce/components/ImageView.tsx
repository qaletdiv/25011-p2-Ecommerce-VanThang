"use client"
import { useAppSelector } from '@/lib/redux/hooks'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import React, { useState } from 'react'

interface Props{
    images: string[],
    isStock?: boolean
}

const ImageView = ({images = [], isStock}:Props ) => {
    const [active, setActive] = useState(0)
    if (!images.length) return null
  return (
    <div className='w-full md:w-1/2 space-y-2 md:space-y-4' >
        <AnimatePresence mode='wait' >
            <motion.div key={images[active]} >
                <Image src={images[active]} 
                    alt='product'
                    width={800}
                    height={800}
                    unoptimized
                 />
            </motion.div>
        </AnimatePresence>
    </div>
  )
}

export default ImageView