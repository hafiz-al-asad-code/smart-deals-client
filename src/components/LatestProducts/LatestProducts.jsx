import React, { use } from "react";
import Product from "../Product/Product";

const LatestProducts = ({ latestProductsPromise }) => {
  const products = use(latestProductsPromise);
  // console.log(products);

  return (
    <div className="my-20">
      <h2 className="text-5xl font-bold text-center mb-10">
        Recent <span className="text-primary">Products</span>
      </h2>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
