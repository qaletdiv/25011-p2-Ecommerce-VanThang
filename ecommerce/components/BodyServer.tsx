"use client";

import { useEffect } from "react";
import { fetchProducts } from "../lib/redux/products/productsThunk";
import { useAppDispatch, useAppSelector } from "../lib/redux/hooks";

const BodyServer = () => {
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
      {error && <p>{error}</p>}
      {items.map((p) => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  );
};

export default BodyServer;
