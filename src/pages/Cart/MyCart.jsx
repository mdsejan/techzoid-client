import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../provider/ThemeProvider";
import CartCard from "./CartCard";

const MyCart = () => {
  const [cartProducts, setCartProducts] = useState([]);

  const { user } = useContext(ThemeContext);

  useEffect(() => {
    fetch(`https://techzoid-server.vercel.app/mycarts/${user.email}`)
      .then((res) => res.json())
      .then((data) => setCartProducts(data));
  }, [user.email]);
  return (
    <div className="max-w-screen-lg min-h-[80vh] mx-auto px-5 py-6 lg:py-16">
      {cartProducts.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table border rounded">
            {/* head */}
            <thead>
              <tr className="md:text-lg bg-[#FDF9EF] text-black font-semibold">
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartProducts?.map((product) => (
                <CartCard
                  key={product._id}
                  product={product}
                  setCartProducts={setCartProducts}
                  cartProducts={cartProducts}
                ></CartCard>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="min-h-[60vh] flex justify-center items-center">
          <h2 className="text-2xl">{`You Don't have any product into Cart`}</h2>
        </div>
      )}
    </div>
  );
};

export default MyCart;
