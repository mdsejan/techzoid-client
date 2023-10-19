import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  const { name, image, category, price, rating } = product;
  console.log(image);
  return (
    <div className="card bg-base-100 shadow-sm border">
      <figure className="px-10 pt-10 h-40">
        <img
          src={image}
          alt={name}
          className="rounded-xl w-full h-full object-cover"
        />
      </figure>
      <div className="card-body text-center">
        <div>
          <h1 className="card-title">{name}</h1>
        </div>

        <div className="text-left">
          <p className="text-lg">
            <span className="font-semibold text-stone-500">Category:</span>{" "}
            {category}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-stone-500">Price:</span> $
            {price}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-stone-500">Rating:</span>{" "}
            {rating}
          </p>
        </div>

        <div className="flex mt-5">
          <button className="px-4 py-2 mr-5 rounded-sm bg-[#e7b642] hover:bg-[#ca9a2a] text-white">
            Details
          </button>
          <button className="px-4 py-2 rounded-sm border border-[#F7C54C] hover:bg-[#ca9a2a] hover:text-white">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
