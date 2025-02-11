

import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Result", path: "/search" },
  { name: "Schedule", path: "/schedule" },
];

export default function NavBar() {
  const location = useLocation();

  return (
    <nav className="bg-[#874356f5] bg-opacity-70 p-4 shadow-2xl fixed bottom-4 left-4 right-4 z-50 rounded-full">
      <div className="max-w-6xl mx-auto flex justify-center items-center">
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              className="relative text-white text-lg cursor-pointer"
              whileHover={{ scale: 1.1 }}  // Increase size on hover
              whileTap={{ scale: 0.9 }}    // Shrink size on tap
              transition={{ type: "spring", stiffness: 300 }}  // Smooth transition
            >
              <Link
                to={item.path}
                className={`px-3 py-2 transition-all duration-300 rounded-md ${
                  location.pathname === item.path
                    ? "bg-[#F6E7D8] text-black rounded-half"  // Add rounded-full for selected item
                    : "hover:bg-[#F6E7D8] hover:text-black rounded-half"  // Hover effect also rounded
                }`}
              >
                {item.name}
              </Link>
              {location.pathname === item.path && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-[#F6E7D8] rounded"
                  layoutId="underline"
                />
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

