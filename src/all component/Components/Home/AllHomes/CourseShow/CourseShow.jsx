import { Link } from "react-router-dom";
import { useState } from "react";

const CourseShow = ({ propsData }) => {
  const { img, category, price, description } = propsData;

  // Optional: track hover for tilt effect
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // cursor X
    const y = e.clientY - rect.top; // cursor Y
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    // max tilt 10deg
    const maxTilt = 10;
    setRotateY(((x - midX) / midX) * maxTilt);
    setRotateX(-((y - midY) / midY) * maxTilt);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="perspective">
      <div
        className="card w-full h-full bg-white rounded-3xl shadow-lg overflow-hidden
                   transform transition-all duration-500 hover:shadow-2xl active:scale-95 active:shadow-lg"
        style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Image with hover zoom */}
        <figure className="overflow-hidden rounded-t-3xl">
          <img
            src={img}
            alt={category}
            className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
          />
        </figure>

        {/* Card content */}
        <div className="card-body p-6 flex flex-col justify-between gap-4">
          <h2 className="card-title text-xl font-bold text-purple-700">{category}</h2>
          <p className="text-gray-700 line-clamp-3">{description}</p>

          <div className="flex justify-between items-center mt-4">
            <p className="text-lg font-semibold text-green-600">${price}</p>

            <Link to="/login">
              <button
                className="relative px-5 py-2 rounded-lg overflow-hidden text-white font-semibold
                           bg-gradient-to-r from-purple-500 to-purple-700
                           shadow-lg transition-all duration-500
                           hover:scale-105 hover:shadow-2xl
                           before:absolute before:inset-0 before:border-2 before:border-white before:translate-x-[-100%] before:transition-transform before:duration-500 hover:before:translate-x-0
                           active:scale-95 active:shadow"
              >
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseShow;
