import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";

const CartCard = ({ product, setCartProducts, cartProducts }) => {
  const { _id, productImage, productName, productPrice } = product || {};

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://techzoid-server.vercel.app/mycart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Product has been deleted.", "success");

              const remaining = cartProducts.filter(
                (product) => product._id !== id
              );

              setCartProducts(remaining);
            }
          });
      }
    });
  };
  return (
    <>
      <tr>
        <td>
          <div className=" w-16 h-16 md:w-24 md:h-24">
            <img
              className="w-full h-full object-cover"
              src={productImage}
              alt={productName}
            />
          </div>
        </td>
        <td className="md:text-lg">{productName}</td>
        <td className="md:text-lg font-semibold">${productPrice}</td>
        <th>
          <button
            onClick={() => handleDelete(_id)}
            className="p-3 rounded bg-[#F7C54C] hover:bg-[#cca13e] text-white border "
          >
            <FaTrash></FaTrash>
          </button>
        </th>
      </tr>
    </>
  );
};

CartCard.propTypes = {
  product: PropTypes.object,
  setCartProducts: PropTypes.object,
  cartProducts: PropTypes.object,
};

export default CartCard;
