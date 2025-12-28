// src/pages/services/SEOOptimization.jsx
import { useState, useEffect } from "react";
import { useSpring, animated, useTrail, config } from "@react-spring/web";
import Navbar from "../../Components/Navbar";
import { useModal } from "../../Context/ModalContext";
import AnimatedTechBackground from "../../Components/AnimatedTechBackground";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaChartLine,
  FaCode,
  FaLink,
  FaFileAlt,
  FaMobileAlt,
  FaUsers,
  FaCheckCircle,
  FaArrowRight,
  FaRocket,
  FaShieldAlt,
  FaGlobe,
  FaBullhorn,
  FaLightbulb,
  FaShoppingCart,
  FaGraduationCap,
  FaHeart,
  FaAward,
  FaTrophy,
  FaGoogle,
  FaSearchengin,
  FaCog,
  FaPalette
} from "react-icons/fa";

// Fallback stats
const SEO_STATS_FALLBACK = [150, 85, 95, 200];

/* -------------------- Overview Content -------------------- */
const OverviewContentSEO = () => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-200px" });

  const spring = useSpring({
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : -40,
    config: config.slow
  });

  return (
    <animated.div ref={ref} style={spring}>
      <h2 className="text-4xl sm:text-5xl font-bold mb-6">
        <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
          SEO Solutions That Drive Results
        </span>
      </h2>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        We provide comprehensive SEO optimization services that boost your search rankings,
        increase organic traffic, and convert visitors into customers. Our data-driven approach
        ensures measurable results and sustainable growth.
      </p>
      <p className="text-gray-600 mb-8 leading-relaxed">
        Our SEO experts combine technical expertise with creative content strategies to deliver
        top rankings on Google and other search engines, helping your business dominate the digital landscape.
      </p>
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-2 bg-gradient-to-r from-red-50 to-pink-50 px-4 py-2 rounded-full hover:scale-105 transition-transform">
          <FaCheckCircle className="text-green-500" />
          <span className="text-gray-700 font-medium">Higher Rankings</span>
        </div>
        <div className="flex items-center gap-2 bg-gradient-to-r from-pink-50 to-purple-50 px-4 py-2 rounded-full hover:scale-105 transition-transform">
          <FaCheckCircle className="text-green-500" />
          <span className="text-gray-700 font-medium">Increased Traffic</span>
        </div>
        <div className="flex items-center gap-2 bg-gradient-to-r from-orange-50 to-red-50 px-4 py-2 rounded-full hover:scale-105 transition-transform">
          <FaCheckCircle className="text-green-500" />
          <span className="text-gray-700 font-medium">Better Conversions</span>
        </div>
      </div>
    </animated.div>
  );
};

/* -------------------- CTA -------------------- */
const CTASectionSEO = ({ openModal }) => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-100px" });

  const spring = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 40,
    scale: isVisible ? 1 : 0.98,
    config: config.slow
  });

  return (
    <section className="py-20 bg-gradient-to-br from-red-500 via-pink-500 to-purple-500 relative overflow-hidden">
      <AnimatedTechBackground variant="dark" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <animated.div
          ref={ref}
          style={spring}
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12 shadow-xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Rank #1 on Google?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's boost your search rankings and drive more organic traffic to your website.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openModal}
              className="px-8 py-4 bg-white text-pink-600 font-bold rounded-xl hover:shadow-2xl hover:shadow-white/40 transition-all duration-300 flex items-center gap-2 group hover:scale-105 hover:-translate-y-1"
            >
              Get Started
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </animated.div>
      </div>
    </section>
  );
};

