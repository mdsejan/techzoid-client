import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-base-200 py-10">
      <footer className="footer text-base-content max-w-screen-2xl mx-auto px-5 py-6">
        <aside>
          <Link to="/">
            <img
              className="w-40 mb-4"
              src="https://i.ibb.co/vsLQTqz/logo.jpg"
              alt="logo"
            />
          </Link>
          <p>
            TechZoid Electronics Store.
            <br />
            Providing reliable tech Products since 1992
          </p>
        </aside>
        <nav>
          <header className="footer-title">Brands</header>
          <Link to="/products/652fd3f53fda2cac788416e4">
            <a className="link link-hover">Apple</a>
          </Link>
          <Link to="/products/652fe168535a14795c67938a">
            <a className="link link-hover">Samsung</a>
          </Link>
          <Link to="/products/652fe2375c6af3090353a80c">
            <a className="link link-hover">Google</a>
          </Link>
          <Link to="/products/652fe2685c6af3090353a80d">
            <a className="link link-hover">Asus</a>
          </Link>
        </nav>
        <nav>
          <header className="footer-title">Navigation</header>
          <Link to="/">
            <a className="link link-hover">Home</a>
          </Link>
          <Link to="/addproduct">
            <a className="link link-hover">Add Product</a>
          </Link>
          <Link to="/cart">
            <a className="link link-hover">My Cart</a>
          </Link>
          <Link to="/login">
            <a className="link link-hover">Login</a>
          </Link>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <Link to="/termsofuse">
            <a className="link link-hover">Terms of use</a>
          </Link>
          <a className="link link-hover">Privacy policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
