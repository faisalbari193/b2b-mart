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
      delay: i * 0.5,
      duration: 0.6,
    },
  }),
};

const Banner = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-6">
      
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="rounded-b-2xl shadow-lg"
      >
        <SwiperSlide>
          <div
            className="rounded-2xl flex flex-col items-start justify-center min-h-[300px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/4N4pT0CH/modern-stationary-collection-arrangement.jpg')",
            }}
          >
            <motion.h2
              className="text-3xl font-bold mb-2 text-black bg-opacity-50 px-4 py-2 rounded"
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariant}
            >
              🔥 Super Discount: 50% OFF
            </motion.h2>
            <motion.p
              className="text-lg text-white bg-opacity-50 px-4 py-2 rounded"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariant}
            >
              On all Electronics Devices – limited time offer!
            </motion.p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="p-10 rounded-2xl flex flex-col items-start justify-center min-h-[300px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/qMXhgxrV/summer-sale-promotion-discount-concept.jpg')",
            }}
          >
            <motion.h2
              className="text-3xl font-bold mb-2 text-black bg-opacity-50 px-4 py-2 rounded"
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariant}
            >
              🌿 Summer Sale: Buy 1 Get 1 Free
            </motion.h2>
            <motion.p
              className="text-lg text-black bg-opacity-50 px-4 py-2 rounded"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariant}
            >
              Grab premium Products now and double your productivity work-load!
            </motion.p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="p-10 rounded-2xl flex flex-col items-start justify-center min-h-[300px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/zX1HJP9F/free-shipping-delivery-stamp-graphic-concept.jpg')",
            }}
          >
            <motion.h2
              className="text-3xl font-bold mb-2 text-black bg-opacity-50 px-4 py-2 rounded"
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariant}
            >
              🚛 Free Shipping
            </motion.h2>
            <motion.p
              className="text-lg text-black bg-opacity-50 px-4 py-2 rounded"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariant}
            >
              On all bulk orders above $100 – delivered to your door.
            </motion.p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
