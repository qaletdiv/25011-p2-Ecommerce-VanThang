'use client';

import React from 'react';
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/clerk-react';

const SignInClient = () => {
  
  return (
    <>

          <button className="text-sm font-semibold hover:cursor-pointer hover:text-darkColor hoverEffect">
            Login
          </button>
    </>
  );
};

export default SignInClient;
