import { useState, useRef } from "react";
import { useSpring, animated, useTrail, config } from "@react-spring/web";
import Navbar from "../../Components/Navbar";
import { useModal } from "../../Context/ModalContext";
import AnimatedTechBackground from "../../Components/AnimatedTechBackground";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { 
  FaRocket, 
  FaCog, 
  FaChartLine, 
  FaLightbulb,
  FaCheckCircle,
  FaArrowRight,
  FaUsers,
  FaShieldAlt,
  FaMicrochip,
  FaBrain,
  FaCogs,
  FaClipboardCheck,
  FaProjectDiagram,
  FaCubes,
  FaDatabase,
  FaCloud,
  FaRobot,
  FaStar,
  FaAward
} from "react-icons/fa";

const DigitalTransformation = () => {
  const { openModal } = useModal();
  const [selectedStep, setSelectedStep] = useState(0);

  const processSteps = [
    {
      step: "01",
      title: "Assessment",
      description: "Comprehensive analysis of your current systems, processes, and digital readiness.",
      icon: FaClipboardCheck,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02",
      title: "Strategy",
      description: "Develop a customized digital transformation roadmap aligned with your business goals.",
      icon: FaProjectDiagram,
      color: "from-green-500 to-emerald-500"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute the transformation plan with modern technologies and best practices.",
      icon: FaCogs,
      color: "from-red-500 to-pink-500"
    },
    {
      step: "04",
      title: "Growth",
      description: "Continuous optimization and scaling to drive sustainable business growth.",
      icon: FaRocket,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const technologies = [
    { name: "AI & ML", icon: FaBrain, color: "from-purple-500 to-pink-500", description: "Artificial Intelligence" },
    { name: "Cloud", icon: FaCloud, color: "from-blue-500 to-cyan-500", description: "Cloud Computing" },
    { name: "IoT", icon: FaMicrochip, color: "from-green-500 to-emerald-500", description: "Internet of Things" },
    { name: "RPA", icon: FaRobot, color: "from-red-500 to-pink-500", description: "Robotic Process Automation" },
    { name: "Blockchain", icon: FaCubes, color: "from-indigo-500 to-purple-500", description: "Blockchain Technology" },
    { name: "Big Data", icon: FaDatabase, color: "from-cyan-500 to-blue-500", description: "Big Data Analytics" }
  ];

  const solutions = [
    {
      title: "Process Automation",
      description: "Automate repetitive tasks and streamline workflows for improved efficiency.",
      icon: FaCogs,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data Analytics",
      description: "Transform data into actionable insights for better decision making.",
      icon: FaChartLine,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cloud Migration",
      description: "Move your infrastructure to the cloud for scalability and cost savings.",
      icon: FaCloud,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Integration",
      description: "Implement AI solutions to enhance customer experience and operations.",
      icon: FaBrain,
      color: "from-red-500 to-pink-500"
    }
  ];

  const benefits = [
    {
      icon: FaRocket,
      title: "Increased Efficiency",
      description: "Streamline operations and reduce manual work with automation.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaChartLine,
      title: "Better Insights",
      description: "Make data-driven decisions with advanced analytics and reporting.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FaUsers,
      title: "Enhanced Experience",
      description: "Improve customer and employee experience with modern solutions.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FaShieldAlt,
      title: "Future-Ready",
      description: "Prepare your business for the digital future with scalable solutions.",
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navbar />
      
      {/* Hero Banner with Advanced Digital Transformation Tech Background */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/5 to-purple-500/10"></div>
          
          {/* Transformation Flow Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="transform-flow" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                  <path d="M0,8 L16,8 M8,0 L8,16 M4,4 L12,12 M12,4 L4,12" stroke="rgba(34, 197, 94, 0.4)" strokeWidth="0.5" fill="none" />
                  <circle cx="8" cy="8" r="1.2" fill="rgba(59, 130, 246, 0.5)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#transform-flow)" />
            </svg>
          </div>

          {/* Moving Transformation Tech Icons */}
          <div className="absolute inset-0 overflow-hidden">
            {[
              { icon: FaRocket, delay: 0, size: "text-2xl", color: "text-green-400/30", y: "15%" },
              { icon: FaCog, delay: 2, size: "text-xl", color: "text-blue-400/25", y: "15%" },
              { icon: FaChartLine, delay: 4, size: "text-3xl", color: "text-purple-400/20", y: "15%" },
              { icon: FaLightbulb, delay: 6, size: "text-xl", color: "text-green-400/30", y: "15%" },
              { icon: FaRocket, delay: 8, size: "text-2xl", color: "text-blue-400/25", y: "15%" },
              { icon: FaCog, delay: 10, size: "text-xl", color: "text-purple-400/20", y: "15%" },
              { icon: FaChartLine, delay: 12, size: "text-3xl", color: "text-green-400/30", y: "15%" },
              { icon: FaLightbulb, delay: 14, size: "text-xl", color: "text-blue-400/25", y: "15%" },
              { icon: FaRocket, delay: 16, size: "text-2xl", color: "text-purple-400/20", y: "15%" },
              { icon: FaCog, delay: 18, size: "text-xl", color: "text-green-400/30", y: "15%" },
              { icon: FaRocket, delay: 1, size: "text-xl", color: "text-blue-400/20", y: "55%" },
              { icon: FaCog, delay: 3, size: "text-3xl", color: "text-purple-400/25", y: "55%" },
              { icon: FaChartLine, delay: 5, size: "text-xl", color: "text-green-400/20", y: "55%" },
              { icon: FaLightbulb, delay: 7, size: "text-2xl", color: "text-blue-400/25", y: "55%" },
              { icon: FaRocket, delay: 9, size: "text-xl", color: "text-purple-400/20", y: "55%" },
              { icon: FaCog, delay: 11, size: "text-3xl", color: "text-green-400/25", y: "55%" },
              { icon: FaChartLine, delay: 13, size: "text-xl", color: "text-blue-400/20", y: "55%" },
              { icon: FaLightbulb, delay: 15, size: "text-2xl", color: "text-purple-400/25", y: "55%" },
              { icon: FaRocket, delay: 17, size: "text-xl", color: "text-green-400/20", y: "55%" },
              { icon: FaCog, delay: 19, size: "text-3xl", color: "text-blue-400/25", y: "55%" }
            ].map((item, i) => (
              <animated.div
                key={`dt-tech-${i}`}
                className={`absolute ${item.color} ${item.size}`}
                style={{
                  top: item.y,
                  left: '-10%',
                }}
                animate={{
                  x: ['-10%', '110%'],
                  y: [0, Math.sin(i * 0.25) * 38, 0],
                  rotate: [0, 360, 0],
                  scale: [0.8, 1.5, 0.8],
                }}
                transition={{
                  duration: 36 + i * 2,
                  repeat: Infinity,
                  delay: item.delay,
                  ease: "linear"
                }}
              >
                <item.icon />
              </animated.div>
            ))}
          </div>

          {/* Floating Transformation Code Snippets */}
          <div className="absolute inset-0 overflow-hidden">
            {[
              { code: "digital.transform()", x: 10, y: 25, delay: 0 },
              { code: "automate.process()", x: 80, y: 20, delay: 1 },
              { code: "modernize.legacy()", x: 15, y: 65, delay: 2 },
              { code: "optimize.workflow()", x: 85, y: 75, delay: 3 },
              { code: "AI.integrate()", x: 20, y: 45, delay: 4 },
              { code: "cloud.migrate()", x: 70, y: 55, delay: 5 },
              { code: "data.analyze()", x: 30, y: 85, delay: 6 },
              { code: "strategy.execute()", x: 60, y: 30, delay: 7 }
            ].map((snippet, i) => (
              <animated.div
                key={i}
                className="absolute text-xs font-mono text-green-400/60 bg-black/20 px-2 py-1 rounded backdrop-blur-sm"
                style={{
                  left: `${snippet.x}%`,
                  top: `${snippet.y}%`,
                }}
                animate={{
                  y: [0, -27, 0],
                  opacity: [0, 0.94, 0],
                  scale: [0.8, 1.14, 0.8],
                }}
                transition={{
                  duration: 7.8 + i * 0.3,
                  repeat: Infinity,
                  delay: snippet.delay,
                  ease: "easeInOut"
                }}
              >
                {snippet.code}
              </animated.div>
            ))}
          </div>

          {/* Animated Gradient Orbs */}
          {[
            { x: 15, y: 25, size: 200, color: 'from-green-500/20 to-blue-500/20', delay: 0 },
            { x: 75, y: 15, size: 150, color: 'from-blue-500/20 to-purple-500/20', delay: 2 },
            { x: 25, y: 75, size: 180, color: 'from-purple-500/20 to-green-500/20', delay: 4 },
            { x: 85, y: 80, size: 120, color: 'from-green-500/20 to-blue-500/20', delay: 6 }
          ].map((orb, i) => (
            <animated.div
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
                scale: [1, 1.35, 1],
                opacity: [0.3, 0.75, 0.3],
                x: [0, 30, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 10.2 + i,
                repeat: Infinity,
                delay: orb.delay,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Particle Effects */}
          {[...Array(27)].map((_, i) => (
            <animated.div
              key={`dt-particle-${i}`}
              className="absolute w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                y: [0, -68, 0],
                x: [0, Math.random() * 135 - 67.5, 0],
              }}
              transition={{
                duration: 5.8 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <animated.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <animated.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent">
                Reimagine Your Business
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Digitally
              </span>
            </animated.h1>
            
            <animated.p 
              className="text-xl sm:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your business with <span className="text-green-300 font-bold">modernization</span> and 
              <span className="text-blue-300 font-bold"> automation solutions</span> that drive growth.
            </animated.p>

            <animated.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <animated.button
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-green-500/40 transition-all duration-300 flex items-center gap-2 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Digital Journey
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </animated.button>
              <animated.button
                className="px-8 py-4 border-2 border-white/50 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2 group backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Assessment
                <FaClipboardCheck className="group-hover:scale-110 transition-transform" />
              </animated.button>
            </animated.div>
          </animated.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <animated.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                  Modernization & Automation
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We help businesses modernize their operations with cutting-edge technologies, 
                automation solutions, and digital strategies that drive efficiency and growth.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From legacy system modernization to AI implementation, we transform your business 
                processes to meet the demands of the digital age.
              </p>
              <div className="flex flex-wrap gap-4">
                <animated.div
                  className="flex items-center gap-2 bg-gradient-to-r from-green-50 to-blue-50 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700 font-medium">Legacy Modernization</span>
                </animated.div>
                <animated.div
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700 font-medium">Process Automation</span>
                </animated.div>
                <animated.div
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700 font-medium">AI Integration</span>
                </animated.div>
              </div>
            </animated.div>

            <animated.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Digital Transformation"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                <animated.div
                  className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Digital Future</h3>
                  <p className="text-gray-600">Transform your business today</p>
                </animated.div>
              </div>
            </animated.div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <animated.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                Transformation Process
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for successful digital transformation
            </p>
          </animated.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <animated.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
                onMouseEnter={() => setSelectedStep(index)}
                whileHover={{ scale: 1.05, y: -8 }}
              >
                <animated.div 
                  className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-green-300 transition-all duration-300 group-hover:shadow-xl shadow-lg h-full relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 20px 40px rgba(34, 197, 94, 0.2)",
                  }}
                >
                  <animated.div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 rounded-3xl`}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-green-100/30 to-transparent rounded-bl-3xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-lg`}>
                        <step.icon className="text-xl text-white" />
                      </div>
                      <div className="text-3xl font-bold text-gray-300">{step.step}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </animated.div>
              </animated.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <animated.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technologies for digital transformation
            </p>
          </animated.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <animated.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
                whileHover={{ scale: 1.15, rotate: 5, y: -8 }}
              >
                <animated.div 
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-green-300 transition-all duration-300 group-hover:shadow-lg shadow-md text-center relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 15px 30px rgba(34, 197, 94, 0.25)",
                  }}
                >
                  <animated.div
                    className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl`}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <tech.icon className="text-lg text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300 mb-1">
                    {tech.name}
                  </h4>
                  <p className="text-xs text-gray-500">{tech.description}</p>
                </div>
                </animated.div>
              </animated.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <animated.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                Our Solutions
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital transformation solutions
            </p>
          </animated.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <animated.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
                whileHover={{ scale: 1.1, y: -8, rotate: 2 }}
              >
                <animated.div 
                  className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-green-300 transition-all duration-300 group-hover:shadow-2xl shadow-lg h-full relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 25px 50px rgba(34, 197, 94, 0.25)",
                  }}
                >
                  <animated.div
                    className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 rounded-3xl`}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 transition-transform duration-300 shadow-lg`}>
                    <solution.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
                </animated.div>
              </animated.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <animated.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                Transformation Benefits
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable improvements from digital transformation
            </p>
          </animated.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <animated.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
                whileHover={{ scale: 1.1, y: -8 }}
              >
                <animated.div 
                  className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-green-300 transition-all duration-300 group-hover:shadow-2xl shadow-lg h-full relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 25px 50px rgba(34, 197, 94, 0.25)",
                  }}
                >
                  <animated.div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 rounded-3xl`}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 transition-transform duration-300 shadow-lg`}>
                    <benefit.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
                </animated.div>
              </animated.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <AnimatedTechBackground variant="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <animated.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                Why Choose Our Digital Transformation Services?
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven expertise in transforming businesses for the digital age
            </p>
          </animated.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaRocket,
                title: "40% Efficiency Gain",
                description: "Average efficiency improvement of 40% for businesses we've transformed.",
                color: "from-green-500 to-blue-500"
              },
              {
                icon: FaLightbulb,
                title: "Strategic Consulting",
                description: "Expert consultants who understand both technology and business strategy.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: FaChartLine,
                title: "Data-Driven Results",
                description: "Make informed decisions with advanced analytics and business intelligence.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: FaUsers,
                title: "Change Management",
                description: "Comprehensive support for organizational change and user adoption.",
                color: "from-red-500 to-pink-500"
              },
              {
                icon: FaShieldAlt,
                title: "Future-Proof Solutions",
                description: "Build for tomorrow with scalable, adaptable, and modern technologies.",
                color: "from-indigo-500 to-purple-500"
              },
              {
                icon: FaAward,
                title: "Industry Recognition",
                description: "Award-winning transformation projects recognized by industry leaders.",
                color: "from-yellow-500 to-orange-500"
              }
            ].map((item, index) => (
              <animated.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
                whileHover={{ scale: 1.08, y: -10, rotate: 1 }}
              >
                <animated.div 
                  className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-green-300 transition-all duration-300 group-hover:shadow-2xl shadow-lg h-full relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 25px 50px rgba(34, 197, 94, 0.25)",
                  }}
                >
                  <animated.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-3xl`}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 transition-transform duration-300 shadow-lg`}>
                      <item.icon className="text-2xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </animated.div>
              </animated.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <AnimatedTechBackground variant="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <animated.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </animated.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Lisa Anderson",
                role: "CEO, ModernBiz Solutions",
                content: "Piweb Tech's digital transformation strategy revolutionized our operations. We achieved 40% efficiency gains and streamlined our entire workflow. Exceptional service!",
                rating: 5,
                image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                name: "James Wilson",
                role: "Operations Director, TechFlow Inc.",
                content: "The automation solutions implemented by Piweb Tech have transformed our business processes. We've reduced manual work by 60% and improved accuracy significantly.",
                rating: 5,
                image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                name: "Maria Garcia",
                role: "CTO, DigitalFirst Corp",
                content: "Outstanding digital transformation expertise. They helped us modernize our legacy systems and implement AI solutions that drive real business value.",
                rating: 5,
                image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
            ].map((testimonial, index) => (
              <animated.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
                whileHover={{ scale: 1.05, y: -8 }}
              >
                <animated.div 
                  className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-green-300 transition-all duration-300 group-hover:shadow-2xl shadow-lg h-full relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 25px 50px rgba(34, 197, 94, 0.25)",
                  }}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-green-100/30 to-transparent rounded-bl-3xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-lg" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </animated.div>
              </animated.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-gradient-to-br from-green-500 via-blue-500 to-purple-500 overflow-hidden">
        <AnimatedTechBackground variant="dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <animated.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12 shadow-xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Start Your Digital Journey
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transform your business with our comprehensive digital transformation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <animated.button
                onClick={openModal}
                className="px-8 py-4 bg-white text-green-600 font-bold rounded-xl hover:shadow-2xl hover:shadow-white/40 transition-all duration-300 flex items-center gap-2 mx-auto group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Begin Transformation
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </animated.button>
              <animated.button
                onClick={openModal}
                className="px-8 py-4 border-2 border-white/50 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2 mx-auto group backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Strategy Consultation
                <FaLightbulb className="group-hover:scale-110 transition-transform" />
              </animated.button>
            </div>
          </animated.div>
        </div>
      </section>

    </div>
  );
};

export default DigitalTransformation;