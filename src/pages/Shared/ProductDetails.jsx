import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const { image, name, price, shortDescription } = product || {};
  console.log(product);

  useEffect(() => {
    fetch(`https://techzoid-server.vercel.app/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  return (
    <div className="max-w-screen-lg mx-auto px-5 py-6 lg:py-16">
      <div className="w-full max-w-4xl bg-white p-4 md:p-8 rounded-lg border md:flex">
        <div className="md:w-1/2 h-96">
          <img
            src={image}
            alt="Product Image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div className="md:w-1/2 mt-4 py-6 md:mt-0 md:pl-6">
          <h2 className="text-3xl ">{name}</h2>
          <p className="text-red-700 text-3xl font-semibold my-7">${price}</p>
          <p className="text-gray-700 mt-12">{shortDescription}</p>
          <button className="bg-black text-white py-2 px-4 mt-8 rounded hover:bg-gray-800 focus:outline-none focus:ring focus:border-blue-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
