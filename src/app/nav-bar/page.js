"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ShoppingCartIcon, UserCircleIcon } from "@heroicons/react/24/solid";

function Nav() {
  const navigate = useRouter();
  return (
    <div className=" flex items-center px-10 py-5 gap-10">
      <div className=" flex items-center text-primary ">
        <ShoppingCartIcon className="h-8 w-7" />
        <h1 className=" text-xl">Shopcart</h1>
      </div>

      <div className="flex flex-grow items-center  gap-20  ">
        <Link href="/" className="hover:border-b-4 hover:border-primary">
          categories
        </Link>

        <Link href="" className="hover:border-b-4 hover:border-primary">
          deals
        </Link>

        <Link
          href="/"
          className="hover:border-b-4 hover:border-primary"
        >
          whats new{" "}
        </Link>

        <Link
          href="/delivery"
          className="hover:border-b-4 hover:border-primary"
        >
          Delivery{" "}
        </Link>
      </div>

      <div className="flex flex-grow  rounded-full  outline-primary">
        <input type="text" placeholder="search product " />
      </div>

      <div className="flex flex-grow justify-end gap-20  ">
      <Link href="/account">
      <div className="flex items-center hover:border-b-4 hover:border-primary">
          <UserCircleIcon className="h-4 w-6 " />
          <div>Account</div>
        </div>
      </Link>
      <Link href="/cart">
      <div className="flex items-center  hover:border-b-4 hover:border-primary">
          <ShoppingCartIcon className="h-4 w-6" />
          <div>Cart</div>
        </div>
      </Link>
      </div>
    </div>
  );
}

export default Nav;
