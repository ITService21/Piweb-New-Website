import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import { useModal } from "../Context/ModalContext";
import AnimatedTechBackground from "../Components/AnimatedTechBackground";
import { 
  FaRocket, 
  FaLightbulb, 
  FaUsers, 
  FaCode, 
  FaShieldAlt, 
  FaHeart,
  FaAward,
  FaChartLine,
  FaCog,
  FaCheckCircle,
  FaArrowRight,
  FaQuoteLeft,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaBullseye,
  FaEye,
  FaBrain,
  FaMobile,
  FaCloud,
  FaDatabase,
  FaServer
} from "react-icons/fa";

const AboutUs = () => {
  const { openModal } = useModal();

  // SEO Meta Tags
  useEffect(() => {
    document.title = "About Us - Piweb Tech | Leading Software Solutions Provider";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Learn about Piweb Tech - a passionate team of developers, designers, and innovators dedicated to transforming your digital vision into reality. Discover our mission, values, and approach.');
    
    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'about piweb tech, software company, technology solutions, web development, digital transformation, software development company');
  }, []);
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    team: 0,
    years: 0
  });


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate counters
          animateCounters();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('achievements');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = { projects: 500, clients: 200, team: 50, years: 8 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    Object.keys(targets).forEach(key => {
      let current = 0;
      const increment = targets[key] / steps;
      const timer = setInterval(() => {
        current += increment;
        if (current >= targets[key]) {
          current = targets[key];
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepDuration);
    });
  };

  const values = [
    {
      icon: FaLightbulb,
      title: "Innovation First",
      description: "We constantly push boundaries to deliver cutting-edge solutions that drive your business forward.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: FaUsers,
      title: "Client-Centric",
      description: "Your success is our success. We build lasting relationships through exceptional service and support.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaCode,
      title: "Technical Excellence",
      description: "We maintain the highest standards in code quality, security, and performance in every project.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FaShieldAlt,
      title: "Security & Trust",
      description: "Your data and systems are protected with enterprise-grade security measures and best practices.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: FaHeart,
      title: "Passion Driven",
      description: "We love what we do and it shows in the quality and dedication we bring to every project.",
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: FaRocket,
      title: "Results Oriented",
      description: "We focus on delivering measurable business value and ROI for all our technology solutions.",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const achievements = [
    { 
      number: counters.projects, 
      label: "Projects Completed", 
      icon: FaCode,
      suffix: "+",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      number: counters.clients, 
      label: "Happy Clients", 
      icon: FaUsers,
      suffix: "+",
      color: "from-green-500 to-emerald-500"
    },
    { 
      number: counters.team, 
      label: "Team Members", 
      icon: FaUsers,
      suffix: "+",
      color: "from-purple-500 to-pink-500"
    },
    { 
      number: counters.years, 
      label: "Years Experience", 
      icon: FaAward,
      suffix: "+",
      color: "from-orange-500 to-red-500"
    }
  ];

  const approach = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We begin by understanding your business goals, challenges, and requirements through comprehensive analysis.",
      icon: FaBullseye,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02", 
      title: "Strategy & Planning",
      description: "Our experts develop a detailed roadmap and strategy tailored to your specific needs and objectives.",
      icon: FaChartLine,
      color: "from-green-500 to-emerald-500"
    },
    {
      step: "03",
      title: "Design & Development",
      description: "We create innovative solutions using cutting-edge technologies and industry best practices.",
      icon: FaCode,
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "04",
      title: "Testing & Quality",
      description: "Rigorous testing ensures your solution meets the highest standards of quality and performance.",
      icon: FaShieldAlt,
      color: "from-orange-500 to-red-500"
    },
    {
      step: "05",
      title: "Deployment & Launch",
      description: "Seamless deployment and launch with comprehensive support to ensure smooth operations.",
      icon: FaRocket,
      color: "from-indigo-500 to-purple-500"
    },
    {
      step: "06",
      title: "Support & Growth",
      description: "Ongoing support and optimization to help your business grow and scale effectively.",
      icon: FaHeart,
      color: "from-pink-500 to-rose-500"
    }
  ];

  const technologies = [
    { name: "React & Next.js", icon: FaCode, color: "from-blue-500 to-cyan-500" },
    { name: "Node.js", icon: FaServer, color: "from-green-500 to-emerald-500" },
    { name: "Python", icon: FaBrain, color: "from-yellow-500 to-orange-500" },
    { name: "AWS", icon: FaCloud, color: "from-orange-500 to-red-500" },
    { name: "MongoDB", icon: FaDatabase, color: "from-green-500 to-teal-500" },
    { name: "Docker", icon: FaCog, color: "from-blue-500 to-indigo-500" },
    { name: "AI/ML", icon: FaBrain, color: "from-purple-500 to-pink-500" },
    { name: "Mobile", icon: FaMobile, color: "from-pink-500 to-rose-500" }
  ];

  const offices = [
    {
      city: "New York",
      address: "123 Business Ave, Suite 100",
      phone: "+1 (555) 123-4567",
      email: "ny@piwebtech.com",
      image: "https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      city: "San Francisco", 
      address: "456 Tech Street, Floor 5",
      phone: "+1 (555) 987-6543",
      email: "sf@piwebtech.com",
      image: "https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      city: "London",
      address: "789 Innovation Road",
      phone: "+44 20 7946 0958",
      email: "london@piwebtech.com", 
      image: "https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-pink-500/5 to-purple-500/10"></div>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-gradient-to-r from-red-400 to-pink-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
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
                About
              </span>
              <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent ml-4">
                Piweb Tech
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-pink-100 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We are a <span className="text-red-300 font-bold">passionate team</span> of developers, designers, and innovators 
              dedicated to transforming your <span className="text-pink-300 font-bold">digital vision</span> into reality.
            </motion.p>

            <motion.div
              className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-md border border-red-400/30 rounded-full px-6 py-3 shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <FaLightbulb className="text-red-400 text-xl" />
              <span className="text-red-300 font-bold">INNOVATION • EXCELLENCE • RESULTS</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="relative py-20 bg-white overflow-hidden">
        <AnimatedTechBackground variant="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Our Team at Work"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                <motion.div
                  className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Building the Future</h3>
                  <p className="text-gray-600">Innovation through technology</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                  Who We Are
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to revolutionize digital transformation, Piweb Tech has emerged as a leading 
                technology solutions provider. Our passionate team of developers, designers, and innovators combines 
                creativity with technical expertise to deliver exceptional results.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We believe in the power of technology to transform businesses and create meaningful impact. 
                Our commitment to excellence, innovation, and client success drives everything we do.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div
                  className="flex items-center gap-2 bg-gradient-to-r from-red-50 to-pink-50 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700 font-medium">10+ Years Experience</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700 font-medium">Global Reach</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700 font-medium">24/7 Support</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <AnimatedTechBackground variant="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                Mission & Vision
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-red-300 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl shadow-lg h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaBullseye className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-red-600 transition-colors duration-300">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses with innovative technology solutions that drive growth, efficiency, 
                  and competitive advantage in today's rapidly evolving digital landscape. We are committed 
                  to delivering excellence through cutting-edge development and exceptional service.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-red-300 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl shadow-lg h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaEye className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-red-600 transition-colors duration-300">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the world's leading technology partner, recognized for our innovation, reliability, 
                  and transformative impact. We envision a future where technology seamlessly integrates with 
                  business goals to create unprecedented value and opportunities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-20 bg-white overflow-hidden">
        <AnimatedTechBackground variant="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                Our Core Values
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
                whileHover={{ scale: 1.05, y: -8 }}
              >
                <motion.div 
                  className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-red-300 transition-all duration-300 group-hover:shadow-xl shadow-lg h-full relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 20px 40px rgba(239, 68, 68, 0.2)",
                  }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 rounded-3xl`}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-red-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <AnimatedTechBackground variant="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                Our Approach
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures quality, efficiency, and client satisfaction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approach.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
                whileHover={{ scale: 1.05, y: -8 }}
              >
                <motion.div 
                  className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-red-300 transition-all duration-300 group-hover:shadow-xl shadow-lg h-full relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 20px 40px rgba(239, 68, 68, 0.2)",
                  }}
                >
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
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="relative py-20 bg-white overflow-hidden">
        <AnimatedTechBackground variant="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                Our Achievements
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that speak to our success and commitment to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
                whileHover={{ scale: 1.1, y: -8 }}
              >
                <motion.div 
                  className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-8 border border-red-200/50 hover:border-red-300 transition-all duration-300 group-hover:shadow-xl shadow-lg relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)",
                  }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-20 rounded-3xl`}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className="text-2xl text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-800 mb-2">
                    {achievement.number}{achievement.suffix}
                  </div>
                  <div className="text-gray-600 font-medium">{achievement.label}</div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Quote */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        <AnimatedTechBackground variant="dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-gray-800/80 to-black/80 backdrop-blur-sm border border-red-500/30 rounded-3xl p-12 shadow-xl">
              <div className="flex items-center justify-center mb-8">
                <img 
                  src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="CEO"
                  className="w-20 h-20 rounded-full border-4 border-red-500/30"
                />
              </div>
              <FaQuoteLeft className="text-red-400 text-4xl mx-auto mb-6" />
              <blockquote className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-relaxed">
                "Technology is not just about building software; it's about building the future. 
                At Piweb Tech, we don't just write code – we craft digital experiences that 
                transform businesses and empower people."
              </blockquote>
              <div className="text-red-300 font-semibold text-lg">Sarah Johnson</div>
              <div className="text-gray-400">CEO & Founder, Piweb Tech</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Focus */}
      <section className="relative py-20 bg-white overflow-hidden">
        <AnimatedTechBackground variant="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                Technology Focus
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technologies and tools we use to build exceptional solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
                whileHover={{ scale: 1.15, rotate: 5, y: -8 }}
              >
                <motion.div 
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-red-300 transition-all duration-300 group-hover:shadow-lg shadow-md text-center relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 15px 30px rgba(239, 68, 68, 0.25)",
                  }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl`}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <tech.icon className="text-lg text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                    {tech.name}
                  </h4>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <AnimatedTechBackground variant="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                Our Offices
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Global presence with local expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
                whileHover={{ scale: 1.05, y: -8 }}
              >
                <motion.div 
                  className="bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-red-300 transition-all duration-300 group-hover:shadow-xl shadow-lg"
                  whileHover={{ 
                    boxShadow: "0 20px 40px rgba(239, 68, 68, 0.2)",
                  }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={office.image} 
                      alt={`${office.city} Office`}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-red-600 transition-colors duration-300">
                      {office.city}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <FaMapMarkerAlt className="text-red-500 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{office.address}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaPhone className="text-red-500 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaEnvelope className="text-red-500 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{office.email}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        <AnimatedTechBackground variant="dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-800/80 to-black/80 backdrop-blur-sm border border-red-500/30 rounded-3xl p-12 shadow-xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={openModal}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-300 flex items-center gap-2 mx-auto group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                onClick={openModal}
                className="px-8 py-4 border-2 border-white/50 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2 mx-auto group backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Work
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;