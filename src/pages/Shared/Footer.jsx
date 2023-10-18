const Footer = () => {
  return (
    <div className="bg-base-200 py-10">
      <footer className="footer text-base-content max-w-screen-2xl mx-auto px-5 py-6">
        <aside>
          <img
            className="w-40 mb-4"
            src="https://i.ibb.co/vsLQTqz/logo.jpg"
            alt="logo"
          />
          <p>
            TechZoid Electronics Store.
            <br />
            Providing reliable tech Products since 1992
          </p>
        </aside>
        <nav>
          <header className="footer-title">Brands</header>
          <a className="link link-hover">Apple</a>
          <a className="link link-hover">Samsung</a>
          <a className="link link-hover">Google</a>
          <a className="link link-hover">Asus</a>
        </nav>
        <nav>
          <header className="footer-title">Navigation</header>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Add Product</a>
          <a className="link link-hover">My Cart</a>
          <a className="link link-hover">Login</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
