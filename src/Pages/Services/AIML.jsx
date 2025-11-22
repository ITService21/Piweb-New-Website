import { useState, useEffect, useRef } from "react";
import { useSpring, animated, useTrail, config } from "@react-spring/web";
import Navbar from "../../Components/Navbar";
import { useModal } from "../../Context/ModalContext";
import AnimatedTechBackground from "../../Components/AnimatedTechBackground";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { 
  FaBrain, 
  FaRobot, 
  FaChartLine, 
  FaEye, 
  FaComments,
  FaCog,
  FaUsers,
  FaCheckCircle,
  FaArrowRight,
  FaLightbulb,
  FaRocket,
  FaShieldAlt,
  FaDatabase,
  FaServer,
  FaCloud,
  FaHeart,
  FaStar,
  FaPlay,
  FaExternalLinkAlt,
  FaMicrochip,
  FaNetworkWired,
  FaCode,
  FaPalette,
  FaMobile,
  FaLaptop,
  FaGlobe,
  FaAward,
  FaClock,
  FaThumbsUp,
  FaShoppingCart,
  FaGraduationCap
} from "react-icons/fa";

// Overview Content Component for AIML
const OverviewContentAIML = () => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-200px" });
  
  const spring = useSpring({
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : -50,
    config: config.slow
  });

  return (
    <animated.div ref={ref} style={spring}>
      <h2 className="text-4xl sm:text-5xl font-bold mb-6">
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          AI-Driven Business Solutions
        </span>
      </h2>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        We develop cutting-edge AI and machine learning solutions that automate processes, 
        extract valuable insights from data, and enhance decision-making capabilities across 
        various industries.
      </p>
      <p className="text-gray-600 mb-8 leading-relaxed">
        Our AI experts combine deep technical knowledge with business acumen to deliver 
        intelligent solutions that drive real business value and competitive advantage.
      </p>
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-2 rounded-full hover:scale-105 transition-transform">
          <FaCheckCircle className="text-green-500" />
          <span className="text-gray-700 font-medium">Custom AI Models</span>
        </div>
        <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-2 rounded-full hover:scale-105 transition-transform">
          <FaCheckCircle className="text-green-500" />
          <span className="text-gray-700 font-medium">Real-time Processing</span>
        </div>
        <div className="flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 rounded-full hover:scale-105 transition-transform">
          <FaCheckCircle className="text-green-500" />
          <span className="text-gray-700 font-medium">Scalable Solutions</span>
        </div>
      </div>
    </animated.div>
  );
};

// CTA Section Component for AIML
const CTASectionAIML = ({ openModal }) => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-100px" });
  
  const spring = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 50,
    scale: isVisible ? 1 : 0.95,
    config: config.slow
  });

  return (
    <section className="py-20 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500">
      <AnimatedTechBackground variant="dark" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <animated.div
          ref={ref}
          style={spring}
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12 shadow-xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Let's Power Your Business with AI
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Transform your business with intelligent automation and data-driven insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openModal}
              className="px-8 py-4 bg-white text-purple-700 font-bold rounded-xl hover:shadow-2xl hover:shadow-white/40 transition-all duration-300 flex items-center gap-2 group hover:scale-105 hover:-translate-y-1"
            >
              Get Started
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={openModal}
              className="px-8 py-4 border-2 border-white/50 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2 group backdrop-blur-sm hover:scale-105 hover:-translate-y-1"
            >
              Learn More
              <FaPlay className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </animated.div>
      </div>
    </section>
  );
};