/* -------------------- Why Choose Us -------------------- */
const WhyChooseUsSectionSEO = () => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-200px" });

  const items = [
    {
      icon: FaTrophy,
      title: "Proven Track Record",
      description:
        "150+ successful SEO campaigns with an average 85% increase in organic traffic.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: FaRocket,
      title: "Fast Results",
      description: "See measurable improvements within 30-60 days with our aggressive SEO strategies.",
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: FaShieldAlt,
      title: "White-Hat Techniques",
      description:
        "100% Google-compliant strategies that protect your website from penalties.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: FaUsers,
      title: "Expert Team",
      description: "Certified SEO specialists with 10+ years of combined experience.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: FaChartLine,
      title: "Data-Driven Approach",
      description: "Advanced analytics and reporting to track ROI and optimize performance.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaAward,
      title: "Industry Recognition",
      description: "Award-winning SEO services recognized by leading marketing organizations.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const trail = useTrail(items.length, {
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 40,
    scale: isVisible ? 1 : 0.96,
    config: { ...config.slow, tension: 120, friction: 20 },
    immediate: false
  });

  const headerSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 40,
    config: config.slow
  });

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <AnimatedTechBackground variant="light" />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <animated.div ref={ref} style={headerSpring} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              Why Choose Our SEO Services?
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading SEO expertise that transforms online visibility and drives business growth
          </p>
        </animated.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trail.map((style, index) => {
            const IconComponent = items[index].icon;
            return (
              <animated.div key={index} style={style} className="group">
                <div className="relative bg-white rounded-3xl p-8 border border-gray-200 transition-all duration-300 group-hover:shadow-2xl shadow-lg h-full overflow-hidden transform group-hover:-translate-y-2">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${items[index].color} opacity-0 group-hover:opacity-25 rounded-3xl transition-opacity duration-300 pointer-events-none`}
                  />
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${items[index].color} rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110 shadow-lg`}
                    >
                      <IconComponent className="text-2xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-pink-600 transition-colors duration-300">
                      {items[index].title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{items[index].description}</p>
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

/* -------------------- Stats -------------------- */
const StatsSectionSEO = ({ stats = [] }) => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-200px" });

  const trail = useTrail(stats.length, {
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 30,
    scale: isVisible ? 1 : 0.96,
    config: { ...config.slow, tension: 120, friction: 20 },
    immediate: false
  });

  const headerSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 30,
    config: config.slow
  });

  const [animatedNumbers, setAnimatedNumbers] = useState(() => stats.map(() => 0));

  useEffect(() => {
    setAnimatedNumbers(stats.map(() => 0));
  }, [stats]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1500;
    const steps = 60;
    const stepDuration = Math.max(8, Math.floor(duration / steps));
    const timers = [];

    stats.forEach((s, idx) => {
      const parsed = Number(s.number);
      const target = parsed > 0 ? parsed : (SEO_STATS_FALLBACK[idx] || 0);
      let current = 0;
      const increment = target / steps;
      const t = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(t);
        }
        setAnimatedNumbers(prev => {
          const copy = [...prev];
          copy[idx] = Math.floor(current);
          return copy;
        });
      }, stepDuration);
      timers.push(t);
    });

    return () => timers.forEach(t => clearInterval(t));
  }, [isVisible, stats]);

  return (
    <section id="seo-stats" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <AnimatedTechBackground variant="dark" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <animated.div ref={ref} style={headerSpring} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">SEO Performance Metrics</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Proven results from our SEO campaigns</p>
        </animated.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trail.map((style, index) => {
            const stat = stats[index] || {};
            const IconComponent = stat.icon || (() => null);
            const displayNumber = animatedNumbers[index] ?? stat.number ?? 0;
            return (
              <animated.div key={index} style={style} className="text-center group">
                <div className="relative bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm border border-pink-500/30 rounded-3xl p-8 transition-all duration-300 group-hover:shadow-xl transform group-hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-2xl text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    {displayNumber}
                    {stat.suffix}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              </animated.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* -------------------- Tech Stack -------------------- */
const TechStackSectionSEO = ({ technologies }) => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-200px" });

  const trail = useTrail(technologies.length, {
    opacity: isVisible ? 1 : 0,
    scale: isVisible ? 1 : 0.94,
    config: { ...config.slow, tension: 120, friction: 22 },
    immediate: false
  });

  const headerSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 30,
    config: config.slow
  });

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <AnimatedTechBackground variant="light" />
      <div className="max-w-7xl mx-auto px-4">
        <animated.div ref={ref} style={headerSpring} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">SEO Tools & Technologies</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Industry-leading SEO tools and analytics platforms</p>
        </animated.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {trail.map((style, index) => {
            const IconComponent = technologies[index].icon;
            return (
              <animated.div key={index} style={style} className="group">
                <div className="relative bg-white rounded-2xl p-6 border border-gray-200 transition-all duration-300 group-hover:shadow-lg transform group-hover:-translate-y-2 text-center">
                  <div className={`absolute inset-0 bg-gradient-to-br ${technologies[index].color} rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 pointer-events-none`} />
                  <div className={`w-12 h-12 bg-gradient-to-br ${technologies[index].color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-lg text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">{technologies[index].name}</h4>
                </div>
              </animated.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* -------------------- Case Study -------------------- */
const CaseStudySectionSEO = ({ caseStudy }) => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-200px" });

  const contentSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : -40,
    config: config.slow
  });
  const imageSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : 40,
    config: config.slow
  });

  const resultsTrail = useTrail(caseStudy.results.length, {
    opacity: isVisible ? 1 : 0,
    scale: isVisible ? 1 : 0.94,
    config: { ...config.slow, tension: 120 },
    immediate: false
  });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <AnimatedTechBackground variant="light" />
      <div className="max-w-7xl mx-auto px-4">
        <animated.div ref={ref} style={{ opacity: isVisible ? 1 : 0 }} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Success Story</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Real results from our SEO campaigns</p>
        </animated.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <animated.div style={contentSpring}>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">{caseStudy.title}</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{caseStudy.description}</p>
            <div className="grid grid-cols-2 gap-6">
              {resultsTrail.map((style, index) => (
                <animated.div key={index} style={style} className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">{caseStudy.results[index].metric}</div>
                  <div className="text-gray-600 font-medium">{caseStudy.results[index].label}</div>
                </animated.div>
              ))}
            </div>
          </animated.div>

          <animated.div style={imageSpring} className="relative">
            <img src={caseStudy.image} alt="SEO Results" className="w-full h-96 object-cover rounded-3xl shadow-2xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
          </animated.div>
        </div>
      </div>
    </section>
  );
};

/* -------------------- Services -------------------- */
const ServicesSectionSEO = ({ services }) => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-200px" });

  const trail = useTrail(services.length, {
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 30,
    scale: isVisible ? 1 : 0.96,
    config: { ...config.slow, tension: 120, friction: 22 },
    immediate: false
  });

  const headerSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 30,
    config: config.slow
  });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <AnimatedTechBackground variant="light" />
      <div className="max-w-7xl mx-auto px-4">
        <animated.div ref={ref} style={headerSpring} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Our SEO Services</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive SEO solutions tailored to your business goals</p>
        </animated.div>

        <div className="grid md:grid-cols-2 gap-8">
          {trail.map((style, index) => {
            const IconComponent = services[index].icon;
            return (
              <animated.div key={index} style={style} className="group">
                <div className="relative bg-white rounded-3xl p-8 border border-gray-200 transition-all duration-300 group-hover:shadow-xl transform group-hover:-translate-y-2 h-full overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${services[index].color} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-300 pointer-events-none`} />
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${services[index].color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-2xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-pink-600 transition-colors duration-300">{services[index].title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{services[index].description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {services[index].features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <FaCheckCircle className="text-green-500 text-sm flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
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

/* -------------------- Industries -------------------- */
const IndustriesSectionSEO = ({ industries }) => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-200px" });

  const trail = useTrail(industries.length, {
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 30,
    scale: isVisible ? 1 : 0.96,
    config: { ...config.slow, tension: 120, friction: 22 },
    immediate: false
  });

  const headerSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 30,
    config: config.slow
  });

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <AnimatedTechBackground variant="light" />
      <div className="max-w-7xl mx-auto px-4">
        <animated.div ref={ref} style={headerSpring} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Industries We Serve</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">SEO solutions across diverse industries and sectors</p>
        </animated.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trail.map((style, index) => {
            const IconComponent = industries[index].icon;
            return (
              <animated.div key={index} style={style} className="group">
                <div className="relative bg-white rounded-3xl p-8 border border-gray-200 transition-all duration-300 group-hover:shadow-xl transform group-hover:-translate-y-2 h-full overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${industries[index].color} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-300 pointer-events-none`} />
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${industries[index].color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-2xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-pink-600 transition-colors duration-300">{industries[index].name}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{industries[index].description}</p>
                    <div className="space-y-2">
                      {industries[index].applications.map((app, appIndex) => (
                        <div key={appIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full" />
                          <span className="text-sm text-gray-600">{app}</span>
                        </div>
                      ))}
                    </div>
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

/* -------------------- Hero / Overview Image / HeroContent -------------------- */
const OverviewImageSEO = () => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-200px" });

  const spring = useSpring({
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : 50,
    config: config.slow
  });

  return (
    <animated.div ref={ref} style={spring} className="relative">
      <motion.div
        whileHover={{ scale: 1.02, y: -6 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        className="relative"
      >
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-red-300 via-pink-300 to-purple-300 opacity-70 blur-xl" />
        <div className="relative">
          <img 
            src="https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="SEO Optimization"
            className="w-full h-96 object-cover rounded-3xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>
          <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 hover:scale-[1.02] transition-transform card-gradient-border">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Top Rankings Guaranteed</h3>
            <p className="text-gray-600">SEO strategies that deliver results</p>
          </div>
        </div>
      </motion.div>
    </animated.div>
  );
};

const HeroContentSEO = ({ openModal }) => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-50px" });

  const heroSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 30,
    config: config.slow
  });
  const titleSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    scale: isVisible ? 1 : 0.98,
    delay: 150,
    config: config.slow
  });
  const textSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 20,
    delay: 350,
    config: config.slow
  });
  const badgeSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    scale: isVisible ? 1 : 0.98,
    delay: 550,
    config: config.slow
  });

  return (
    <animated.div ref={ref} style={heroSpring}>
      <animated.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6" style={titleSpring}>
        <span className="bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent">SEO Optimization</span>
        <br />
        <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">That Drives Growth</span>
      </animated.h1>

      <animated.p className="text-xl sm:text-2xl text-pink-100 max-w-4xl mx-auto leading-relaxed mb-8" style={textSpring}>
        Dominate search rankings with <span className="text-pink-300 font-bold">data-driven SEO strategies</span> that
        increase visibility and <span className="text-red-300 font-bold">drive qualified traffic</span>.
      </animated.p>

      <animated.div
        className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-md border border-pink-400/30 rounded-full px-6 py-3 shadow-xl"
        style={badgeSpring}
      >
        <FaSearch className="text-pink-400 text-xl" />
        <span className="text-pink-300 font-bold">OPTIMIZED • RANKED • DISCOVERED</span>
      </animated.div>
    </animated.div>
  );
};

/* -------------------- Main Page -------------------- */
const SEOOptimization = () => {
  const { openModal } = useModal();
  const [counters, setCounters] = useState({
    traffic: 0,
    ranking: 0,
    conversion: 0,
    clients: 0
  });

  useEffect(() => {
    document.title = "SEO Optimization Services - Piweb Tech | Rank #1 on Google";
    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("description", "Professional SEO optimization services that boost rankings, increase organic traffic, and drive conversions. Get found by customers searching for your services.");
    setMeta("keywords", "SEO services, search engine optimization, SEO consultant, Google ranking, organic traffic, keyword research, link building, local SEO");
  }, []);

  useEffect(() => {
    const targets = { traffic: 150, ranking: 85, conversion: 95, clients: 200 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const animate = () => {
      Object.keys(targets).forEach((key) => {
        let current = 0;
        const increment = targets[key] / steps;
        const timer = setInterval(() => {
          current += increment;
          if (current >= targets[key]) {
            current = targets[key];
            clearInterval(timer);
          }
          setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
        }, stepDuration);
      });
    };

    const el = document.getElementById("seo-stats");
    if (el && el.getBoundingClientRect().top < window.innerHeight) {
      animate();
    }
  }, []);

  const services = [
    {
      icon: FaSearch,
      title: "Keyword Research & Strategy",
      description: "Identify high-value keywords that drive qualified traffic and conversions to your website.",
      color: "from-red-500 to-pink-500",
      features: ["Competitor Analysis", "Search Volume Research", "Long-tail Keywords", "Keyword Mapping"]
    },
    {
      icon: FaCode,
      title: "Technical SEO",
      description: "Optimize your website's technical foundation for better crawling, indexing, and performance.",
      color: "from-pink-500 to-purple-500",
      features: ["Site Speed Optimization", "Mobile-First Design", "Schema Markup", "XML Sitemaps"]
    },
    {
      icon: FaFileAlt,
      title: "Content Optimization",
      description: "Create and optimize high-quality content that ranks well and engages your target audience.",
      color: "from-purple-500 to-indigo-500",
      features: ["Content Writing", "On-Page SEO", "Meta Tags", "Header Optimization"]
    },
    {
      icon: FaLink,
      title: "Link Building",
      description: "Build high-authority backlinks that boost your domain authority and search rankings.",
      color: "from-indigo-500 to-blue-500",
      features: ["Quality Backlinks", "Guest Posting", "Outreach Campaigns", "Link Analysis"]
    }
  ];

  const industries = [
    {
      name: "E-Commerce",
      icon: FaShoppingCart,
      description: "SEO strategies that increase product visibility and drive online sales.",
      color: "from-red-500 to-pink-500",
      applications: ["Product SEO", "Category Optimization", "Shopping Feed", "Local Inventory"]
    },
    {
      name: "Healthcare",
      icon: FaHeart,
      description: "Medical SEO that helps patients find your practice online.",
      color: "from-pink-500 to-purple-500",
      applications: ["Local Healthcare SEO", "Medical Content", "HIPAA Compliance", "Reviews Management"]
    },
    {
      name: "Real Estate",
      icon: FaGlobe,
      description: "Property SEO that attracts buyers and renters to your listings.",
      color: "from-purple-500 to-indigo-500",
      applications: ["Property Listings", "Local SEO", "Virtual Tours", "Neighborhood Pages"]
    },
    {
      name: "Professional Services",
      icon: FaGraduationCap,
      description: "B2B SEO strategies for consultants, agencies, and service providers.",
      color: "from-indigo-500 to-blue-500",
      applications: ["Thought Leadership", "Case Studies", "Service Pages", "Lead Generation"]
    }
  ];

  const technologies = [
    { name: "Google Analytics", icon: FaGoogle, color: "from-red-500 to-pink-500" },
    { name: "Search Console", icon: FaSearchengin, color: "from-pink-500 to-purple-500" },
    { name: "SEMrush", icon: FaChartLine, color: "from-purple-500 to-indigo-500" },
    { name: "Ahrefs", icon: FaLink, color: "from-indigo-500 to-blue-500" },
    { name: "Moz Pro", icon: FaTrophy, color: "from-blue-500 to-cyan-500" },
    { name: "Screaming Frog", icon: FaCog, color: "from-cyan-500 to-teal-500" },
    { name: "GTmetrix", icon: FaRocket, color: "from-green-500 to-emerald-500" },
    { name: "Schema.org", icon: FaPalette, color: "from-orange-500 to-red-500" }
  ];

  const caseStudy = {
    title: "E-Commerce Store Traffic Growth",
    description: "Implemented comprehensive SEO strategy that increased organic traffic by 150% and boosted conversion rates by 85% within 6 months.",
    results: [
      { metric: "150%", label: "Traffic Increase" },
      { metric: "85%", label: "Higher Conversions" },
      { metric: "#1", label: "Google Rankings" },
      { metric: "200+", label: "Keywords Ranked" }
    ],
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600"
  };

  const stats = [
    { number: counters.traffic, label: "Avg Traffic Increase", icon: FaChartLine, suffix: "%" },
    { number: counters.ranking, label: "Top 10 Rankings", icon: FaTrophy, suffix: "%" },
    { number: counters.conversion, label: "Conversion Boost", icon: FaRocket, suffix: "%" },
    { number: counters.clients, label: "Success Stories", icon: FaUsers, suffix: "+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navbar />

      {/* Hero */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-pink-500/5 to-purple-500/10" />
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="seo-grid" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                  <circle cx="12.5" cy="12.5" r="2" fill="rgba(239, 68, 68, 0.4)" />
                  <path d="M12.5,0 L12.5,12.5 M0,12.5 L12.5,12.5" stroke="rgba(236,72,153,0.3)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#seo-grid)" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <HeroContentSEO openModal={openModal} />
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white relative overflow-hidden">
        <AnimatedTechBackground variant="light" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <OverviewContentSEO />
            <OverviewImageSEO />
          </div>
        </div>
      </section>

      {/* Services */}
      <ServicesSectionSEO services={services} />

      {/* Industries */}
      <IndustriesSectionSEO industries={industries} />

      {/* Case Study */}
      <CaseStudySectionSEO caseStudy={caseStudy} />

      {/* Tech Stack */}
      <TechStackSectionSEO technologies={technologies} />

      {/* Stats */}
      <StatsSectionSEO stats={stats} />

      {/* Why choose us */}
      <WhyChooseUsSectionSEO />

      {/* CTA */}
      <CTASectionSEO openModal={openModal} />
    </div>
  );
};

export default SEOOptimization;

