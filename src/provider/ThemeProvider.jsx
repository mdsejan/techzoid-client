import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://techzoid-server.vercel.app/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  useEffect(() => {
    fetch("https://techzoid-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const themeInfo = {
    brands,
    products,
  };

  return (
    <ThemeContext.Provider value={themeInfo}>{children}</ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
