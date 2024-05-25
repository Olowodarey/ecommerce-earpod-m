"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  ChevronDownIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/solid";

function Topnav() {
  const navigate = useRouter();

  return (
    <div className="flex bg-primary h-8 items-center  text-white px-10 ">
      <div className=" flex items-center  ">
        <PhoneArrowDownLeftIcon className="h-4 w-6 " />
        <div>814444444</div>
      </div>

      <div className=" flex flex-grow justify-center">
        Get 50% off on Selected Items | Shop Now
      </div>

      <div className=" flex items-center  justify-end gap-3">
        <div className="flex items-center">
          <div>Eng</div>
          <ChevronDownIcon className="h-4 w-6" />
        </div>

        <div className="flex items-center">
          <div>location</div>
          <ChevronDownIcon className="h-4 w-6" />
        </div>
      </div>


    </div>
  );
}

export default Topnav;
