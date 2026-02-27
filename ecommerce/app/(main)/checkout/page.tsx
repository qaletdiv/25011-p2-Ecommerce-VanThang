"use client"

import PriceFormatter from '@/components/PriceFormatter';
import { Button } from '@/components/ui/button';
import { clearCart } from '@/lib/redux/carts/cartsSlice';
import { fetchCart } from '@/lib/redux/carts/cartsThunk';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { createOrder } from '@/lib/redux/orders/ordersThunk';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const CheckOutPage = () => {
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("")
      const user = useAppSelector((state) => state.auth.user)
      const router = useRouter()
      const userId = user?.id || user?._id   
    const cartItems = useAppSelector((state) => state.carts.items )
    const dispatch = useAppDispatch()
    
    const subTotal = cartItems.reduce((total, item) => {
        const price = item.product?.price || 0
        return total + price * item.quantity
    },0 )
    const handleOrder = async() => {
        if(!address.trim()){
            toast.error("Please enter address")
            return
        }
        try{
            await dispatch(createOrder({userId, address, phone})).unwrap()
            dispatch(clearCart())
            toast.success("Order success")
            router.push("order-success")
        }
        catch{
            toast.error("Order failed")
        }
    }

    useEffect(() => {
        dispatch(fetchCart(userId))
    },[userId, dispatch] )


  return (
    <>     
    <div className='flex justify-center ' >

    {/* <div className=' p-10 max-w-xl mx-auto mt-10 space-y-4 text-center mb-20 border-2 rounded-md shadow-md bg-white  ' > */}
        <div>

        <form
        onSubmit={(e) => {
            e.preventDefault()
            handleOrder()
        }}
        className='p-10 max-w-xl mx-auto mt-10 space-y-4 text-center mb-20 border-2 rounded-md shadow-md bg-white'
        >
            <h1 className='text-xl font-bold' >Checkout:</h1>
        <p>
            <PriceFormatter amount={subTotal} className='font-bold text-lg '  />
        </p>
        <input 
        className='w-80 border p-2 rounded  ' 
        value={phone} 
        onChange={(e) => setPhone(e.target.value) }
        placeholder='+Phone number'
        type="tel"
        required
        pattern="^0[0-9]{9}$"
        />
        <input 
        className='w-80 border p-2 rounded  ' 
        value={address} 
        onChange={(e) => setAddress(e.target.value) }
        placeholder='Enter delivery address'
        type="text"
        required
        />
            <Button 
        type='submit'
            className='w-full'
         >
            Confirm Order
        </Button>

        </form>
        
        
    </div>
            </div>
        {/* </div> */}
    </>
  )
}

export default CheckOutPage