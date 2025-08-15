import { Link } from "react-router-dom";

const Showfeaturesdata = ({ data }) => {
  const { id, description, title, category, img, price } = data;

  return (
    <div>
      <div
        className="card h-full bg-base-100 shadow-xl border border-transparent
                   md:hover:border-purple-500 md:hover:shadow-2xl
                   transform transition-all duration-500 ease-in-out rounded-xl
                   active:scale-95 active:shadow-lg" // <-- mobile tap effect
      >
        <figure>
          <img
            className="mt-4 rounded-t-xl transition-transform duration-500 ease-in-out
                       md:hover:scale-105" // hover scale on desktop
            src={img}
            alt={title}
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title text-purple-600">{category}</h2>
          <p>{description}</p>

          <div className="card-actions items-center justify-between">
            <p className="text-lg font-semibold text-green-600">Price: {price}</p>
            <Link to="/login">
              <button
                className="relative px-3 py-1 rounded-md overflow-hidden border-2 border-purple-500 text-purple-600 font-semibold transition-all duration-500
                           md:hover:text-white md:hover:bg-purple-500
                           before:absolute before:inset-0 before:border-2 before:border-purple-500 before:translate-x-[-100%] before:transition-transform before:duration-500 md:hover:before:translate-x-0
                           active:scale-95 active:shadow"
              >
                Buy Now
              </button>
            </Link>
          </div>

          <Link to={`/feature/${id}`}>
            <button
              className="relative btn w-full btn-success mt-6 overflow-hidden border-2 border-green-500 text-white font-semibold transition-all duration-500
                         md:hover:bg-green-700
                         before:absolute before:inset-0 before:border-2 before:border-green-500 before:translate-x-[-100%] before:transition-transform before:duration-500 md:hover:before:translate-x-0
                         active:scale-95 active:shadow"
            >
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Showfeaturesdata;
