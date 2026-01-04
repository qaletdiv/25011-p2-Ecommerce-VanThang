"use client";

import { useEffect, useState } from "react";
import { fetchProducts } from "../lib/redux/products/productsThunk";
import { useAppDispatch, useAppSelector } from "../lib/redux/hooks";
import HomeTabBar from "../components/HomeTabBar"
import Image from "next/image";
import { productType } from "@/constants/data";

const BodyServer = () => {
  const [selectedTab, setselectedTab ] = useState(productType[0]?.title || "" )


  const dispatch = useAppDispatch();


  const { items, loading, error } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (

    <div>
      {loading && <p>Loading...</p>}
      <HomeTabBar selectedTab = {selectedTab} onTabSelect= {setselectedTab}  />
      {error && <p>{error}</p>}
      {items.map((p) => (
       
        <div key={p.id}>
          <img src={p.image} alt={p.name} />
          
          {p.name}-{p.price}</div>
        
      ))}
    </div>
  );
};

export default BodyServer;
