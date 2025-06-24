import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Rating from "react-rating";

const CategoryProducts = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const encodedCategory = encodeURIComponent(categoryName);
    fetch(`https://b2b-server-three.vercel.app/products?category=${encodedCategory}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, [categoryName]);

  return (
    <div className="max-w-7xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Products in {categoryName}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={product._id || index}
            className="border p-4 rounded shadow hover:shadow-md"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover mb-3 rounded"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p>Brand: {product.brand}</p>
            <p>Min Quantity: {product.minQty}</p>
            <p>Price: ${product.price}</p>
            <div className="flex items-center gap-2 mt-1">
              <Rating
                initialRating={product.rating}
                readonly
                emptySymbol={<span className="text-gray-300 text-xl">☆</span>}
                fullSymbol={<span className="text-yellow-400 text-xl">★</span>}
              />
              <span className="text-sm text-gray-600">({product.rating})</span>
            </div>
            <p className="text-sm mt-2">{product.description}</p>
            <button
              onClick={() => navigate(`/product-details/${product._id}`)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
