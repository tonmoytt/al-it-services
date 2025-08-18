import { useEffect, useState } from "react";
import ShowMainStored from "./ShowMainStored/ShowMainStored";
import { motion } from "framer-motion";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Store = () => {
  const [store, setStore] = useState([]);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    fetch("/Storedmain.json")
      .then((res) => res.json())
      .then((data) => setStore(data));
  }, []);

  const bgImages = [
    "https://i.ibb.co/RkRSg4B7/main-store.png",
    "https://i.ibb.co/h1Lq8mSd/storebg.png",
  ];

  return (
    <div className="bg-white w-full overflow-hidden">
      {/* ===== Background Slider ===== */}
      <div className="relative mb-6 w-full">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          effect="fade"
          pagination={{ clickable: true }}
          className="relative w-full"
        >
          {bgImages.map((bg, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-[250px] sm:h-[300px] md:h-[330px] lg:h-[400px] bg-cover bg-center relative"
                style={{ backgroundImage: `url(${bg})` }}
              >
                {/* gradient overlay */}
                <div className="absolute  bg-black/30"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ===== Heading ===== */}
      <h1 cla
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="hidden md:block text-center font-extrabold text-4xl sm:text-5xl md:text-6xl mb-12"
        style={{
          background: "linear-gradient(270deg, #22c55e, #3b82f6, #8b5cf6)",
          backgroundSize: "600% 600%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "gradientMove 5s ease infinite",
          textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
          transform: hover ? "scale(1.1)" : "scale(1)",
          transition: "transform 0.3s ease",
        }}
      >
        Choose One & Get Success
        <style>{`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </h1>

      {/* ===== Courses Grid ===== */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4 md:pt-12 px-6 bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50 pb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {store?.map((data2) => (
          <ShowMainStored key={data2.id} propsData={data2} />
        ))}
      </motion.div>
    </div>
  );
};

export default Store;
