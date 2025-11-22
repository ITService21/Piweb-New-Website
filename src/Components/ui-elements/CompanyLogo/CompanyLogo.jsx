import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const CompanyLogo = () => {
  return (
    <Link to="/home" className="flex items-center group">
      {/* Logo */}
      <div className="relative mr-3 sm:mr-4">
        <motion.div
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 xl:w-[70px] xl:h-[70px] rounded-full overflow-hidden border-2 border-white shadow-lg transition-transform duration-300 group-hover:scale-105"
          whileHover={{
            scale: 1.08,
            rotate: [0, -3, 3, 0],
            transition: { duration: 0.5 },
          }}
        >
          <img
            src="/image/piweblogo.png"
            className="w-full h-full object-cover"
            alt="Piweb Tech Logo"
          />
        </motion.div>
      </div>

      {/* Text Section */}
      <div className="text-left leading-tight">
        {/* Company Name */}
        <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-extrabold">
          <span
            style={{
              color: "#ff5d80", // vibrant pink accent
              textShadow: "0 0 1px rgba(255,93,128,0.5)",
            }}
          >
            Piweb 
          </span>{" "}
          <span
            style={{
              color: "#ff5d80", // vibrant pink accent
              textShadow: "0 0 1px rgba(255,93,128,0.5)",
            }}
          >
            Tech
          </span>
        </h1>

        {/* Slogan */}
        <p className="text-[9px] sm:text-[11px] md:text-xs font-medium tracking-wide mt-0.5">
          <span
            style={{
              color: "#ffffff", // soft gray-white for readability
            }}
          >
            Building the{" "}
          </span>
          <span
            style={{
              color: "#f472b6", // soft pink highlight
              fontWeight: 600,
              textShadow: "0 0 4px rgba(244,114,182,0.4)",
            }}
          >
            Future
          </span>{" "}
          <span
            style={{
              color: "#f472b6", // soft pink highlight
              fontWeight: 600,
              textShadow: "0 0 4px rgba(244,114,182,0.4)",
            }}
          >
            Together
          </span>
        </p>
      </div>
    </Link>
  );
};
