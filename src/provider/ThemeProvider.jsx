import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../pages/firebase/Firebase.config";

const GoogleProvider = new GoogleAuthProvider();

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("Observed User:", currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

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
    googleSignIn,
    loading,
    signInUser,
    setLoading,
    user,
    logOut,
    createUser,
  };

  return (
    <ThemeContext.Provider value={themeInfo}>{children}</ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
