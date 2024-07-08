// components/ProductList.tsx
"use client";
import React, { useEffect, useState } from "react";
import Product from "./Product";

import DropDown from "../DropDown";

interface IProductProps {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
  category?: string;
}

const CATEGORY = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
  "All",
];

const sortingOptions = ["asc", "desc", "none"];

function ProductList() {
  const [position, setPosition] = useState("sort");
  const [category, setCategory] = useState("category");
  const [products, setProducts] = useState<IProductProps[]>([]);

  const handleSorting = async (sort: string) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products?sort=${sort}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      console.log("first" + data);
      setPosition(sort);
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCategory = async (category: string) => {
    try {
      let endpoint = `https://fakestoreapi.com/products`;
      if (category.toLocaleLowerCase() !== "all") {
        endpoint = `https://fakestoreapi.com/products/category/${category}`;
      }
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
    } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);





  return (
    <section>
      <div className="w-full justify-end flex px-6 ">
        <div>
          <DropDown
            label={position === "sort" ? "Sort" : position.toUpperCase()}
            value={position}
            setValue={setPosition}
            handleAction={handleSorting}
            options={sortingOptions}
          />
        </div>
        <div>
          <DropDown
            label={
              category === "Category" ? "Category" : category.toUpperCase()
            }
            value={category}
            setValue={setCategory}
            handleAction={handleCategory}
            options={CATEGORY}
          />
        </div>
      </div>
      <div className="flex justify-center 2xl:w-[90%]  my-6 ">
        <div className="grid grid-cols-4 2xl:grid-cols-5 gap-8">
          {products.map((product) => (
            <div key={product.id}>
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductList;
