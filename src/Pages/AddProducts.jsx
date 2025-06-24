import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";

const AddProducts = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user?.email) {
    navigate("/login");
    return null;
  }

  const [formData, setFormData] = useState({
    createdBy: user?.uid,
    image: "",
    name: "",
    quantity: "",
    minQty: "",
    brand: "",
    categoryName: "Electronics",
    description: "",
    content: "",
    price: "",
    rating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmpty = Object.values(formData).some((value) => value === "");
    if (isEmpty) {
      Swal.fire({
        icon: "warning",
        title: "All fields are required!",
        text: "Please fill in all the fields before submitting.",
      });
      return;
    }
    fetch("https://b2b-server-three.vercel.app/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Product added successfully!",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/products");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Something went wrong!",
          text: err.message,
        });
      });
  };

  return (
    <>
      <title>Add Products</title>
      <div className="bg-gradient-to-b from-orange-100 via-yellow-300 to-white bg-opacity-90 min-h-screen py-10">
        <div className="max-w-4xl mx-auto px-6 py-12 bg-blue-50 rounded-lg shadow-md">
          <h2 className="text-4xl text-center font-bold mb-8 text-blue-700 drop-shadow-md">
            🛒 Add New Product
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { label: "Image URL", name: "image", type: "text" },
              { label: "Product Name", name: "name", type: "text" },
              { label: "Main Quantity", name: "quantity", type: "number" },
              {
                label: "Minimum Selling Quantity",
                name: "minQty",
                type: "number",
              },
              { label: "Brand Name", name: "brand", type: "text" },
              { label: "Price (per unit)", name: "price", type: "number" },
              {
                label: "Rating (1-5)",
                name: "rating",
                type: "number",
                min: 1,
                max: 5,
                step: 0.1,
              },
            ].map(({ label, name, type, ...rest }) => (
              <div key={name}>
                <label className="block font-semibold text-gray-700 mb-1">
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  onChange={handleChange}
                  {...rest}
                  className="w-full p-3 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            ))}

            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Category
              </label>
              <select
                name="categoryName"
                onChange={handleChange}
                className="w-full p-3 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option>Electronics</option>
                <option>Fashion</option>
                <option>HouseWork</option>
                <option>Sports</option>
                <option>Book</option>
                <option>Toys</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Short Description
              </label>
              <textarea
                name="description"
                onChange={handleChange}
                className="w-full p-3 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Product Content
              </label>
              <textarea
                name="content"
                onChange={handleChange}
                className="w-full p-3 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded shadow-md hover:bg-blue-700 transition duration-200"
            >
              ➕ Add Product
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProducts;
