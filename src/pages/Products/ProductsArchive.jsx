import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../provider/ThemeProvider";

const ProductsArchive = () => {
  const { brandId } = useParams();
  const { brands, products } = useContext(ThemeContext);

  const matchBrand = brands.find((brand) => brand._id === brandId);
  const matchProducts = products.filter((product) => product.brand === brandId);
  console.log(matchProducts);
  return (
    <div className="max-w-screen-2xl min-h-screen mx-auto px-5 py-6 lg:py-16">
      <h1>
        ProductsArchive for <b>{brandId}</b>
      </h1>
      <figure>
        <img src={matchBrand.bannerImages[0]} alt="" />
      </figure>

      <h2>All Products</h2>
      <ul>
        {matchProducts.map((product) => (
          <li key={product._id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsArchive;
