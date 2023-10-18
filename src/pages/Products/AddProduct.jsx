const AddProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const brand = e.target.brand.value;
    const category = e.target.category.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const shortDescription = e.target.shortDescription.value;

    const ProductDetails = {
      name,
      image,
      brand,
      category,
      price,
      rating,
      shortDescription,
    };

    console.log(ProductDetails);

    // fetch("https://coffee-store-server-theta.vercel.app/coffees", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(ProductDetails),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  };
  return (
    <section className="max-w-screen-2xl mx-auto px-5 py-6 lg:py-16">
      <div className="flex flex-col justify-center items-center min-h-screen mx-3 md:mx-8">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-4 max-w-screen-lg bg-[#FDF9EE] md:p-24">
            <div className="w-full mb-16 text-center">
              <h1 className="text-4xl font-bold mt-3">Add Product</h1>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <label className="block  text-left text-gray-600 font-bold text-md mb-2 mt-8">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                name="name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <label className="block  text-left text-gray-600 font-bold text-md mb-2 mt-8">
                Image Link
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="image"
                type="text"
                placeholder="Image Link"
              />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <label className="block  text-left text-gray-600 font-bold text-md mb-2 mt-8">
                Brand Name
              </label>
              <select
                name="brand"
                required
                className="border border-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full p-2.5 "
              >
                <option disabled selected>
                  Choose a brand
                </option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Google">Google</option>
                <option value="Asus">Asus</option>
                <option value="Sony">Sony</option>
                <option value="Realme">Realme</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <label className="block  text-left text-gray-600 font-bold text-md mb-2 mt-8">
                Category
              </label>
              <select
                name="category"
                className=" border border-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full p-2.5"
              >
                <option disabled selected>
                  Choose a category
                </option>
                <option value="Phone">Phone</option>
                <option value="Laptop">Laptop</option>
                <option value="Audio">Audio</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <label className="block  text-left text-gray-600 font-bold text-md mb-2 mt-8">
                Price
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="price"
                type="text"
                placeholder="Price"
              />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <label className="block  text-left text-gray-600 font-bold text-md mb-2 mt-8">
                Rating
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="rating"
                type="text"
                placeholder="Rating"
              />
            </div>
            <div className="w-full px-4">
              <label className="block text-left text-gray-600 font-bold text-md mb-2 mt-8">
                Short Description
              </label>

              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="shortDescription"
                rows="4"
                placeholder="Short Description"
              ></textarea>
            </div>
            <div className="flex justify-center w-full px-4 mt-12">
              <button
                className="bg-[#e7b642] hover:bg-[#ca9a2a] text-white font-bold w-2/3 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
