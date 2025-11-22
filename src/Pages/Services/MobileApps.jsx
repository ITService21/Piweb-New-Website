import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { 
  FaCode, 
  FaPalette, 
  FaMobile, 
  FaRocket, 
  FaShieldAlt, 
  FaSearch,
  FaCog,
  FaUsers,
  FaChartLine,
  FaCheckCircle,
  FaArrowRight,
  FaLaptop,
  FaGlobe,
  FaLightbulb,
  FaStar,
  FaHeart,
  FaClock,
  FaAward,
  FaCog as FaGear,
  FaDatabase,
  FaServer,
  FaCloud,
  FaLock,
  FaEye,
  FaThumbsUp,
  FaPlay,
  FaExternalLinkAlt
} from "react-icons/fa";

const MobileApps = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const features = [
    {
      icon: FaPalette,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring perfect display across all devices and screen sizes.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaSearch,
      title: "SEO Optimization",
      description: "Built-in SEO features to improve your search engine rankings and online visibility.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FaRocket,
      title: "Lightning Fast",
      description: "Optimized performance with fast loading times and smooth user experience.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: FaShieldAlt,
      title: "Secure & Safe",
      description: "Enterprise-grade security measures to protect your website and user data.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Planning & Strategy",
      description: "We analyze your business goals, target audience, and requirements to create a comprehensive strategy.",
      icon: FaLightbulb,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our designers create stunning mockups and prototypes that align with your brand identity.",
      icon: FaPalette,
      color: "from-green-500 to-emerald-500"
    },
    {
      step: "03",
      title: "Development & Coding",
      description: "Our expert developers bring your design to life using cutting-edge technologies and best practices.",
      icon: FaCode,
      color: "from-orange-500 to-red-500"
    },
    {
      step: "04",
      title: "Testing & Quality",
      description: "Rigorous testing across all devices and browsers to ensure flawless functionality.",
      icon: FaCheckCircle,
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "05",
      title: "Launch & Support",
      description: "Smooth deployment with ongoing maintenance and support to keep your website running perfectly.",
      icon: FaRocket,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const technologies = [
    { name: "React", icon: FaCode, color: "from-blue-500 to-cyan-500" },
    { name: "Next.js", icon: FaRocket, color: "from-gray-500 to-gray-700" },
    { name: "Node.js", icon: FaServer, color: "from-green-500 to-emerald-500" },
    { name: "TypeScript", icon: FaCode, color: "from-blue-600 to-blue-800" },
    { name: "Tailwind CSS", icon: FaPalette, color: "from-cyan-500 to-blue-500" },
    { name: "MongoDB", icon: FaDatabase, color: "from-green-600 to-green-800" },
    { name: "AWS", icon: FaCloud, color: "from-orange-500 to-red-500" },
    { name: "Docker", icon: FaGear, color: "from-blue-500 to-indigo-500" }
  ];

  const portfolio = [
    {
      title: "E-Commerce Platform",
      description: "Modern online store with advanced features and seamless user experience.",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "E-Commerce",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Corporate Website",
      description: "Professional business website with CMS and analytics integration.",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Corporate",
      technologies: ["Next.js", "TypeScript", "Tailwind"]
    },
    {
      title: "SaaS Dashboard",
      description: "Complex dashboard application with real-time data visualization.",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "SaaS",
      technologies: ["React", "D3.js", "WebSocket"]
    },
    {
      title: "Mobile App Website",
      description: "Landing page for mobile application with download links and features.",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Mobile",
      technologies: ["React", "PWA", "Service Workers"]
    }
  ];

  const stats = [
    { number: "500+", label: "Websites Built", icon: FaGlobe },
    { number: "99.9%", label: "Uptime Guarantee", icon: FaServer },
    { number: "24/7", label: "Support Available", icon: FaClock },
    { number: "50+", label: "Happy Clients", icon: FaHeart }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-pink-500/5 to-purple-500/10"></div>
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-gradient-to-r from-red-400 to-pink-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                y: [0, -40, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent">
                Build Powerful
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Mobile Applications
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-pink-100 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Create powerful, <span className="text-red-300 font-bold">native and cross-platform mobile apps</span> that 
              drive <span className="text-pink-300 font-bold">user engagement</span> and business success.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-300 flex items-center gap-2 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-white/50 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2 group backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
                <FaPlay className="group-hover:scale-110 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About the Service */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                  Modern Web Development
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We build cutting-edge websites using the latest technologies including React, Next.js, 
                Node.js, and modern CSS frameworks. Our development process ensures your website is 
                fast, secure, and optimized for search engines.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From concept to launch, we handle every aspect of web development with precision and 
                creativity. Our team combines technical expertise with design excellence to deliver 
                websites that not only look great but also perform exceptionally.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div
                  className="flex items-center gap-2 bg-gradient-to-r from-red-50 to-pink-50 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700 font-medium">Mobile Responsive</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700 font-medium">SEO Optimized</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700 font-medium">Fast Loading</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Web Development Process"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                <motion.div
                  className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Latest Technologies</h3>
                  <p className="text-gray-600">React, Next.js, Node.js, and more</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                Our Development Process
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures quality, efficiency, and client satisfaction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-red-300 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl shadow-lg h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-100/30 to-transparent rounded-bl-3xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="text-xl text-white" />
                      </div>
                      <div className="text-3xl font-bold text-gray-300">{step.step}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-red-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                Key Features
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with modern technologies and best practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-red-300 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl shadow-lg h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-red-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                Technologies We Use
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technologies for modern web development
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-red-300 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-lg shadow-md text-center">
                  <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <tech.icon className="text-lg text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                    {tech.name}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Snapshots */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                Our Portfolio
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our best work and successful projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-red-300 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl shadow-lg cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-red-500 font-medium text-sm">View Details</span>
                      <FaExternalLinkAlt className="text-red-500 text-sm" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our Success in Numbers
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven track record of delivering exceptional web solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm border border-red-500/30 rounded-3xl p-8 hover:border-red-400/50 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="text-2xl text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-br from-red-500 via-pink-500 to-purple-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12 shadow-xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Start Your Website Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's create a stunning website that drives your business forward and engages your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:shadow-2xl hover:shadow-white/40 transition-all duration-300 flex items-center gap-2 mx-auto group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Quote
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-white/50 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2 mx-auto group backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
                <FaClock className="group-hover:scale-110 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MobileApps;