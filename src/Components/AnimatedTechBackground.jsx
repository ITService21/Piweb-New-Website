import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { 
  FaCode, 
  FaDatabase, 
  FaCloud, 
  FaShieldAlt, 
  FaLightbulb, 
  FaRocket,
  FaServer,
  FaMobile,
  FaBrain,
  FaCog
} from "react-icons/fa";

const AnimatedTechBackground = ({ variant = "light" }) => {
  const isDark = variant === "dark";

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Electric Grid Pattern */}
      <div className={`absolute inset-0 ${isDark ? 'opacity-10' : 'opacity-5'} z-0`}>
        <svg className="w-full h-full">
          <defs>
            <pattern id="tech-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke={isDark ? "rgba(239, 68, 68, 0.2)" : "rgba(239, 68, 68, 0.15)"}
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-grid)" />
        </svg>
      </div>

      {/* Spiral Energy Waves */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-full"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <motion.div
              className={`absolute w-96 h-96 border-2 rounded-full ${
                i % 2 === 0 
                  ? isDark ? 'border-red-400/20' : 'border-red-400/15'
                  : isDark ? 'border-pink-400/20' : 'border-pink-400/15'
              }`}
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                scale: [0.5, 2, 0.5],
                opacity: [0, 0.6, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 2,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Floating Tech Icons with Trails */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { icon: FaCode, x: 15, y: 20, trail: "red", path: "M15,20 Q50,10 85,30 Q50,50 15,20" },
          { icon: FaDatabase, x: 85, y: 25, trail: "pink", path: "M85,25 Q50,15 15,35 Q50,55 85,25" },
          { icon: FaCloud, x: 20, y: 70, trail: "purple", path: "M20,70 Q60,50 80,80 Q40,90 20,70" },
          { icon: FaShieldAlt, x: 80, y: 75, trail: "blue", path: "M80,75 Q40,55 20,85 Q60,95 80,75" },
          { icon: FaLightbulb, x: 50, y: 15, trail: "red", path: "M50,15 Q20,40 50,65 Q80,40 50,15" },
          { icon: FaRocket, x: 50, y: 85, trail: "pink", path: "M50,85 Q80,60 50,35 Q20,60 50,85" },
          { icon: FaServer, x: 10, y: 50, trail: "purple", path: "M10,50 Q40,30 70,50 Q40,70 10,50" },
          { icon: FaMobile, x: 90, y: 60, trail: "blue", path: "M90,60 Q60,40 30,60 Q60,80 90,60" },
          { icon: FaBrain, x: 30, y: 40, trail: "red", path: "M30,40 Q60,20 90,40 Q60,60 30,40" },
          { icon: FaCog, x: 70, y: 40, trail: "pink", path: "M70,40 Q40,20 10,40 Q40,60 70,40" }
        ].map((item, i) => (
          <div key={i}>
            {/* Animated Trail */}
            <motion.div
              className="absolute"
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
              }}
            >
              <svg width="400" height="300" className="absolute -translate-x-1/2 -translate-y-1/2">
                <motion.path
                  d={item.path}
                  stroke={`rgba(${
                    item.trail === 'red' ? '239, 68, 68' : 
                    item.trail === 'pink' ? '236, 72, 153' : 
                    item.trail === 'purple' ? '147, 51, 234' : '59, 130, 246'
                  }, ${isDark ? '0.3' : '0.2'})`}
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="10 5"
                  animate={{
                    strokeDashoffset: [0, -50],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </svg>
            </motion.div>
            
            {/* Floating Icon */}
            <motion.div
              className={`absolute text-2xl ${
                item.trail === 'red' ? (isDark ? 'text-red-400/60' : 'text-red-400/40') : 
                item.trail === 'pink' ? (isDark ? 'text-pink-400/60' : 'text-pink-400/40') : 
                item.trail === 'purple' ? (isDark ? 'text-purple-400/60' : 'text-purple-400/40') : 
                (isDark ? 'text-blue-400/60' : 'text-blue-400/40')
              }`}
              animate={{
                x: [0, 200, 0, -100, 0],
                y: [0, -50, 100, 50, 0],
                rotate: [0, 90, 180, 270, 360],
                scale: [0.8, 1.2, 0.8, 1.1, 0.8],
              }}
              transition={{
                duration: 12 + i * 2,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeInOut"
              }}
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
              }}
            >
              <item.icon />
            </motion.div>
          </div>
        ))}
      </div>

      {/* Particle Constellation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              isDark 
                ? 'bg-gradient-to-r from-red-400 to-pink-400' 
                : 'bg-gradient-to-r from-red-300 to-pink-300'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { x: 15, y: 25, size: 200, color: 'from-red-500/20 to-pink-500/20', delay: 0 },
          { x: 75, y: 15, size: 150, color: 'from-pink-500/20 to-purple-500/20', delay: 2 },
          { x: 25, y: 75, size: 180, color: 'from-purple-500/20 to-indigo-500/20', delay: 4 },
          { x: 85, y: 80, size: 120, color: 'from-indigo-500/20 to-blue-500/20', delay: 6 }
        ].map((orb, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r ${orb.color} blur-xl`}
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              width: orb.size,
              height: orb.size,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: orb.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Morphing Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { x: 20, y: 30, size: 60, color: "red" },
          { x: 70, y: 20, size: 80, color: "pink" },
          { x: 15, y: 70, size: 50, color: "purple" },
          { x: 85, y: 75, size: 70, color: "blue" }
        ].map((shape, i) => (
          <motion.div
            key={i}
            className={`absolute ${
              shape.color === 'red' ? (isDark ? 'border-red-400/20' : 'border-red-400/10') :
              shape.color === 'pink' ? (isDark ? 'border-pink-400/20' : 'border-pink-400/10') :
              shape.color === 'purple' ? (isDark ? 'border-purple-400/20' : 'border-purple-400/10') :
              (isDark ? 'border-blue-400/20' : 'border-blue-400/10')
            } border-2`}
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: shape.size,
              height: shape.size,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
              scale: [1, 1.2, 0.8, 1.1, 1],
              borderRadius: ['20%', '50%', '20%', '50%', '20%'],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};

AnimatedTechBackground.propTypes = {
  variant: PropTypes.oneOf(["light", "dark"])
};

export default AnimatedTechBackground;

