import { useState, useEffect, useRef } from "react";
import { useSpring, animated, useTrail, config } from "@react-spring/web";
import Navbar from "../../Components/Navbar";
import { useModal } from "../../Context/ModalContext";
import AnimatedTechBackground from "../../Components/AnimatedTechBackground";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { 
  FaCode, 
  FaCog, 
  FaServer, 
  FaCloud, 
  FaShieldAlt, 
  FaUsers,
  FaChartLine,
  FaCheckCircle,
  FaArrowRight,
  FaLightbulb,
  FaRocket,
  FaDatabase,
  FaMobile,
  FaLaptop,
  FaGlobe,
  FaHeart,
  FaStar,
  FaPlay,
  FaExternalLinkAlt,
 
  FaLock,
  FaEye,
  FaThumbsUp,
  FaClock,
  FaAward,
  FaPalette,
  FaNetworkWired,
  FaMicrochip,
  FaBrain,
  FaCogs,
  FaWrench,
  FaTools,
  FaHammer,
  FaScrewdriver,
  FaClipboardCheck,
  FaProjectDiagram,
  FaLayerGroup,
  FaCubes,
  FaBox,
  FaArchive,
  FaFolder,
  FaFileCode,
  FaTerminal,
  FaKeyboard,
  FaMouse,
  FaDesktop,
  FaTabletAlt,
  FaPhone,
  FaWifi,
  FaBluetooth,
  FaUsb,
  FaHdd,
  FaMemory,
   
  FaMicrochip as FaChip,
  FaPython
} from "react-icons/fa";

