import { useEffect, useState } from "react";
import ShowMainStored from "./ShowMainStored/ShowMainStored";
import { motion } from "framer-motion";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";  // ✅ এটা ঠিকভাবে নিতে হবে
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
 
const Store = () => {
  const [store, setStore] = useState([]);
   const [hover, setHover] = useState(false);

  useEffect(() => {
    fetch("/Storedmain.json")
      .then((res) => res.json())
      .then((data) => setStore(data));
  }, []);

  const bgImages = [
    "https://i.ibb.co.com/RkRSg4B7/main-store.png",
    
    "https://i.ibb.co.com/h1Lq8mSd/storebg.png",
  ];

  return (
    <div className="bg-white">

      {/* ===== Background Slider ===== */}
      <div className="relative mb-1 md:mb-16 bg-orange-100">
         

        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          effect="fade"
          pagination={{ clickable: true }}
          className="hero min-h-[60vh] md:h-[330px] relative"
        >
          {bgImages.map((bg, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-full w-full bg-cover bg-center relative"
                style={{ backgroundImage: `url(${bg})` }}
              >
                {/* gradient overlay for better visibility */}
                <div className="absolute  bg-black/40"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ===== Courses Grid ===== */}
    <h1 
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontSize: '3rem',
        fontWeight: 800,
        textAlign: 'center',
        background: 'linear-gradient(270deg, #22c55e, #3b82f6, #8b5cf6)',
        backgroundSize: '600% 600%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: 'gradientMove 5s ease infinite',
        textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
        transform: hover ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.3s ease'
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

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 px-6 bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50 pb-16"
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
