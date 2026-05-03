import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&h=500&fit=crop" },
    { name: "Fashion", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=500&fit=crop" },
    { name: "HouseWork", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=500&fit=crop" },
    { name: "Sports", image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500&h=500&fit=crop" },
    { name: "Book", image: "https://images.unsplash.com/photo-1495640388908-05f241071192?w=500&h=500&fit=crop" },
    { name: "Toys", image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=500&h=500&fit=crop" },
  ];
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
