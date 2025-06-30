import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const textVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.4,
      duration: 0.6,
    },
  }),
};

const slides = [
  {
    title: "🔥 Super Discount: 50% OFF",
    description: "On all Electronics Devices – limited time offer!",
    image:
      "https://i.postimg.cc/4N4pT0CH/modern-stationary-collection-arrangement.jpg",
  },
  {
    title: "🌿 Summer Sale: Buy 1 Get 1 Free",
    description:
      "Grab premium Products now and double your productivity work-load!",
    image:
      "https://i.postimg.cc/qMXhgxrV/summer-sale-promotion-discount-concept.jpg",
  },
  {
    title: "🚛 Free Shipping",
    description: "On all bulk orders above $100 – delivered to your door.",
    image:
      "https://i.postimg.cc/zX1HJP9F/free-shipping-delivery-stamp-graphic-concept.jpg",
  },
];

const Banner = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full h-[70vh]"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-full relative bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-0"></div>

              {/* Centered Text */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
                <motion.h2
                  className="text-2xl md:text-4xl font-bold text-white mb-4"
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={textVariant}
                >
                  {slide.title}
                </motion.h2>
                <motion.p
                  className="text-sm md:text-lg text-white"
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={textVariant}
                >
                  {slide.description}
                </motion.p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
