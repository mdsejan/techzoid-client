import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa6";

const ProductCard = ({ product }) => {
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
      <div className="card-body justify-between text-center">
        <div>
          <h1 className="card-title justify-between">
            {name}
            <div className="badge bg-[#FCE9BC] text-black">{category}</div>
          </h1>
        </div>

        <div className="text-left">
          <p className="text-lg">
            <span className="font-semibold text-stone-500">Brand: &nbsp;</span>
            {brandinfo.name}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-stone-500">Price: &nbsp;</span>$
            {price}
          </p>
          <p className="text-lg mt-4">
            <Rating
              initialRating={rating}
              readonly
              emptySymbol={<FaRegStar className="text-red-400"></FaRegStar>}
              fullSymbol={<FaStar className="text-red-400"></FaStar>}
            />
          </p>
        </div>

        <div className="flex mt-5">
          <Link to={`/product/${_id}`}>
            <button className="px-4 py-2 mr-5 rounded-sm bg-[#e7b642] hover:bg-[#ca9a2a] text-white">
              Details
            </button>
          </Link>
          <Link to={`/updateproduct/${_id}`}>
            <button className="px-4 py-2 rounded-sm border border-[#F7C54C] hover:bg-[#ca9a2a] hover:text-white">
              Update
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
