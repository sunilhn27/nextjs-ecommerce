"use client";
import Image from "next/image";
import React from "react";
import useCartStore from "../stores/addtocartStore";

function CartPage() {
  const { cart, clearCart, removeFromCart } = useCartStore();

  return (
    <section className="my-12">
      <div className="justify-center flex flex-col items-center space-y-2 ">
        {cart.length > 0 && (
          <div className="flex justify-between items-center  w-[40%]">
            <div className="flex"></div>
            <h1 className="justify-center items-center flex font-semibold text-[1.5rem] mb-2">
              Cart Items
            </h1>
            <div>
              <div className="flex">
                <button
                  className="border-2 px-4 py-2 rounded-lg mx-2 text-white bg-red-500 w-[9rem] "
                  onClick={() => clearCart()}
                >
                  Remove All
                </button>
              </div>
            </div>
          </div>
        )}
        {cart.length == 0 && (
          <p className="text-[1.2rem]">Your cart is empty</p>
        )}
        {cart.map((ca) => (
          <>
            <div className="w-[40%] border-2 h-[10rem] rounded-lg ">
              <div className="flex ">
                <Image
                  className="p-2 flex py-3"
                  src={ca.image}
                  alt="pic"
                  width={100}
                  height={200}
                  unoptimized
                ></Image>
                <div className="flex flex-col space-y-3 ">
                  <h1 className="text-[1.2rem] font-semibold py-2 px-2 ">
                    {ca.title.trim().slice(0, 30)}
                  </h1>
                  <div className="flex">
                  <p className="px-2">Price: {ca.price} $</p>
                  <p>count :{ca.quantity}</p>
                  </div>
                  <button
                    className="border-2 px-4 py-2 rounded-lg mx-2 text-white bg-red-500 w-[9rem] "
                    onClick={() => removeFromCart(ca.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}

export default CartPage;
