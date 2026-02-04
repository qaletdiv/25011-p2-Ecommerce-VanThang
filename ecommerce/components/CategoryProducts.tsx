"use client"
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import {AnimatePresence, motion} from "motion/react"
import { Loader2 } from 'lucide-react'
import { fetchProducts } from '@/lib/redux/products/productsThunk'
import ProductsCard from './ProductsCard'

const CategoryProducts = () => {
  const { items, loading } = useAppSelector((state) => state.products)
  const { id } = useParams()
  const currentId = Number(id)
  const router = useRouter()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(items?.length === 0 ) {
      dispatch(fetchProducts())
    }
  },[dispatch, items ] )

  const filteredProducts = items.filter(
  (product) => product.id === currentId
)
  

  return (
    <div className="py-5 flex flex-col md:flex-row items-start gap-5">
      <div className="flex flex-col md:min-w-40 border">
        {items.map((item) => (
          <Button
            key={item.id}
            onClick={() => router.push(`/category/${item.id}`)}
            className={`bg-transparent border-0 p-0 rounded-none 
              text-darkColor shadow-none hover:bg-shop-orange
              hover:text-white font-semibold transition-colors hoverEffect border-b last:border-b-0 capitalize
              ${item.id === currentId ? "bg-shop-orange text-white" : "border-dark"}
            `}
          >
            <p className="w-full text-left px-2">{item.name}</p>
          </Button>
        ))}
      </div>
      <div className='flex-1' >
        {loading ? (
        <div className='flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center
        bg-gray-100 rounded-lg w-full'>
          <div className='flex items-center space-x-2 text-blue-600' >
            <Loader2 className='w-5 h-5 animate-spin' />
            <span>Product is loading...</span>
          </div>
        </div>  
        ) : filteredProducts.length === 0 ? (
          <div>
            Null
          </div>
        ) : (
            <div className='gird gird-cols-2 md:gird-cols-3 lg:gird-cols-4 gap-4 w-70 ' >
          <AnimatePresence mode='wait' >
              <motion.div key={currentId} >
                  {filteredProducts.map((product) => (
                    <motion.div key={product.id} >
                        <ProductsCard product={product}/>
                    </motion.div>
                  ))}
              </motion.div>
          </AnimatePresence>
            </div>
        )

      } 
      </div>
    </div>
  )
}

export default CategoryProducts
