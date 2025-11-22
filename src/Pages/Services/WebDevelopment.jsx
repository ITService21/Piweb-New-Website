import { useState, useEffect, useRef } from "react";
import { useSpring, animated, useTrail, config } from "@react-spring/web";
import {motion} from "framer-motion";
import Navbar from "../../Components/Navbar";
import { useModal } from "../../Context/ModalContext";
import AnimatedTechBackground from "../../Components/AnimatedTechBackground";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
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

// About Content Component
const AboutContent = () => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-200px" });
  
  const spring = useSpring({
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : -50,
    config: config.slow
  });

  return (
    <animated.div ref={ref} style={spring}>
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
        <div className="flex items-center gap-2 bg-gradient-to-r from-red-50 to-pink-50 px-4 py-2 rounded-full hover:scale-105 transition-transform">
          <FaCheckCircle className="text-green-500" />
          <span className="text-gray-700 font-medium">Mobile Responsive</span>
        </div>
        <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-2 rounded-full hover:scale-105 transition-transform">
          <FaCheckCircle className="text-green-500" />
          <span className="text-gray-700 font-medium">SEO Optimized</span>
        </div>
        <div className="flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-2 rounded-full hover:scale-105 transition-transform">
          <FaCheckCircle className="text-green-500" />
          <span className="text-gray-700 font-medium">Fast Loading</span>
        </div>
      </div>
    </animated.div>
  );
};

