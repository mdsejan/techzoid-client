import { createContext } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const themeInfo = { name: " this is test data for ThemeContext" };
  return (
    <ThemeContext.Provider value={themeInfo}>{children}</ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
