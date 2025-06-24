import React, { useEffect, useState } from "react";

const CategoryCards = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://b2b-server-three.vercel.app/all-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => {
        console.error("Failed to fetch categories:", error);
      });
  }, []);

  return (
    <>
      <div className="bg-gradient-to-b from-orange-100 via-yellow-300 to-white bg-opacity-90">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">
            Browse Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="bg-white border shadow-sm p-4 flex flex-col items-center rounded-lg hover:shadow-lg transition"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-16 h-16 mb-3 object-contain"
                />
                <h3 className="text-lg font-medium text-gray-700 text-center">
                  {cat.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryCards;