// Why Choose Us Section Component
const WhyChooseUsSection = () => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-200px" });
  
  const items = [
    {
      icon: FaAward,
      title: "Award-Winning Design",
      description: "Our designs have won multiple awards and recognition in the industry for innovation and excellence.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: FaUsers,
      title: "Expert Team",
      description: "Work with certified developers and designers with 10+ years of combined experience.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaRocket,
      title: "Fast Delivery",
      description: "We deliver projects on time, every time, without compromising on quality or functionality.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FaHeart,
      title: "Client-Focused",
      description: "Your success is our priority. We go above and beyond to exceed your expectations.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: FaStar,
      title: "Proven Results",
      description: "Track record of delivering websites that increase conversions and drive business growth.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const trail = useTrail(items.length, {
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 50,
    scale: isVisible ? 1 : 0.9,
    config: { ...config.slow, tension: 100, friction: 50 },
    immediate: !isVisible
  });

  const headerSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 50,
    config: config.slow
  });

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <AnimatedTechBackground variant="light" />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <animated.div
          ref={ref}
          style={headerSpring}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              Why Choose Our Web Development Services?
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference of working with a team that's passionate about creating exceptional websites
          </p>
        </animated.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trail.map((style, index) => {
            const IconComponent = items[index].icon;
            return (
              <animated.div
                key={index}
                style={style}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-red-300 transition-all duration-300 group-hover:shadow-2xl shadow-lg h-full relative overflow-hidden hover:scale-105 hover:-translate-y-2">
                  <div className={`absolute inset-0 bg-gradient-to-br ${items[index].color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${items[index].color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="text-2xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-red-600 transition-colors duration-300">
                      {items[index].title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {items[index].description}
                    </p>
                  </div>
                </div>
              </animated.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Stats Section Component
const StatsSection = ({ stats }) => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-200px" });
  
  const trail = useTrail(stats.length, {
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 50,
    scale: isVisible ? 1 : 0.9,
    config: { ...config.slow, tension: 100, friction: 50 },
    immediate: !isVisible
  });

  const headerSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 50,
    config: config.slow
  });

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      <AnimatedTechBackground variant="dark" />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <animated.div
          ref={ref}
          style={headerSpring}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Success in Numbers
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proven track record of delivering exceptional web solutions
          </p>
        </animated.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trail.map((style, index) => {
            const IconComponent = stats[index].icon;
            return (
              <animated.div
                key={index}
                style={style}
                className="text-center group"
              >
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-red-300 transition-all duration-300 group-hover:shadow-xl shadow-lg relative overflow-hidden hover:scale-110 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-2xl text-white" />
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-2 group-hover:text-red-300 transition-colors duration-300">
                      {stats[index].number}
                    </h3>
                    <p className="text-gray-300 font-medium">
                      {stats[index].label}
                    </p>
                  </div>
                </div>
              </animated.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Portfolio Section Component
const PortfolioSection = ({ portfolio, setSelectedProject }) => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-200px" });
  
  const trail = useTrail(portfolio.length, {
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 50,
    scale: isVisible ? 1 : 0.9,
    config: { ...config.slow, tension: 100, friction: 50 },
    immediate: !isVisible
  });

  const headerSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 50,
    config: config.slow
  });

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <AnimatedTechBackground variant="light" />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <animated.div
          ref={ref}
          style={headerSpring}
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
        </animated.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trail.map((style, index) => (
            <animated.div
              key={index}
              style={style}
              className="group"
              onClick={() => setSelectedProject(portfolio[index])}
            >
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-red-300 transition-all duration-300 group-hover:shadow-xl shadow-lg cursor-pointer relative hover:scale-105 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={portfolio[index].image} 
                    alt={portfolio[index].title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {portfolio[index].category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors duration-300">
                    {portfolio[index].title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {portfolio[index].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {portfolio[index].technologies.map((tech, techIndex) => (
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
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Tech Stack Section Component
const TechStackSection = ({ technologies }) => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-200px" });
  
  const trail = useTrail(technologies.length, {
    opacity: isVisible ? 1 : 0,
    scale: isVisible ? 1 : 0.8,
    rotate: isVisible ? 0 : -10,
    config: { ...config.slow, tension: 100, friction: 50 },
    immediate: !isVisible
  });

  const headerSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 50,
    config: config.slow
  });

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <AnimatedTechBackground variant="light" />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <animated.div
          ref={ref}
          style={headerSpring}
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
        </animated.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {trail.map((style, index) => {
            const IconComponent = technologies[index].icon;
            return (
              <animated.div
                key={index}
                style={style}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-red-300 transition-all duration-300 group-hover:shadow-lg shadow-md text-center relative overflow-hidden hover:scale-110 hover:rotate-2 hover:-translate-y-2">
                  <div className={`absolute inset-0 bg-gradient-to-br ${technologies[index].color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <div className={`w-12 h-12 bg-gradient-to-br ${technologies[index].color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-lg text-white" />
                    </div>
                    <h4 className="text-sm font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                      {technologies[index].name}
                    </h4>
                  </div>
                </div>
              </animated.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Process Section Component
const ProcessSection = ({ process }) => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-200px" });
  
  const trail = useTrail(process.length, {
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 50,
    scale: isVisible ? 1 : 0.9,
    config: { ...config.slow, tension: 100, friction: 50 },
    immediate: !isVisible
  });

  const headerSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 50,
    config: config.slow
  });

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <AnimatedTechBackground variant="light" />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <animated.div
          ref={ref}
          style={headerSpring}
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
        </animated.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {trail.map((style, index) => {
            const IconComponent = process[index].icon;
            return (
              <animated.div
                key={index}
                style={style}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-red-300 transition-all duration-300 group-hover:shadow-xl shadow-lg h-full relative overflow-hidden hover:scale-105 hover:-translate-y-2">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-100/30 to-transparent rounded-bl-3xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${process[index].color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="text-xl text-white" />
                      </div>
                      <div className="text-3xl font-bold text-gray-300">{process[index].step}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-red-600 transition-colors duration-300">
                      {process[index].title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {process[index].description}
                    </p>
                  </div>
                </div>
              </animated.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Features Section Component
const FeaturesSection = ({ features }) => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-200px" });
  
  const trail = useTrail(features.length, {
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 50,
    scale: isVisible ? 1 : 0.9,
    config: { ...config.slow, tension: 100, friction: 50 },
    immediate: !isVisible
  });

  const headerSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 50,
    config: config.slow
  });

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <AnimatedTechBackground variant="light" />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <animated.div
          ref={ref}
          style={headerSpring}
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
        </animated.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trail.map((style, index) => {
            const IconComponent = features[index].icon;
            return (
              <animated.div
                key={index}
                style={style}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-red-300 transition-all duration-300 group-hover:shadow-xl shadow-lg h-full relative overflow-hidden hover:scale-105 hover:-translate-y-2">
                  <div className={`absolute inset-0 bg-gradient-to-br ${features[index].color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${features[index].color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-2xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-red-600 transition-colors duration-300">
                      {features[index].title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {features[index].description}
                    </p>
                  </div>
                </div>
              </animated.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// About Image Component
const AboutImage = () => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-200px" });
  
  const spring = useSpring({
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : 50,
    config: config.slow
  });

  return (
    <animated.div ref={ref} style={spring} className="relative">
      <div className="relative">
        <img 
          src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Web Development Process"
          className="w-full h-96 object-cover rounded-3xl shadow-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
        <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 hover:scale-102 transition-transform">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Latest Technologies</h3>
          <p className="text-gray-600">React, Next.js, Node.js, and more</p>
        </div>
      </div>
    </animated.div>
  );
};

// Hero Content Component
const HeroContent = ({ openModal }) => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-50px" });
  
  const heroSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 50,
    config: config.slow
  });

  const titleSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    scale: isVisible ? 1 : 0.8,
    delay: 200,
    config: config.slow
  });

  const textSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 30,
    delay: 400,
    config: config.slow
  });

  const buttonSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 30,
    delay: 600,
    config: config.slow
  });

  return (
    <animated.div ref={ref} style={heroSpring}>
      <animated.h1 
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        style={titleSpring}
      >
        <span className="bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent">
          Transform Your
        </span>
        <br />
        <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          Online Presence
        </span>
      </animated.h1>
      
      <animated.p 
        className="text-xl sm:text-2xl text-pink-100 max-w-4xl mx-auto leading-relaxed mb-8"
        style={textSpring}
      >
        Create stunning, <span className="text-red-300 font-bold">high-performance websites</span> that 
        drive <span className="text-pink-300 font-bold">business growth</span> and engage your audience.
      </animated.p>

      <animated.div
        className="flex flex-col sm:flex-row gap-4 justify-center"
        style={buttonSpring}
      >
        <button
          onClick={openModal}
          className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-300 flex items-center gap-2 group hover:scale-105 hover:-translate-y-1"
        >
          Start Your Project
          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
        <button
          onClick={openModal}
          className="px-8 py-4 border-2 border-white/50 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2 group backdrop-blur-sm hover:scale-105 hover:-translate-y-1"
        >
          View Portfolio
          <FaPlay className="group-hover:scale-110 transition-transform" />
        </button>
      </animated.div>
    </animated.div>
  );
};

