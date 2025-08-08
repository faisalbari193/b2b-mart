import React from "react";

const upcomingProducts = [
  {
    id: 1,
    name: "Smart Home Camera",
    release: "Coming Sep 2025",
    image: "https://i.postimg.cc/hjJ5Dd3j/a9faa96e2f3f8fed4023eab9685ef96d.jpg",
  },
  {
    id: 2,
    name: "Wireless Earbuds Pro",
    release: "Coming Oct 2025",
    image:
      "https://i.postimg.cc/4x5MBZ9J/Wireless-Earbuds-Bluetooth-Headset-Microphone-Touch-Control-IPX7-Waterproof-High-Fidelity-Stereo-Ear.webp",
  },
  {
    id: 3,
    name: "Fitness Smart Scale",
    release: "Coming Nov 2025",
    image: "https://i.postimg.cc/y6MwNLKz/T9149111-TD01-V1.webp",
  },
  {
    id: 4,
    name: "Portable Mini Projector",
    release: "Coming Dec 2025",
    image: "https://i.postimg.cc/521TBjj7/618klqn-YCGL-AC-SL1500.jpg",
  },
  {
    id: 5,
    name: "AI Voice Assistant Speaker",
    release: "Coming Jan 2026",
    image: "https://i.postimg.cc/SKgBNqSZ/rdg-J3son-Uft-K8-Sz-Ywf-VEuj.jpg",
  },
];

const fadeInStyle = {
  animation: "fadeIn 1s ease",
};

const UpcomingProducts = () => (
  <section className="py-10 px-4">
    <style>
      {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}
    </style>
    <h2 className="text-3xl font-bold text-center mb-6 text-blue-600 drop-shadow-lg">
      🚀 Upcoming Products 🚀
    </h2>
    <div className="flex flex-row gap-8 justify-center items-center w-full overflow-x-auto pb-4">
      {upcomingProducts.map((product, idx) => (
        <div
          key={product.id}
          style={{ ...fadeInStyle, animationDelay: `${idx * 0.1}s` }}
          className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 w-64 min-w-64 relative overflow-hidden border border-blue-200 flex-shrink-0"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-36 object-cover rounded-t-xl"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {product.name}
            </h3>
            <p className="text-base font-medium text-blue-600 mb-2">
              {product.release}
            </p>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold shadow">
              Upcoming
            </span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default UpcomingProducts;
