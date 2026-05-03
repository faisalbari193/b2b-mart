import React, { useEffect, useState, use } from "react";
import { useParams, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";
import productData from "../../json/productcategory.json";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    const foundProduct = productData.find((p) => p._id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      setProduct(null);
    }
  }, [id]);

  const handleBuy = () => {
    if (quantity < product.minQty) {
      Swal.fire({
        icon: "error",
        title: "Minimum Quantity Required",
        text: `You must buy at least ${product.minQty} items.`,
      });
      return;
    }

    if (quantity > product.quantity) {
      Swal.fire({
        icon: "error",
        title: "Insufficient Stock",
        text: `Only ${product.quantity} items available in stock.`,
      });
      return;
    }

    // Mock Add to Cart
    setTimeout(() => {
      Swal.fire({
        icon: "success",
        title: "Added to Cart!",
      });
      setShowModal(false);
      setProduct((prev) => ({
        ...prev,
        quantity: prev.quantity - quantity,
      }));
      setQuantity(1);
    }, 500);
  };

  if (!user?.email) {
    navigate("/login");
    return null;
  }

  if (!product) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded"
      />
      <p className="mt-3">Brand: {product.brand}</p>
      <p>Price: ${product.price}</p>
      <p>Min Quantity: {product.minQty}</p>
      <p>Description: {product.description}</p>
      <button
        className="mt-5 px-4 py-2 bg-green-600 text-white rounded"
        onClick={() => setShowModal(true)}
      >
        Buy
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded w-96 relative">
            <h3 className="text-xl font-bold mb-4">Checkout</h3>
            <p>Name: {user.displayName}</p>
            <p>Email: {user.email}</p>
            <p>Product: {product.name}</p>
            <div className="flex items-center gap-2 mt-2">
              <button
                className="bg-red-500 px-2 py-1 text-white rounded"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="bg-green-500 px-2 py-1 text-white rounded"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>
            <button
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded"
              onClick={handleBuy}
            >
              Confirm Purchase
            </button>
            <button
              className="absolute top-2 right-2 text-gray-600 btn"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
