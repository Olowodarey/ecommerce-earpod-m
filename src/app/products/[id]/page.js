"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import products from "@/data/products.json";
import Nav from "@/app/nav-bar/page";
import { useRecoilValue, useRecoilState } from "recoil";
import { cartAtom } from "@/app/atoms/cart";

const ProductDetails = () => {
  const [carts, setCart] = useRecoilState(cartAtom);

  const addToCart = (product) => {
    const existingProduct = carts.find((cart) => cart.id === product.id);

    if (existingProduct) {
      alert("Product already exists in cart");
    } else {
      const price = parseFloat(product.price.replace("$", ""));
      setCart([...carts, { ...product, quantity: 1 }]);
      alert("Product added succecessfully");
    }
  };

  const { id } = useParams();

  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="  px-10 ">
      <div className="">
        <Nav />
      </div>

      <div className="flex gap-10">
        <div>
          <Image
            src={`/${product.imageUrl}`}
            alt={product.name}
            width={500}
            height={500}
            className="mb-4"
          />

          <div className="flex">
            <Image
              src={`/${product.imageUrl1}`}
              alt={product.name}
              width={200}
              height={400}
              className="mb-4"
            />

            <Image
              src={`/${product.imageUrl2}`}
              alt={product.name}
              width={200}
              height={400}
              className="mb-4"
            />

            <Image
              src={`/${product.imageUrl3}`}
              alt={product.name}
              width={200}
              height={400}
              className="mb-4"
            />
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 text-base " style={{ maxWidth: "500px" }}>
            {" "}
            {product.desc}
          </p>
          <div className="flex space-x-1">
            {Array.from({ length: product.rating }, (_, index) => (
              <span key={index} className="text-yellow-400 fill-current">
                ★
              </span>
            ))}
          </div>
          <div className="pt-10">
            <p className="text-xl font-semibold mb-2">
              Price: {product.price2}
            </p>
            <p>{product.descprice}</p>
          </div>
          <div className="flex items-center mb-2"></div>

          <div className=" flex pt-20 gap-20">
            <button
              className="bg-green-200 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-2xl"
              onClick={() => addToCart(product)}
            >
              Add to cart
            </button>

            <button className="bg-green-200 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-2xl">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
