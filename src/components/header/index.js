import { useMainContext } from "@/components/context/MainProvider";
import React, { useState } from "react";

const Header = () => {
  const { listCart } = useMainContext();
  console.log("🚀listCart---->", listCart);

  return (
    <div className="flex my-[60px]">
      <div className="wrap">
        <button className="btn btn-primary mr-[20px]">Login</button>
        <button className="btn gap-2">
          Cart
          <div className="badge">{listCart.length}</div>
        </button>
      </div>
    </div>
  );
};

export default Header;
