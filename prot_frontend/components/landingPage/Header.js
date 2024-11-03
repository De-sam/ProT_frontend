// components/Header.js
"use client";  // Ensures the component renders on the client side

import React from 'react';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();

  const handleSignUpClick = () => {
    router.push('/signup/step1');
  };

  return (
    <div className="grid grid-cols-3 w-[1440px]">
      <div className="col-span-1 m-5 text-[32px] font-bold tracking-tighter text-left">
        FashionFi
      </div>
      <div className="col-span-1">
        <div className="grid grid-cols-4 items-center justify-center text-[20px] mt-6">
          <div className="col-span-1">Home</div>
          <div className="col-span-1">About us</div>
          <div className="col-span-1">Contact us</div>
          <div className="col-span-1">Blog</div>
        </div>
      </div>
      <div className="col-span-1 text-right">
        <button
          className="m-6 w-[110px] h-[48px] border rounded-lg text-white bg-[#8B3A3A] text-[20px] font-semibold"
          onClick={handleSignUpClick}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
