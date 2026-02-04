"use client"

import { logout } from '@/lib/api/authApi';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation'
import React from 'react'
import { route } from 'sanity/router';

const LogoutClient = () => {

    const router = useRouter();
    
    const handleLogout =  async() => {
        await logout();
        router.push("/login");
       router.refresh();
    }

  return (
    <button onClick={handleLogout} > <LogOut className='w-6 h-10'  /> </button>
  )
}

export default LogoutClient