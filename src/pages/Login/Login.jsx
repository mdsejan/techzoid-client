import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { ThemeContext } from "../../provider/ThemeProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { googleSignIn, signInUser, loading, setLoading } =
    useContext(ThemeContext);
  console.log(loading);

  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        setLoading(false);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sign-in Successful! Welcome back!",
          showConfirmButton: false,
          timer: 2500,
        });

        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setLoading(false);
        Swal.fire({
          position: "center",
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 2500,
        });
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        setLoading(false);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sign-in Successful! Welcome back!",
          showConfirmButton: false,
          timer: 2500,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setLoading(false);
        Swal.fire({
          position: "center",
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 2500,
        });
      });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="min-h-screen px-5 flex items-center justify-center ">
      <div className="bg-white dark-bg-yellow p-8 rounded-lg shadow-sm border w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <div className="text-center">
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full mt-4 capitalize font-bold text-black"
          >
            <img
              className="w-4"
              src="https://i.ibb.co/HpLpWjn/google.png"
              alt="google"
            />
            <span>Login With Google</span>
          </button>
          <div className="divider my-10">OR</div>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <button
                type="button"
                id="togglePassword"
                className="text-gray-400 focus:outline-none"
                onClick={togglePassword}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-xl mt-7"></FaEyeSlash>
                ) : (
                  <FaEye className="text-xl mt-7"></FaEye>
                )}
              </button>
            </div>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="flex items-center justify-center w-full text-white py-2 px-4 rounded-lg bg-[#F7C54C] hover:bg-[#ca9a2a] focus:outline-none"
            >
              Login
              {loading ? (
                <span className="loading loading-spinner loading-sm ml-3"></span>
              ) : (
                ""
              )}
            </button>
          </div>
        </form>
        <div>
          <p className="mt-8 text-md">
            New to this website? Please &nbsp;
            <Link to="/register" className="text-[#d8a93c] font-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
