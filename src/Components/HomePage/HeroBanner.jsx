import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  FaArrowRight, 
  FaPlay, 
  FaCode, 
  FaRocket, 
  FaCog, 
  FaDatabase, 
  FaCloud, 
  FaShieldAlt,
  FaBrain,
  FaMicrochip,
  FaNetworkWired,
  FaServer,
  FaCogs
} from "react-icons/fa";
import FormModal from "./../../Components/FormModal";
import { useModal } from "../../Context/ModalContext";
const HeroBanner = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { openModal, closeModal } = useModal();
  const [showFormModal, setShowFormModal] = useState(false);
  
  const techIcons = [
    { icon: FaCode, name: "Development", color: "from-red-500 to-pink-500" },
    { icon: FaCloud, name: "Cloud", color: "from-pink-500 to-purple-500" },
    { icon: FaDatabase, name: "Data", color: "from-purple-500 to-indigo-500" },
    { icon: FaShieldAlt, name: "Security", color: "from-indigo-500 to-blue-500" },
    { icon: FaRocket, name: "AI/ML", color: "from-blue-500 to-cyan-500" },
    { icon: FaCog, name: "DevOps", color: "from-cyan-500 to-teal-500" }
  ];

  const textVariations = [
    {
      title: "Elevate Digital",
      subtitle: "Transformation",
      description: "Leading IT solutions provider delivering cutting-edge software development, enterprise management systems, and digital transformation services to businesses worldwide."
    },
    {
      title: "Building the Future",
      subtitle: "of Technology",
      description: "Innovative software solutions that drive business growth through advanced technology, seamless integration, and exceptional user experiences."
    },
    {
      title: "Innovation Through",
      subtitle: "Code Excellence",
      description: "Transforming ideas into reality with world-class development teams, modern technologies, and proven methodologies that deliver results."
    },
    {
      title: "Digital Solutions",
      subtitle: "for Tomorrow",
      description: "Comprehensive IT services including custom software development, cloud solutions, cybersecurity, and digital transformation strategies."
    },
    {
      title: "Technology That",
      subtitle: "Matters",
      description: "Empowering businesses with cutting-edge technology solutions, from concept to deployment, ensuring your digital success in today's competitive market."
    },
    {
      title: "Code. Deploy.",
      subtitle: "Succeed.",
      description: "Full-stack development expertise delivering scalable, secure, and high-performance applications that drive business innovation and growth."
    },
    {
      title: "Your Vision.",
      subtitle: "Our Expertise.",
      description: "Partnering with businesses to transform their digital landscape through innovative technology solutions and expert implementation strategies."
    }
  ];

  useEffect(() => {
    const techInterval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techIcons.length);
    }, 2000);
    
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % textVariations.length);
    }, 6000);
    
    return () => {
      clearInterval(techInterval);
      clearInterval(textInterval);
    };
  }, [techIcons.length, textVariations.length]);

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

  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br   via-black to-gray-900">
      {/* Advanced Tech Background Animation (hero banner background)*/}
      <div className="absolute inset-0">
        {/* Animated Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path
                  d="M0,10 L20,10 M10,0 L10,20 M5,5 L15,15 M15,5 L5,15"
                  stroke="rgba(239, 68, 68, 0.3)"
                  strokeWidth="0.5"
                  fill="none"
                />
                <circle cx="10" cy="10" r="1" fill="rgba(239, 68, 68, 0.4)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        {/* Animated Data Flow Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-red-400 to-transparent"
              style={{
                top: `${20 + i * 10}%`,
                left: '-100%',
                width: '200%',
              }}
              animate={{
                x: ['-100%', '100%'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Slow Motion IT Icons Moving Left to Right */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Row 1 - Top */}
          {[
            { icon: FaCode, delay: 0, size: "text-2xl", color: "text-red-400/30" },
            { icon: FaDatabase, delay: 2, size: "text-xl", color: "text-pink-400/25" },
            { icon: FaCloud, delay: 4, size: "text-3xl", color: "text-purple-400/20" },
            { icon: FaShieldAlt, delay: 6, size: "text-xl", color: "text-red-400/30" },
            { icon: FaBrain, delay: 8, size: "text-2xl", color: "text-pink-400/25" },
            { icon: FaServer, delay: 10, size: "text-xl", color: "text-purple-400/20" },
            { icon: FaRocket, delay: 12, size: "text-3xl", color: "text-red-400/30" },
            { icon: FaNetworkWired, delay: 14, size: "text-xl", color: "text-pink-400/25" },
            { icon: FaMicrochip, delay: 16, size: "text-2xl", color: "text-purple-400/20" },
            { icon: FaCogs, delay: 18, size: "text-xl", color: "text-red-400/30" }
          ].map((item, i) => (
            <motion.div
              key={`row1-${i}`}
              className={`absolute ${item.color} ${item.size}`}
              style={{
                top: '15%',
                left: '-10%',
              }}
              animate={{
                x: ['-10%', '110%'],
                y: [0, -10, 0],
                rotate: [0, 360, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 25 + i * 2,
                repeat: Infinity,
                delay: item.delay,
                ease: "linear"
              }}
            >
              <item.icon />
            </motion.div>
          ))}

          {/* Row 2 - Middle Top */}
          {[
            { icon: FaCode, delay: 1, size: "text-xl", color: "text-pink-400/20" },
            { icon: FaDatabase, delay: 3, size: "text-3xl", color: "text-purple-400/25" },
            { icon: FaCloud, delay: 5, size: "text-xl", color: "text-red-400/20" },
            { icon: FaShieldAlt, delay: 7, size: "text-2xl", color: "text-pink-400/25" },
            { icon: FaBrain, delay: 9, size: "text-xl", color: "text-purple-400/20" },
            { icon: FaServer, delay: 11, size: "text-3xl", color: "text-red-400/25" },
            { icon: FaRocket, delay: 13, size: "text-xl", color: "text-pink-400/20" },
            { icon: FaNetworkWired, delay: 15, size: "text-2xl", color: "text-purple-400/25" },
            { icon: FaMicrochip, delay: 17, size: "text-xl", color: "text-red-400/20" },
            { icon: FaCogs, delay: 19, size: "text-3xl", color: "text-pink-400/25" }
          ].map((item, i) => (
            <motion.div
              key={`row2-${i}`}
              className={`absolute ${item.color} ${item.size}`}
              style={{
                top: '35%',
                left: '-10%',
              }}
              animate={{
                x: ['-10%', '110%'],
                y: [0, 15, 0],
                rotate: [0, -360, 0],
                scale: [0.6, 1.4, 0.6],
              }}
              transition={{
                duration: 30 + i * 1.5,
                repeat: Infinity,
                delay: item.delay,
                ease: "linear"
              }}
            >
              <item.icon />
            </motion.div>
          ))}

          {/* Row 3 - Middle */}
          {[
            { icon: FaCode, delay: 0.5, size: "text-3xl", color: "text-purple-400/30" },
            { icon: FaDatabase, delay: 2.5, size: "text-xl", color: "text-red-400/25" },
            { icon: FaCloud, delay: 4.5, size: "text-2xl", color: "text-pink-400/30" },
            { icon: FaShieldAlt, delay: 6.5, size: "text-xl", color: "text-purple-400/25" },
            { icon: FaBrain, delay: 8.5, size: "text-3xl", color: "text-red-400/30" },
            { icon: FaServer, delay: 10.5, size: "text-xl", color: "text-pink-400/25" },
            { icon: FaRocket, delay: 12.5, size: "text-2xl", color: "text-purple-400/30" },
            { icon: FaNetworkWired, delay: 14.5, size: "text-xl", color: "text-red-400/25" },
            { icon: FaMicrochip, delay: 16.5, size: "text-3xl", color: "text-pink-400/30" },
            { icon: FaCogs, delay: 18.5, size: "text-xl", color: "text-purple-400/25" }
          ].map((item, i) => (
            <motion.div
              key={`row3-${i}`}
              className={`absolute ${item.color} ${item.size}`}
              style={{
                top: '55%',
                left: '-10%',
              }}
              animate={{
                x: ['-10%', '110%'],
                y: [0, -20, 0],
                rotate: [0, 180, 0],
                scale: [0.7, 1.3, 0.7],
              }}
              transition={{
                duration: 35 + i * 1,
                repeat: Infinity,
                delay: item.delay,
                ease: "linear"
              }}
            >
              <item.icon />
            </motion.div>
          ))}

          {/* Row 4 - Middle Bottom */}
          {[
            { icon: FaCode, delay: 1.5, size: "text-xl", color: "text-red-400/20" },
            { icon: FaDatabase, delay: 3.5, size: "text-2xl", color: "text-pink-400/25" },
            { icon: FaCloud, delay: 5.5, size: "text-xl", color: "text-purple-400/20" },
            { icon: FaShieldAlt, delay: 7.5, size: "text-3xl", color: "text-red-400/25" },
            { icon: FaBrain, delay: 9.5, size: "text-xl", color: "text-pink-400/20" },
            { icon: FaServer, delay: 11.5, size: "text-2xl", color: "text-purple-400/25" },
            { icon: FaRocket, delay: 13.5, size: "text-xl", color: "text-red-400/20" },
            { icon: FaNetworkWired, delay: 15.5, size: "text-3xl", color: "text-pink-400/25" },
            { icon: FaMicrochip, delay: 17.5, size: "text-xl", color: "text-purple-400/20" },
            { icon: FaCogs, delay: 19.5, size: "text-2xl", color: "text-red-400/25" }
          ].map((item, i) => (
            <motion.div
              key={`row4-${i}`}
              className={`absolute ${item.color} ${item.size}`}
              style={{
                top: '75%',
                left: '-10%',
              }}
              animate={{
                x: ['-10%', '110%'],
                y: [0, 10, 0],
                rotate: [0, -180, 0],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 28 + i * 2.5,
                repeat: Infinity,
                delay: item.delay,
                ease: "linear"
              }}
            >
              <item.icon />
            </motion.div>
          ))}

          {/* Row 5 - Bottom */}
          {[
            { icon: FaCode, delay: 2, size: "text-2xl", color: "text-pink-400/30" },
            { icon: FaDatabase, delay: 4, size: "text-xl", color: "text-purple-400/25" },
            { icon: FaCloud, delay: 6, size: "text-3xl", color: "text-red-400/30" },
            { icon: FaShieldAlt, delay: 8, size: "text-xl", color: "text-pink-400/25" },
            { icon: FaBrain, delay: 10, size: "text-2xl", color: "text-purple-400/30" },
            { icon: FaServer, delay: 12, size: "text-xl", color: "text-red-400/25" },
            { icon: FaRocket, delay: 14, size: "text-3xl", color: "text-pink-400/30" },
            { icon: FaNetworkWired, delay: 16, size: "text-xl", color: "text-purple-400/25" },
            { icon: FaMicrochip, delay: 18, size: "text-2xl", color: "text-red-400/30" },
            { icon: FaCogs, delay: 20, size: "text-xl", color: "text-pink-400/25" }
          ].map((item, i) => (
            <motion.div
              key={`row5-${i}`}
              className={`absolute ${item.color} ${item.size}`}
              style={{
                top: '90%',
                left: '-10%',
              }}
              animate={{
                x: ['-10%', '110%'],
                y: [0, -15, 0],
                rotate: [0, 360, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 32 + i * 1.8,
                repeat: Infinity,
                delay: item.delay,
                ease: "linear"
              }}
            >
              <item.icon />
            </motion.div>
          ))}
        </div>

        {/* Floating Code Snippets */}
        <div className="absolute inset-0 overflow-hidden">
          {[
            { code: "const tech = 'future';", x: 10, y: 20, delay: 0 },
            { code: "function innovate() {", x: 80, y: 15, delay: 1 },
            { code: "  return success;", x: 15, y: 60, delay: 2 },
            { code: "}", x: 85, y: 70, delay: 3 },
            { code: "AI.machineLearning()", x: 20, y: 40, delay: 4 },
            { code: "cloud.deploy()", x: 70, y: 50, delay: 5 },
            { code: "security.protect()", x: 30, y: 80, delay: 6 },
            { code: "data.analyze()", x: 60, y: 25, delay: 7 }
          ].map((snippet, i) => (
            <motion.div
              key={i}
              className="absolute text-xs font-mono text-red-400/60 bg-black/20 px-2 py-1 rounded backdrop-blur-sm"
              style={{
                left: `${snippet.x}%`,
                top: `${snippet.y}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 0.8, 0],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 6 + i * 0.3,
                repeat: Infinity,
                delay: snippet.delay,
                ease: "easeInOut"
              }}
            >
              {snippet.code}
            </motion.div>
          ))}
        </div>

        {/* Animated Tech Icons Grid */}
        <div className="absolute inset-0 overflow-hidden">
          {[
            { icon: FaCode, x: 5, y: 10, delay: 0 },
            { icon: FaDatabase, x: 90, y: 15, delay: 0.5 },
            { icon: FaCloud, x: 10, y: 85, delay: 1 },
            { icon: FaShieldAlt, x: 85, y: 80, delay: 1.5 },
            { icon: FaBrain, x: 25, y: 5, delay: 2 },
            { icon: FaServer, x: 75, y: 90, delay: 2.5 },
            { icon: FaRocket, x: 50, y: 5, delay: 3 },
            { icon: FaNetworkWired, x: 5, y: 50, delay: 3.5 },
            { icon: FaMicrochip, x: 95, y: 50, delay: 4 },
            { icon: FaCogs, x: 50, y: 95, delay: 4.5 }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="absolute text-red-400/40 hover:text-red-400/80 transition-colors duration-300"
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
              }}
              animate={{
                y: [0, -15, 0],
                x: [0, 5, 0],
                rotate: [0, 5, 0],
                scale: [0.8, 1.1, 0.8],
              }}
              transition={{
                duration: 8 + i * 0.5,
                repeat: Infinity,
                delay: item.delay,
                ease: "easeInOut"
              }}
              whileHover={{
                scale: 1.3,
                color: "rgba(239, 68, 68, 1)"
              }}
            >
              <item.icon className="text-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Animated Binary Rain */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-400/30 font-mono text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10%',
              }}
              animate={{
                y: ['-10%', '110%'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </motion.div>
          ))}
        </div>

        {/* Animated Network Nodes */}
        <div className="absolute inset-0 overflow-hidden">
          {[
            { x: 20, y: 30, connections: [1, 2, 3] },
            { x: 60, y: 20, connections: [0, 2, 4] },
            { x: 40, y: 60, connections: [0, 1, 3, 4] },
            { x: 80, y: 70, connections: [0, 2, 4] },
            { x: 50, y: 40, connections: [1, 2, 3] }
          ].map((node, i) => (
            <div key={i}>
              {/* Node */}
              <motion.div
                className="absolute w-3 h-3 bg-gradient-to-r from-red-400 to-pink-400 rounded-full"
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
              
              {/* Connections */}
              {node.connections.map((connIndex, j) => {
                const targetNode = [
                  { x: 20, y: 30 },
                  { x: 60, y: 20 },
                  { x: 40, y: 60 },
                  { x: 80, y: 70 },
                  { x: 50, y: 40 }
                ][connIndex];
                
                return (
                  <motion.div
                    key={j}
                    className="absolute h-px bg-gradient-to-r from-red-400/60 to-pink-400/60"
                    style={{
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                      width: `${Math.sqrt(Math.pow(targetNode.x - node.x, 2) + Math.pow(targetNode.y - node.y, 2))}%`,
                      transformOrigin: 'left center',
                      transform: `rotate(${Math.atan2(targetNode.y - node.y, targetNode.x - node.x) * 180 / Math.PI}deg)`,
                    }}
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.3 + j * 0.2,
                    }}
                  />
                );
              })}
            </div>
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

        {/* Mouse-Responsive Grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
      </div>

      {/* Central Content */}
      <div className="relative z-10 text-center text-white px-4 w-full max-w-none mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
            {/* Dynamic Animated Title */}
            <div className="relative h-32 md:h-36 lg:h-40 mb-6 overflow-visible w-full">
              {/* Sci-fi Scan Lines Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent"
                initial={{ opacity: 0, y: -100 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  y: [0, 100, 200]
                }}
                transition={{ 
                  duration: 2,
                  delay: 0.2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              />
              
              <motion.h1 
                key={`title-${currentText}`}
                className="absolute inset-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight flex flex-col items-center justify-center px-8 sm:px-16 md:px-24 lg:px-32 xl:px-40 w-full"
                initial={{ 
                  x: currentText % 2 === 0 ? -100 : 100, 
                  opacity: 0,
                  scale: 0.8
                }}
                animate={{ 
                  x: 0, 
                  opacity: 1,
                  scale: 1
                }}
                exit={{ 
                  x: currentText % 2 === 0 ? 100 : -100, 
                  opacity: 0,
                  scale: 0.8
                }}
                transition={{ 
                  duration: 1.2, 
                  ease: "easeInOut",
                  delay: 0.2
                }}
              >
                <motion.span 
                  className="bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent text-center w-full relative"
                  initial={{ 
                    x: currentText % 2 === 0 ? -100 : 100, 
                    opacity: 0,
                    scale: 0.3,
                    filter: "blur(15px) brightness(0.5)"
                  }}
                  animate={{ 
                    x: 0, 
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px) brightness(1)"
                  }}
                  transition={{ 
                    duration: 1.8, 
                    delay: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  {textVariations[currentText].title}
                  
                  {/* Multi-layered Sci-fi Effects */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-pink-400/30 to-purple-400/30 blur-md"
                    initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
                    animate={{ 
                      opacity: [0, 1, 0.6, 1, 0.3, 1, 0],
                      scale: [0.5, 1.3, 1, 1.2, 1, 1.1, 1],
                      rotate: [-5, 2, -1, 1, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      delay: 0.6,
                      repeat: Infinity,
                      repeatDelay: 2.5
                    }}
                  />
                  
                  {/* Holographic Scan Lines */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-300/20 to-transparent"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ 
                      y: [0, 100, 0],
                      opacity: [0, 0.8, 0]
                    }}
                    transition={{ 
                      duration: 1.5,
                      delay: 0.8,
                      repeat: Infinity,
                      repeatDelay: 4
                    }}
                  />
                  
                  {/* Energy Pulse */}
                  <motion.div
                    className="absolute inset-0 border border-cyan-400/40 rounded-lg"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ 
                      scale: [0.8, 1.1, 0.8],
                      opacity: [0, 0.6, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      delay: 1,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  />
                </motion.span>
                {/* <br /> */}
                <motion.span 
                  className="mt-2 md:mt-6 bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent text-center w-full relative"
                  initial={{ 
                    x: currentText % 2 === 0 ? 100 : -100, 
                    opacity: 0,
                    scale: 0.3,
                    filter: "blur(15px) brightness(0.5) saturate(2)"
                  }}
                  animate={{ 
                    x: 0, 
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px) brightness(1) saturate(1)"
                  }}
                  transition={{ 
                    duration: 1.8, 
                    delay: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  {textVariations[currentText]?.subtitle}
                  
                  {/* Advanced Energy Field */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-400/40 via-pink-400/40 to-purple-400/40 blur-lg"
                    initial={{ opacity: 0, scale: 0.3, rotate: 5 }}
                    animate={{ 
                      opacity: [0, 1, 0.7, 1, 0.4, 1, 0],
                      scale: [0.3, 1.4, 1, 1.3, 1, 1.2, 1],
                      rotate: [5, -2, 1, -1, 0]
                    }}
                    transition={{ 
                      duration: 3.5,
                      delay: 0.8,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  />
                  
                  {/* Matrix-style Digital Rain */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/10 to-transparent"
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ 
                      y: [0, 120, 0],
                      opacity: [0, 0.6, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      delay: 1.2,
                      repeat: Infinity,
                      repeatDelay: 3.5
                    }}
                  />
                  
                  {/* Holographic Glitch Effect */}
                  <motion.div
                    className="absolute inset-0 border-2 border-pink-400/50 rounded-lg"
                    initial={{ scale: 0.9, opacity: 0, rotateX: 45 }}
                    animate={{ 
                      scale: [0.9, 1.05, 0.9],
                      opacity: [0, 0.8, 0],
                      rotateX: [45, 0, 45]
                    }}
                    transition={{ 
                      duration: 1.8,
                      delay: 1.4,
                      repeat: Infinity,
                      repeatDelay: 4
                    }}
                  />
                  
                  {/* Energy Core Pulse */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-radial from-pink-400/20 via-transparent to-transparent"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 2, 0],
                      opacity: [0, 0.8, 0]
                    }}
                    transition={{ 
                      duration: 2.5,
                      delay: 1.6,
                      repeat: Infinity,
                      repeatDelay: 2.8
                    }}
                  />
                </motion.span>
              </motion.h1>
            </div>
            
            {/* Dynamic Animated Description */}
            <div className="relative h-24 md:h-28 lg:h-32 mb-8 overflow-visible w-full">
              <motion.div 
                key={`desc-${currentText}`}
                className="absolute inset-0 text-base sm:text-lg md:text-xl lg:text-2xl text-pink-100 w-full leading-relaxed flex items-center justify-center px-8 sm:px-16 md:px-24 lg:px-32 xl:px-40 text-center"
                initial={{ 
                  x: currentText % 2 === 0 ? -100 : 100, 
                  opacity: 0,
                  y: 20,
                  scale: 0.6,
                  filter: "blur(12px) brightness(0.3) contrast(2)"
                }}
                animate={{ 
                  x: 0, 
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px) brightness(1) contrast(1)"
                }}
                exit={{ 
                  x: currentText % 2 === 0 ? 100 : -100, 
                  opacity: 0,
                  y: -20,
                  scale: 0.6,
                  filter: "blur(12px) brightness(0.3) contrast(2)"
                }}
                transition={{ 
                  duration: 2.2, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.4
                }}
              >
                {textVariations[currentText].description}
                
                {/* Multi-layered Holographic Effects */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-400/15 via-purple-400/15 to-cyan-400/15 blur-md"
                  initial={{ opacity: 0, scale: 0.7, rotate: -3 }}
                  animate={{ 
                    opacity: [0, 0.8, 0.4, 0.8, 0.2, 0.8, 0],
                    scale: [0.7, 1.2, 1, 1.1, 1, 1.05, 1],
                    rotate: [-3, 2, -1, 1, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    delay: 0.8,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                />
                
                {/* Neural Network Scan */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/8 to-transparent"
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ 
                    y: [0, 140, 0],
                    opacity: [0, 0.7, 0]
                  }}
                  transition={{ 
                    duration: 2.5,
                    delay: 1.2,
                    repeat: Infinity,
                    repeatDelay: 3.5
                  }}
                />
                
                {/* Quantum Field Pulse */}
                <motion.div
                  className="absolute inset-0 border border-purple-400/30 rounded-xl"
                  initial={{ scale: 0.8, opacity: 0, rotateY: 30 }}
                  animate={{ 
                    scale: [0.8, 1.08, 0.8],
                    opacity: [0, 0.6, 0],
                    rotateY: [30, 0, 30]
                  }}
                  transition={{ 
                    duration: 2.2,
                    delay: 1.6,
                    repeat: Infinity,
                    repeatDelay: 3.8
                  }}
                />
                
                {/* Data Stream Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ 
                    x: [0, 100, 0],
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{ 
                    duration: 1.8,
                    delay: 2,
                    repeat: Infinity,
                    repeatDelay: 4.2
                  }}
                />
                
                {/* Holographic Glitch Lines */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-pink-400/10 via-transparent to-cyan-400/10"
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ 
                    scaleY: [0, 1, 0],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{ 
                    duration: 0.8,
                    delay: 2.4,
                    repeat: Infinity,
                    repeatDelay: 5
                  }}
                />
              </motion.div>
            </div>

          {/* Rotating Tech Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center mb-6">
              <motion.div
                key={currentTech}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`w-20 h-20 bg-gradient-to-r ${techIcons[currentTech].color} rounded-full flex items-center justify-center`}
              >
                {React.createElement(techIcons[currentTech].icon, { className: "text-3xl text-white" })}
              </motion.div>
            </div>
            
            <motion.div
              key={`tech-${currentTech}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                {techIcons[currentTech].name}
              </h3>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              className="text-[14px] md:text-base px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300 flex items-center gap-2 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
                              onClick={() => {
                  openModal();
                  setShowFormModal(true);
                }}
            >
              Get Started Now
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            {/* <motion.button
              className="px-8 py-4 border-2 border-white/50 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2 group backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPlay className="group-hover:scale-110 transition-transform" />
              Watch Demo
            </motion.button> */}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-pink-400/50 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-gradient-to-b from-red-400 to-pink-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
              <FormModal
          open={showFormModal}
          onClose={() => {
            closeModal();
            setShowFormModal(false);
          }}
        />
    </section>
  );
};

export default HeroBanner; 