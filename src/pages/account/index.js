import React from "react";
import dynamic from "next/dynamic";
import "@/styles/tailwind.css";
import Test from "@/components/Test";

const NavAccount = dynamic(() => import("@/components/navAccount"), {
  ssr: false,
});
const RootLayout = dynamic(() => import("@/app/layout"), {
  ssr: false,
});

const account = () => {
  return (
    <RootLayout>
      <div className="flex">
        <div className="nav w-1/2">
          <NavAccount />
        </div>
        <div className="w-1/2">Info</div>
        <Test name="Nguyen An" />
      </div>
    </RootLayout>
  );
};

export default account;
