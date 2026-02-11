"use client";

import {StarIcon} from "lucide-react"
import ImageView from "../../../../components/ImageView"
import { useEffect } from "react";
import { useParams } from "next/navigation"
import ConTainer from "../../../../components/Container"
import { useAppDispatch, useAppSelector } from "../../../../lib/redux/hooks";
import { fetchProducts } from "@/lib/redux/products/productsThunk";
import { AddToCartButton } from "../../../../components/AddToCartButton"
import FavoriteButton from "../../../../components/FavoriteButton"
export default function ProductDetail({params}) {
    const {id} = useParams()
    const dispatch = useAppDispatch()
    const {items} = useAppSelector((state) => state.products )
     

    useEffect(() => {
        if(!items.length){
            dispatch(fetchProducts())
        }
    },[dispatch, items.length  ])

    const product = items.find(
        (p)=> p.id === Number(id)
    )
    const isStock = product?.stock > 0;

    if (!product) {
    return <p>Loading product...</p>;
    }


return(
       <ConTainer className="flex flex-col md:flex-row gap-10 py-10 pb-10 " >
            {product?.image && ( 
                <ImageView images= {product?.image} isStock={isStock} /> 
                )}
            <div className="w-full md:w-1/2 flex flex-col gap-5 " >
            <div className="space-y-1" >
                <h2 className="text-2xl font-bold  " >{product?.name}</h2>
                <p className="text-sm text-gray-600 tracking-wide" >
                    {product?.description}
                </p>
            </div>
            <div className="flex items-center gap-0.5 text-xs " >
                {[...Array(5)].map((_,index) => (
                    <StarIcon 
                    key={index}
                    size={12}
                    className="text-shop-light-green"
                    fill={"#3b9c3c"} />
                ))}
                <p className="font-semibold" > {`(120)`} </p>
            </div>
            <div className="space-y-2 border-t border-b border-gray-200 py-5 " >
                <p className="text-lg font-bold"> ${product?.price}</p>
                <p className={`px-4 text-sm text-center inline-block py-1.5 font-semibold rounded-lg ${product?.stock === 0 ? "bg-red-100 text-red-600 " : "text-green-600 bg-green-100 "   } `} >{product?.stock > 0 ? "In Stock" : "Out of Stock" }</p>
            </div>
            <div className="flex items-center gap-2.5 lg:gap-5" >
                <div className="w-full" >     
                <AddToCartButton product={product} />
                </div>
                <FavoriteButton showProduct={true} product= {product}/>
            </div>
            </div>
       </ConTainer>
    )
}
