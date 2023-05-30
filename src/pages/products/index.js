import React from "react";
import dynamic from "next/dynamic";

const UIProducts = dynamic(() => import("@/components/products/UIProducts"), {ssr: false});
const RootLayout = dynamic(() => import("@/app/layout"), {
    ssr: false,
  });

const data = [
  {
    name: "Dien thoai",
    slug: "dien-thoai",
    des: "des dien-thoai",
    id: "des-dien-thoai-id",
  },
  {
    name: "Lap top",
    slug: "lap-top",
    des: "des lap-top",
    id: "des-lap-top-id",
  },
  {
    name: "Macbook",
    slug: "mac-book",
    des: "des mac-book",
    id: "des-mac-book-id",
  },
];
const products = () => {
  return (
    <RootLayout>
      products
      <UIProducts data={data} />
    </RootLayout>
  );
};

export default products;
