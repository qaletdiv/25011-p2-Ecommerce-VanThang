"use client"

import { registerThunk } from '@/lib/redux/auth/authThunk';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const RegisterClient = () => {

    const dispatch = useAppDispatch()
    const {loading, error} = useAppSelector((state) => state.auth ) 

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword ] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerThunk({ name, email, password }));
  };

  return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-64">
      <input
        placeholder="Name"
        className="border px-3 py-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        className="border px-3 py-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="border px-3 py-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button disabled={loading} className="bg-black text-white py-2">
        {loading ? "Registering..." : "Register"}
      </button>
    </form>
  )
}

export default RegisterClient