import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { ThemeContext } from "../../provider/ThemeProvider";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { brands } = useContext(ThemeContext);
  const [productinfo, setProductInfo] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://techzoid-server.vercel.app/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProductInfo(data));
  }, [id]);

  const { name, image, price, shortDescription, brand, category, rating } =
    productinfo;

  console.log(name);

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

    fetch(`https://techzoid-server.vercel.app/products/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ProductDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Product Updated Successfully",
            showConfirmButton: false,
            timer: 3000,
          });
        }
      });
  };
  return (
    <section className="max-w-screen-2xl mx-auto px-5 py-6 md:py-0 lg:py-16">
      <div className="flex flex-col justify-center items-center min-h-screen mx-3 md:mx-8">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-4 max-w-screen-lg bg-[#FDF9EE] md:p-24">
            <div className="w-full mt-12 md:mt-0 mb-16  text-center">
              <h1 className="text-4xl font-semibold mt-3">Update Product</h1>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <label className="block  text-left text-gray-600 font-medium text-md mb-2 mt-8">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                name="name"
                type="text"
                placeholder="Name"
                defaultValue={name}
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <label className="block  text-left text-gray-600 font-medium text-md mb-2 mt-8">
                Image Link
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="image"
                type="text"
                placeholder="Image Link"
                defaultValue={image}
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <label className="block  text-left text-gray-600 font-medium text-md mb-2 mt-8">
                Brand Name
              </label>
              <select
                name="brand"
                className="border border-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full p-2.5 "
                defaultValue={brand}
                required
              >
                <option value="">Choose a brand</option>
                {brands.map((brand) => (
                  <option key={brand._id} value={brand._id}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <label className="block  text-left text-gray-600 font-medium text-md mb-2 mt-8">
                Category
              </label>
              <select
                name="category"
                className=" border border-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full p-2.5"
                defaultValue={category}
                required
              >
                <option value="">Choose a category</option>
                <option value="Phone">Phone</option>
                <option value="Laptop">Laptop</option>
                <option value="Audio">Audio</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <label className="block  text-left text-gray-600 font-medium text-md mb-2 mt-8">
                Rating
              </label>
              <select
                name="rating"
                className=" border border-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full p-2.5"
                defaultValue={rating}
                required
              >
                <option value="">Choose Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <label className="block  text-left text-gray-600 font-medium text-md mb-2 mt-8">
                Price
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="price"
                type="number"
                placeholder="Price"
                defaultValue={price}
                required
              />
            </div>
            <div className="w-full px-4">
              <label className="block text-left text-gray-600 font-medium text-md mb-2 mt-8">
                Short Description
              </label>

              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="shortDescription"
                rows="4"
                placeholder="Short Description"
                defaultValue={shortDescription}
                required
              ></textarea>
            </div>
            <div className="flex justify-center w-full px-4 mt-12 mb-12 md:mb-0">
              <button
                className="bg-[#e7b642] hover:bg-[#ca9a2a] text-white font-light w-2/3 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateProduct;