// Why Choose Us Section Component for AIML
const WhyChooseUsSectionAIML = () => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-200px" });
  
  const items = [
    {
      icon: FaBrain,
      title: "Deep AI Expertise",
      description: "Our team includes PhD-level data scientists and AI researchers with cutting-edge knowledge.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FaRocket,
      title: "Proven Results",
      description: "95% model accuracy and 80% process efficiency improvements for our clients.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaShieldAlt,
      title: "Secure & Compliant",
      description: "Enterprise-grade security and compliance with GDPR, HIPAA, and industry standards.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FaUsers,
      title: "Expert Team",
      description: "Certified AI engineers and data scientists with 10+ years of combined experience.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: FaChartLine,
      title: "Scalable Solutions",
      description: "AI solutions that grow with your business, from startups to enterprise scale.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: FaAward,
      title: "Industry Recognition",
      description: "Award-winning AI solutions recognized by leading technology organizations.",
      color: "from-yellow-500 to-orange-500"
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
    <section className="py-20 bg-white">
      <AnimatedTechBackground variant="light" />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <animated.div
          ref={ref}
          style={headerSpring}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Why Choose Our AI & ML Services?
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading AI expertise that transforms businesses across industries
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
                <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-purple-300 transition-all duration-300 group-hover:shadow-2xl shadow-lg h-full relative overflow-hidden hover:scale-105 hover:-translate-y-2">
                  <div className={`absolute inset-0 bg-gradient-to-br ${items[index].color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${items[index].color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="text-2xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
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

// Stats Section Component for AIML
const StatsSectionAIML = ({ stats }) => {
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
    <section id="ai-stats" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <animated.div
          ref={ref}
          style={headerSpring}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            AI Performance Metrics
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proven results from our AI implementations
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
                <div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 hover:border-purple-400/50 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-2xl text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    {stats[index].number}{stats[index].suffix}
                  </div>
                  <div className="text-gray-300 font-medium">{stats[index].label}</div>
                </div>
              </animated.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Tech Stack Section Component for AIML
const TechStackSectionAIML = ({ technologies }) => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-200px" });
  
  const trail = useTrail(technologies.length, {
    opacity: isVisible ? 1 : 0,
    scale: isVisible ? 1 : 0.8,
    config: { ...config.slow, tension: 100, friction: 50 },
    immediate: !isVisible
  });

  const headerSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 50,
    config: config.slow
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <animated.div
          ref={ref}
          style={headerSpring}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI Technologies
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge AI and machine learning frameworks and tools
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
                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-purple-300 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-lg shadow-md text-center">
                  <div className={`w-12 h-12 bg-gradient-to-br ${technologies[index].color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-lg text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                    {technologies[index].name}
                  </h4>
                </div>
              </animated.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Case Study Section Component for AIML
const CaseStudySectionAIML = ({ caseStudy }) => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-200px" });
  
  const contentSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : -50,
    config: config.slow
  });

  const imageSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : 50,
    config: config.slow
  });

  const resultsTrail = useTrail(caseStudy.results.length, {
    opacity: isVisible ? 1 : 0,
    scale: isVisible ? 1 : 0.8,
    config: { ...config.slow, tension: 100, friction: 50 },
    immediate: !isVisible
  });

  const headerSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 50,
    config: config.slow
  });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <animated.div
          ref={ref}
          style={headerSpring}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Success Story
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from our AI implementations
          </p>
        </animated.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <animated.div style={contentSpring}>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              {caseStudy.title}
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {caseStudy.description}
            </p>
            <div className="grid grid-cols-2 gap-6">
              {resultsTrail.map((style, index) => (
                <animated.div
                  key={index}
                  style={style}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {caseStudy.results[index].metric}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {caseStudy.results[index].label}
                  </div>
                </animated.div>
              ))}
            </div>
          </animated.div>

          <animated.div style={imageSpring} className="relative">
            <img 
              src={caseStudy.image}
              alt="AI Implementation Results"
              className="w-full h-96 object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
          </animated.div>
        </div>
      </div>
    </section>
  );
};

// Section Header Component for AIML
const SectionHeaderAIML = ({ title, description }) => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-200px" });
  
  const spring = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 50,
    config: config.slow
  });

  return (
    <animated.div
      ref={ref}
      style={spring}
      className="text-center mb-16"
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-6">
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        {description}
      </p>
    </animated.div>
  );
};

