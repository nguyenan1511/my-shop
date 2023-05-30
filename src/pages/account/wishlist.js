import React from "react";
import dynamic from "next/dynamic";
import '@/styles/tailwind.css';

const NavAccount = dynamic(() => import("@/components/navAccount"), {
  ssr: false,
});

const wishlist = () => {
  return (
    <div className="flex">
      <div className="nav w-1/2">
        <NavAccount />
      </div>
      <div className="w-1/2">UIWishlist</div>
    </div>
  );
};

export default wishlist;