const WebsiteDevelopment = () => {
  const { openModal } = useModal();
  const [selectedProject, setSelectedProject] = useState(null);

  // SEO Meta Tags
  useEffect(() => {
    document.title = "Website Development Services - Piweb Tech | Transform Your Online Presence";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Professional website development services using React, Next.js, and modern technologies. Create stunning, high-performance websites that drive business growth. Mobile-responsive, SEO-optimized solutions.');
    
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'website development, web design, React development, Next.js, responsive website, SEO optimized website, custom website development');
  }, []);

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
      color: "from-red-500 to-pink-500"
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
      color: "from-red-500 to-pink-500"
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
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "E-Commerce",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Corporate Website",
      description: "Professional business website with CMS and analytics integration.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Corporate",
      technologies: ["Next.js", "TypeScript", "Tailwind"]
    },
    {
      title: "SaaS Dashboard",
      description: "Complex dashboard application with real-time data visualization.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "SaaS",
      technologies: ["React", "D3.js", "WebSocket"]
    },
    {
      title: "Mobile App Website",
      description: "Landing page for mobile application with download links and features.",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
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
      
      {/* Hero Banner with Advanced Tech Background */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-pink-500/5 to-purple-500/10"></div>
          
          {/* Animated Circuit Board Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="web-circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path
                    d="M0,10 L20,10 M10,0 L10,20 M5,5 L15,15 M15,5 L5,15"
                    stroke="rgba(239, 68, 68, 0.4)"
                    strokeWidth="0.5"
                    fill="none"
                  />
                  <circle cx="10" cy="10" r="1" fill="rgba(236, 72, 153, 0.5)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#web-circuit)" />
            </svg>
          </div>

          {/* Moving Tech Icons - Using CSS animations */}
          <div className="absolute inset-0 overflow-hidden">
            {[
              { icon: FaCode, delay: 0, size: "text-2xl", color: "text-red-400/30", y: "15%" },
              { icon: FaGlobe, delay: 2, size: "text-xl", color: "text-pink-400/25", y: "15%" },
              { icon: FaMobile, delay: 4, size: "text-3xl", color: "text-purple-400/20", y: "15%" },
              { icon: FaPalette, delay: 6, size: "text-xl", color: "text-red-400/30", y: "15%" },
              { icon: FaServer, delay: 8, size: "text-2xl", color: "text-pink-400/25", y: "15%" },
              { icon: FaCloud, delay: 10, size: "text-xl", color: "text-purple-400/20", y: "15%" },
              { icon: FaRocket, delay: 12, size: "text-3xl", color: "text-red-400/30", y: "15%" },
              { icon: FaDatabase, delay: 14, size: "text-xl", color: "text-pink-400/25", y: "15%" },
              { icon: FaCode, delay: 16, size: "text-2xl", color: "text-purple-400/20", y: "15%" },
              { icon: FaGlobe, delay: 18, size: "text-xl", color: "text-red-400/30", y: "15%" },
              { icon: FaCode, delay: 1, size: "text-xl", color: "text-pink-400/20", y: "55%" },
              { icon: FaMobile, delay: 3, size: "text-3xl", color: "text-purple-400/25", y: "55%" },
              { icon: FaPalette, delay: 5, size: "text-xl", color: "text-red-400/20", y: "55%" },
              { icon: FaServer, delay: 7, size: "text-2xl", color: "text-pink-400/25", y: "55%" },
              { icon: FaCloud, delay: 9, size: "text-xl", color: "text-purple-400/20", y: "55%" },
              { icon: FaRocket, delay: 11, size: "text-3xl", color: "text-red-400/25", y: "55%" },
              { icon: FaDatabase, delay: 13, size: "text-xl", color: "text-pink-400/20", y: "55%" },
              { icon: FaCode, delay: 15, size: "text-2xl", color: "text-purple-400/25", y: "55%" },
              { icon: FaGlobe, delay: 17, size: "text-xl", color: "text-red-400/20", y: "55%" },
              { icon: FaMobile, delay: 19, size: "text-3xl", color: "text-pink-400/25", y: "55%" }
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={`tech-${i}`}
                  className={`absolute ${item.color} ${item.size} animate-float`}
                  style={{
                    top: item.y,
                    left: '-10%',
                    animationDelay: `${item.delay}s`,
                    animationDuration: `${25 + i * 2}s`
                  }}
                >
                  <IconComponent />
                </div>
              );
            })}
          </div>

          {/* Floating Code Snippets - Using CSS animations */}
          <div className="absolute inset-0 overflow-hidden">
            {[
              { code: "const web = 'amazing';", x: 10, y: 25, delay: 0 },
              { code: "function build() {", x: 80, y: 20, delay: 1 },
              { code: "  return success;", x: 15, y: 65, delay: 2 },
              { code: "}", x: 85, y: 75, delay: 3 },
              { code: "React.createApp()", x: 20, y: 45, delay: 4 },
              { code: "Next.js.render()", x: 70, y: 55, delay: 5 },
              { code: "CSS.animate()", x: 30, y: 85, delay: 6 },
              { code: "API.fetch()", x: 60, y: 30, delay: 7 }
            ].map((snippet, i) => (
              <div
              key={i}
                className="absolute text-xs font-mono text-red-400/60 bg-black/20 px-2 py-1 rounded backdrop-blur-sm animate-float-code"
                style={{
                  left: `${snippet.x}%`,
                  top: `${snippet.y}%`,
                  animationDelay: `${snippet.delay}s`,
                  animationDuration: `${6 + i * 0.3}s`
                }}
              >
                {snippet.code}
              </div>
            ))}
          </div>

          {/* Animated Gradient Orbs - Using CSS animations */}
          {[
            { x: 15, y: 25, size: 200, color: 'from-red-500/20 to-pink-500/20', delay: 0 },
            { x: 75, y: 15, size: 150, color: 'from-pink-500/20 to-purple-500/20', delay: 2 },
            { x: 25, y: 75, size: 180, color: 'from-purple-500/20 to-indigo-500/20', delay: 4 },
            { x: 85, y: 80, size: 120, color: 'from-indigo-500/20 to-blue-500/20', delay: 6 }
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
                animationDuration: `${8 + i}s`
              }}
            />
          ))}

          {/* Particle Effects - Using CSS animations */}
          {[...Array(20)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-2 h-2 bg-gradient-to-r from-red-400 to-pink-400 rounded-full animate-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                '--random-x': `${Math.random() * 100 - 50}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <HeroContent openModal={openModal} />
        </div>
      </section>

      {/* About the Service */}
      <section className="relative py-20 bg-white overflow-hidden">
        <AnimatedTechBackground variant="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AboutContent />
            <AboutImage />
          </div>
        </div>
      </section>

      {/* Our Process */}
      <ProcessSection process={process} />

      {/* Features */}
      <FeaturesSection features={features} />

      {/* Tech Stack */}
      <TechStackSection technologies={technologies} />

      {/* Portfolio Snapshots */}
      <PortfolioSection portfolio={portfolio} setSelectedProject={setSelectedProject} />

      {/* Stats */}
      <StatsSection stats={stats} />

      {/* Why Choose Us Section */}
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
                Why Choose Our Web Development Services?
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference of working with a team that's passionate about creating exceptional websites
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaAward,
                title: "Award-Winning Design",
                description: "Our designs have won multiple awards and recognition in the industry for innovation and excellence.",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: FaUsers,
                title: "Expert Team",
                description: "Work with certified developers and designers with 10+ years of combined experience.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: FaRocket,
                title: "Fast Delivery",
                description: "We deliver projects on time, every time, without compromising on quality or functionality.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: FaShieldAlt,
                title: "Secure & Reliable",
                description: "Enterprise-grade security and 99.9% uptime guarantee for your peace of mind.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: FaHeart,
                title: "Client-Focused",
                description: "Your success is our priority. We go above and beyond to exceed your expectations.",
                color: "from-red-500 to-pink-500"
              },
              {
                icon: FaStar,
                title: "Proven Results",
                description: "Track record of delivering websites that increase conversions and drive business growth.",
                color: "from-indigo-500 to-purple-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
                whileHover={{ scale: 1.08, y: -10, rotate: 1 }}
              >
                <motion.div 
                  className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-red-300 transition-all duration-300 group-hover:shadow-2xl shadow-lg h-full relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 25px 50px rgba(239, 68, 68, 0.25)",
                  }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-3xl`}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 transition-transform duration-300 shadow-lg`}>
                      <item.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-red-600 transition-colors duration-300">
                      {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                      {item.description}
                  </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
                What Our Clients Say
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart Inc.",
                content: "Piweb Tech transformed our online presence completely. The website they built increased our leads by 300% and the design is absolutely stunning!",
                rating: 5,
                image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                name: "Michael Chen",
                role: "Founder, Digital Solutions",
                content: "Professional, responsive, and incredibly talented team. They delivered exactly what we needed and more. Highly recommend!",
                rating: 5,
                image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                name: "Emily Rodriguez",
                role: "Marketing Director, Growth Co.",
                content: "The best web development experience we've had. Fast, efficient, and the end result exceeded all our expectations.",
                rating: 5,
                image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
            ].map((testimonial, index) => (
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
                  className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-red-300 transition-all duration-300 group-hover:shadow-2xl shadow-lg h-full relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 25px 50px rgba(239, 68, 68, 0.25)",
                  }}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-100/30 to-transparent rounded-bl-3xl"></div>
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
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                    </div>
                      <div>
                        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
          </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 bg-gradient-to-br from-red-500 via-pink-500 to-purple-500 overflow-hidden">
        <AnimatedTechBackground variant="dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
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
                onClick={openModal}
                className="px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:shadow-2xl hover:shadow-white/40 transition-all duration-300 flex items-center gap-2 mx-auto group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Website Project
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                onClick={openModal}
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
    </div>
  );
};

export default WebsiteDevelopment;