import { restoreAuth } from '@/lib/redux/auth/authSlice';
import { useAppDispatch } from '@/lib/redux/hooks'
import React, { useEffect } from 'react'

const AuthRestore = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(restoreAuth())
    } )
  return null
}

export default AuthRestore