import ProductItem from "@/components/products/ProductItem";
import Link from "next/link";
import React from "react";

const UIProducts = ({ data = [] }) => {
  return (
    <div>
      UIProducts here:
      {data.map((item, index) => (
        // <div key={index}>
        //   <Link href={`/products/${item.slug}`}>{item.name}</Link>
        // </div>
        <ProductItem key={index} item={item} {...item}/>
      ))}
    </div>
  );
};

export default UIProducts;
