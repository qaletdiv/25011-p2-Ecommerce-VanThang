// app/components/Header.tsx
import React from 'react';
import Container from './Container';
import { Logo } from './Logo';
import { HeaderMenu } from './HeaderMenu';
import { SearchBar } from './SearchBar';
import CartIcon from './CartIcon';
import FavoriteButton from './FavoriteButton';
import MobileMenu from './MobileMenu';
import { currentUser } from '@clerk/nextjs/server';
import SignInClient from './SignInClient';
import RegisterClient from './RegisterClient';

const Header = async () => {
  const user = await currentUser(); 

  return (
    <header className="bg-white py-5 ">
      <Container className="flex items-center justify-between">
        <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start text-lightColor md:gap-0">
          <MobileMenu />
          <Logo />
        </div>

        <HeaderMenu />

        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <FavoriteButton />
          <SignInClient  /> {/* Gọi client component */}
          <RegisterClient/>
        </div>
      </Container>
    </header>
  );
};

export default Header;
