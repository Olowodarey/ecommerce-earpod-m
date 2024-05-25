"use client";
import React from "react";
import Link from "next/link";
import { useRecoilValue, useRecoilState } from "recoil";
import { cartAtom } from "../atoms/cart";
import Nav from "../nav-bar/page";

const Cart = () => {
  const cartItems = useRecoilValue(cartAtom);
  const [carts, setCart] = useRecoilState(cartAtom);

  const removeItem = (id) => {
    const newCart = carts.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const incrementQuantity = (id) => {
    setCart(
      carts.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCart(
      carts.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <div className=" bg-green-200">
        <Nav />
      </div>

      <div className="bg-cover bg-gray-200 flex justify-center h-screen">
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Cart items</h1>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg"
              >
                <div className="flex items-center">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded mr-4"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-gray-700">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => decrementQuantity(item.id)}
                    className="px-2 py-1 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => incrementQuantity(item.id)}
                    className="px-2 py-1 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                <div className="text-lg font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="px-2 py-1 text-red-700 bg-red-200 rounded hover:bg-red-300"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-6">
            <div className="text-2xl font-bold">
              Total: ${totalPrice.toFixed(2)}
            </div>
          </div>
          <Link href="/check-out">
            <div className="flex justify-center mt-10">
              <button className="bg-primary hover:bg-green-500 text-white font-bold py-2 px-4 rounded-2xl">
                Checkout
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
