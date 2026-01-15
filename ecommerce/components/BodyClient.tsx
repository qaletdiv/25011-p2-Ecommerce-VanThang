"use client";

import { useEffect, useState } from "react";
import { fetchProducts } from "../lib/redux/products/productsThunk";
import { useAppDispatch, useAppSelector } from "../lib/redux/hooks";
import HomeTabBar from "./HomeTabBar"
import { productType } from "@/constants/data";
import {motion} from "motion/react"
import { Loader2 } from "lucide-react";
import Link from "next/link";

const BodyClient = () => {
  const [selectedTab, setselectedTab ] = useState(productType[0]?.value || "All" )
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector(
    (state) => state.products
  );

  const filterData = selectedTab === "All" ? items : items.filter((p) => p.type === selectedTab ) 

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (

    <div>
      
      <HomeTabBar selectedTab = {selectedTab} onTabSelect= {setselectedTab}  />
      {loading ?(
        <div className="flex flex-col items-center justify-center py-10 min-h-80 gap-4 bg-gray-100 w-full mt-10" >
          <div className="space-x-2 flex items-center text-blue-600 " >
              <Loader2 className="w-5 h-6 animate-spin " />
              <span> Product is loading...</span>
          </div>
         </div>
        )
      : filterData?.length ?(
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10">
          {filterData.map((p) => (
            <Link key={p.id} href={`products/${p.id}`} >
            <div >          
                <img src={p.image} alt={p.name}/>
               {p.name}-{p.price}
               </div>
            </Link>
          ) ) }
        </div>
      ) : (
        <>no products</>
      )
      }
      

      {error && <p>{error}</p>}
      
    </div>
  );
};

export default BodyClient;
