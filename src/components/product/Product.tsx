// components/Product.tsx
import React from "react";
import Image from "next/image";
import useCartStore from "@/app/stores/addtocartStore";
import { Toaster, toast } from "sonner";
import Link from "next/link";

interface IProductProps {
  product: {
    id: string;
    image: string;
    title: string;
    price: number;
    description?: string;
    category?: string;
    quantity?: number;
  };
}

const Product: React.FC<IProductProps> = ({ product }) => {
  const { addToCart } = useCartStore();

  const addtoCartWithToast = () => {
    toast.success("Item added cart succesfully");
    addToCart(product);
  };

  return (
    <div className="w-[17rem] h-[20rem] border-2 mx-2 rounded-lg shadow-lg">
      <Link href={`/products/${product.id}`}>
        <Image
          unoptimized
          src={product.image}
          alt={product.title}
          className="w-[100%] h-[15rem] object-cover"
          width={100}
          height={100}
        />
      </Link>
      <h2 className="text-lg py-2 mx-2">
        {product.title.trim().slice(0, 20)}...
      </h2>
      <div className="flex justify-between items-center mx-3">
        <p className="text-md font-semibold mx-2">${product.price}</p>
        <Toaster richColors />
        <button
          className="px-2 border-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
          onClick={() => addtoCartWithToast()}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
