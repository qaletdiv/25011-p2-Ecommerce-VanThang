"use client"
import Container from '@/components/Container'
import ProductsCard from '@/components/ProductsCard'
import { Title } from '@/components/ui/text'
import { useAppSelector } from '@/lib/redux/hooks'
import React from 'react'

const DealPage = () => {
    const {items} = useAppSelector((state) => state.products )
  return (
    <div className='py-10 bg-shop-light-bg'>
    <Container>
            <Title className='mb-5 underline underline-offset-4 decoration-1 text-base uppercase tracking-wide   ' >
              Hot Deals of the Week
              </Title>
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 '>
                {items.map((product) => (
                  <ProductsCard key={product?.id} product={product}/>
                ) )}
              </div>
    </Container>
    </div>
  )
}

export default DealPage