"use client";
import React from "react";
import Link from "next/link";
import products from "@/data/products.json";
import { useRecoilValue, useRecoilState } from "recoil";
import { cartAtom } from "../atoms/cart";

function Items() {
  
  const [carts, setCart] = useRecoilState(cartAtom);

  const addToCart = (product) => {
    const existingProduct = carts.find((cart) => cart.id === product.id);

    if (existingProduct) {
      alert("Product already exists in cart");
    } else {
      const price = parseFloat(product.price.replace('$', ''));
      setCart([...carts, { ...product, quantity: 1 }]);
      alert("Product added succecessfully");
    }
  };

  const handleProductClick = (product) => {
    router.push(`/products/${product.id}`);
  };





  return (
    <div className="px-10">
      <h1 className="text-bold text-2xl mb-6">Shop Our Products</h1>

      <div className="grid grid-cols-4 gap-10">
        {products.map((product) => (
          <div key={product.id} className="w-full">
            <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
              <Link href={`/products/${product.id}`}>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-[250px] object-cover"
                />
              </Link>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="flex items-center mb-2">
                <div className="flex space-x-1">
                  {Array.from({ length: product.rating }, (_, index) => (
                    <span key={index} className="text-yellow-400 fill-current">
                      ★
                    </span>
                  ))}
                </div>
                <p className="flex flex-grow justify-end text-gray-600 ">
                  ${product.price}
                </p>
              </div>

              <div>
                <button className="bg-primary hover:bg-green-500 text-white font-bold py-2 px-4 rounded-2xl "
                onClick={() => addToCart(product)}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Items;
