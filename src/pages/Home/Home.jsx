import AllProducts from "./AllProducts";
import Banner from "./Banner";
import Brands from "./Brands";
import ShopBanner from "./ShopBanner";

const Home = () => {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-5 py-6 lg:py-16">
        <Banner></Banner>
        <Brands></Brands>
        <AllProducts></AllProducts>
        <ShopBanner></ShopBanner>
      </div>
    </div>
  );
};

export default Home;
