"use client";

import ImageView from "../../../../components/ImageView"
import { useEffect } from "react";
import { useParams } from "next/navigation"
import ConTainer from "../../../../components/Container"
import { useAppDispatch, useAppSelector } from "../../../../lib/redux/hooks";
import { fetchProducts } from "@/lib/redux/products/productsThunk";
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
            <div className="w-full md:w-1/2 flex flex-col gap-5 " >details</div>
       </ConTainer>
    )
}
