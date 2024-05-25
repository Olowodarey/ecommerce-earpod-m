import Link from "next/link";
import "./globals.css";
import Nav from "./nav-bar/page";
import Topnav from "./top-nav/page";
import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import Items from "./products/page";
import Cart from "./cart/page";




export default function App() {
  return (
    <div>
      <div>
        <Topnav />
      </div>

      <div className="">
        <Nav />
      </div>

      <div className=" px-10 ">
        <div className=" flex bg-secondary h-60">
          <div className="px-20 py-10">
            <p className="  text-4xl font-bold text-bold text-primary ">
              Grab Upto 50% Off On <br /> Selected Headphone
            </p>
            <div className="pt-4">
              <button class="bg-primary hover:bg-green-500 text-white font-bold py-2 px-4  rounded-2xl">
                Buy Now
              </button>
            </div>
          </div>
          <div className="flex flex-grow justify-center">
            <img src="womanheadphone.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className="flex px-10 py-10 gap-10">
        <div className=" flex ">
          <button class="flex items-center bg-gray-200 hover:bg-gray-400 text-black text-sm   px-4  rounded-2xl h-6">
            Headphone Type
            <ChevronDownIcon className="h-4 w-6" />
          </button>
        </div>

        <div className=" flex ">
          <button class="flex items-center bg-gray-200 hover:bg-gray-400 text-black text-sm   px-4  rounded-2xl h-6">
            Price
            <ChevronDownIcon className="h-4 w-6" />
          </button>
        </div>

        <div className=" flex ">
          <button class="flex items-center bg-gray-200 hover:bg-gray-400 text-black text-sm   px-4  rounded-2xl h-6">
            Review
            <ChevronDownIcon className="h-4 w-6" />
          </button>
        </div>

        <div className=" flex ">
          <button class="flex items-center bg-gray-200 hover:bg-gray-400 text-black text-sm   px-4  rounded-2xl h-6">
            Color
            <ChevronDownIcon className="h-4 w-6" />
          </button>
        </div>

        <div className=" flex ">
          <button class="flex items-center bg-gray-200 hover:bg-gray-400 text-black text-sm   px-4  rounded-2xl h-6">
            Material
            <ChevronDownIcon className="h-4 w-6" />
          </button>
        </div>

        <div className=" flex ">
          <button class="flex items-center bg-gray-200 hover:bg-gray-400 text-black text-sm   px-4  rounded-2xl h-6">
            Other
            <ChevronDownIcon className="h-4 w-6" />
          </button>
        </div>

        <div className=" flex ">
          <button class="flex items-center bg-gray-200 hover:bg-gray-400 text-black text-sm   px-4  rounded-2xl h-6">
            All filter
            <AdjustmentsHorizontalIcon className="h-4 w-6" />
          </button>
        </div>

        <div className=" flex  flex-grow justify-end ">
          <button class="flex items-center bg-gray-100 hover:bg-gray-400 text-black text-sm   px-4  rounded-2xl h-6">
            sort
            <ChevronDownIcon className="h-4 w-6" />
          </button>
        </div>
      </div>

      <div>
        <Items />
      </div>

      

    </div>
  );
}
