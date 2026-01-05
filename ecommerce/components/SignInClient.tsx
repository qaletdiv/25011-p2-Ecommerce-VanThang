'use client';

import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { loginThunk } from "../lib/redux/auth/authThunk";
import Link from "next/link";

const SignInClient = () => {
  const dispatch = useAppDispatch();
  const { loading, error, user } = useAppSelector((state) => state.auth);

  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginThunk({ email, password }));
  };

  if (user) {
    return (
      <Link href={"/shop"} className="text-sm font-semibold">
        Hi, {user.name}
      </Link>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="text-sm font-semibold hover:cursor-pointer hover:text-darkColor hoverEffect"
      >
        Login
      </button>

      {open && (
        <form
          onSubmit={handleSubmit}
          className="absolute right-0 mt-2 w-64 p-4 bg-white shadow-lg rounded-md flex flex-col gap-3 z-50"
        >
          <input
            type="email"
            placeholder="Email"
            className="border px-3 py-2 rounded text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="border px-3 py-2 rounded text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && (
            <p className="text-red-500 text-xs">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="text-sm font-semibold bg-black text-white py-1.5 rounded hover:opacity-80 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      )}
    </div>
  );
};

export default SignInClient;
