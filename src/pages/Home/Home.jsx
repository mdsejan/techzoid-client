import { useContext } from "react";
import { ThemeContext } from "../../provider/ThemeProvider";
import Banner from "./Banner";

const Home = () => {
  const { name } = useContext(ThemeContext);
  return (
    <div className="max-w-screen-2xl mx-auto px-5 py-6 lg:py-16">
      <Banner></Banner>
      <h2>{name}</h2>
    </div>
  );
};

export default Home;
