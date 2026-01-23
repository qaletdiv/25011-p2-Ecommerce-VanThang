import { Product } from '@/lib/redux/products/productsSlice'
import React from 'react'
import { Button } from './ui/button';
import { ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
interface Props{
    product: Product;
    className?: string
}

export const AddToCartButton = ({product, className}: Props) => {
    
    const isOutOfStock = product?.stock === 0 
    const handleAddToCart = () => {
        window.alert("Add")
    }
    return (
    <div>
        <Button onClick={handleAddToCart}  className={cn(
            "w-full  bg-shop-dark-green/80 text-shop-light-bg shadow-none border border-shop-dark-green/80 font-semibold tracking-wide hover:text-white hover:bg-shop-dark-green hover:border-shop-dark-green hoverEffect ",className
        )}
        >
            <ShoppingBag/> {isOutOfStock ? "Out of stock" : "Add to Cart" } 
        </Button>
    </div>
  )
}
