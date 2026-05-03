import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";
import productData from "../../json/productcategory.json";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [view, setView] = useState("card");

  useEffect(() => {
    if (user?.email) {
      // Mock cart items mapping to product IDs
      const demoCart = [
        { _id: "cart_01", productId: "prod_0001", quantity: 2 },
        { _id: "cart_02", productId: "prod_0005", quantity: 1 },
      ];
      setCartItems(demoCart);
    }
  }, [user?.email]);

  const handleRemove = (cartId) => {
    // Mock remove from cart
    Swal.fire({
      icon: "success",
      title: "Removed from Cart",
    });
    setCartItems((prev) => prev.filter((item) => item._id !== cartId));
  };

  if (!user?.email) {
    return (
      <p className="text-center mt-10 text-red-500">
        Please log in to view your cart.
      </p>
    );
  }

  return (
    <>
      <title>My Products</title>
      <div className="min-h-screen bg-gradient-to-tr from-orange-50 via-yellow-100 to-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-blue-800">
              🛒 My Purchased Products
            </h2>
            <select
              value={view}
              onChange={(e) => setView(e.target.value)}
              className="p-2 border rounded text-sm bg-white shadow"
            >
              <option value="card">Card View</option>
              <option value="table">Table View</option>
            </select>
          </div>

          {cartItems.length === 0 ? (
            <p className="text-gray-600">No products in your cart.</p>
          ) : view === "card" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cartItems.map((item) => (
                <CartCard
                  key={item._id}
                  item={item}
                  onRemove={handleRemove}
                  user={user}
                />
              ))}
            </div>
          ) : (
            <CartTable items={cartItems} onRemove={handleRemove} />
          )}
        </div>
      </div>
    </>
  );
};

const CartCard = ({ item, onRemove, user }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundProduct = productData.find(p => p._id === item.productId);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      console.error("Failed to fetch product");
    }
    setLoading(false);
  }, [item.productId, user]);

  const timestamp = parseInt(item._id.toString().substring(0, 8), 16) * 1000;
  const buyingDate = new Date(timestamp).toLocaleDateString();

  if (loading) {
    return (
      <div className="border rounded p-4 shadow animate-pulse text-center text-gray-500">
        Loading product...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="border rounded p-4 shadow text-center text-red-500">
        Failed to load product details.
      </div>
    );
  }

  return (
    <div className="border rounded-lg p-4 shadow bg-white">
      <img
        src={product.image || "/placeholder.jpg"}
        alt={product.name}
        className="w-full h-40 object-cover rounded mb-3"
      />
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p>Category: {product.categoryName}</p>
      <p>Brand: {product.brand}</p>
      <p>Buying Date: {buyingDate}</p>
      <p>Quantity Bought: {item.quantity}</p>
      <p>Minimum Order: {product.minQty}</p>
      <p className="text-sm mt-2 text-gray-700">{product.description}</p>
      <button
        onClick={() => onRemove(item._id)}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        Cancel Order
      </button>
    </div>
  );
};

const CartTable = ({ items, onRemove }) => {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllProducts = async () => {
      const productDataMap = {};
      items.forEach((item) => {
        const p = productData.find(prod => prod._id === item.productId);
        productDataMap[item._id] = p || null;
      });
      setProducts(productDataMap);
      setLoading(false);
    };

    fetchAllProducts();
  }, [items]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading table...</p>;
  }

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-100 text-gray-600">
          <tr>
            <th className="p-3 text-left">Image</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Brand</th>
            <th className="p-3 text-left">Bought Qty</th>
            <th className="p-3 text-left">Min Qty</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {items.map((item) => {
            const product = products[item._id];
            const date = new Date(
              parseInt(item._id.toString().substring(0, 8), 16) * 1000
            ).toLocaleDateString();

            return (
              <tr key={item._id}>
                <td className="p-3">
                  <img
                    src={product?.image || "/placeholder.jpg"}
                    alt={product?.name}
                    className="w-16 h-12 object-cover rounded"
                  />
                </td>
                <td className="p-3">{product?.name || "N/A"}</td>
                <td className="p-3">{product?.categoryName || "N/A"}</td>
                <td className="p-3">{product?.brand || "N/A"}</td>
                <td className="p-3">{item.quantity}</td>
                <td className="p-3">{product?.minQty || "N/A"}</td>
                <td className="p-3">{date}</td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => onRemove(item._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyCart;