const SoftwareDevelopment = () => {
  const { openModal } = useModal();

  // SEO Meta Tags
  useEffect(() => {
    document.title = "Custom Software Development Services - Piweb Tech | Tailored Software for Every Business";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Custom software development services tailored to your business needs. Scalable, secure, and user-centric solutions built with modern technologies. Expert development team.');
    
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'custom software development, software solutions, enterprise software, scalable software, secure software development');
  }, []);
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      icon: FaServer,
      title: "Scalable Architecture",
      description: "Built to grow with your business, handling increased load and users seamlessly.",
      color: "from-blue-500 to-cyan-500",
      details: ["Microservices Architecture", "Load Balancing", "Auto-scaling", "Performance Optimization"]
    },
    {
      icon: FaShieldAlt,
      title: "Enterprise Security",
      description: "Bank-level security measures to protect your data and ensure compliance.",
      color: "from-green-500 to-emerald-500",
      details: ["Data Encryption", "Access Control", "Audit Logging", "Compliance Standards"]
    },
    {
      icon: FaUsers,
      title: "User-Centric Design",
      description: "Intuitive interfaces designed with your users' needs and preferences in mind.",
      color: "from-purple-500 to-pink-500",
      details: ["UX Research", "Usability Testing", "Accessibility", "Responsive Design"]
    },
    {
      icon: FaCloud,
      title: "Cloud-Ready Solutions",
      description: "Modern cloud-native applications that leverage the power of cloud infrastructure.",
      color: "from-red-500 to-pink-500",
      details: ["Cloud Migration", "Containerization", "DevOps Integration", "Multi-cloud Support"]
    }
  ];

  const techStack = [
    { name: "Node.js", icon: FaServer, color: "from-green-500 to-emerald-500", category: "Backend" },
    { name: "React", icon: FaCode, color: "from-blue-500 to-cyan-500", category: "Frontend" },
    { name: "Python", icon: FaPython, color: "from-yellow-500 to-orange-500", category: "Backend" },
    { name: "MySQL", icon: FaDatabase, color: "from-blue-600 to-blue-800", category: "Database" },
    { name: "MongoDB", icon: FaDatabase, color: "from-green-600 to-green-800", category: "Database" },
    { name: "AWS", icon: FaCloud, color: "from-red-500 to-pink-500", category: "Cloud" },
    { name: "Docker", icon: FaBox, color: "from-blue-500 to-indigo-500", category: "DevOps" },
    { name: "Kubernetes", icon: FaCubes, color: "from-purple-500 to-pink-500", category: "DevOps" }
  ];

  const workflow = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "Deep dive into your business needs, user requirements, and technical specifications.",
      icon: FaClipboardCheck,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02",
      title: "System Architecture",
      description: "Design scalable and maintainable system architecture tailored to your needs.",
      icon: FaProjectDiagram,
      color: "from-green-500 to-emerald-500"
    },
    {
      step: "03",
      title: "Development & Coding",
      description: "Agile development process with regular iterations and continuous integration.",
      icon: FaCode,
      color: "from-red-500 to-pink-500"
    },
    {
      step: "04",
      title: "Testing & Quality",
      description: "Comprehensive testing including unit, integration, and user acceptance testing.",
      icon: FaCheckCircle,
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "05",
      title: "Deployment & Launch",
      description: "Smooth deployment with zero-downtime and comprehensive monitoring setup.",
      icon: FaRocket,
      color: "from-indigo-500 to-purple-500"
    },
    {
      step: "06",
      title: "Maintenance & Support",
      description: "Ongoing maintenance, updates, and 24/7 support to keep your software running smoothly.",
      icon: FaWrench,
      color: "from-pink-500 to-rose-500"
    }
  ];

  const solutions = [
    {
      title: "Web Applications",
      description: "Custom web applications built with modern frameworks and technologies.",
      icon: FaGlobe,
      color: "from-blue-500 to-cyan-500",
      features: ["Responsive Design", "Real-time Updates", "API Integration", "User Management"]
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: FaMobile,
      color: "from-green-500 to-emerald-500",
      features: ["Cross-platform", "Native Performance", "Offline Support", "Push Notifications"]
    },
    {
      title: "Desktop Software",
      description: "Custom desktop applications for Windows, macOS, and Linux platforms.",
      icon: FaDesktop,
      color: "from-purple-500 to-pink-500",
      features: ["Multi-platform", "System Integration", "High Performance", "Secure Storage"]
    },
    {
      title: "API Development",
      description: "RESTful and GraphQL APIs for seamless integration and data exchange.",
      icon: FaNetworkWired,
      color: "from-red-500 to-pink-500",
      features: ["RESTful Design", "GraphQL Support", "Authentication", "Rate Limiting"]
    }
  ];

  const benefits = [
    {
      icon: FaRocket,
      title: "Faster Time to Market",
      description: "Rapid development and deployment to get your product to market quickly.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaShieldAlt,
      title: "Enhanced Security",
      description: "Built-in security measures to protect your data and ensure compliance.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FaChartLine,
      title: "Better Performance",
      description: "Optimized code and architecture for superior performance and scalability.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FaUsers,
      title: "Improved User Experience",
      description: "Intuitive interfaces and smooth user interactions that delight your customers.",
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navbar />
      
      {/* Hero Banner with Advanced Software Tech Background */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-green-500/10"></div>
          
          {/* Code Grid Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="code-grid" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                  <rect width="15" height="15" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.3" />
                  <circle cx="7.5" cy="7.5" r="1" fill="rgba(6, 182, 212, 0.4)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#code-grid)" />
            </svg>
          </div>

          {/* Moving Software Tech Icons */}
          <div className="absolute inset-0 overflow-hidden">
            {[
              { icon: FaCode, delay: 0, size: "text-2xl", color: "text-blue-400/30", y: "15%" },
              { icon: FaServer, delay: 2, size: "text-xl", color: "text-cyan-400/25", y: "15%" },
              { icon: FaDatabase, delay: 4, size: "text-3xl", color: "text-green-400/20", y: "15%" },
              { icon: FaCog, delay: 6, size: "text-xl", color: "text-blue-400/30", y: "15%" },
              { icon: FaCloud, delay: 8, size: "text-2xl", color: "text-cyan-400/25", y: "15%" },
              { icon: FaCode, delay: 10, size: "text-xl", color: "text-green-400/20", y: "15%" },
              { icon: FaServer, delay: 12, size: "text-3xl", color: "text-blue-400/30", y: "15%" },
              { icon: FaDatabase, delay: 14, size: "text-xl", color: "text-cyan-400/25", y: "15%" },
              { icon: FaCog, delay: 16, size: "text-2xl", color: "text-green-400/20", y: "15%" },
              { icon: FaCloud, delay: 18, size: "text-xl", color: "text-blue-400/30", y: "15%" },
              { icon: FaCode, delay: 1, size: "text-xl", color: "text-cyan-400/20", y: "55%" },
              { icon: FaServer, delay: 3, size: "text-3xl", color: "text-green-400/25", y: "55%" },
              { icon: FaDatabase, delay: 5, size: "text-xl", color: "text-blue-400/20", y: "55%" },
              { icon: FaCog, delay: 7, size: "text-2xl", color: "text-cyan-400/25", y: "55%" },
              { icon: FaCloud, delay: 9, size: "text-xl", color: "text-green-400/20", y: "55%" },
              { icon: FaCode, delay: 11, size: "text-3xl", color: "text-blue-400/25", y: "55%" },
              { icon: FaServer, delay: 13, size: "text-xl", color: "text-cyan-400/20", y: "55%" },
              { icon: FaDatabase, delay: 15, size: "text-2xl", color: "text-green-400/25", y: "55%" },
              { icon: FaCog, delay: 17, size: "text-xl", color: "text-blue-400/20", y: "55%" },
              { icon: FaCloud, delay: 19, size: "text-3xl", color: "text-cyan-400/25", y: "55%" }
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={`sw-tech-${i}`}
                  className={`absolute ${item.color} ${item.size} animate-float`}
                  style={{
                    top: item.y,
                    left: '-10%',
                    animationDelay: `${item.delay}s`,
                    animationDuration: `${30 + i * 2}s`
                  }}
                >
                  <IconComponent />
                </div>
              );
            })}
          </div>

          {/* Floating Code Snippets */}
          <div className="absolute inset-0 overflow-hidden">
            {[
              { code: "function build() {", x: 10, y: 25, delay: 0 },
              { code: "  return code;", x: 80, y: 20, delay: 1 },
              { code: "}", x: 15, y: 65, delay: 2 },
              { code: "class Software {", x: 85, y: 75, delay: 3 },
              { code: "Node.js.run()", x: 20, y: 45, delay: 4 },
              { code: "Python.execute()", x: 70, y: 55, delay: 5 },
              { code: "Java.compile()", x: 30, y: 85, delay: 6 },
              { code: "C++.optimize()", x: 60, y: 30, delay: 7 }
            ].map((snippet, i) => (
              <div
                key={i}
                className="absolute text-xs font-mono text-blue-400/60 bg-black/20 px-2 py-1 rounded backdrop-blur-sm animate-float-code"
                style={{
                  left: `${snippet.x}%`,
                  top: `${snippet.y}%`,
                  animationDelay: `${snippet.delay}s`,
                  animationDuration: `${6.5 + i * 0.3}s`
                }}
              >
                {snippet.code}
              </div>
            ))}
          </div>

          {/* Animated Gradient Orbs */}
          {[
            { x: 15, y: 25, size: 200, color: 'from-blue-500/20 to-cyan-500/20', delay: 0 },
            { x: 75, y: 15, size: 150, color: 'from-cyan-500/20 to-green-500/20', delay: 2 },
            { x: 25, y: 75, size: 180, color: 'from-green-500/20 to-blue-500/20', delay: 4 },
            { x: 85, y: 80, size: 120, color: 'from-blue-500/20 to-cyan-500/20', delay: 6 }
          ].map((orb, i) => (
            <div
              key={i}
              className={`absolute rounded-full bg-gradient-to-r ${orb.color} blur-xl animate-pulse-orb`}
              style={{
                left: `${orb.x}%`,
                top: `${orb.y}%`,
                width: orb.size,
                height: orb.size,
                transform: 'translate(-50%, -50%)',
                animationDelay: `${orb.delay}s`,
                animationDuration: `${8.5 + i}s`
              }}
            />
          ))}

          {/* Particle Effects */}
          {[...Array(22)].map((_, i) => (
            <div
              key={`sw-particle-${i}`}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                '--random-x': `${Math.random() * 110 - 55}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4.5 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <animated.div
          >
            <animated.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Tailored Software
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                for Every Business
              </span>
            </animated.h1>
            
            <animated.p 
              className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Custom software solutions that <span className="text-blue-300 font-bold">perfectly fit</span> your 
              business needs and <span className="text-cyan-300 font-bold">scale with your growth</span>.
            </animated.p>

            <animated.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <animated.button
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 flex items-center gap-2 group"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                Get Custom Solution
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </animated.button>
              <animated.button
                className="px-8 py-4 border-2 border-white/50 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2 group backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                View Portfolio
                <FaPlay className="group-hover:scale-110 transition-transform" />
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
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Custom Development Approach
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We specialize in creating bespoke software solutions that are perfectly tailored to your 
                business requirements. Our development process ensures scalability, security, and 
                maintainability from day one.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From concept to deployment, we work closely with you to understand your vision and 
                transform it into powerful, efficient software that drives your business forward.
              </p>
              <div className="flex flex-wrap gap-4">
                <animated.div
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-2 rounded-full"
                >
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700 font-medium">Agile Development</span>
                </animated.div>
                <animated.div
                  className="flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 rounded-full"
                >
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700 font-medium">Quality Assurance</span>
                </animated.div>
                <animated.div
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-2 rounded-full"
                >
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700 font-medium">Ongoing Support</span>
                </animated.div>
              </div>
            </animated.div>

            <animated.div
              className="relative"
            >
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Custom Software Development"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                <animated.div
                  className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Bespoke Solutions</h3>
                  <p className="text-gray-600">Tailored to your exact needs</p>
                </animated.div>
              </div>
            </animated.div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <animated.div
            initial={{ opacity: 0, y: 50 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Core Features
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with modern technologies and best practices
            </p>
          </animated.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <animated.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
                onMouseEnter={() => setSelectedFeature(index)}
              >
                <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl shadow-lg h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {feature.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-500 text-sm flex-shrink-0" />
                        <span className="text-sm text-gray-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </animated.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <animated.div
            initial={{ opacity: 0, y: 50 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Technology Stack
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern technologies and frameworks for robust software development
            </p>
          </animated.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {techStack.map((tech, index) => (
              <animated.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-lg shadow-md text-center">
                  <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <tech.icon className="text-lg text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 mb-1">
                    {tech.name}
                  </h4>
                  <p className="text-xs text-gray-500">{tech.category}</p>
                </div>
              </animated.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <animated.div
            initial={{ opacity: 0, y: 50 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Development Workflow
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures quality and efficiency
            </p>
          </animated.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflow.map((step, index) => (
              <animated.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl shadow-lg h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-bl-3xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="text-xl text-white" />
                      </div>
                      <div className="text-3xl font-bold text-gray-300">{step.step}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </animated.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <animated.div
            initial={{ opacity: 0, y: 50 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Our Solutions
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive software solutions for all your business needs
            </p>
          </animated.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <animated.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl shadow-lg h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </animated.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <animated.div
            initial={{ opacity: 0, y: 50 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Why Choose Custom Development?
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The advantages of bespoke software solutions
            </p>
          </animated.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <animated.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-8 hover:border-blue-400/50 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Why Choose Our Custom Software Development?
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference of working with a team dedicated to your success
            </p>
          </animated.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaCode,
                title: "100% Custom Solutions",
                description: "Every line of code is written specifically for your business needs and requirements.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: FaRocket,
                title: "Agile Methodology",
                description: "Fast iterations, regular updates, and continuous delivery using proven agile practices.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: FaShieldAlt,
                title: "Enterprise Security",
                description: "Bank-level security measures and compliance with industry standards built-in.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: FaUsers,
                title: "Expert Developers",
                description: "Senior developers with 10+ years of experience in cutting-edge technologies.",
                color: "from-red-500 to-pink-500"
              },
              {
                icon: FaChartLine,
                title: "Scalable Architecture",
                description: "Built to grow with your business, handling millions of users without breaking a sweat.",
                color: "from-indigo-500 to-purple-500"
              },
              {
                icon: FaHeart,
                title: "Ongoing Support",
                description: "24/7 support and maintenance to keep your software running perfectly.",
                color: "from-yellow-500 to-orange-500"
              }
            ].map((item, index) => (
              <animated.div
                key={index}
                className="group"
                whileHover={{ scale: 1.08, y: -10, rotate: 1 }}
              >
                <animated.div 
                  className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 group-hover:shadow-2xl shadow-lg h-full relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 25px 50px rgba(59, 130, 246, 0.25)",
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
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
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

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-br from-blue-500 via-cyan-500 to-green-500">
        <AnimatedTechBackground variant="dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <animated.div
            initial={{ opacity: 0, y: 50 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12 shadow-xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Get Your Custom Solution
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's build the perfect software solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <animated.button
                onClick={openModal}
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:shadow-2xl hover:shadow-white/40 transition-all duration-300 flex items-center gap-2 mx-auto group"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                Start Your Project
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </animated.button>
              <animated.button
                onClick={openModal}
                className="px-8 py-4 border-2 border-white/50 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2 mx-auto group backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                Schedule Consultation
                <FaClock className="group-hover:scale-110 transition-transform" />
              </animated.button>
            </div>
          </animated.div>
        </div>
      </section>

    </div>
  );
};

export default SoftwareDevelopment;