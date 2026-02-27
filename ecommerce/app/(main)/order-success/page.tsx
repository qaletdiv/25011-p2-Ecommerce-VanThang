"use client"
import PriceFormatter from '@/components/PriceFormatter'
import { useAppSelector } from '@/lib/redux/hooks'
import React from 'react'

const OrderSuccess = () => {
  const order = useAppSelector((state) => state.orders.currentOrder )
  if(!order){
    return <p>No order found</p>
  }
  
  return (
    <div>
        <h1> Order success </h1>
        <p>Order ID: {order.id}</p>
        <p>Total: <PriceFormatter amount={order.total} />  </p>
        <p>Phone: {order.phone}</p>
        <p>Address: {order.address}</p>
        <p>Status: {order.status}</p>
        <p>Date: {order.createdAt}</p>
    </div>
  )
}

export default OrderSuccess