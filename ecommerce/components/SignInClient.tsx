'use client';

import React from 'react';
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/clerk-react';

const SignInClient = () => {
  return (
    <>
      <SignedIn>
        <UserButton /> {/* Nếu đã đăng nhập */}
      </SignedIn>

      <SignedOut>
        <SignInButton mode="modal">
          <button className="text-sm font-semibold hover:cursor-pointer hover:text-darkColor hoverEffect">
            Login
          </button>
        </SignInButton>
      </SignedOut>
    </>
  );
};

export default SignInClient;
