import Image from 'next/image';
import { Product } from '@/lib/redux/products/productsSlice';
import Link from 'next/link';
import { Flame } from 'lucide-react';
import AddToWishListButton from './AddToWishListButton';

interface Props {
  product: Product
}

const ProductsCard = ({product}:Props ) => {
  return (
    <div className='text-sm border border-dark_blue/20 rounded-md bg-white group' >
        <div className='relative group overflow-hidden bg-shop-light-bg' >
            {/* {product?.image && (
                <Image                 
                    src={product.image}
                    alt={product.name}
                    loading='lazy'
                    width={300}
                    height={300}
                />
            )} */}

            <Link key={product.id} href={`/products/${product.id}`} >
            <div >          
                <img src={product.image} alt={product.name}/>
                 {product.name}-{product.price}
           </div>
            </Link>
            <AddToWishListButton product={product} />
            {product.status === "sale" && (
              <p className='absolute top-2 left-2 z-10 border
               border-darkColor/50 px-2 rounded-full
                group-hover:border-shop-light-green
                 group-hover:text-shop-light-green
                 hoverEffect ' >Sale!</p>
            )}
            {product?.status === "hot" && <Link  
              href={"/deal"}
              className='absolute top-2 left-2 z-10 border 
              border-shop-orange/50 p-1 rounded-full group-hover:border-shop-orange 
              hover:text-shop-dark-green hoverEffect'
            >   
              <Flame 
                size={18}
                fill='#fb6c08'
                className='text-shop-orange/50 group-hover:text-shop-orange hoverEffect'
              />
              </Link>}
              {product.status === "new" && (
              <p className='absolute top-2 left-2 z-10 border
               border-darkColor/50 px-2 rounded-full
                group-hover:border-shop-light-green
                 group-hover:text-shop-light-green
                 hoverEffect ' >New!</p>
            )}
            </div>       
            <div className='p-3' >
                {product?.category && (
                  <p> {product?.category} </p>
                ) } 
            </div>
    </div>
  )
}

export default ProductsCard