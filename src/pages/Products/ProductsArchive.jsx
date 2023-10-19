import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Slider from "./Slider";
import ProductCard from "./ProductCard";

const ProductsArchive = () => {
  const [brandProducts, setBrandProducts] = useState([]);

  const { brandId } = useParams();
  const brand = useLoaderData();

  useEffect(() => {
    fetch(`https://techzoid-server.vercel.app/products/${brandId}`)
      .then((res) => res.json())
      .then((data) => setBrandProducts(data));
  }, [brandId]);

  return (
    <div className="max-w-screen-2xl min-h-screen mx-auto px-5 py-6 lg:py-16">
      <Slider brand={brand}></Slider>
      <div className="text-center py-14">
        <h2 className="text-3xl">Products</h2>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-5">
        {brandProducts.length === 0 ? (
          <h3 className="text-xl px-2 bg-[#F7C54C] inline-block">
            No Products Found
          </h3>
        ) : (
          brandProducts.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsArchive;
