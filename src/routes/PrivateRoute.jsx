import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../provider/ThemeProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../pages/Shared/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(ThemeContext);
  const location = useLocation();

  if (loading) {
    return <Loader></Loader>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
