import React from "react";
import { Input } from "./ui/input";

function Search() {
  return (
    <section>
      <form className="ml-auto flex-1 sm:flex-initial">
        <div className="relative">
          <Input
            type="search"
            placeholder="Search products..."
            className="pl-8 sm:w-[35rem] md:w-[35rem] lg:w-[35rem]"
          />
        </div>
      </form>{" "}
    </section>
  );
}

export default Search;
