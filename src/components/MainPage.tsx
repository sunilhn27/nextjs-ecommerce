import React from "react";
import SideBar from "./SideBar";
import Product from "./product/Product";
import ProductList from "./product/ProductList";

function MainPage() {
  return (
    <section className="mt-2">
      <div className="flex justify-center items-center">
        <div className="flex">
          <ProductList />
        </div>
      </div>
    </section>
  );
}

export default MainPage;
