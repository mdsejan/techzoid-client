import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
  const { _id, image, name } = brand;
  return (
    <Link to={`/products/${_id}`}>
      <div className="flex flex-col bg-base-100 border shadow rounded-lg">
        <figure className="flex items-center h-28 lg:h-36">
          <img
            className="w-full h-full object-cover rounded-t-lg"
            src={image}
            alt="Brand Logo"
          />
        </figure>
        <div className="flex justify-center items-center min-h-12 bg-slate-100 dark-bg-black rounded-b-lg">
          <h2 className="text-lg"> {name} </h2>
        </div>
      </div>
    </Link>
  );
};

BrandCard.propTypes = {
  brand: PropTypes.object,
};

export default BrandCard;
