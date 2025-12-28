import { useState, useRef, useMemo } from "react";
import { useSpring, animated, useTrail, config } from "@react-spring/web";
import Navbar from "../../Components/Navbar";
import { useModal } from "../../Context/ModalContext";
import AnimatedTechBackground from "../../Components/AnimatedTechBackground";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { 
  FaBuilding, 
  FaUsers, 
  FaChartLine, 
  FaCog, 
  FaDatabase, 
  FaShieldAlt, 
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
  FaLightbulb,
  FaHeart,
  FaStar,
  FaPlay,
 
 
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
 
   
 
 
 
 
 
 
  FaPython,
  FaCloud,
  FaMobile,
  FaServer,
  FaAward
} from "react-icons/fa";

const EnterpriseSystems = () => {
  const { openModal } = useModal();
  const [selectedModule, setSelectedModule] = useState(0);

  const modules = [
    {
      icon: FaChartLine,
      title: "Finance Management",
      description: "Comprehensive financial management with accounting, budgeting, and reporting capabilities.",
      color: "from-green-500 to-emerald-500",
      features: ["General Ledger", "Accounts Payable", "Accounts Receivable", "Financial Reporting", "Budget Planning", "Tax Management"]
    },
    {
      icon: FaUsers,
      title: "Human Resources",
      description: "Complete HR management system for employee lifecycle and workforce optimization.",
      color: "from-blue-500 to-cyan-500",
      features: ["Employee Records", "Payroll Management", "Performance Reviews", "Leave Management", "Recruitment", "Training"]
    },
    {
      icon: FaBuilding,
      title: "Sales Management",
      description: "End-to-end sales process management from lead generation to customer retention.",
      color: "from-purple-500 to-pink-500",
      features: ["Lead Management", "Opportunity Tracking", "Sales Forecasting", "Customer Management", "Quotes & Invoices", "Sales Analytics"]
    },
    {
      icon: FaCogs,
      title: "Operations",
      description: "Streamlined operations management for improved efficiency and productivity.",
      color: "from-red-500 to-pink-500",
      features: ["Project Management", "Task Tracking", "Resource Planning", "Workflow Automation", "Quality Control", "Performance Monitoring"]
    },
    {
      icon: FaBox,
      title: "Inventory Management",
      description: "Advanced inventory control with real-time tracking and automated reordering.",
      color: "from-indigo-500 to-purple-500",
      features: ["Stock Tracking", "Warehouse Management", "Supplier Management", "Purchase Orders", "Inventory Analytics", "Barcode Scanning"]
    },
    {
      icon: FaShieldAlt,
      title: "Security & Compliance",
      description: "Enterprise-grade security with compliance management and audit trails.",
      color: "from-red-500 to-pink-500",
      features: ["Access Control", "Data Encryption", "Audit Logging", "Compliance Reporting", "Security Monitoring", "Backup & Recovery"]
    }
  ];

  const benefits = [
    {
      icon: FaRocket,
      title: "Improved Efficiency",
      description: "Streamline processes and eliminate manual tasks with automated workflows.",
      color: "from-blue-500 to-cyan-500",
      metric: "40%",
      improvement: "Increase in Productivity"
    },
    {
      icon: FaCogs,
      title: "Process Automation",
      description: "Automate repetitive tasks and reduce human error with intelligent workflows.",
      color: "from-green-500 to-emerald-500",
      metric: "60%",
      improvement: "Reduction in Manual Work"
    },
    {
      icon: FaChartLine,
      title: "Better Scalability",
      description: "Scale your operations seamlessly as your business grows and evolves.",
      color: "from-purple-500 to-pink-500",
      metric: "300%",
      improvement: "Growth Capacity"
    },
    {
      icon: FaShieldAlt,
      title: "Enhanced Security",
      description: "Protect your data with enterprise-grade security and compliance features.",
      color: "from-red-500 to-pink-500",
      metric: "99.9%",
      improvement: "Uptime Guarantee"
    }
  ];

  const integrations = [
    { name: "ERP Systems", icon: FaBuilding, color: "from-blue-500 to-cyan-500" },
    { name: "CRM Platforms", icon: FaUsers, color: "from-green-500 to-emerald-500" },
    { name: "Accounting Software", icon: FaChartLine, color: "from-purple-500 to-pink-500" },
    { name: "HR Management", icon: FaHeart, color: "from-red-500 to-pink-500" },
    { name: "Project Management", icon: FaProjectDiagram, color: "from-indigo-500 to-purple-500" },
    { name: "Business Intelligence", icon: FaBrain, color: "from-cyan-500 to-blue-500" },
    { name: "Cloud Services", icon: FaCloud, color: "from-gray-500 to-gray-700" },
    { name: "API Integration", icon: FaNetworkWired, color: "from-pink-500 to-rose-500" }
  ];

  const features = [
    {
      title: "Unified Dashboard",
      description: "Single interface to manage all business operations and monitor key metrics.",
      icon: FaDesktop,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-time Analytics",
      description: "Get instant insights with advanced reporting and business intelligence tools.",
      icon: FaChartLine,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Mobile Access",
      description: "Access your system anywhere with responsive mobile and tablet applications.",
      icon: FaMobile,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Custom Workflows",
      description: "Create custom business processes that match your unique requirements.",
      icon: FaCogs,
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navbar />
      
      {/* Hero Banner with Advanced Enterprise Tech Background */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10"></div>
          
          {/* Enterprise Grid Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="enterprise-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect width="20" height="20" fill="none" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="0.5" />
                  <circle cx="10" cy="10" r="1.5" fill="rgba(147, 51, 234, 0.5)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#enterprise-grid)" />
            </svg>
          </div>

          {/* Moving Enterprise Tech Icons */}
          <div className="absolute inset-0 overflow-hidden">
            {[
              { icon: FaBuilding, delay: 0, size: "text-2xl", color: "text-indigo-400/30", y: "15%" },
              { icon: FaServer, delay: 2, size: "text-xl", color: "text-purple-400/25", y: "15%" },
              { icon: FaDatabase, delay: 4, size: "text-3xl", color: "text-pink-400/20", y: "15%" },
              { icon: FaUsers, delay: 6, size: "text-xl", color: "text-indigo-400/30", y: "15%" },
              { icon: FaChartLine, delay: 8, size: "text-2xl", color: "text-purple-400/25", y: "15%" },
              { icon: FaCogs, delay: 10, size: "text-xl", color: "text-pink-400/20", y: "15%" },
              { icon: FaBuilding, delay: 12, size: "text-3xl", color: "text-indigo-400/30", y: "15%" },
              { icon: FaServer, delay: 14, size: "text-xl", color: "text-purple-400/25", y: "15%" },
              { icon: FaDatabase, delay: 16, size: "text-2xl", color: "text-pink-400/20", y: "15%" },
              { icon: FaUsers, delay: 18, size: "text-xl", color: "text-indigo-400/30", y: "15%" },
              { icon: FaBuilding, delay: 1, size: "text-xl", color: "text-purple-400/20", y: "55%" },
              { icon: FaServer, delay: 3, size: "text-3xl", color: "text-pink-400/25", y: "55%" },
              { icon: FaDatabase, delay: 5, size: "text-xl", color: "text-indigo-400/20", y: "55%" },
              { icon: FaUsers, delay: 7, size: "text-2xl", color: "text-purple-400/25", y: "55%" },
              { icon: FaChartLine, delay: 9, size: "text-xl", color: "text-pink-400/20", y: "55%" },
              { icon: FaCogs, delay: 11, size: "text-3xl", color: "text-indigo-400/25", y: "55%" },
              { icon: FaBuilding, delay: 13, size: "text-xl", color: "text-purple-400/20", y: "55%" },
              { icon: FaServer, delay: 15, size: "text-2xl", color: "text-pink-400/25", y: "55%" },
              { icon: FaDatabase, delay: 17, size: "text-xl", color: "text-indigo-400/20", y: "55%" },
              { icon: FaUsers, delay: 19, size: "text-3xl", color: "text-purple-400/25", y: "55%" }
            ].map((item, i) => (
              <animated.div
                key={`ent-tech-${i}`}
                className={`absolute ${item.color} ${item.size}`}
                style={{
                  top: item.y,
                  left: '-10%',
                }}
                animate={{
                  x: ['-10%', '110%'],
                  y: [0, Math.sin(i * 0.3) * 28, 0],
                  rotate: [0, 360, 0],
                  scale: [0.8, 1.35, 0.8],
                }}
                transition={{
                  duration: 32 + i * 2,
                  repeat: Infinity,
                  delay: item.delay,
                  ease: "linear"
                }}
              >
                <item.icon />
              </animated.div>
            ))}
          </div>

          {/* Floating Enterprise Code Snippets */}
          <div className="absolute inset-0 overflow-hidden">
            {[
              { code: "ERP.system()", x: 10, y: 25, delay: 0 },
              { code: "CRM.manage()", x: 80, y: 20, delay: 1 },
              { code: "HRM.process()", x: 15, y: 65, delay: 2 },
              { code: "SCM.optimize()", x: 85, y: 75, delay: 3 },
              { code: "BI.analyze()", x: 20, y: 45, delay: 4 },
              { code: "ERP.integrate()", x: 70, y: 55, delay: 5 },
              { code: "API.connect()", x: 30, y: 85, delay: 6 },
              { code: "data.sync()", x: 60, y: 30, delay: 7 }
            ].map((snippet, i) => (
              <animated.div
                key={i}
                className="absolute text-xs font-mono text-indigo-400/60 bg-black/20 px-2 py-1 rounded backdrop-blur-sm"
                style={{
                  left: `${snippet.x}%`,
                  top: `${snippet.y}%`,
                }}
                animate={{
                  y: [0, -23, 0],
                  opacity: [0, 0.88, 0],
                  scale: [0.8, 1.08, 0.8],
                }}
                transition={{
                  duration: 6.8 + i * 0.3,
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
            { x: 15, y: 25, size: 200, color: 'from-indigo-500/20 to-purple-500/20', delay: 0 },
            { x: 75, y: 15, size: 150, color: 'from-purple-500/20 to-pink-500/20', delay: 2 },
            { x: 25, y: 75, size: 180, color: 'from-pink-500/20 to-indigo-500/20', delay: 4 },
            { x: 85, y: 80, size: 120, color: 'from-indigo-500/20 to-purple-500/20', delay: 6 }
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
                scale: [1, 1.28, 1],
                opacity: [0.3, 0.68, 0.3],
                x: [0, 24, 0],
                y: [0, -24, 0],
              }}
              transition={{
                duration: 9.2 + i,
                repeat: Infinity,
                delay: orb.delay,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Particle Effects */}
          {
            // Memoize particle positions so they remain stable across renders and
            // avoid flickering caused by re-generated random values on every render.
            (() => {
              const particlePositions = useMemo(() =>
                Array.from({ length: 23 }).map(() => ({
                  leftPercent: Math.random() * 100,
                  topPercent: Math.random() * 100,
                  xOffset: Math.random() * 115 - 57.5,
                  duration: 4.8 + Math.random() * 2,
                  delay: Math.random() * 3,
                })),
                []
              );

              return particlePositions.map((pos, i) => (
                <animated.div
                  key={`ent-particle-${i}`}
                  className="absolute w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"
                  style={{
                    left: `${pos.leftPercent}%`,
                    top: `${pos.topPercent}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    y: [0, -58, 0],
                    x: [0, pos.xOffset, 0],
                  }}
                  transition={{
                    duration: pos.duration,
                    repeat: Infinity,
                    delay: pos.delay,
                    ease: "easeInOut",
                  }}
                />
              ));
            })()
          }
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
              <span className="bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
                Empowering Enterprises
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                with Smart Systems
              </span>
            </animated.h1>
            
            <animated.p 
              className="text-xl sm:text-2xl text-indigo-100 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your business with <span className="text-indigo-300 font-bold">integrated enterprise solutions</span> that 
              streamline operations and <span className="text-purple-300 font-bold">drive growth</span>.
            </animated.p>

            <animated.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* <animated.button
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-indigo-500/40 transition-all duration-300 flex items-center gap-2 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Demo
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </animated.button>
              <animated.button
                className="px-8 py-4 border-2 border-white/50 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2 group backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Solutions
                <FaPlay className="group-hover:scale-110 transition-transform" />
              </animated.button> */}
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
                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                  Integrated Business Solutions
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our enterprise management systems integrate ERP, CRM, and HRM functionalities 
                into a unified platform that streamlines operations, improves efficiency, and 
                provides real-time insights across your entire organization.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From finance and human resources to sales and operations, our comprehensive 
                solutions eliminate data silos and provide a single source of truth for all 
                your business processes.
              </p>
              <div className="flex flex-wrap gap-4">
                <animated.div
                  className="flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700 font-medium">Unified Platform</span>
                </animated.div>
                <animated.div
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700 font-medium">Real-time Analytics</span>
                </animated.div>
                <animated.div
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700 font-medium">Scalable Architecture</span>
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
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Enterprise Management Systems"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                <animated.div
                  className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Integrated Solutions</h3>
                  <p className="text-gray-600">ERP, CRM, HRM in one platform</p>
                </animated.div>
              </div>
            </animated.div>
          </div>
        </div>
      </section>

      {/* Modules */}
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
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                System Modules
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive modules covering all aspects of your business operations
            </p>
          </animated.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <animated.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
                onMouseEnter={() => setSelectedModule(index)}
              >
                <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-indigo-300 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl shadow-lg h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${module.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <module.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {module.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {module.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-500 text-sm flex-shrink-0" />
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
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Key Benefits
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with measurable improvements
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
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-200/50 hover:border-indigo-300 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl shadow-lg">
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="text-2xl text-white" />
                  </div>
                  <div className="text-4xl font-bold text-indigo-600 mb-2">
                    {benefit.metric}
                  </div>
                  <div className="text-gray-600 font-medium mb-4">{benefit.improvement}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </animated.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
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
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Advanced Features
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed for enterprise-level operations
            </p>
          </animated.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <animated.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-indigo-300 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl shadow-lg h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </animated.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
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
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Seamless Integrations
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your existing tools and systems
            </p>
          </animated.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <animated.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-indigo-300 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-lg shadow-md text-center">
                  <div className={`w-12 h-12 bg-gradient-to-br ${integration.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <integration.icon className="text-lg text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                    {integration.name}
                  </h4>
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Why Choose Our Enterprise Systems?
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade solutions trusted by leading organizations worldwide
            </p>
          </animated.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaBuilding,
                title: "Enterprise-Grade",
                description: "Built for large-scale operations with robust architecture and unlimited scalability.",
                color: "from-indigo-500 to-purple-500"
              },
              {
                icon: FaChartLine,
                title: "Real-Time Analytics",
                description: "Make data-driven decisions with instant insights and comprehensive reporting.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: FaShieldAlt,
                title: "Bank-Level Security",
                description: "Multi-layered security with encryption, access controls, and compliance standards.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: FaUsers,
                title: "Dedicated Support",
                description: "24/7 enterprise support with dedicated account managers and rapid response times.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: FaRocket,
                title: "Rapid Deployment",
                description: "Fast implementation with minimal disruption to your business operations.",
                color: "from-red-500 to-pink-500"
              },
              {
                icon: FaAward,
                title: "Industry Recognition",
                description: "Award-winning solutions recognized by leading industry analysts and publications.",
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
                  className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-indigo-300 transition-all duration-300 group-hover:shadow-2xl shadow-lg h-full relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 25px 50px rgba(99, 102, 241, 0.25)",
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
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
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
      <section className="py-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
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
              Request a System Demo
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              See how our enterprise management systems can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <animated.button
                onClick={openModal}
                className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:shadow-2xl hover:shadow-white/40 transition-all duration-300 flex items-center gap-2 mx-auto group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Demo
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </animated.button>
              {/* <animated.button
                onClick={openModal}
                className="px-8 py-4 border-2 border-white/50 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2 mx-auto group backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Sales
                <FaPhone className="group-hover:scale-110 transition-transform" />
              </animated.button> */}
            </div>
          </animated.div>
        </div>
      </section>

    </div>
  );
};

export default EnterpriseSystems;