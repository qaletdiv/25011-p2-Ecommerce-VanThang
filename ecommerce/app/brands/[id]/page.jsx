"use client"

import { brands } from "@/constants/data"
import Image from "next/image"
import { useParams } from "next/navigation"


export default function BrandsDetail({params}){
    const {id} = useParams()
    const brand = brands.find((p) => (
        p.id === Number(id)
    ) )

    return(
        <>  
        <div > 
            <Image 

                src={brand.logo}
                alt="BrandsLogo"
                width={300}
                height={300}
                unoptimized
            />
        </div>

        </>
    )
}