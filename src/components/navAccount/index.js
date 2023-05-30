import Link from "next/link";
import React from "react";

const data = [
  {
    name: "Personakl",
    slug: "/account",
  },
  {
    name: "Order",
    slug: "/account/order",
  },
  {
    name: "Wish List",
    slug: "/account/wishlist",
  },
];
const NavAccount = () => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <Link href={item.slug}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default NavAccount;
