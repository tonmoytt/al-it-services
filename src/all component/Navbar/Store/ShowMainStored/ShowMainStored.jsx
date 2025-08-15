import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ShowMainStored = ({ propsData }) => {
  const { img, category, price, description } = propsData;

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      className="p-2"
    >
      <div className="card w-full h-full bg-white shadow-lg rounded-xl border border-gray-200 hover:border-purple-500 hover:shadow-2xl transition-all duration-500 overflow-hidden">
        <figure className="overflow-hidden rounded-t-xl">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            src={img}
            alt={category}
            className="w-full h-56 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-purple-600 font-bold text-xl">{category}</h2>
          <p className="text-gray-700 mt-2">{description}</p>
          <div className="card-actions items-center justify-between mt-4">
            <p className="text-lg font-semibold text-green-600">Price: {price}</p>
            <Link to="/login">
              <button className="relative px-4 py-1 rounded-md border-2 border-purple-500 text-purple-600 font-semibold transition-all duration-500 hover:text-white hover:bg-purple-500 overflow-hidden">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Example of multiple default sections
export const MainStoreSections = ({ data }) => {
  const defaultSections = ["Electronics", "Books", "Clothing", "Gadgets", "Accessories", "Toys"];

  return (
    <div className="bg-indigo-50 py-12 px-4 md:px-20 lg:px-32 space-y-16">
      {defaultSections.map((section, idx) => (
        <div key={idx}>
          <h2 className="text-3xl font-bold text-purple-700 mb-6">{section}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data
              .filter(item => item.category === section)
              .map((item, i) => (
                <ShowMainStored key={i} propsData={item} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowMainStored;
