import { useEffect, useState } from "react";
import HomeProductCard from "./HomeProductCard";

const AllProducts = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch(`https://techzoid-server.vercel.app/products`)
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);

  return (
    <div className=" py-16">
      <div>
        <h2 className="text-2xl mb-10">Latest Products</h2>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-5">
        {products.length === 0 ? (
          <h3 className="text-xl px-2 bg-[#F7C54C] inline-block">
            No Products Found
          </h3>
        ) : (
          products
            .slice(0, 8)
            .map((product) => (
              <HomeProductCard
                key={product._id}
                product={product}
              ></HomeProductCard>
            ))
        )}
      </div>
    </div>
  );
};

export default AllProducts;
