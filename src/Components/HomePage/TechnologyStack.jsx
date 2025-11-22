import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  FaReact, 
  FaNodeJs, 
  FaAws, 
  FaDocker, 
  FaPython, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt,
  FaServer,
  FaMobileAlt,
  FaDatabase,
  FaCloud,
  FaBrain,
  FaRobot,
  FaChartLine,
  FaCog,
  FaNetworkWired,
  FaMicrochip,
  FaShieldAlt,
  FaRocket,
  FaCode,
  FaCogs,
  FaLaptop,
  FaTabletAlt,
  FaDesktop,
  FaGlobe
} from "react-icons/fa";

const TechnologyStack = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentHighlight, setCurrentHighlight] = useState(0);
  const technologies = [
    {
      category: "Frontend",
      icon: FaReact,
      color: "from-red-500 to-pink-500",
      bgGradient: "from-red-500/10 to-pink-500/10",
      shadowColor: "shadow-red-500/30",
      accentColor: "red",
      techs: [
        { name: "React", icon: FaReact, description: "Modern UI library", level: 95 },
        { name: "Next.js", icon: FaReact, description: "Full-stack framework", level: 90 },
        { name: "Vue.js", icon: FaJs, description: "Progressive framework", level: 85 },
        { name: "Angular", icon: FaJs, description: "Enterprise framework", level: 80 },
        { name: "TypeScript", icon: FaJs, description: "Type-safe JavaScript", level: 92 },
        { name: "HTML5", icon: FaHtml5, description: "Markup language", level: 98 },
        { name: "CSS3", icon: FaCss3Alt, description: "Styling language", level: 95 }
      ]
    },
    {
      category: "Backend",
      icon: FaServer,
      color: "from-pink-500 to-purple-500",
      bgGradient: "from-pink-500/10 to-purple-500/10",
      shadowColor: "shadow-pink-500/30",
      accentColor: "pink",
      techs: [
        { name: "Node.js", icon: FaNodeJs, description: "JavaScript runtime", level: 93 },
        { name: "Python", icon: FaPython, description: "High-level language", level: 88 },
        { name: "Java", icon: FaCog, description: "Enterprise language", level: 85 },
        { name: ".NET", icon: FaCog, description: "Microsoft framework", level: 82 },
        { name: "PHP", icon: FaCog, description: "Web development", level: 80 },
        { name: "Go", icon: FaCog, description: "Efficient language", level: 75 },
        { name: "Rust", icon: FaCog, description: "Memory-safe language", level: 70 }
      ]
    },
    {
      category: "Database",
      icon: FaDatabase,
      color: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-500/10 to-indigo-500/10",
      shadowColor: "shadow-purple-500/30",
      accentColor: "purple",
      techs: [
        { name: "PostgreSQL", icon: FaDatabase, description: "Relational database", level: 90 },
        { name: "MySQL", icon: FaDatabase, description: "Open-source RDBMS", level: 88 },
        { name: "MongoDB", icon: FaDatabase, description: "NoSQL database", level: 85 },
        { name: "Redis", icon: FaDatabase, description: "In-memory store", level: 82 },
        { name: "Elasticsearch", icon: FaDatabase, description: "Search engine", level: 78 },
        { name: "Oracle", icon: FaDatabase, description: "Enterprise database", level: 75 },
        { name: "SQLite", icon: FaDatabase, description: "Lightweight database", level: 85 }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: FaCloud,
      color: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-500/10 to-blue-500/10",
      shadowColor: "shadow-indigo-500/30",
      accentColor: "indigo",
      techs: [
        { name: "AWS", icon: FaAws, description: "Amazon Web Services", level: 92 },
        { name: "Azure", icon: FaCloud, description: "Microsoft Cloud", level: 85 },
        { name: "Google Cloud", icon: FaCloud, description: "Google Cloud Platform", level: 80 },
        { name: "Docker", icon: FaDocker, description: "Containerization", level: 90 },
        { name: "Kubernetes", icon: FaCog, description: "Container orchestration", level: 85 },
        { name: "Jenkins", icon: FaCog, description: "CI/CD automation", level: 88 },
        { name: "Terraform", icon: FaCog, description: "Infrastructure as code", level: 82 }
      ]
    },
    {
      category: "Mobile",
      icon: FaMobileAlt,
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      shadowColor: "shadow-blue-500/30",
      accentColor: "blue",
      techs: [
        { name: "React Native", icon: FaReact, description: "Cross-platform mobile", level: 90 },
        { name: "Flutter", icon: FaMobileAlt, description: "Google's UI toolkit", level: 85 },
        { name: "iOS", icon: FaMobileAlt, description: "Apple platform", level: 88 },
        { name: "Android", icon: FaMobileAlt, description: "Google platform", level: 88 },
        { name: "Xamarin", icon: FaMobileAlt, description: "Microsoft mobile", level: 75 },
        { name: "Ionic", icon: FaMobileAlt, description: "Hybrid framework", level: 80 },
        { name: "Cordova", icon: FaMobileAlt, description: "PhoneGap framework", level: 78 }
      ]
    },
    {
      category: "AI & ML",
      icon: FaBrain,
      color: "from-cyan-500 to-teal-500",
      bgGradient: "from-cyan-500/10 to-teal-500/10",
      shadowColor: "shadow-cyan-500/30",
      accentColor: "cyan",
      techs: [
        { name: "TensorFlow", icon: FaBrain, description: "Machine learning", level: 85 },
        { name: "PyTorch", icon: FaBrain, description: "Deep learning", level: 82 },
        { name: "Scikit-learn", icon: FaBrain, description: "ML library", level: 88 },
        { name: "OpenAI", icon: FaRobot, description: "AI models", level: 90 },
        { name: "Hugging Face", icon: FaBrain, description: "NLP models", level: 80 },
        { name: "Pandas", icon: FaChartLine, description: "Data analysis", level: 92 },
        { name: "NumPy", icon: FaChartLine, description: "Numerical computing", level: 90 }
      ]
    }
  ];

  const floatingIcons = [
    FaCode, FaDatabase, FaCloud, FaShieldAlt, FaBrain, FaRocket,
    FaNetworkWired, FaMicrochip, FaCogs, FaLaptop, FaTabletAlt, FaDesktop,
    FaGlobe, FaServer, FaMobileAlt, FaReact, FaNodeJs, FaPython
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
      setCurrentHighlight((prev) => (prev + 1) % technologies.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [technologies.length]);

  return (
    <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Advanced Background Effects - HeroBanner Inspired */}
      <div className="absolute inset-0">
        {/* Animated Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="techCircuitPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M10 10 L90 10 L90 90 L10 90 Z" fill="none" stroke="#ef4444" strokeWidth="1"/>
                <circle cx="50" cy="50" r="3" fill="#ef4444" opacity="0.6"/>
                <path d="M10 50 L90 50 M50 10 L50 90" stroke="#ef4444" strokeWidth="0.5" opacity="0.4"/>
                <circle cx="25" cy="25" r="1.5" fill="#ec4899" opacity="0.5"/>
                <circle cx="75" cy="75" r="1.5" fill="#8b5cf6" opacity="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#techCircuitPattern)"/>
          </svg>
        </div>

        {/* Animated Data Flow Lines */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-red-400/50 to-transparent"
            style={{
              top: `${15 + i * 12}%`,
              width: '100%',
            }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear",
            }}
          />
        ))}

        {/* Floating Tech Icons - Multiple Rows */}
        {[...Array(3)].map((row, rowIndex) => (
          <div key={rowIndex} className="absolute inset-0 overflow-hidden">
            {floatingIcons.slice(rowIndex * 6, (rowIndex + 1) * 6).map((Icon, i) => (
              <motion.div
                key={`${rowIndex}-${i}`}
                className="absolute text-red-200/20"
                style={{
                  top: `${20 + rowIndex * 25}%`,
                  fontSize: `${1.2 + Math.random() * 1}rem`,
                }}
                animate={{
                  x: ['-10vw', '110vw'],
                  y: [0, -20, 0],
                  rotate: [0, 360],
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 25 + Math.random() * 15,
                  repeat: Infinity,
                  delay: i * 3 + rowIndex * 8,
                  ease: "linear",
                }}
              >
                <Icon />
              </motion.div>
            ))}
          </div>
        ))}

        {/* Dynamic Mouse-Following Gradient */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(239, 68, 68, 0.15), rgba(236, 72, 153, 0.1), rgba(147, 51, 234, 0.05), transparent 70%)`,
          }}
          animate={{
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Pulsing Orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${120 + i * 40}px`,
              height: `${120 + i * 40}px`,
              left: `${10 + i * 18}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [0, 40, 0],
              y: [0, -25, 0],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              delay: i * 2.5,
              ease: "easeInOut",
            }}
          >
            <div className={`w-full h-full rounded-full ${
              i % 4 === 0 ? 'bg-gradient-to-br from-red-400/20 to-pink-400/20' :
              i % 4 === 1 ? 'bg-gradient-to-br from-pink-400/20 to-purple-400/20' :
              i % 4 === 2 ? 'bg-gradient-to-br from-purple-400/20 to-indigo-400/20' :
              'bg-gradient-to-br from-indigo-400/20 to-blue-400/20'
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
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-red-400/30 rounded-full px-6 py-3 shadow-lg">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <FaRocket className="text-red-400 text-lg" />
              </motion.div>
              <span className="text-red-300 font-semibold text-sm">CUTTING-EDGE • SCALABLE • INNOVATIVE</span>
            </div>
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our{" "}
            <motion.span 
              className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent relative"
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
              Technology Stack
            </motion.span>
            
            {/* Glowing Underline */}
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '70%' }}
              transition={{ 
                width: { duration: 1.2, delay: 0.8 },
                boxShadow: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              }}
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
            className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            We use{" "}
            <motion.span 
              className="font-semibold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent"
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
              cutting-edge technologies
            </motion.span>
            {" "}and modern frameworks to build{" "}
            <motion.span 
              className="font-semibold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent"
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
              robust, scalable solutions
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Enhanced Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {technologies.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: categoryIndex * 0.15,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Enhanced Category Card with Advanced Effects */}
              <motion.div
                className="relative bg-gray-800/80 backdrop-blur-sm p-8 sm:p-10 rounded-3xl shadow-2xl border border-red-500/20 overflow-hidden"
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5,
                }}
                animate={{
                  borderColor: currentHighlight === categoryIndex ? 
                    `rgba(${category.accentColor === 'red' ? '239, 68, 68' : 
                           category.accentColor === 'pink' ? '236, 72, 153' : 
                           category.accentColor === 'purple' ? '147, 51, 234' : 
                           category.accentColor === 'indigo' ? '99, 102, 241' : 
                           category.accentColor === 'blue' ? '59, 130, 246' : 
                           '6, 182, 212'}, 0.6)` : 
                    'rgba(239, 68, 68, 0.2)',
                  boxShadow: currentHighlight === categoryIndex ? 
                    `0 25px 50px -12px rgba(${category.accentColor === 'red' ? '239, 68, 68' : 
                                              category.accentColor === 'pink' ? '236, 72, 153' : 
                                              category.accentColor === 'purple' ? '147, 51, 234' : 
                                              category.accentColor === 'indigo' ? '99, 102, 241' : 
                                              category.accentColor === 'blue' ? '59, 130, 246' : 
                                              '6, 182, 212'}, 0.4)` : 
                    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                }}
                transition={{ duration: 0.6 }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} rounded-3xl`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Dynamic Mesh Pattern */}
                <motion.div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.2) 0%, transparent 50%), 
                                     radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Enhanced Icon */}
                <motion.div
                  className={`relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r ${category.color} rounded-3xl flex items-center justify-center mb-8 z-10`}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    y: -5,
                  }}
                  animate={{
                    boxShadow: currentHighlight === categoryIndex ? 
                      `0 20px 40px rgba(${category.accentColor === 'red' ? '239, 68, 68' : 
                                         category.accentColor === 'pink' ? '236, 72, 153' : 
                                         category.accentColor === 'purple' ? '147, 51, 234' : 
                                         category.accentColor === 'indigo' ? '99, 102, 241' : 
                                         category.accentColor === 'blue' ? '59, 130, 246' : 
                                         '6, 182, 212'}, 0.4)` : 
                      '0 10px 25px rgba(0, 0, 0, 0.3)',
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <category.icon className="text-3xl sm:text-4xl text-white relative z-10" />
                  
                  {/* Icon Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                  
                  {/* Floating Particles around Icon */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-80"
                      style={{
                        top: `${20 + i * 15}%`,
                        left: `${15 + i * 25}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        x: [0, 10, 0],
                        scale: [0.5, 1, 0.5],
                        opacity: [0, 0.8, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </motion.div>

                {/* Enhanced Text Content */}
                <motion.h3 
                  className="text-2xl sm:text-3xl font-bold mb-8 relative z-10"
                  animate={{
                    color: currentHighlight === categoryIndex ? '#ffffff' : '#e5e7eb',
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {category.category}
                </motion.h3>

                {/* Enhanced Tech List */}
                <div className="space-y-4 relative z-10">
                  {category.techs.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: techIndex * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      viewport={{ once: true }}
                      className="flex items-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/tech"
                      whileHover={{ x: 10, scale: 1.02 }}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4 group-hover/tech:scale-110 transition-transform duration-300`}>
                        <tech.icon className="text-lg text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-white text-lg">{tech.name}</h4>
                          <span className="text-xs text-gray-400 font-medium">{tech.level}%</span>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">{tech.description}</p>
                        {/* Skill Level Bar */}
                        <div className="w-full bg-gray-700 rounded-full h-1.5">
                          <motion.div
                            className={`h-1.5 rounded-full bg-gradient-to-r ${category.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tech.level}%` }}
                            transition={{ duration: 1.5, delay: techIndex * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Corner Accent Lines */}
                <div className="absolute top-0 left-0 w-20 h-20 overflow-hidden">
                  <motion.div
                    className="absolute -top-10 -left-10 w-20 h-20 bg-red-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-20 h-20 overflow-hidden">
                  <motion.div
                    className="absolute -bottom-10 -right-10 w-20 h-20 bg-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
                  />
              </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 sm:mt-24"
        >
          <motion.div
            className="relative bg-gray-800/60 backdrop-blur-lg rounded-3xl shadow-2xl p-8 sm:p-12 max-w-6xl mx-auto border border-red-400/20 overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="whyPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    <circle cx="30" cy="30" r="2" fill="#ef4444" opacity="0.6"/>
                    <path d="M0 30 L60 30 M30 0 L30 60" stroke="#ec4899" strokeWidth="0.5" opacity="0.4"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#whyPattern)"/>
              </svg>
            </div>

            <motion.h3 
              className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Why These{" "}
              <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Technologies?
              </span>
            </motion.h3>
            
            <motion.p 
              className="text-gray-300 leading-relaxed mb-10 text-center max-w-4xl mx-auto text-lg relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We carefully select our technology stack based on{" "}
              <span className="text-red-400 font-semibold">performance</span>,{" "}
              <span className="text-pink-400 font-semibold">scalability</span>, and{" "}
              <span className="text-purple-400 font-semibold">long-term viability</span>. 
              Our team stays updated with the latest trends to deliver cutting-edge solutions.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {[
                {
                  icon: FaCog,
                  title: "Performance",
                  description: "Optimized for speed and efficiency with modern architectures",
                  color: "from-red-500 to-pink-500",
                  bgColor: "from-red-500/10 to-pink-500/10",
                  delay: 0.6
                },
                {
                  icon: FaChartLine,
                  title: "Scalability",
                  description: "Built to grow seamlessly with your business needs",
                  color: "from-pink-500 to-purple-500",
                  bgColor: "from-pink-500/10 to-purple-500/10",
                  delay: 0.8
                },
                {
                  icon: FaGitAlt,
                  title: "Community",
                  description: "Strong ecosystem support and continuous updates",
                  color: "from-purple-500 to-indigo-500",
                  bgColor: "from-purple-500/10 to-indigo-500/10",
                  delay: 1.0
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className={`relative w-20 h-20 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                    }}
                    animate={{
                      boxShadow: [
                        '0 10px 25px rgba(239, 68, 68, 0.3)',
                        '0 15px 35px rgba(236, 72, 153, 0.4)',
                        '0 10px 25px rgba(147, 51, 234, 0.3)',
                        '0 10px 25px rgba(239, 68, 68, 0.3)',
                      ],
                    }}
                    transition={{
                      boxShadow: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 1.3,
                      }
                    }}
                  >
                    <item.icon className="text-3xl text-white relative z-10" />
                    
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                    
                    {/* Background Gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                  </motion.div>
                  
                  <motion.h4 
                    className="font-bold text-white mb-3 text-xl"
                    animate={{
                      color: ['#ffffff', '#ef4444', '#ec4899', '#8b5cf6', '#ffffff'],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 2.5,
                    }}
                  >
                    {item.title}
                  </motion.h4>
                  
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyStack;
