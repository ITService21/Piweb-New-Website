import { motion } from "framer-motion";
import {
  FaCode,
  FaCloud,
  FaMicrochip,
  FaGem,
  FaFire,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaLightbulb,
} from "react-icons/fa";

const AboutSection = () => {
  const stats = [
    { number: "24/7", label: "Dedicated Support", icon: FaClock },
    { number: "100%", label: "Client Satisfaction", icon: FaCheckCircle },
    { number: "10+", label: "Tech Stacks", icon: FaLightbulb },
  ];

  const technologies = [
    { icon: FaCode, name: "React & Next.js" },
    { icon: FaCloud, name: "AWS & Azure" },
    { icon: FaMicrochip, name: "Node.js & Python" },
    { icon: FaGem, name: "MongoDB & PostgreSQL" },
    { icon: FaFire, name: "AI & Automation" },
    { icon: FaShieldAlt, name: "DevOps & Security" },
  ];

  return (
    <section className="relative py-28 overflow-hidden text-center bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* 🎨 Top Separator - Wave Design Matching Theme */}
      
      <div className="absolute top-0 left-0 right-0 h-24 z-10 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradientTop" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(239, 68, 68, 0.1)" />
              <stop offset="50%" stopColor="rgba(236, 72, 153, 0.2)" />
              <stop offset="100%" stopColor="rgba(239, 68, 68, 0.1)" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,50 Q300,30 600,50 T1200,50 L1200,100 L0,100 Z"
            fill="url(#waveGradientTop)"
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
      <div className="absolute top-0 left-0 right-0 h-px z-20">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-red-500 to-transparent"
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: 'linear-gradient(to right, transparent, rgb(239, 68, 68), rgb(236, 72, 153), transparent)',
          }}
        />
      </div>
      
      {/* Decorative Top Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full z-20" />

      {/* Unique Creative Background Effects - Matching WhyChooseUs Style */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Hexagonal Grid Pattern */}
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
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-full"
              style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
            >
              <motion.div
                className={`absolute w-96 h-96 border-2 ${i % 2 === 0 ? 'border-red-400/20' : 'border-pink-400/20'}`}
                style={{ 
                  left: '50%', 
                  top: '50%', 
                  transform: 'translate(-50%, -50%)',
                  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
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
            { icon: FaCode, x: 15, y: 20, trail: "red" },
            { icon: FaCloud, x: 85, y: 25, trail: "pink" },
            { icon: FaMicrochip, x: 20, y: 70, trail: "purple" },
            { icon: FaShieldAlt, x: 80, y: 75, trail: "blue" },
            { icon: FaLightbulb, x: 50, y: 15, trail: "red" },
            { icon: FaGem, x: 50, y: 85, trail: "pink" }
          ].map((item, i) => (
            <div key={i}>
              {/* Animated Trail */}
              <motion.div
                className="absolute"
                style={{ left: `${item.x}%`, top: `${item.y}%` }}
              >
                <svg width="400" height="300" className="absolute -translate-x-1/2 -translate-y-1/2">
                  <motion.path
                    d={`M${item.x},${item.y} Q${item.x + 35},${item.y - 20} ${item.x + 70},${item.y} Q${item.x + 35},${item.y + 20} ${item.x},${item.y}`}
                    stroke={item.trail === 'red' ? 'rgba(239, 68, 68, 0.3)' : item.trail === 'pink' ? 'rgba(236, 72, 153, 0.3)' : item.trail === 'purple' ? 'rgba(147, 51, 234, 0.3)' : 'rgba(59, 130, 246, 0.3)'}
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="10 5"
                    animate={{ strokeDashoffset: [0, -50], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "linear" }}
                  />
                </svg>
              </motion.div>

              {/* Floating Icon */}
              <motion.div
                className={`absolute text-2xl ${item.trail === 'red' ? 'text-red-400/60' : item.trail === 'pink' ? 'text-pink-400/60' : item.trail === 'purple' ? 'text-purple-400/60' : 'text-blue-400/60'}`}
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
                style={{ left: `${item.x}%`, top: `${item.y}%` }}
              >
                <item.icon />
              </motion.div>
            </div>
          ))}
        </div>

        {/* Particle Constellation - Square/Diamond Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute ${i % 2 === 0 ? 'w-1 h-1' : 'w-1.5 h-1.5'} ${i % 3 === 0 ? 'rotate-45' : ''} bg-gradient-to-r from-red-400 to-pink-400`}
              style={{ 
                left: `${Math.random() * 100}%`, 
                top: `${Math.random() * 100}%`,
                clipPath: i % 2 === 0 ? 'none' : 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                rotate: [0, 90, 180, 270, 360],
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

        {/* Morphing Square Geometric Shapes - Hexagons and Triangles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { x: 20, y: 30, size: 60, color: "red", shape: "hexagon" },
            { x: 70, y: 20, size: 80, color: "pink", shape: "triangle" },
            { x: 30, y: 70, size: 70, color: "purple", shape: "square" },
            { x: 80, y: 80, size: 50, color: "blue", shape: "diamond" },
            { x: 10, y: 50, size: 55, color: "red", shape: "hexagon" },
            { x: 90, y: 60, size: 65, color: "pink", shape: "triangle" },
            { x: 50, y: 10, size: 45, color: "purple", shape: "square" },
            { x: 50, y: 90, size: 75, color: "blue", shape: "diamond" }
          ].map((shape, i) => (
            <motion.div
              key={i}
              className={`absolute border-2 ${shape.color === 'red' ? 'border-red-400/20' : shape.color === 'pink' ? 'border-pink-400/20' : shape.color === 'purple' ? 'border-purple-400/20' : 'border-blue-400/20'}`}
              style={{
                left: `${shape.x}%`,
                top: `${shape.y}%`,
                width: shape.size,
                height: shape.size,
                transform: 'translate(-50%, -50%)',
                clipPath: shape.shape === 'hexagon' 
                  ? 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
                  : shape.shape === 'triangle'
                  ? 'polygon(50% 0%, 0% 100%, 100% 100%)'
                  : shape.shape === 'diamond'
                  ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                  : 'none'
              }}
              animate={{
                borderRadius: shape.shape === 'square' ? ["0%", "25%", "0%", "15%", "0%"] : "0%",
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
            { tag: "React", x: 10, y: 25, delay: 0 },
            { tag: "Node.js", x: 90, y: 20, delay: 1 },
            { tag: "Cloud", x: 15, y: 75, delay: 2 },
            { tag: "AI/ML", x: 85, y: 80, delay: 3 },
            { tag: "DevOps", x: 50, y: 10, delay: 4 },
            { tag: "Security", x: 50, y: 90, delay: 5 }
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
                className="absolute w-2 h-2 bg-gradient-to-r from-red-400/30 to-pink-400/30"
                style={{
                  left: `${10 + col * 12}%`,
                  top: `${20 + row * 15}%`,
                  clipPath: (row + col) % 2 === 0 ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' : 'none'
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

        {/* Floating Tech Bubbles - Square/Diamond Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8 bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-400/20 backdrop-blur-sm flex items-center justify-center"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${100 + Math.random() * 20}%`,
                clipPath: i % 3 === 0 
                  ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                  : i % 3 === 1
                  ? 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
                  : 'none'
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
              <div className={`w-2 h-2 bg-red-400/50 ${i % 2 === 0 ? 'rotate-45' : ''}`}></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 💎 Foreground Content */}
      <div className="relative z-40 max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.span
            className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 relative inline-block"
            animate={{
              backgroundPosition: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: '200% 200%',
              filter: 'drop-shadow(0 0 1px rgba(239, 68, 68, 0.5))',
            }}
          >
            Piweb Tech
          </motion.span>
          {/* <br />
          <motion.span
            className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 relative inline-block"
            animate={{
              backgroundPosition: ['100%', '0%', '100%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: '200% 200%',
              filter: 'drop-shadow(0 0 1px rgba(236, 72, 153, 0.5))',
            }}
          >
            Software Solutions
          </motion.span> */}
          
          {/* Animated Glow Behind Text */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-red-500/15 via-pink-500/15 to-purple-500/15 blur-3xl -z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
            </motion.h2>
            
        <motion.p 
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          We are a <span className="text-red-600 font-bold">next-generation</span> software company driving{' '}
          <span className="text-pink-600 font-bold">digital transformation</span> across the globe.
          From custom-built enterprise applications to{' '}
          <span className="text-purple-600 font-bold">AI-powered automation</span>, Piweb Tech delivers
          secure, scalable, and elegant solutions that empower businesses to grow with confidence.
        </motion.p>

        {/* 🌠 Stats Section - Enhanced Futuristic */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ 
                scale: 1.15, 
                y: -10,
                rotateY: 10,
                boxShadow: "0 0 40px rgba(255,20,147,0.6)",
              }}
                className="relative p-8 bg-white/95 backdrop-blur-md border-2 border-gray-200/60 rounded-3xl transition-all duration-500 overflow-hidden group shadow-2xl"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Animated Background Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 rounded-3xl"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Animated Border Glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-40 blur-sm"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  maskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude',
                  WebkitMaskComposite: 'xor',
                }}
              />
              
              {/* Floating Particles Inside Card */}
              {[...Array(3)].map((_, particleIndex) => (
                <motion.div
                  key={`particle-${particleIndex}`}
                  className="absolute w-1 h-1 rounded-full bg-red-400 opacity-0 group-hover:opacity-60"
                  style={{
                    left: `${20 + particleIndex * 30}%`,
                    top: `${20 + particleIndex * 25}%`,
                  }}
                          animate={{ 
                    y: [0, -30, 0],
                    x: [0, 15, 0],
                    scale: [0, 1.5, 0],
                    opacity: [0, 0.6, 0],
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity,
                    delay: particleIndex * 0.5,
                  }}
                />
              ))}
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.2,
                  }}
                  transition={{
                    rotate: { duration: 0.6 },
                    scale: { duration: 0.3 },
                  }}
                >
                  <item.icon className="text-5xl mx-auto mb-4 text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.6)]" />
                </motion.div>
                
                <motion.h3 
                  className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 mb-2"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  style={{
                    filter: 'drop-shadow(0 0 8px rgba(239, 68, 68, 0.4))',
                  }}
                >
                  {item.number}
                </motion.h3>
                
                <p className="text-sm md:text-base text-gray-700 mt-2 font-medium">{item.label}</p>
                  
                {/* Animated Progress Line */}
                <motion.div
                  className="mt-4 h-1 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.2 + 0.5 }}
                  style={{
                    boxShadow: '0 0 10px rgba(239, 68, 68, 0.4)',
                  }}
                />
                </div>
              </motion.div>
            ))}
          </div>

        {/* 💻 Tech Stack - Enhanced Futuristic */}
        <motion.h3
          className="text-4xl md:text-5xl font-black mt-24 mb-12 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.span
            className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 relative inline-block"
            animate={{
              backgroundPosition: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: '200% 200%',
              filter: 'drop-shadow(0 0 15px rgba(239, 68, 68, 0.4))',
            }}
          >
            Technologies We Work With
          </motion.span>
          
          {/* Animated Underline */}
          <motion.div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '60%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            style={{
              boxShadow: '0 0 15px rgba(239, 68, 68, 0.5)',
            }}
          />
        </motion.h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.2,
                y: -15,
                rotateZ: 5,
                boxShadow: "0 0 30px rgba(255,20,147,0.6)",
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              className="relative p-6 rounded-2xl bg-white/80 backdrop-blur-xl border-2 border-red-300/20 hover:border-red-400/50 transition-all duration-500 overflow-hidden group shadow-lg"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Animated Background Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 rounded-2xl"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Rotating Border Glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-30 blur-md"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              <div className="relative z-10 text-center">
                <motion.div
                  whileHover={{
                    rotate: 360,
                    scale: 1.3,
                  }}
                  transition={{
                    rotate: { duration: 0.6 },
                    scale: { duration: 0.3 },
                  }}
                  className="mb-3"
                >
                  <tech.icon className="text-4xl mx-auto text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                </motion.div>
                
                <motion.p 
                  className="text-sm font-bold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-pink-600 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {tech.name}
                </motion.p>
                
                {/* Animated Dot Indicator */}
                <motion.div
                  className="mt-3 h-1 w-8 mx-auto bg-gradient-to-r from-red-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ width: 0 }}
                  whileHover={{ width: '2rem' }}
                  transition={{ duration: 0.3 }}
                  style={{
                    boxShadow: '0 0 8px rgba(239, 68, 68, 0.4)',
                  }}
                />
                </div>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default AboutSection;
