// app/components/SignInClient.tsx
'use client'; // Bắt buộc để dùng state, event, DOM

import React from 'react';
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/clerk-react';

interface Props {
  user: any;
}

const SignInClient: React.FC<Props> = ({ user }) => {
  return (
    <>
      <SignedIn>
        <UserButton /> {/* Nếu đã đăng nhập */}
      </SignedIn>

      <SignedOut>
        <SignInButton mode="modal">
          <button className="text-sm font-semibold
    hover:cursor-pointer hover:text-darkColor hoverEffect">
            Login
          </button>
        </SignInButton>
      </SignedOut>
    </>
  );
};

export default SignInClient;
