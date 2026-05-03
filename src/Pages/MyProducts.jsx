import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [myProds, setMyProds] = useState([]);
  const [view, setView] = useState("card"); // card or table
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.uid) return navigate("/login");
    fetch(`https://b2b-server-three.vercel.app/my-products/${user.uid}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setMyProds(data);
        } else {
          console.error("Expected array but got:", data);
          setMyProds([]);
        }
      })
      .catch(() =>
        Swal.fire({ icon: "error", title: "Failed to get your products" })
      );
  }, [user, navigate]);

  if (!user?.email) return null;

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">My Added Products</h2>
        <select
          value={view}
          onChange={(e) => setView(e.target.value)}
          className="border rounded px-3 py-1 bg-white shadow"
        >
          <option value="card">Card View</option>
          <option value="table">Table View</option>
        </select>
      </div>

      {myProds.length === 0 ? (
        <p>No products added yet.</p>
      ) : view === "card" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myProds.map((p) => (
            <div
              key={p._id}
              className="border p-4 rounded shadow hover:shadow-md"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-48 object-cover rounded mb-3"
              />
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p>
                <strong>Brand:</strong> {p.brand}
              </p>
              <p>
                <strong>Category:</strong> {p.categoryName}
              </p>
              <p>
                <strong>Qty:</strong> {p.quantity}
              </p>
              <p>
                <strong>Min Order:</strong> {p.minQty}
              </p>
              <p className="text-sm mt-2">{p.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Image</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Brand</th>
                <th className="border px-4 py-2">Category</th>
                <th className="border px-4 py-2">Quantity</th>
                <th className="border px-4 py-2">Min Qty</th>
                <th className="border px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {myProds.map((p) => (
                <tr key={p._id}>
                  <td className="border px-4 py-2">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-20 h-12 object-cover"
                    />
                  </td>
                  <td className="border px-4 py-2">{p.name}</td>
                  <td className="border px-4 py-2">{p.brand}</td>
                  <td className="border px-4 py-2">{p.categoryName}</td>
                  <td className="border px-4 py-2">{p.quantity}</td>
                  <td className="border px-4 py-2">{p.minQty}</td>
                  <td className="border px-4 py-2">{p.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyProducts;
