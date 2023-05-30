import React from 'react'
import dynamic from "next/dynamic";
import '@/styles/tailwind.css';

const NavAccount = dynamic(() => import("@/components/navAccount"), {ssr: false});

const order = () => {
  return (
    <div className="flex">
        <div className="nav w-1/2">
            <NavAccount/>
        </div>
        <div className="w-1/2">
        UIorder
        </div>
    </div>
  )
}

export default order