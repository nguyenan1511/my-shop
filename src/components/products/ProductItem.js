import React from "react";
import { useMainContext } from "@/components/context/MainProvider";

const ProductItem = ({ name, des, id, slug, num, item,...props }) => {
  const { addCart } = useMainContext();

  const buyNow = () => {
    addCart(item);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl my-[30px]">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{des}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={buyNow}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
