import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const HomeProductCard = ({ product }) => {
  const { _id, name, image, brand, category, price, rating } = product;
  const [brandinfo, setBrand] = useState([]);

  useEffect(() => {
    fetch(`https://techzoid-server.vercel.app/brands/${brand}`)
      .then((res) => res.json())
      .then((data) => setBrand(data));
  }, [brand]);
  return (
    <div className="card bg-base-100 shadow-sm border">
      <figure className="px-5 pt-5 h-72">
        <img
          src={image}
          alt={name}
          className="rounded-xl w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h1 className="card-title mb-4">
          {name}
          <div className="badge bg-[#FCE9BC] text-black">{category}</div>
        </h1>
        <p className="text-lg">
          <span className="font-semibold text-stone-500">Brand:</span>
          {brandinfo.name}
        </p>
        <p className="text-lg">
          <span className="font-semibold text-stone-500">Price:</span> ${price}
        </p>
        <p className="text-lg">
          <Rating
            initialRating={rating}
            readonly
            emptySymbol={<FaRegStar className="text-red-400"></FaRegStar>}
            fullSymbol={<FaStar className="text-red-400"></FaStar>}
          />
        </p>

        <div className="flex mt-5">
          <Link to={`/product/${_id}`}>
            <button className="px-3 py-1 mr-5 rounded-sm bg-[#e7b642] hover:bg-[#ca9a2a] text-white">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

HomeProductCard.propTypes = {
  product: PropTypes.object,
};

export default HomeProductCard;
