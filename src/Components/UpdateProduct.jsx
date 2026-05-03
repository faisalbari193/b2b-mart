import React, { useEffect, useState, use } from "react";
import { useParams, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const { user } = use(AuthContext);
  useEffect(() => {
    if (!user?.email) {
      navigate("/login");
    }
    fetch(`https://b2b-server-three.vercel.app/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
    fetch("https://b2b-server-three.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, [id, user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedProduct = {
      image: form.image.value,
      name: form.name.value,
      brand: form.brand.value,
      categoryName: form.category.value,
      rating: parseFloat(form.rating.value),
      description: form.description.value,
      quantity: parseInt(form.quantity.value),
      minQty: parseInt(form.minQty.value),
    };

    fetch(`https://b2b-server-three.vercel.app/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Product updated successfully!");
        navigate("/products");
      });
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Update Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Image</label>
          <input
            type="text"
            name="image"
            defaultValue={product.image}
            placeholder="Image URL"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            defaultValue={product.name}
            placeholder="Product Name"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Brand Name</label>
          <input
            type="text"
            name="brand"
            defaultValue={product.brand}
            placeholder="Brand Name"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Category</label>
          <select
            name="category"
            defaultValue={product.categoryName}
            className="w-full p-2 border rounded"
          >
            {categories.map((cat) => (
              <option key={cat._id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-medium mb-1">Rating</label>
          <input
            type="number"
            name="rating"
            step="0.1"
            max={5}
            min={1}
            defaultValue={product.rating}
            placeholder="Rating"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            defaultValue={product.description}
            placeholder="Description"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Main Quantity</label>
          <input
            type="number"
            name="quantity"
            defaultValue={product.quantity}
            placeholder="Total Quantity"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">
            Minimum Selling Quantity
          </label>
          <input
            type="number"
            name="minQty"
            defaultValue={product.minQty}
            placeholder="Minimum Selling Quantity"
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
