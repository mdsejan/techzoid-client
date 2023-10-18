import { useContext } from "react";
import { ThemeContext } from "../../provider/ThemeProvider";
import BrandCard from "./BrandCard";

const Brands = () => {
  const { brands } = useContext(ThemeContext);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-10 py-16">
      {brands.map((brand) => (
        <BrandCard key={brand._id} brand={brand}></BrandCard>
      ))}
    </div>
  );
};

export default Brands;
