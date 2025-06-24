import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://b2b-server-three.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error loading categories:", err));
  }, []);
  return (
    <div className="max-w-7xl mx-auto mt-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Product Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => navigate(`/category/${category.name}`)}
            className="bg-white rounded-xl shadow-md hover:shadow-xl p-4 cursor-pointer text-center transition-transform duration-200 hover:scale-105"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-32 object-cover rounded-md mb-3"
            />
            <h2 className="text-base md:text-lg font-semibold">
              {category.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
