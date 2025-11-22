import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  FaHeadset, 
  FaRocket,
  FaShieldAlt,
  FaCode,
  FaDatabase,
  FaCloud,
  FaLightbulb,
  FaStar,
  FaGem,
  FaBolt
} from "react-icons/fa";

const WhyChooseUs = () => {
  const [activeCard, setActiveCard] = useState(0);

  const features = [
    {
      icon: FaRocket,
      title: "Innovation First",
      description: "Cutting-edge technology solutions with the latest frameworks and methodologies for maximum impact",
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-500/10 to-pink-500/10",
      shadowColor: "shadow-red-500/30",
      accentColor: "red"
    },
    {
      icon: FaLightbulb,
      title: "Creative Solutions",
      description: "Out-of-the-box thinking to solve complex problems with elegant and efficient approaches",
      gradient: "from-pink-500 to-purple-500",
      bgGradient: "from-pink-500/10 to-purple-500/10",
      shadowColor: "shadow-pink-500/30",
      accentColor: "pink"
    },
    {
      icon: FaShieldAlt,
      title: "Security Focused",
      description: "Enterprise-grade security with advanced encryption and compliance standards built-in",
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-500/10 to-indigo-500/10",
      shadowColor: "shadow-purple-500/30",
      accentColor: "purple"
    },
    {
      icon: FaBolt,
      title: "Lightning Fast",
      description: "Optimized performance and rapid development cycles to get your products to market quickly",
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-500/10 to-blue-500/10",
      shadowColor: "shadow-indigo-500/30",
      accentColor: "indigo"
    },
    {
      icon: FaGem,
      title: "Premium Quality",
      description: "Meticulous attention to detail with rigorous testing and quality assurance processes",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      shadowColor: "shadow-blue-500/30",
      accentColor: "blue"
    },
    {
      icon: FaHeadset,
      title: "24/7 Support",
      description: "Round-the-clock dedicated support team ensuring your systems run smoothly at all times",
      gradient: "from-cyan-500 to-teal-500",
      bgGradient: "from-cyan-500/10 to-teal-500/10",
      shadowColor: "shadow-cyan-500/30",
      accentColor: "cyan"
    }
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % features.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* 🎨 Top Separator - Wave Design Matching Theme */}
      <div className="absolute top-0 left-0 right-0 h-24 z-10 overflow-hidden pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradientTopWhy" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(239, 68, 68, 0.1)" />
              <stop offset="50%" stopColor="rgba(236, 72, 153, 0.2)" />
              <stop offset="100%" stopColor="rgba(239, 68, 68, 0.1)" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,50 Q300,30 600,50 T1200,50 L1200,100 L0,100 Z"
            fill="url(#waveGradientTopWhy)"
            animate={{
              d: [
                "M0,50 Q300,30 600,50 T1200,50 L1200,100 L0,100 Z",
                "M0,50 Q300,70 600,50 T1200,50 L1200,100 L0,100 Z",
                "M0,50 Q300,30 600,50 T1200,50 L1200,100 L0,100 Z",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
      
      {/* Animated Border Line */}
      <div className="absolute top-0 left-0 right-0 h-px z-20 pointer-events-none">
        <motion.div
          className="h-full"
          style={{
            backgroundImage: 'linear-gradient(to right, transparent, rgb(239, 68, 68), rgb(236, 72, 153), transparent)',
          }}
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      
      {/* Decorative Top Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full z-20 pointer-events-none" />

      {/* Unique Creative Background Effects - Same as Testimonials (Light Mode) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Hexagonal Service Grid Pattern */}
 
      {/* ⚡ Electric Grid Pattern - Light Theme */}
      <div className="absolute inset-0 opacity-3 z-0">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="rgba(239, 68, 68, 0.15)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

        {/* Spiral Energy Waves */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
                  i % 2 === 0 ? 'border-red-400/20' : 'border-pink-400/20'
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

        {/* Floating Service Orbs with Trails */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { icon: FaCode, x: 15, y: 20, trail: "red", path: "M15,20 Q50,10 85,30 Q50,50 15,20" },
            { icon: FaDatabase, x: 85, y: 25, trail: "pink", path: "M85,25 Q50,15 15,35 Q50,55 85,25" },
            { icon: FaCloud, x: 20, y: 70, trail: "purple", path: "M20,70 Q60,50 80,80 Q40,90 20,70" },
            { icon: FaShieldAlt, x: 80, y: 75, trail: "blue", path: "M80,75 Q40,55 20,85 Q60,95 80,75" },
            { icon: FaLightbulb, x: 50, y: 15, trail: "red", path: "M50,15 Q20,40 50,65 Q80,40 50,15" },
            { icon: FaRocket, x: 50, y: 85, trail: "pink", path: "M50,85 Q80,60 50,35 Q20,60 50,85" }
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
                    stroke={`rgba(${item.trail === 'red' ? '239, 68, 68' : item.trail === 'pink' ? '236, 72, 153' : item.trail === 'purple' ? '147, 51, 234' : '59, 130, 246'}, 0.3)`}
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="10 5"
                    animate={{
                      strokeDashoffset: [0, -50],
                      opacity: [0.3, 0.7, 0.3]
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
                  item.trail === 'red' ? 'text-red-400/60' : 
                  item.trail === 'pink' ? 'text-pink-400/60' : 
                  item.trail === 'purple' ? 'text-purple-400/60' : 'text-blue-400/60'
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
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-red-400 to-pink-400 rounded-full"
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

        {/* Morphing Square Geometric Shapes - Enhanced */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { x: 20, y: 30, size: 60, color: "red" },
            { x: 70, y: 20, size: 80, color: "pink" },
            { x: 30, y: 70, size: 70, color: "purple" },
            { x: 80, y: 80, size: 50, color: "blue" },
            { x: 10, y: 50, size: 55, color: "red" },
            { x: 90, y: 60, size: 65, color: "pink" },
            { x: 50, y: 10, size: 45, color: "purple" },
            { x: 50, y: 90, size: 75, color: "blue" }
          ].map((shape, i) => (
            <motion.div
              key={i}
              className={`absolute border-2 ${
                shape.color === 'red' ? 'border-red-400/20' : 
                shape.color === 'pink' ? 'border-pink-400/20' : 
                shape.color === 'purple' ? 'border-purple-400/20' : 'border-blue-400/20'
              }`}
              style={{
                left: `${shape.x}%`,
                top: `${shape.y}%`,
                width: shape.size,
                height: shape.size,
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                borderRadius: ["0%", "50%", "25%", "0%", "15%", "0%"],
                rotate: [0, 90, 180, 270, 360],
                scale: [1, 1.3, 0.7, 1.1, 1.2, 1],
                opacity: [0.2, 0.6, 0.3, 0.8, 0.4, 0.2],
                x: [0, Math.sin(i) * 30, -Math.sin(i) * 20, 0],
                y: [0, Math.cos(i) * 30, -Math.cos(i) * 20, 0],
              }}
              transition={{
                duration: 8 + i * 1.5,
                repeat: Infinity,
                delay: i * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Digital Service Tags */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { tag: "API", x: 10, y: 25, delay: 0 },
            { tag: "UI/UX", x: 90, y: 20, delay: 1 },
            { tag: "DevOps", x: 15, y: 75, delay: 2 },
            { tag: "ML/AI", x: 85, y: 80, delay: 3 },
            { tag: "Cloud", x: 50, y: 10, delay: 4 },
            { tag: "Mobile", x: 50, y: 90, delay: 5 }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="absolute text-xs font-bold text-red-300/70 bg-gradient-to-r from-red-500/10 to-pink-500/10 px-3 py-1 rounded-full border border-red-400/30 backdrop-blur-sm"
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
              }}
              animate={{
                y: [0, -30, 0, 20, 0],
                x: [0, 15, 0, -10, 0],
                opacity: [0, 1, 0.5, 1, 0],
                scale: [0.8, 1.2, 0.9, 1.1, 0.8],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 8 + i * 0.5,
                repeat: Infinity,
                delay: item.delay * 1.5,
                ease: "easeInOut"
              }}
            >
              {item.tag}
            </motion.div>
          ))}
        </div>

        {/* Pulsing Energy Grid */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, row) => (
            [...Array(8)].map((_, col) => (
              <motion.div
                key={`${row}-${col}`}
                className="absolute w-2 h-2 bg-gradient-to-r from-red-400/30 to-pink-400/30 rounded-full"
                style={{
                  left: `${10 + col * 12}%`,
                  top: `${20 + row * 15}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: (row * 8 + col) * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))
          ))}
        </div>

        {/* Floating Service Bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8 bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-full border border-red-400/20 backdrop-blur-sm flex items-center justify-center"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${100 + Math.random() * 20}%`,
              }}
              animate={{
                y: [0, -window.innerHeight - 100],
                x: [0, Math.sin(i) * 100],
                rotate: [0, 360],
                scale: [0.5, 1, 0.5],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "linear"
              }}
            >
              <div className="w-2 h-2 bg-red-400/50 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-red-200/50 rounded-full px-6 py-3 shadow-lg">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <FaStar className="text-red-500 text-lg" />
              </motion.div>
              <span className="text-red-700 font-semibold text-sm">EXCELLENCE • INNOVATION • TRUST</span>
            </div>
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Why Choose{" "}
            <motion.span 
              className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent relative"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: '200% 100%',
              }}
            >
              Piweb Tech
            </motion.span>
            ?
            
            {/* Animated Question Mark */}
            <motion.span
              className="inline-block text-red-500"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ?
            </motion.span>
            
            {/* Glowing Underline */}
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '70%' }}
              viewport={{ once: true }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(239, 68, 68, 0.5)',
                  '0 0 40px rgba(236, 72, 153, 0.7)',
                  '0 0 20px rgba(147, 51, 234, 0.5)',
                  '0 0 20px rgba(239, 68, 68, 0.5)',
                ],
              }}
              transition={{
                width: { duration: 1.2, delay: 0.8 },
                boxShadow: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              }}
            />
          </motion.h2>
          
          <motion.p 
            className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            We combine{" "}
            <motion.span 
              className="font-semibold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: '200% 100%',
              }}
            >
              technical expertise
            </motion.span>
            , industry experience, and customer-centric approach to deliver{" "}
            <motion.span 
              className="font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              style={{
                backgroundSize: '200% 100%',
              }}
            >
              exceptional results
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {features.map((feature, index) => (
              <motion.div
                key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
              className="group relative"
              onMouseEnter={() => setActiveCard(index)}
            >
              {/* Enhanced Feature Card */}
              <motion.div 
                className="relative bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-3xl shadow-2xl border-2 border-gray-200/60 overflow-hidden"
                whileHover={{ 
                  scale: 1.08, 
                  y: -15,
                  rotateY: 8,
                }}
                animate={{
                  borderColor: activeCard === index ? 'rgba(239, 68, 68, 0.5)' : 'rgba(156, 163, 175, 0.3)',
                  boxShadow: activeCard === index ? 
                    '0 30px 60px rgba(239, 68, 68, 0.25), 0 0 0 1px rgba(239, 68, 68, 0.1)' : 
                    '0 15px 35px rgba(0, 0, 0, 0.12)',
                }}
                transition={{ 
                  scale: { duration: 0.4, type: "spring", stiffness: 300 },
                  y: { duration: 0.4, type: "spring", stiffness: 300 },
                  rotateY: { duration: 0.4 },
                  borderColor: { duration: 0.5 },
                  boxShadow: { duration: 0.5 },
                }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 rounded-3xl`}
                  transition={{ duration: 0.6 }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                />
                
                {/* Subtle Gradient Sweep - No White Flash */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 rounded-3xl"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    background: `linear-gradient(135deg, ${feature.accentColor === 'red' ? 'rgba(239, 68, 68, 0.15)' : feature.accentColor === 'pink' ? 'rgba(236, 72, 153, 0.15)' : feature.accentColor === 'purple' ? 'rgba(147, 51, 234, 0.15)' : feature.accentColor === 'indigo' ? 'rgba(99, 102, 241, 0.15)' : feature.accentColor === 'blue' ? 'rgba(59, 130, 246, 0.15)' : 'rgba(6, 182, 212, 0.15)'}, transparent, ${feature.accentColor === 'red' ? 'rgba(236, 72, 153, 0.15)' : feature.accentColor === 'pink' ? 'rgba(147, 51, 234, 0.15)' : feature.accentColor === 'purple' ? 'rgba(99, 102, 241, 0.15)' : feature.accentColor === 'indigo' ? 'rgba(59, 130, 246, 0.15)' : feature.accentColor === 'blue' ? 'rgba(6, 182, 212, 0.15)' : 'rgba(20, 184, 166, 0.15)'})`,
                    backgroundSize: '200% 200%',
                  }}
                />

                {/* Enhanced Icon with Multiple Effects */}
                <motion.div 
                  className={`relative w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-r ${feature.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-2xl`}
                  whileHover={{ 
                    scale: 1.25, 
                    rotate: 360,
                    y: -12 
                  }}
                  animate={{
                    boxShadow: activeCard === index ? [
                      '0 0 40px rgba(239, 68, 68, 0.5)',
                      '0 0 60px rgba(236, 72, 153, 0.7)',
                      '0 0 40px rgba(147, 51, 234, 0.5)',
                      '0 0 40px rgba(239, 68, 68, 0.5)',
                    ] : '0 15px 40px rgba(0, 0, 0, 0.25)',
                  }}
                  transition={{ 
                    scale: { duration: 0.4, type: "spring", stiffness: 400 },
                    rotate: { duration: 0.8 },
                    y: { duration: 0.4, type: "spring", stiffness: 400 },
                    boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  {/* Icon Glow Effect */}
                  <motion.div 
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.gradient} blur-2xl opacity-0 group-hover:opacity-80`}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  
                  {/* Pulsing Ring - Colored instead of white */}
                  <motion.div
                    className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100`}
                    style={{
                      border: `2px solid ${feature.accentColor === 'red' ? 'rgba(239, 68, 68, 0.4)' : feature.accentColor === 'pink' ? 'rgba(236, 72, 153, 0.4)' : feature.accentColor === 'purple' ? 'rgba(147, 51, 234, 0.4)' : feature.accentColor === 'indigo' ? 'rgba(99, 102, 241, 0.4)' : feature.accentColor === 'blue' ? 'rgba(59, 130, 246, 0.4)' : 'rgba(6, 182, 212, 0.4)'}`,
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.4, 0, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  
                  <feature.icon className="relative z-10 text-4xl sm:text-5xl text-white drop-shadow-2xl" />
                </motion.div>

                {/* Enhanced Text Content */}
                <div className="relative z-10 text-center">
                  <motion.h3 
                    className="text-2xl sm:text-3xl font-black mb-5 sm:mb-7"
                    animate={{
                      color: activeCard === index ? '#dc2626' : '#111827',
                    }}
                    transition={{ duration: 0.5 }}
                    whileHover={{
                      scale: 1.05,
                    }}
                  >
                    <span className="bg-gradient-to-r from-red-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                      {feature.title}
                    </span>
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-700 leading-relaxed text-base sm:text-lg font-medium"
                    whileHover={{ color: '#1f2937' }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.description}
                  </motion.p>
                  
                  {/* Animated Underline */}
                  <motion.div
                    className={`mt-4 h-1 bg-gradient-to-r ${feature.gradient} rounded-full mx-auto`}
                    initial={{ width: 0 }}
                    whileInView={{ width: '60%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                    style={{
                      boxShadow: `0 0 10px ${feature.accentColor === 'red' ? 'rgba(239, 68, 68, 0.5)' : feature.accentColor === 'pink' ? 'rgba(236, 72, 153, 0.5)' : feature.accentColor === 'purple' ? 'rgba(147, 51, 234, 0.5)' : feature.accentColor === 'indigo' ? 'rgba(99, 102, 241, 0.5)' : feature.accentColor === 'blue' ? 'rgba(59, 130, 246, 0.5)' : 'rgba(6, 182, 212, 0.5)'}`,
                    }}
                  />
                </div>

                {/* Enhanced Corner Accent Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-60 transition-opacity duration-500">
                  <motion.div 
                    className="absolute top-5 right-5 w-10 h-0.5 bg-gradient-to-r from-red-500 to-pink-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: '2.5rem' }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.div 
                    className="absolute top-5 right-5 w-0.5 h-10 bg-gradient-to-b from-red-500 to-pink-500"
                    initial={{ height: 0 }}
                    whileHover={{ height: '2.5rem' }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-20 h-20 opacity-0 group-hover:opacity-60 transition-opacity duration-500">
                  <motion.div 
                    className="absolute bottom-5 left-5 w-10 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: '2.5rem' }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.div 
                    className="absolute bottom-5 left-5 w-0.5 h-10 bg-gradient-to-b from-purple-500 to-indigo-500"
                    initial={{ height: 0 }}
                    whileHover={{ height: '2.5rem' }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Enhanced Floating Number Badge */}
                <motion.div
                  className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center text-white font-black text-base shadow-2xl opacity-0 group-hover:opacity-100`}
                  initial={{ scale: 0, rotate: -180 }}
                  whileHover={{ scale: 1.1, rotate: 0 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                  style={{
                    boxShadow: `0 0 20px ${feature.accentColor === 'red' ? 'rgba(239, 68, 68, 0.6)' : feature.accentColor === 'pink' ? 'rgba(236, 72, 153, 0.6)' : feature.accentColor === 'purple' ? 'rgba(147, 51, 234, 0.6)' : feature.accentColor === 'indigo' ? 'rgba(99, 102, 241, 0.6)' : feature.accentColor === 'blue' ? 'rgba(59, 130, 246, 0.6)' : 'rgba(6, 182, 212, 0.6)'}`,
                  }}
                >
                  {index + 1}
                </motion.div>
                
                {/* Floating Glow Dots */}
                {[...Array(3)].map((_, dotIndex) => (
                  <motion.div
                    key={`dot-${dotIndex}`}
                    className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-70`}
                    style={{
                      left: `${20 + dotIndex * 30}%`,
                      top: `${15 + dotIndex * 20}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      scale: [0.5, 1.2, 0.5],
                      opacity: [0, 0.7, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: dotIndex * 0.4,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <motion.div
          className="text-center mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-4 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <FaRocket />
            </motion.div>
            <span>Ready to Transform Your Business?</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
