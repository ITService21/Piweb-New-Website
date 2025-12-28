import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  FaHospital, FaHotel, FaStore, FaGraduationCap, FaBuilding, FaRocket,
  FaCode, FaDatabase, FaCloud, FaShieldAlt, FaCog, FaServer,
  FaNetworkWired, FaMicrochip, FaBrain, FaCogs, FaChartLine,
  FaMobile, FaGlobe, FaLaptop, FaTabletAlt, FaDesktop
} from "react-icons/fa";

const IndustriesWeServe = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentHighlight, setCurrentHighlight] = useState(0);

  const industries = [
    { 
      icon: FaHospital, 
      name: "Healthcare", 
      description: "Advanced medical software solutions",
      detailedDesc: "Electronic Health Records, Patient Management, Telemedicine Platforms",
      color: "blue",
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-500/10 to-pink-500/10"
    },
    { 
      icon: FaHotel, 
      name: "Hospitality", 
      description: "Smart hotel & restaurant management",
      detailedDesc: "Booking Systems, POS Solutions, Guest Experience Management",
      color: "cyan",
      gradient: "from-pink-500 to-purple-500",
      bgGradient: "from-pink-500/10 to-purple-500/10"
    },
    { 
      icon: FaStore, 
      name: "Retail", 
      description: "Next-gen e-commerce & POS systems",
      detailedDesc: "Online Stores, Inventory Management, Customer Analytics",
      color: "indigo",
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-500/10 to-indigo-500/10"
    },
    { 
      icon: FaGraduationCap, 
      name: "Education", 
      description: "Innovative learning management systems",
      detailedDesc: "LMS Platforms, Virtual Classrooms, Student Portals",
      color: "purple",
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-500/10 to-blue-500/10"
    },
    { 
      icon: FaBuilding, 
      name: "Manufacturing", 
      description: "Industrial ERP & production systems",
      detailedDesc: "Production Planning, Quality Control, Supply Chain Management",
      color: "pink",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    },
    { 
      icon: FaRocket, 
      name: "Startups", 
      description: "Scalable tech solutions for growth",
      detailedDesc: "MVP Development, Cloud Infrastructure, Growth Analytics",
      color: "red",
      gradient: "from-cyan-500 to-teal-500",
      bgGradient: "from-cyan-500/10 to-teal-500/10"
    }
  ];

  const floatingIcons = [
    FaCode, FaDatabase, FaCloud, FaShieldAlt, FaCog, FaServer,
    FaNetworkWired, FaMicrochip, FaBrain, FaCogs, FaChartLine,
    FaMobile, FaGlobe, FaLaptop, FaTabletAlt, FaDesktop
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % industries.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [industries.length]);

  return (
    <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Advanced Background Animations - Similar to HeroBanner */}
      <div className="absolute inset-0">
        {/* Animated Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="industryCircuit" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                <path
                  d="M0,7.5 L15,7.5 M7.5,0 L7.5,15 M3,3 L12,12 M12,3 L3,12"
                  stroke="rgba(239, 68, 68, 0.2)"
                  strokeWidth="0.3"
                  fill="none"
                />
                <circle cx="7.5" cy="7.5" r="0.8" fill="rgba(239, 68, 68, 0.3)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#industryCircuit)" />
          </svg>
        </div>

        {/* Animated Data Flow Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-red-400/50 to-transparent"
              style={{
                top: `${15 + i * 12}%`,
                left: '-100%',
                width: '200%',
              }}
              animate={{
                x: ['-100%', '100%'],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 6 + i * 0.8,
                repeat: Infinity,
                delay: i * 1.2,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Floating Tech Icons - Multiple Rows */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Row 1 - Top */}
          {floatingIcons.slice(0, 8).map((Icon, i) => (
            <motion.div
              key={`row1-${i}`}
              className="absolute text-red-400/20 text-xl"
              style={{
                top: '10%',
                left: '-5%',
              }}
              animate={{
                x: ['-5%', '105%'],
                y: [0, -15, 0],
                rotate: [0, 360, 0],
                scale: [0.6, 1.2, 0.6],
              }}
              transition={{
                duration: 20 + i * 2,
                repeat: Infinity,
                delay: i * 2.5,
                ease: "linear"
              }}
            >
              <Icon />
            </motion.div>
          ))}

          {/* Row 2 - Middle */}
          {floatingIcons.slice(8, 16).map((Icon, i) => (
            <motion.div
              key={`row2-${i}`}
              className="absolute text-pink-400/20 text-2xl"
              style={{
                top: '50%',
                left: '-5%',
              }}
              animate={{
                x: ['-5%', '105%'],
                y: [0, 20, 0],
                rotate: [0, -360, 0],
                scale: [0.8, 1.4, 0.8],
              }}
              transition={{
                duration: 25 + i * 1.5,
                repeat: Infinity,
                delay: i * 2,
                ease: "linear"
              }}
            >
              <Icon />
            </motion.div>
          ))}

          {/* Row 3 - Bottom */}
          {floatingIcons.slice(0, 6).map((Icon, i) => (
            <motion.div
              key={`row3-${i}`}
              className="absolute text-purple-400/20 text-lg"
              style={{
                top: '85%',
                left: '-5%',
              }}
              animate={{
                x: ['-5%', '105%'],
                y: [0, -10, 0],
                rotate: [0, 180, 0],
                scale: [0.5, 1.3, 0.5],
              }}
              transition={{
                duration: 18 + i * 3,
                repeat: Infinity,
                delay: i * 1.8,
                ease: "linear"
              }}
            >
              <Icon />
            </motion.div>
          ))}
        </div>

        {/* Dynamic Mouse-Following Gradient */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(239, 68, 68, 0.1), rgba(236, 72, 153, 0.05), transparent 50%)`,
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Pulsing Orbs */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${20 + i * 20}%`,
              top: `${15 + i * 20}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut",
            }}
          >
            <div className={`w-full h-full rounded-full ${
              i % 3 === 0 ? 'bg-gradient-to-br from-red-500/20 to-pink-500/20' :
              i % 3 === 1 ? 'bg-gradient-to-br from-pink-500/20 to-purple-500/20' :
              'bg-gradient-to-br from-purple-500/20 to-indigo-500/20'
            }`}></div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Industries We{" "}
            <motion.span 
              className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent relative"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: '200% 100%',
              }}
            >
              Serve
            </motion.span>
            
            {/* Animated Underline */}
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '60%' }}
              transition={{ duration: 1.2, delay: 0.8 }}
              viewport={{ once: true }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(239, 68, 68, 0.5)',
                  '0 0 40px rgba(236, 72, 153, 0.7)',
                  '0 0 20px rgba(147, 51, 234, 0.5)',
                  '0 0 20px rgba(239, 68, 68, 0.5)',
                ],
              }}
            />
          </motion.h2>
          
          <motion.p 
            className="text-xl sm:text-2xl text-pink-100 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Specialized solutions tailored to meet the{" "}
            <motion.span 
              className="text-red-300 font-semibold"
              animate={{
                color: ['#fca5a5', '#f472b6', '#c084fc', '#fca5a5'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              unique needs
            </motion.span>
            {" "}of different industries
          </motion.p>
        </motion.div>

        {/* Enhanced Industry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 sm:gap-8">
          {industries.map((industry, index) => (
              <motion.div
                key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
              className="group text-center relative"
            >
              {/* Enhanced Card with Advanced Effects */}
              <motion.div 
                className="relative bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-2xl border border-red-500/20 overflow-hidden"
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5,
                }}
                animate={{
                  borderColor: currentHighlight === index ? 'rgba(239, 68, 68, 0.6)' : 'rgba(239, 68, 68, 0.2)',
                  boxShadow: currentHighlight === index ? 
                    '0 25px 50px rgba(239, 68, 68, 0.3)' : 
                    '0 10px 30px rgba(0, 0, 0, 0.3)',
                }}
                transition={{ 
                  scale: { duration: 0.3 },
                  y: { duration: 0.3 },
                  rotateY: { duration: 0.3 },
                  borderColor: { duration: 0.5 },
                  boxShadow: { duration: 0.5 },
                }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${industry.bgGradient} opacity-0 group-hover:opacity-100 rounded-3xl`}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Mesh Pattern Overlay */}
                <motion.div
                  className="absolute inset-0 opacity-5 group-hover:opacity-10 rounded-3xl"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(239, 68, 68, 0.3) 2px, transparent 2px)`,
                    backgroundSize: '20px 20px',
                  }}
                />

                {/* Enhanced Icon with Multiple Effects */}
                <motion.div 
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${industry.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-2xl`}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, -5, 5, 0],
                    y: -5 
                  }}
                  animate={{
                    boxShadow: currentHighlight === index ? [
                      '0 0 30px rgba(239, 68, 68, 0.5)',
                      '0 0 50px rgba(236, 72, 153, 0.7)',
                      '0 0 30px rgba(147, 51, 234, 0.5)',
                      '0 0 30px rgba(239, 68, 68, 0.5)',
                    ] : '0 10px 30px rgba(0, 0, 0, 0.3)',
                  }}
                  transition={{ 
                    scale: { duration: 0.3 },
                    rotate: { duration: 0.4 },
                    y: { duration: 0.3 },
                    boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  {/* Icon Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${industry.gradient} blur-xl opacity-0 group-hover:opacity-60`} />
                  
                  <industry.icon className="relative z-10 text-2xl sm:text-3xl text-white drop-shadow-2xl" />
                  
                  {/* Floating Particles around Icon */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-80"
                      style={{
                        top: '50%',
                        left: '50%',
                      }}
                      animate={{
                        x: [0, Math.cos(i * Math.PI * 2 / 3) * 30],
                        y: [0, Math.sin(i * Math.PI * 2 / 3) * 30],
                        scale: [0, 1, 0],
                        opacity: [0, 0.8, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.7,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </motion.div>

                {/* Enhanced Text Content */}
                <div className="relative z-10">
                  <motion.h3 
                    className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3"
                    animate={{
                      color: currentHighlight === index ? '#fca5a5' : '#ffffff',
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {industry.name}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-sm text-gray-300 mb-3 leading-relaxed"
                    whileHover={{ color: '#d1d5db' }}
                  >
                    {industry.description}
                  </motion.p>
                  
                  {/* Detailed Description on Hover */}
                  <motion.p 
                    className="text-xs text-pink-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed"
                    initial={{ height: 0 }}
                    whileHover={{ height: 'auto' }}
                  >
                    {industry.detailedDesc}
                  </motion.p>
                </div>

                {/* Corner Accent Lines */}
                <div className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                  <div className="absolute top-3 right-3 w-6 h-px bg-red-400"></div>
                  <div className="absolute top-3 right-3 w-px h-6 bg-red-400"></div>
                  </div>
                <div className="absolute bottom-0 left-0 w-12 h-12 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                  <div className="absolute bottom-3 left-3 w-6 h-px bg-pink-400"></div>
                  <div className="absolute bottom-3 left-3 w-px h-6 bg-pink-400"></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
