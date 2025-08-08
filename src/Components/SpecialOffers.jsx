import React from "react";

const specialProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "৳1200",
    image:
      "https://i.postimg.cc/k5FsM5f8/Joyroom-JR-OH1-Bluetooth-Wireless-Headphones-4.jpg", // Headphones
    offer: "20% OFF",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "৳2500",
    image:
      "https://i.postimg.cc/FHSGqpST/t-I5k-Ju-Hsemp-Vg7oa-Vi-JGHEj-V5-Adm-Fb-S8-UUx6vzal.webp", // Smart Watch
    offer: "15% OFF",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: "৳800",
    image:
      "https://i.postimg.cc/hGqMqmbc/hoco-31w-super-bass-waterproof-sports-bluetooth-speaker-2.webp", // Bluetooth Speaker (accurate)
    offer: "10% OFF",
  },
  {
    id: 4,
    name: "Fitness Tracker",
    price: "৳1800",
    image:
      "https://i.postimg.cc/tCw22ws1/Fitbit-Charge-6-Fitness-Tracker-with-Google-apps-black.jpg", // Fitness Tracker (accurate)
    offer: "25% OFF",
  },
  {
    id: 5,
    name: "Portable Charger",
    price: "৳650",
    image: "https://i.postimg.cc/dtL5RwVP/71-NVBNr-F1p-L-UF894-1000-QL80.jpg", // Power Bank
    offer: "18% OFF",
  },
];

const fadeInStyle = {
  animation: "fadeIn 1s ease",
};

const SpecialOffers = () => (
  <section className="py-10 px-4">
    <style>
      {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}
    </style>
    <h2 className="text-3xl font-bold text-center mb-6 text-orange-600 drop-shadow-lg">
      🔥 Special Offers 🔥
    </h2>
    <div className="flex flex-row gap-8 justify-center items-center w-full overflow-x-auto pb-4">
      {specialProducts.map((product, idx) => (
        <div
          key={product.id}
          style={{ ...fadeInStyle, animationDelay: `${idx * 0.1}s` }}
          className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 w-64 min-w-64 relative overflow-hidden border border-yellow-200 flex-shrink-0"
        >
          <span className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow">
            {product.offer}
          </span>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-36 object-cover rounded-t-xl"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {product.name}
            </h3>
            <p className="text-base font-bold text-yellow-600 mb-2">
              {product.price}
            </p>
            {/* <button className="bg-orange-400 text-white px-3 py-1 rounded font-medium shadow hover:bg-orange-500 transition-colors duration-200">
              Buy Now
            </button> */}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SpecialOffers;
