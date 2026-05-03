import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Rating from "react-rating";
import productData from "../../json/productcategory.json";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [view, setView] = useState("card");
  const navigate = useNavigate();

  useEffect(() => {
    setProducts(productData);
  }, []);

  const displayedProducts = filtered
    ? products.filter((p) => p.minQty > 100)
    : products;

  return (
    <>
      <title> All Products</title>
      <div className="min-h-screen bg-gradient-to-br from-white via-yellow-50 to-orange-100 px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-orange-700">All Products</h2>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setFiltered(!filtered)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                {filtered ? "Show All Products" : "Show Available Products"}
              </button>
              <select
                value={view}
                onChange={(e) => setView(e.target.value)}
                className="border px-3 py-2 rounded"
              >
                <option value="card">Card View</option>
                <option value="table">Table View</option>
              </select>
            </div>
          </div>

          {view === "card" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedProducts.map((product) => (
                <div
                  key={product._id}
                  className="bg-white border rounded-lg shadow-md hover:shadow-lg transition p-4"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded mb-3"
                  />
                  <h3 className="text-lg font-semibold text-orange-800">
                    {product.name}
                  </h3>
                  <p>Brand: {product.brand}</p>
                  <p>Category: {product.categoryName}</p>
                  <p>Quantity: {product.quantity}</p>
                  <p>Minimum Order: {product.minQty}</p>
                  <p>Price: ${product.price}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Rating
                      initialRating={product.rating}
                      readonly
                      emptySymbol={
                        <span className="text-gray-300 text-xl">☆</span>
                      }
                      fullSymbol={
                        <span className="text-yellow-400 text-xl">★</span>
                      }
                    />
                    <span className="text-sm text-gray-600">
                      ({product.rating})
                    </span>
                  </div>
                  <p className="text-sm mt-2 text-gray-700">
                    {product.description}
                  </p>

                  <button
                    onClick={() => navigate(`/update-product/${product._id}`)}
                    className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                  >
                    Update
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto bg-white border rounded shadow-md">
              <table className="w-full text-sm text-left">
                <thead className="bg-orange-100 text-orange-800">
                  <tr>
                    <th className="px-4 py-2">Image</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Brand</th>
                    <th className="px-4 py-2">Category</th>
                    <th className="px-4 py-2">Qty</th>
                    <th className="px-4 py-2">Min Order</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Rating</th>
                    <th className="px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {displayedProducts.map((product) => (
                    <tr
                      key={product._id}
                      className="border-t hover:bg-orange-50"
                    >
                      <td className="px-4 py-2">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-12 object-cover rounded"
                        />
                      </td>
                      <td className="px-4 py-2">{product.name}</td>
                      <td className="px-4 py-2">{product.brand}</td>
                      <td className="px-4 py-2">{product.categoryName}</td>
                      <td className="px-4 py-2">{product.quantity}</td>
                      <td className="px-4 py-2">{product.minQty}</td>
                      <td className="px-4 py-2">${product.price}</td>
                      <td className="px-4 py-2">{product.rating}</td>
                      <td className="px-4 py-2">
                        <button
                          onClick={() =>
                            navigate(`/update-product/${product._id}`)
                          }
                          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                        >
                          Update
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
