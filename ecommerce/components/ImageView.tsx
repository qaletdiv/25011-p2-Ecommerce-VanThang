"use client"
import { useAppSelector } from '@/lib/redux/hooks'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import React, { useState } from 'react'

interface Props{
    images: string,
    isStock?: number
}

const ImageView = ({images, isStock}:Props ) => {
  return (
    <div className='w-full md:w-1/2 space-y-2 md:space-y-4' >
        <AnimatePresence mode='wait' >
            <motion.div key={images} 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.5}}
                        className='w-full max-h-[550px] min-h-[450px] border border-darkColor/10 
                        rounded-md group overflow-hidden   '  >
                <Image src={images} 
                    alt='product'
                    width={700}
                    height={700}
                    unoptimized
                    className={`w-full h-96 max-h-[550px] min-h-[500px] object-contain 
                    group-hover:scale-110 hoverEffect rounded-md ${isStock === 0 ? "opacity-50" : "" } `} 
                 />
            </motion.div>
        </AnimatePresence>
       
    </div>
  )
}

export default ImageView