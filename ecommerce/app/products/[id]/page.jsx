"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { fetchProducts } from "@/lib/redux/products/productsThunk";
export default function ProductDetail({params}) {
    const dispatch = useAppDispatch()
    const {items} = useAppSelector((state) => state.products )
    useEffect(() => {
        if(!items.length){
            dispatch(fetchProducts())
        }
    },[dispatch, items.length  ])

    const product = items.find(
        (p)=> p.id === Number(params.id)
    )
    if (!product) {
    return <p>Loading product...</p>;
    }


return(
        <div  >
            <img src={product.image} alt={product.name}/>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
        </div>
    )
}
