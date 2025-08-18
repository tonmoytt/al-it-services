import React from "react";
import { motion } from "framer-motion";
import {
  FaTrophy,
  FaTasks,
  FaUserFriends,
  FaChartLine,
  FaRocket,
  FaMedal,
  FaGamepad,
  FaGift,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";
import "./style.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";



const Challange = () => {

   const bgImages = [
    "https://i.ibb.co.com/VWgtj6gz/bgstudy.jpg",
    
    "https://i.ibb.co.com/mrCVNy8F/learning-flow-bg.png",
  ];
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-800 overflow-hidden">
    
    {/* bg */}
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




      {/* Animated Floating Dots Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 60 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 bg-purple-300 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 12}s`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="text-center py-4 md:py-24 px-6">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-6xl font-extrabold text-purple-700 drop-shadow-lg"
          >
            🚀 Take on the Challenge
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
          >
            Test your skills with daily coding challenges, climb the leaderboard,
            unlock rewards, and push yourself to the next level!
          </motion.p>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-20 py-6 md:py-20">
          {[
            {
              icon: <FaTrophy className="text-yellow-500 text-5xl" />,
              title: "Daily Challenges",
              desc: "Solve exciting problems every day to sharpen your skills.",
            },
            {
              icon: <FaTasks className="text-blue-500 text-5xl" />,
              title: "Track Progress",
              desc: "Monitor your journey and celebrate milestones.",
            },
            {
              icon: <FaUserFriends className="text-green-500 text-5xl" />,
              title: "Compete With Friends",
              desc: "Join competitions and stay motivated together.",
            },
            {
              icon: <FaChartLine className="text-purple-600 text-5xl" />,
              title: "Climb Leaderboards",
              desc: "Rise through the ranks by completing more challenges.",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* Challenge Modes */}
        <section className="px-6 md:px-20 py-20 bg-gradient-to-r from-purple-100 to-blue-100 rounded-3xl mx-4 md:mx-20 shadow-lg">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-12">
            🎮 Challenge Modes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaGamepad className="text-indigo-600 text-5xl" />,
                title: "Easy Mode",
                desc: "Perfect for beginners to build consistency.",
              },
              {
                icon: <FaMedal className="text-yellow-600 text-5xl" />,
                title: "Pro Mode",
                desc: "For advanced coders who love tough problems.",
              },
              {
                icon: <FaRocket className="text-red-500 text-5xl" />,
                title: "Speed Run",
                desc: "Solve problems under time pressure!",
              },
            ].map((mode, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <div className="mb-4 flex justify-center">{mode.icon}</div>
                <h3 className="text-xl font-bold mb-2">{mode.title}</h3>
                <p className="text-gray-600">{mode.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Progress Section */}
        <section className="px-8 py-20 bg-gradient-to-r from-blue-100 to-blue-200 text-center rounded-2xl mx-4 md:mx-20 shadow-xl mt-14 md:mt-20">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">
            Track Your Progress 📊
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { label: "HTML & CSS", value: "80%" },
              { label: "JavaScript", value: "65%" },
              { label: "React.js", value: "50%" },
              { label: "Node.js", value: "40%" },
            ].map((item, idx) => (
              <div key={idx} className="text-left">
                <div className="flex justify-between mb-1">
                  <span className="font-semibold text-gray-700">
                    {item.label}
                  </span>
                  <span className="text-gray-600">{item.value}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    className="bg-blue-600 h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: item.value }}
                    transition={{ duration: 1.2 }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Leaderboard */}
        <section className="px-6 md:px-20 py-20">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
            Leaderboard 🏆
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Alice", "John", "Sophia"].map((name, idx) => (
              <motion.div
                key={idx}
                className="bg-white shadow-lg p-8 rounded-2xl text-center hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
              >
                <FaRocket className="text-4xl text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="text-gray-600">Rank #{idx + 1}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Rewards Section */}
        <section className="px-6 md:px-20 py-20 bg-gradient-to-r from-pink-100 to-yellow-100 rounded-3xl mx-4 md:mx-20 shadow-lg">
          <h2 className="text-3xl font-bold text-center text-pink-700 mb-12">
            🎁 Rewards & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaMedal className="text-yellow-500 text-5xl" />,
                title: "Badges",
                desc: "Collect special badges as you progress.",
              },
              {
                icon: <FaGift className="text-pink-500 text-5xl" />,
                title: "Unlock Rewards",
                desc: "Exclusive gifts for milestone completions.",
              },
              {
                icon: <FaTrophy className="text-blue-600 text-5xl" />,
                title: "Hall of Fame",
                desc: "Get featured among top achievers!",
              },
            ].map((reward, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <div className="mb-4 flex justify-center">{reward.icon}</div>
                <h3 className="text-xl font-bold mb-2">{reward.title}</h3>
                <p className="text-gray-600">{reward.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* How it Works */}
        <section className="px-6 md:px-20 mt-10 md:mt-1 py-10 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-12 text-purple-700">
            🛠️ How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Pick a Challenge",
                desc: "Choose from different levels daily.",
              },
              {
                step: "2",
                title: "Solve & Submit",
                desc: "Code your solution and submit instantly.",
              },
              {
                step: "3",
                title: "Earn Rewards",
                desc: "Unlock badges & climb the leaderboard.",
              },
            ].map((s, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <div className="text-4xl font-bold text-purple-600 mb-4">
                  {s.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-10 md:py-24 text-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-6 md:px-12 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-base md:text-xl font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Start Your First Challenge 🌟
          </motion.button>
        </section>

        {/* Highlight Section */}
     <section className="relative px-6 md:px-20 py-24 bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 text-white text-center rounded-3xl mx-4 md:mx-20 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mb-24 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-40"></div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-4xl md:text-5xl font-extrabold drop-shadow-lg"
      >
        💡 Why Join <span className="text-yellow-300">Challenges?</span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-200 opacity-95 leading-relaxed"
      >
        Because learning is fun when it feels like a game! <br />
        Build <span className="text-yellow-300 font-semibold">consistency</span>, 
        strengthen <span className="text-pink-300 font-semibold">problem-solving</span>, 
        and unlock <span className="text-green-300 font-semibold">achievements</span> while 
        growing step by step 🚀.
      </motion.p>

      {/* Feature Cards */}
      <div className="mt-14 grid md:grid-cols-4 gap-8 relative z-10">
        {[
          { icon: <FaLightbulb size={40} />, title: "Creative Thinking", desc: "Sharpen your problem-solving & innovative mindset." },
          { icon: <FaMedal size={40} />, title: "Earn Rewards", desc: "Unlock badges, certificates, & recognition." },
          { icon: <FaRocket size={40} />, title: "Fast Growth", desc: "Boost your skills rapidly with daily practice." },
          { icon: <FaUsers size={40} />, title: "Community", desc: "Join a network of learners & share progress." },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.7 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:scale-105 transition-transform shadow-lg border border-white/20"
          >
            <div className="flex justify-center text-yellow-300 mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm opacity-80">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
      </div>
    </div>
  );
};

export default Challange;
