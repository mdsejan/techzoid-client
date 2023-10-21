import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa6";
import Rating from "react-rating";
import { ThemeContext } from "../../provider/ThemeProvider";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const [brandinfo, setBrand] = useState([]);
  const { id } = useParams();

  const { user } = useContext(ThemeContext);

  const { image, rating, brand, category, name, price, shortDescription } =
    product || {};

  useEffect(() => {
    fetch(`https://techzoid-server.vercel.app/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  useEffect(() => {
    fetch(`https://techzoid-server.vercel.app/brands/${brand}`)
      .then((res) => res.json())
      .then((data) => setBrand(data));
  }, [brand]);

  const handleAddToCart = () => {
    const productId = id;
    const productImage = image;
    const productName = name;
    const productPrice = price;
    const userEmail = user.email;
    const cartDetails = {
      productId,
      userEmail,
      productImage,
      productName,
      productPrice,
    };

    fetch("https://techzoid-server.vercel.app/mycart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product Add To Cart Successfully",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      });
  };

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
          <h2 className="text-3xl flex justify-between items-center">
            {name}
            <div className="px-6 py-[1px] rounded-full bg-[#FCE9BC] text-base text-black">
              {category}
            </div>
          </h2>
          <p className="text-lg mt-4">
            <Rating
              initialRating={rating}
              readonly
              emptySymbol={<FaRegStar className="text-red-400"></FaRegStar>}
              fullSymbol={<FaStar className="text-red-400"></FaStar>}
            />
          </p>
          <p className="text-red-700 text-3xl font-semibold my-7">${price}</p>
          <p className="text-lg mt-12 mb-4">
            <span className="font-semibold text-stone-700">Brand: &nbsp;</span>
            {brandinfo.name}
          </p>
          <p className="text-gray-700">{shortDescription}</p>
          <button
            onClick={handleAddToCart}
            className="bg-black text-white py-2 px-4 mt-8 rounded hover:bg-gray-800 focus:outline-none focus:ring focus:border-blue-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
