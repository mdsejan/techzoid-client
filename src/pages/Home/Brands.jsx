import { useContext } from "react";
import { ThemeContext } from "../../provider/ThemeProvider";
import BrandCard from "./BrandCard";

const Brands = () => {
  const { brands } = useContext(ThemeContext);

  return (
    <div className=" py-16">
      <div>
        <h2 className="text-2xl mb-10">Shop by brands</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-10">
        {brands.map((brand) => (
          <BrandCard key={brand._id} brand={brand}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default Brands;
