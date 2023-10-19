import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

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
      <h1>
        ProductsArchive for <b>{brandId}</b>
      </h1>
      <figure>
        <img src={brand.bannerImages[0]} alt="" />
      </figure>

      <h2>All Products</h2>
      <ul>
        {brandProducts.map((product) => (
          <li key={product._id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsArchive;