// Industries Section Component for AIML
const IndustriesSectionAIML = ({ industries }) => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-200px" });
  
  const trail = useTrail(industries.length, {
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 50,
    config: { ...config.slow, tension: 100, friction: 50 },
    immediate: !isVisible
  });

  const headerSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 50,
    config: config.slow
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <animated.div
          ref={ref}
          style={headerSpring}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Industries We Serve
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI solutions across diverse industries and sectors
          </p>
        </animated.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trail.map((style, index) => {
            const IconComponent = industries[index].icon;
            return (
              <animated.div
                key={index}
                style={style}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-purple-300 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl shadow-lg h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${industries[index].color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {industries[index].name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {industries[index].description}
                  </p>
                  <div className="space-y-2">
                    {industries[index].applications.map((app, appIndex) => (
                      <div key={appIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{app}</span>
                      </div>
                    ))}
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

// Services Section Component for AIML
const ServicesSectionAIML = ({ services }) => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-200px" });
  
  const trail = useTrail(services.length, {
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 50,
    config: { ...config.slow, tension: 100, friction: 50 },
    immediate: !isVisible
  });

  const headerSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 50,
    config: config.slow
  });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <animated.div
          ref={ref}
          style={headerSpring}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              What We Offer
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI and machine learning services tailored to your business needs
          </p>
        </animated.div>

        <div className="grid md:grid-cols-2 gap-8">
          {trail.map((style, index) => {
            const IconComponent = services[index].icon;
            return (
              <animated.div
                key={index}
                style={style}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-purple-300 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl shadow-lg h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${services[index].color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {services[index].title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {services[index].description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {services[index].features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-500 text-sm flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
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

// Overview Image Component for AIML
const OverviewImageAIML = () => {
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
          src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="AI and Machine Learning"
          className="w-full h-96 object-cover rounded-3xl shadow-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
        <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 hover:scale-102 transition-transform">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Intelligent Automation</h3>
          <p className="text-gray-600">AI-powered business solutions</p>
        </div>
      </div>
    </animated.div>
  );
};

// Hero Content Component for AIML
const HeroContentAIML = ({ openModal }) => {
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

  const badgeSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    scale: isVisible ? 1 : 0.8,
    delay: 600,
    config: config.slow
  });

  return (
    <animated.div ref={ref} style={heroSpring}>
      <animated.h1 
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        style={titleSpring}
      >
        <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
          AI & Machine
        </span>
        <br />
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Learning Solutions
        </span>
      </animated.h1>
      
      <animated.p 
        className="text-xl sm:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed mb-8"
        style={textSpring}
      >
        Harness the power of <span className="text-purple-300 font-bold">artificial intelligence</span> to 
        transform your business with <span className="text-pink-300 font-bold">intelligent automation</span> and insights.
      </animated.p>

      <animated.div
        className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-purple-400/30 rounded-full px-6 py-3 shadow-xl"
        style={badgeSpring}
      >
        <FaBrain className="text-purple-400 text-xl" />
        <span className="text-purple-300 font-bold">INTELLIGENT • AUTOMATED • FUTURE-READY</span>
      </animated.div>
    </animated.div>
  );
};

const AIML = () => {
  const { openModal } = useModal();
  const [counters, setCounters] = useState({
    accuracy: 0,
    efficiency: 0,
    automation: 0,
    clients: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  // SEO Meta Tags
  useEffect(() => {
    document.title = "AI & ML Services - Piweb Tech | Power Your Business with Artificial Intelligence";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Transform your business with AI and Machine Learning solutions. Predictive analytics, intelligent chatbots, computer vision, and NLP services. Industry-leading AI expertise.');
    
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'AI services, machine learning, artificial intelligence, predictive analytics, chatbots, computer vision, NLP, AI consulting');
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('ai-stats');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = { accuracy: 95, efficiency: 80, automation: 70, clients: 150 };
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

  const services = [
    {
      icon: FaChartLine,
      title: "Predictive Analytics",
      description: "Leverage machine learning to forecast trends, predict customer behavior, and make data-driven decisions.",
      color: "from-blue-500 to-cyan-500",
      features: ["Sales Forecasting", "Customer Analytics", "Risk Assessment", "Market Trends"]
    },
    {
      icon: FaComments,
      title: "Intelligent Chatbots",
      description: "AI-powered conversational agents that provide 24/7 customer support and automate routine interactions.",
      color: "from-green-500 to-emerald-500",
      features: ["Natural Language Processing", "Multi-language Support", "Context Awareness", "Integration Ready"]
    },
    {
      icon: FaEye,
      title: "Computer Vision",
      description: "Advanced image and video analysis for object detection, facial recognition, and automated visual inspection.",
      color: "from-purple-500 to-pink-500",
      features: ["Object Detection", "Facial Recognition", "Quality Control", "Medical Imaging"]
    },
    {
      icon: FaBrain,
      title: "Natural Language Processing",
      description: "Extract insights from text data, sentiment analysis, and automated content generation.",
      color: "from-red-500 to-pink-500",
      features: ["Sentiment Analysis", "Text Classification", "Language Translation", "Content Generation"]
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      icon: FaHeart,
      description: "AI-powered diagnostics, drug discovery, and patient care optimization.",
      color: "from-red-500 to-pink-500",
      applications: ["Medical Imaging", "Drug Discovery", "Patient Monitoring", "Diagnosis Support"]
    },
    {
      name: "Retail",
      icon: FaShoppingCart,
      description: "Personalized recommendations, inventory optimization, and customer behavior analysis.",
      color: "from-blue-500 to-cyan-500",
      applications: ["Recommendation Systems", "Inventory Management", "Price Optimization", "Customer Analytics"]
    },
    {
      name: "Finance",
      icon: FaChartLine,
      description: "Fraud detection, algorithmic trading, and risk assessment.",
      color: "from-green-500 to-emerald-500",
      applications: ["Fraud Detection", "Algorithmic Trading", "Credit Scoring", "Risk Management"]
    },
    {
      name: "Education",
      icon: FaGraduationCap,
      description: "Personalized learning, automated grading, and educational content generation.",
      color: "from-purple-500 to-pink-500",
      applications: ["Personalized Learning", "Automated Grading", "Content Generation", "Student Analytics"]
    }
  ];

  const technologies = [
    { name: "TensorFlow", icon: FaBrain, color: "from-red-500 to-pink-500" },
    { name: "PyTorch", icon: FaMicrochip, color: "from-red-500 to-pink-500" },
    { name: "Scikit-learn", icon: FaCog, color: "from-blue-500 to-cyan-500" },
    { name: "OpenCV", icon: FaEye, color: "from-green-500 to-emerald-500" },
    { name: "NLTK", icon: FaComments, color: "from-purple-500 to-pink-500" },
    { name: "Keras", icon: FaNetworkWired, color: "from-indigo-500 to-purple-500" },
    { name: "Pandas", icon: FaDatabase, color: "from-yellow-500 to-orange-500" },
    { name: "NumPy", icon: FaChartLine, color: "from-cyan-500 to-blue-500" }
  ];

  const caseStudy = {
    title: "E-Commerce Recommendation Engine",
    description: "Implemented a machine learning system that increased customer engagement by 40% and boosted sales by 25%.",
    results: [
      { metric: "40%", label: "Increase in Engagement" },
      { metric: "25%", label: "Boost in Sales" },
      { metric: "60%", label: "Reduction in Bounce Rate" },
      { metric: "90%", label: "Customer Satisfaction" }
    ],
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600"
  };

  const stats = [
    { number: counters.accuracy, label: "Model Accuracy", icon: FaBrain, suffix: "%" },
    { number: counters.efficiency, label: "Process Efficiency", icon: FaRocket, suffix: "%" },
    { number: counters.automation, label: "Tasks Automated", icon: FaCog, suffix: "%" },
    { number: counters.clients, label: "AI Solutions Delivered", icon: FaUsers, suffix: "+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navbar />
      
      {/* Hero Banner with Advanced AI Tech Background */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10"></div>
          
          {/* Neural Network Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="ai-network" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                  <circle cx="12.5" cy="12.5" r="2" fill="rgba(147, 51, 234, 0.4)" />
                  <path d="M12.5,0 L12.5,12.5 M0,12.5 L12.5,12.5" stroke="rgba(236, 72, 153, 0.3)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ai-network)" />
            </svg>
          </div>

          {/* Moving AI/ML Tech Icons */}
          <div className="absolute inset-0 overflow-hidden">
            {[
              { icon: FaBrain, delay: 0, size: "text-2xl", color: "text-purple-400/30", y: "15%" },
              { icon: FaMicrochip, delay: 2, size: "text-xl", color: "text-pink-400/25", y: "15%" },
              { icon: FaRobot, delay: 4, size: "text-3xl", color: "text-blue-400/20", y: "15%" },
              { icon: FaChartLine, delay: 6, size: "text-xl", color: "text-purple-400/30", y: "15%" },
              { icon: FaDatabase, delay: 8, size: "text-2xl", color: "text-pink-400/25", y: "15%" },
              { icon: FaBrain, delay: 10, size: "text-xl", color: "text-blue-400/20", y: "15%" },
              { icon: FaMicrochip, delay: 12, size: "text-3xl", color: "text-purple-400/30", y: "15%" },
              { icon: FaRobot, delay: 14, size: "text-xl", color: "text-pink-400/25", y: "15%" },
              { icon: FaChartLine, delay: 16, size: "text-2xl", color: "text-blue-400/20", y: "15%" },
              { icon: FaDatabase, delay: 18, size: "text-xl", color: "text-purple-400/30", y: "15%" },
              { icon: FaBrain, delay: 1, size: "text-xl", color: "text-pink-400/20", y: "55%" },
              { icon: FaMicrochip, delay: 3, size: "text-3xl", color: "text-blue-400/25", y: "55%" },
              { icon: FaRobot, delay: 5, size: "text-xl", color: "text-purple-400/20", y: "55%" },
              { icon: FaChartLine, delay: 7, size: "text-2xl", color: "text-pink-400/25", y: "55%" },
              { icon: FaDatabase, delay: 9, size: "text-xl", color: "text-blue-400/20", y: "55%" },
              { icon: FaBrain, delay: 11, size: "text-3xl", color: "text-purple-400/25", y: "55%" },
              { icon: FaMicrochip, delay: 13, size: "text-xl", color: "text-pink-400/20", y: "55%" },
              { icon: FaRobot, delay: 15, size: "text-2xl", color: "text-blue-400/25", y: "55%" },
              { icon: FaChartLine, delay: 17, size: "text-xl", color: "text-purple-400/20", y: "55%" },
              { icon: FaDatabase, delay: 19, size: "text-3xl", color: "text-pink-400/25", y: "55%" }
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={`ai-tech-${i}`}
                  className={`absolute ${item.color} ${item.size} animate-float`}
                  style={{
                    top: item.y,
                    left: '-10%',
                    animationDelay: `${item.delay}s`,
                    animationDuration: `${28 + i * 2}s`
                  }}
                >
                  <IconComponent />
                </div>
              );
            })}
          </div>

          {/* Floating AI Code Snippets */}
          <div className="absolute inset-0 overflow-hidden">
            {[
              { code: "AI.train()", x: 10, y: 25, delay: 0 },
              { code: "ML.predict()", x: 80, y: 20, delay: 1 },
              { code: "neural.network()", x: 15, y: 65, delay: 2 },
              { code: "deep.learning()", x: 85, y: 75, delay: 3 },
              { code: "tensorflow.run()", x: 20, y: 45, delay: 4 },
              { code: "pytorch.model()", x: 70, y: 55, delay: 5 },
              { code: "NLP.process()", x: 30, y: 85, delay: 6 },
              { code: "CV.analyze()", x: 60, y: 30, delay: 7 }
            ].map((snippet, i) => (
              <div
                key={i}
                className="absolute text-xs font-mono text-purple-400/60 bg-black/20 px-2 py-1 rounded backdrop-blur-sm animate-float-code"
                style={{
                  left: `${snippet.x}%`,
                  top: `${snippet.y}%`,
                  animationDelay: `${snippet.delay}s`,
                  animationDuration: `${7 + i * 0.3}s`
                }}
              >
                {snippet.code}
              </div>
            ))}
          </div>

          {/* Animated Gradient Orbs */}
          {[
            { x: 15, y: 25, size: 200, color: 'from-purple-500/20 to-pink-500/20', delay: 0 },
            { x: 75, y: 15, size: 150, color: 'from-pink-500/20 to-blue-500/20', delay: 2 },
            { x: 25, y: 75, size: 180, color: 'from-blue-500/20 to-indigo-500/20', delay: 4 },
            { x: 85, y: 80, size: 120, color: 'from-indigo-500/20 to-purple-500/20', delay: 6 }
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
                animationDuration: `${9 + i}s`
              }}
            />
          ))}

          {/* Particle Effects */}
          {[...Array(25)].map((_, i) => (
            <div
              key={`ai-particle-${i}`}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                '--random-x': `${Math.random() * 120 - 60}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${5 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <HeroContentAIML openModal={openModal} />
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <OverviewContentAIML />
            <OverviewImageAIML />
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <ServicesSectionAIML services={services} />

      {/* Industries Served */}
      <IndustriesSectionAIML industries={industries} />

      {/* Case Study */}
      <CaseStudySectionAIML caseStudy={caseStudy} />

      {/* Tech Stack */}
      <TechStackSectionAIML technologies={technologies} />

      {/* Stats */}
      <StatsSectionAIML stats={stats} />

      {/* Why Choose Us Section */}
      <WhyChooseUsSectionAIML />

      {/* CTA */}
      <CTASectionAIML openModal={openModal} />

    </div>
  );
};

export default AIML;