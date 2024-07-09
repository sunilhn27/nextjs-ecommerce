"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface IProps {
  params: { id: string };
}

interface IProductProps {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
}


function ProductId({ params }: IProps) {
  const [product, setProduct] = useState<IProductProps | null>(null);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const id = parseInt(params.id);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data: IProductProps = await response.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
      }
    };

    if (params.id) {
      fetchProduct();
    }
  }, [params.id]);

  if (!product) {
    return <p>Loading...</p>;
  }


  return (
    <section className="flex justify-center items-center my-12">
      <div className="flex justify-around items-center w-full mx-8">
        <div className="flex-1">
          {product.image && (
            <Image
              src={product.image}
              alt="Product Image"
              width={400}
              height={100}
              className="h-[20rem]"
              unoptimized
            />
          )}
        </div>
        <div className="flex-1">
          <div className="flex flex-col space-y-3">
            <h1 className="text-[1.2rem] font-semibold">
              {product.title.trim().slice(0, 40)}...
            </h1>
            <p className="text-[1rem] w-[30rem] text-gray-500">
              {product.description}
            </p>
            <p className="text-[1.2rem]">Price ${product.price}</p>
            <div className="flex space-x-2">
              <button className="w-[12rem] h-[3rem] border-2 bg-blue-600 text-white rounded-lg">
                Add to Cart
              </button>

              <button className="w-[12rem] h-[3rem] border-2 bg-orange-500 text-white rounded-lg">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductId;
