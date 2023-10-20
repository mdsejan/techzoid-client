const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-[#F7C54C] mb-4">
          404 Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          The page you are looking for does not exist.
        </p>
        <p className="text-lg text-gray-600">
          Return &nbsp;
          <a href="/" className="text-blue-500 hover:underline font-semibold">
            Home
          </a>
        </p>
      </div>
    </div>
  );
};

export default Error;
