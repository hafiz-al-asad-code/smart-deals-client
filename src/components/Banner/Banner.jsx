import React from "react";
import { IoSearch } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#ffe6fd] to-[#e0f8f5] py-[70px] px-[80px]">
      <h1 className="text-[72px] font-bold text-center opacity-90 leading-[84px]">
        Deal your <span className="text-primary">Products</span>
        <br /> in a <span className="text-primary">Smart</span> way !
      </h1>
      <p className="text-[#627382] text-xl text-center mt-4 mb-8">
        SmartDeals helps you sell, resell, and shop from trusted local sellers —
        all in one place!
      </p>
      <div className="flex justify-center">
        <input
          className="bg-white shadow-md w-[500px] py-3 px-4 rounded-l-full"
          type="search"
          name=""
          id=""
          placeholder="search For Products, Categoriees..."
        />
        <button className="py-3 px-4 rounded-r-full btn-primary">
          <IoSearch size={20} />
        </button>
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <button className="btn btn-primary">Watch All Products</button>
        <button className="btn shadow-md py-3 px-4 text-primary">
          Post an Product
        </button>
      </div>
    </div>
  );
};

export default Banner;
