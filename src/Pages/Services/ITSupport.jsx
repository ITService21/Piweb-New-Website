import { useRef, useEffect, useState, useMemo } from "react";
import { useSpring, animated, useTrail, config } from "@react-spring/web";
import Navbar from "../../Components/Navbar";
import { useModal } from "../../Context/ModalContext";
import AnimatedTechBackground from "../../Components/AnimatedTechBackground";
import { 
  FaLaptopCode, 
  FaServer, 
  FaCog, 
  FaShieldAlt,
  FaCheckCircle,
  FaArrowRight,
  FaUsers,
  FaHeart,
  FaClock,
  FaAward,
  FaEye,
  FaWrench,
  FaBuilding,
  FaDesktop
} from "react-icons/fa";

// Custom hook for Intersection Observer
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (options.once !== false) {
          observer.disconnect();
        }
      }
    }, {
      threshold: 0.1,
      rootMargin: options.margin || "-100px",
      ...options
    });

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [options.margin, options.once]);

  return [ref, isVisible];
};

const ITSupport = () => {
  const { openModal } = useModal();

  const services = [
    {
      icon: FaEye,
      title: "24/7 Monitoring",
      description: "Round-the-clock monitoring of your IT infrastructure to prevent issues before they occur.",
      color: "from-blue-500 to-cyan-500",
      features: ["System Monitoring", "Performance Tracking", "Alert Management", "Proactive Maintenance"]
    },
    {
      icon: FaServer,
      title: "Server Management",
      description: "Complete server administration including setup, maintenance, and optimization.",
      color: "from-green-500 to-emerald-500",
      features: ["Server Setup", "Performance Tuning", "Security Hardening", "Backup Management"]
    },
    {
      icon: FaWrench,
      title: "Troubleshooting",
      description: "Rapid resolution of technical issues with expert troubleshooting and support.",
      color: "from-red-500 to-pink-500",
      features: ["Issue Diagnosis", "Quick Resolution", "Root Cause Analysis", "Prevention Strategies"]
    },
    {
      icon: FaShieldAlt,
      title: "Security Management",
      description: "Comprehensive security services to protect your systems and data.",
      color: "from-purple-500 to-pink-500",
      features: ["Security Audits", "Threat Protection", "Compliance Management", "Incident Response"]
    }
  ];

  const whyChooseUs = [
    {
      icon: FaClock,
      title: "Quick Support",
      description: "Average response time of 15 minutes for critical issues.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaUsers,
      title: "Expert Team",
      description: "Certified professionals with years of experience in IT support.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FaAward,
      title: "Proven SLAs",
      description: "Guaranteed service level agreements with measurable outcomes.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FaHeart,
      title: "Customer Focus",
      description: "Dedicated to providing exceptional service and customer satisfaction.",
      color: "from-red-500 to-pink-500"
    }
  ];

  const supportPackages = [
    {
      title: "Basic Support",
      description: "Essential IT support for small businesses and startups.",
      icon: FaDesktop,
      color: "from-blue-500 to-cyan-500",
      features: ["Email Support", "Remote Assistance", "Basic Monitoring", "Monthly Reports"]
    },
    {
      title: "Professional Support",
      description: "Comprehensive support for growing businesses with complex IT needs.",
      icon: FaServer,
      color: "from-green-500 to-emerald-500",
      features: ["24/7 Support", "Priority Response", "Advanced Monitoring", "Proactive Maintenance"]
    },
    {
      title: "Enterprise Support",
      description: "Premium support for large organizations with mission-critical systems.",
      icon: FaBuilding,
      color: "from-purple-500 to-pink-500",
      features: ["Dedicated Team", "Custom SLAs", "On-site Support", "Strategic Consulting"]
    }
  ];

  // Hero animations
  const [heroRef, heroVisible] = useIntersectionObserver({ margin: "-50px" });
  const heroSpring = useSpring({
    opacity: heroVisible ? 1 : 0,
    y: heroVisible ? 0 : 50,
    config: config.slow
  });

  const titleSpring = useSpring({
    opacity: heroVisible ? 1 : 0,
    scale: heroVisible ? 1 : 0.8,
    delay: 200,
    config: config.slow
  });

  const textSpring = useSpring({
    opacity: heroVisible ? 1 : 0,
    y: heroVisible ? 0 : 30,
    delay: 400,
    config: config.slow
  });

  // Memoized particle positions for hero particle effects to avoid re-renders jitter
  const heroParticles = useMemo(() => (
    [...Array(28)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 3,
      duration: 6.2 + Math.random() * 2
    }))
  ), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navbar />
      
      {/* Hero Banner with Advanced IT Support Tech Background */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10"></div>
          
          {/* Support Network Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="support-network" x="0" y="0" width="17" height="17" patternUnits="userSpaceOnUse">
                  <circle cx="8.5" cy="8.5" r="1.8" fill="rgba(99, 102, 241, 0.4)" />
                  <path d="M8.5,0 L8.5,8.5 M0,8.5 L8.5,8.5 M17,8.5 L8.5,8.5 M8.5,17 L8.5,8.5" stroke="rgba(147, 51, 234, 0.3)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#support-network)" />
            </svg>
          </div>

          {/* Moving IT Support Tech Icons - Using CSS animations */}
          <div className="absolute inset-0 overflow-hidden">
            {[
              { icon: FaLaptopCode, delay: 0, size: "text-2xl", color: "text-indigo-400/30", y: "15%" },
              { icon: FaServer, delay: 2, size: "text-xl", color: "text-purple-400/25", y: "15%" },
              { icon: FaCog, delay: 4, size: "text-3xl", color: "text-pink-400/20", y: "15%" },
              { icon: FaWrench, delay: 6, size: "text-xl", color: "text-indigo-400/30", y: "15%" },
              { icon: FaEye, delay: 8, size: "text-2xl", color: "text-purple-400/25", y: "15%" },
              { icon: FaLaptopCode, delay: 10, size: "text-xl", color: "text-pink-400/20", y: "15%" },
              { icon: FaServer, delay: 12, size: "text-3xl", color: "text-indigo-400/30", y: "15%" },
              { icon: FaCog, delay: 14, size: "text-xl", color: "text-purple-400/25", y: "15%" },
              { icon: FaWrench, delay: 16, size: "text-2xl", color: "text-pink-400/20", y: "15%" },
              { icon: FaEye, delay: 18, size: "text-xl", color: "text-indigo-400/30", y: "15%" },
              { icon: FaLaptopCode, delay: 1, size: "text-xl", color: "text-purple-400/20", y: "55%" },
              { icon: FaServer, delay: 3, size: "text-3xl", color: "text-pink-400/25", y: "55%" },
              { icon: FaCog, delay: 5, size: "text-xl", color: "text-indigo-400/20", y: "55%" },
              { icon: FaWrench, delay: 7, size: "text-2xl", color: "text-purple-400/25", y: "55%" },
              { icon: FaEye, delay: 9, size: "text-xl", color: "text-pink-400/20", y: "55%" },
              { icon: FaLaptopCode, delay: 11, size: "text-3xl", color: "text-indigo-400/25", y: "55%" },
              { icon: FaServer, delay: 13, size: "text-xl", color: "text-purple-400/20", y: "55%" },
              { icon: FaCog, delay: 15, size: "text-2xl", color: "text-pink-400/25", y: "55%" },
              { icon: FaWrench, delay: 17, size: "text-xl", color: "text-indigo-400/20", y: "55%" },
              { icon: FaEye, delay: 19, size: "text-3xl", color: "text-purple-400/25", y: "55%" }
            ].map((item, i) => (
              <div
                key={`it-tech-${i}`}
                className={`absolute ${item.color} ${item.size} animate-float`}
                style={{
                  top: item.y,
                  left: '-10%',
                  animationDelay: `${item.delay}s`,
                  animationDuration: `${34 + i * 2}s`
                }}
              >
                <item.icon />
              </div>
            ))}
          </div>

          {/* Floating IT Support Code Snippets - Using CSS animations */}
          <div className="absolute inset-0 overflow-hidden">
            {[
              { code: "support.monitor()", x: 10, y: 25, delay: 0 },
              { code: "troubleshoot.fix()", x: 80, y: 20, delay: 1 },
              { code: "maintain.system()", x: 15, y: 65, delay: 2 },
              { code: "optimize.performance()", x: 85, y: 75, delay: 3 },
              { code: "backup.secure()", x: 20, y: 45, delay: 4 },
              { code: "update.software()", x: 70, y: 55, delay: 5 },
              { code: "network.configure()", x: 30, y: 85, delay: 6 },
              { code: "help.desk()", x: 60, y: 30, delay: 7 }
            ].map((snippet, i) => (
              <div
                key={i}
                className="absolute text-xs font-mono text-indigo-400/60 bg-black/20 px-2 py-1 rounded backdrop-blur-sm animate-float-code"
                style={{
                  left: `${snippet.x}%`,
                  top: `${snippet.y}%`,
                  animationDelay: `${snippet.delay}s`,
                  animationDuration: `${8.1 + i * 0.3}s`
                }}
              >
                {snippet.code}
              </div>
            ))}
          </div>

          {/* Animated Gradient Orbs - Using CSS animations */}
          {[
            { x: 15, y: 25, size: 200, color: 'from-indigo-500/20 to-purple-500/20', delay: 0 },
            { x: 75, y: 15, size: 150, color: 'from-purple-500/20 to-pink-500/20', delay: 2 },
            { x: 25, y: 75, size: 180, color: 'from-pink-500/20 to-indigo-500/20', delay: 4 },
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
                animationDuration: `${10.5 + i}s`
              }}
            />
          ))}

          {/* Particle Effects - Using CSS animations */}
          {heroParticles.map((p, i) => (
            <div
              key={`it-particle-${i}`}
              className="absolute w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-particle"
              style={{
                left: p.left,
                top: p.top,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`
              }}
            />
          ))}
        </div>

        <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <animated.div style={heroSpring}>
            <animated.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              style={titleSpring}
            >
              <span className="bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
                Reliable IT Support
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                for Every Need
              </span>
            </animated.h1>
            
            <animated.p 
              className="text-xl sm:text-2xl text-indigo-100 max-w-4xl mx-auto leading-relaxed mb-8"
              style={textSpring}
            >
              Professional <span className="text-indigo-300 font-bold">IT support and maintenance</span> services 
              to keep your <span className="text-purple-300 font-bold">systems running smoothly</span>.
            </animated.p>

            <animated.div
              style={textSpring}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={openModal}
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-indigo-500/40 transition-all duration-300 flex items-center gap-2 group hover:scale-105 hover:-translate-y-1"
              >
                Get Instant Support
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={openModal}
                className="px-8 py-4 border-2 border-white/50 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2 group backdrop-blur-sm hover:scale-105 hover:-translate-y-1"
              >
                View Support Plans
                <FaCog className="group-hover:scale-110 transition-transform" />
              </button>
            </animated.div>
          </animated.div>
        </div>
      </section>

      {/* Overview */}
      <section className="relative py-32 bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30 overflow-hidden">
        <AnimatedTechBackground variant="light" />
        
        {/* Enhanced Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content - Premium Animated Text */}
            <OverviewContent />
            
            {/* Right Image - Premium 3D Card Effect */}
            <OverviewImage />
          </div>
        </div>
      </section>

      {/* Services - Premium Animated Cards */}
      <ServicesSection services={services} openModal={openModal} />

      {/* Why Choose Us - Premium Cards */}
      <WhyChooseUsSection whyChooseUs={whyChooseUs} />

      {/* Support Packages - Premium 3D Cards */}
      <SupportPackagesSection supportPackages={supportPackages} />

      {/* Why Choose Us Section */}
      <WhyChooseUsGridSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Banner */}
      <CTASection openModal={openModal} />
    </div>
  );
};

// Tag Items Component
const TagItems = ({ isVisible }) => {
  const tags = [
    { text: "24/7 Support", gradient: "from-indigo-500 to-purple-500", icon: FaClock },
    { text: "Proactive Maintenance", gradient: "from-purple-500 to-pink-500", icon: FaCog },
    { text: "Expert Team", gradient: "from-pink-500 to-indigo-500", icon: FaUsers }
  ];

  const tag1Spring = useSpring({
    opacity: isVisible ? 1 : 0,
    scale: isVisible ? 1 : 0.8,
    y: isVisible ? 0 : 20,
    delay: 600,
    config: config.slow
  });

  const tag2Spring = useSpring({
    opacity: isVisible ? 1 : 0,
    scale: isVisible ? 1 : 0.8,
    y: isVisible ? 0 : 20,
    delay: 700,
    config: config.slow
  });

  const tag3Spring = useSpring({
    opacity: isVisible ? 1 : 0,
    scale: isVisible ? 1 : 0.8,
    y: isVisible ? 0 : 20,
    delay: 800,
    config: config.slow
  });

  const springs = [tag1Spring, tag2Spring, tag3Spring];

  return (
    <div className="flex flex-wrap gap-4">
      {tags.map((tag, index) => {
        const IconComponent = tag.icon;
        return (
          <animated.div
            key={index}
            style={springs[index]}
            className="group relative"
          >
            <div className={`relative bg-gradient-to-r ${tag.gradient} p-0.5 rounded-full shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/60 transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:shadow-xl`}>
              <div className="bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-3 border border-indigo-100/50 hover:border-indigo-200/80 transition-all duration-300">
                <IconComponent className={`text-lg bg-gradient-to-r ${tag.gradient} bg-clip-text text-transparent`} />
                <span className="font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                  {tag.text}
                </span>
              </div>
            </div>
          </animated.div>
        );
      })}
    </div>
  );
};

// Overview Content Component
const OverviewContent = () => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-100px" });
  
  const spring = useSpring({
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : -80,
    y: isVisible ? 0 : 30,
    config: config.slow
  });

  const titleSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 30,
    delay: 200,
    config: config.slow
  });

  const descSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 20,
    delay: 400,
    config: config.slow
  });

  return (
    <animated.div ref={ref} style={spring} className="relative group">
      {/* Enhanced Glow Effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
      <div className="absolute -inset-2 bg-gradient-to-r from-indigo-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
      
      <div className="relative bg-white/90 backdrop-blur-2xl rounded-3xl p-10 border-2 border-indigo-100/60 shadow-2xl shadow-indigo-500/20 group-hover:shadow-indigo-500/40 group-hover:border-indigo-200/80 transition-all duration-500 group-hover:scale-[1.02]">
        <animated.h2
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 leading-tight"
          style={titleSpring}
        >
          <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Support &
          </span>
          <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent mt-2">
            Maintenance
                </span>
        </animated.h2>

        <animated.div style={descSpring} className="space-y-6 mb-10">
          <p className="text-xl text-gray-700 leading-relaxed font-medium">
            Our comprehensive <span className="text-indigo-600 font-bold">IT support and maintenance</span> services ensure your systems 
            run smoothly with <span className="text-purple-600 font-bold">minimal downtime</span> and maximum efficiency.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            From <span className="text-pink-600 font-semibold">24/7 monitoring</span> to proactive maintenance, we provide the support 
            your business needs to stay <span className="text-indigo-600 font-semibold">productive and secure</span>.
          </p>
        </animated.div>

              <TagItems isVisible={isVisible} />
              </div>
    </animated.div>
  );
};

// Overview Image Component
const OverviewImage = () => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-100px" });
  
  const spring = useSpring({
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : 80,
    y: isVisible ? 0 : 30,
    rotateY: isVisible ? 0 : -15,
    config: config.slow
  });

  const cardSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 20,
    delay: 800,
    config: config.slow
  });

  return (
    <animated.div
      ref={ref}
      style={spring}
      className="relative group"
    >
      {/* Enhanced Multi-layer Glow */}
      <div className="absolute -inset-6 bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40 rounded-3xl blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
      <div className="absolute -inset-4 bg-gradient-to-r from-indigo-400/30 via-purple-400/30 to-pink-400/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
      <div className="absolute -inset-2 bg-gradient-to-r from-indigo-300/20 via-purple-300/20 to-pink-300/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

      <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 backdrop-blur-sm transition-all duration-500 hover:scale-[1.03] hover:-translate-y-3 hover:shadow-indigo-500/40 hover:border-indigo-300/40">
              <div className="relative">
                <img 
            src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="IT Support Services"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-purple-900/20 to-transparent"></div>

          <animated.div
            className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-xl rounded-2xl p-6 border border-indigo-100/50 shadow-xl"
            style={cardSpring}
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                <FaWrench className="text-2xl text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1">
                  Expert IT Support
                </h3>
                <p className="text-gray-600 font-medium">Reliable and professional service</p>
              </div>
          </div>
          </animated.div>
        </div>
      </div>
    </animated.div>
  );
};

// Services Section Component
const ServicesSection = ({ services, openModal }) => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-200px" });
  
  const trail = useTrail(services.length, {
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 80,
    scale: isVisible ? 1 : 0.9,
    config: config.slow,
    delay: 100
  });

  // Memoized particle positions for services section
  const serviceParticles = useMemo(() => (
    Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
      duration: 5 + Math.random() * 3
    }))
  ), []);

  return (
    <section className="relative py-32 bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30 overflow-hidden">
      <AnimatedTechBackground variant="light" />
      
      <div className="absolute inset-0 overflow-hidden">
        {serviceParticles.map((p, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400/40 to-purple-400/40 animate-particle"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`
            }}
          />
        ))}
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4">
        <SectionHeader 
          title="Our Services"
          description="Comprehensive IT support services for all your technology needs"
          isVisible={isVisible}
        />

        <div className="grid md:grid-cols-2 gap-10">
          {trail.map((style, index) => (
            <animated.div
                key={index}
              style={style}
              className="group relative"
            >
              {/* Enhanced Multi-layer Glow */}
              <div className={`absolute -inset-2 bg-gradient-to-r ${services[index].color} rounded-3xl blur-2xl opacity-25 group-hover:opacity-70 transition-opacity duration-500`}></div>
              <div className={`absolute -inset-1 bg-gradient-to-r ${services[index].color} rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500`}></div>

              <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl p-10 border-2 border-indigo-100/60 shadow-2xl shadow-indigo-500/10 h-full overflow-hidden transition-all duration-500 hover:shadow-indigo-500/40 hover:-translate-y-3 hover:scale-[1.02] hover:border-indigo-200/80 group-hover:shadow-2xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${services[index].color} opacity-[0.03] group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-200/40 via-purple-200/30 to-pink-200/20 rounded-bl-3xl"></div>

                <div className="relative z-10">
                  <div className={`relative w-20 h-20 bg-gradient-to-br ${services[index].color} rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-indigo-500/40 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-2xl group-hover:shadow-indigo-500/60`}>
                    {/* Icon Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${services[index].color} rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500`}></div>
                    {(() => {
                      const IconComponent = services[index].icon;
                      return <IconComponent className="relative z-10 text-3xl text-white drop-shadow-lg" />;
                    })()}
                  </div>

                  <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 group-hover:from-indigo-600 group-hover:to-purple-600 bg-clip-text text-transparent transition-all duration-500">
                    {services[index].title}
                  </h3>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
                    {services[index].description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {services[index].features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3 group/feature"
                      >
                        <div className="transition-transform duration-300 group-hover/feature:scale-125 group-hover/feature:rotate-180">
                          <FaCheckCircle className="text-green-500 text-lg flex-shrink-0" />
                        </div>
                        <span className="text-sm text-gray-700 font-medium group-hover/feature:text-indigo-600 transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
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

// Why Choose Us Section Component
const WhyChooseUsSection = ({ whyChooseUs }) => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-200px" });
  
  const trail = useTrail(whyChooseUs.length, {
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 60,
    scale: isVisible ? 1 : 0.9,
    rotateY: isVisible ? 0 : -20,
    config: config.slow,
    delay: 100
  });

  return (
    <section className="relative py-32 bg-gradient-to-br from-indigo-50/60 via-white to-purple-50/60 overflow-hidden">
      <AnimatedTechBackground variant="light" />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4">
        <SectionHeader 
          title="Why Choose Us"
          description="Trusted IT support partner with proven expertise"
          isVisible={isVisible}
        />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trail.map((style, index) => (
            <animated.div
                key={index}
              style={style}
              className="group relative"
            >
              {/* Enhanced Multi-layer Glow */}
              <div className={`absolute -inset-2 bg-gradient-to-r ${whyChooseUs[index].color} rounded-3xl blur-2xl opacity-20 group-hover:opacity-60 transition-opacity duration-500`}></div>
              <div className={`absolute -inset-1 bg-gradient-to-r ${whyChooseUs[index].color} rounded-3xl blur-xl opacity-25 group-hover:opacity-55 transition-opacity duration-500`}></div>

              <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl p-8 border-2 border-indigo-100/60 shadow-xl shadow-indigo-500/10 h-full overflow-hidden transition-all duration-500 hover:shadow-indigo-500/35 hover:-translate-y-3 hover:scale-[1.03] hover:border-indigo-200/80 group-hover:shadow-2xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${whyChooseUs[index].color} opacity-[0.02] group-hover:opacity-8 rounded-3xl transition-opacity duration-500`}></div>

                <div className="relative z-10 text-center">
                  <div className={`relative w-20 h-20 bg-gradient-to-br ${whyChooseUs[index].color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/30 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-2xl group-hover:shadow-indigo-500/50`}>
                    {/* Icon Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${whyChooseUs[index].color} rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500`}></div>
                    {(() => {
                      const IconComponent = whyChooseUs[index].icon;
                      return <IconComponent className="relative z-10 text-3xl text-white drop-shadow-lg" />;
                    })()}
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                    {whyChooseUs[index].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    {whyChooseUs[index].description}
                  </p>
                </div>
              </div>
            </animated.div>
            ))}
          </div>
        </div>
      </section>
  );
};

// Support Packages Section Component
const SupportPackagesSection = ({ supportPackages }) => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-200px" });
  
  const trail = useTrail(supportPackages.length, {
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 80,
    scale: isVisible ? 1 : 0.9,
    rotateY: isVisible ? 0 : -25,
    config: config.slow,
    delay: 200
  });

  return (
    <section className="relative py-32 bg-gradient-to-br from-white via-indigo-50/40 to-purple-50/40 overflow-hidden">
      <AnimatedTechBackground variant="light" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4">
        <SectionHeader 
          title="Support Packages"
          description="Flexible support packages tailored to your business needs"
          isVisible={isVisible}
        />

        <div className="grid md:grid-cols-3 gap-10">
          {trail.map((style, index) => (
            <animated.div
              key={index}
              style={style}
              className="group relative"
            >
              {/* Enhanced Multi-layer Glow */}
              <div className={`absolute -inset-3 bg-gradient-to-r ${supportPackages[index].color} rounded-3xl blur-3xl opacity-30 group-hover:opacity-70 transition-opacity duration-500`}></div>
              <div className={`absolute -inset-2 bg-gradient-to-r ${supportPackages[index].color} rounded-3xl blur-2xl opacity-35 group-hover:opacity-65 transition-opacity duration-500`}></div>
              <div className={`absolute -inset-1 bg-gradient-to-r ${supportPackages[index].color} rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500`}></div>

              <div className="relative bg-white/98 backdrop-blur-2xl rounded-3xl p-10 border-2 border-indigo-100/60 shadow-2xl shadow-indigo-500/15 h-full overflow-hidden transition-all duration-500 hover:shadow-indigo-500/45 hover:-translate-y-3 hover:scale-[1.03] hover:border-indigo-200/80 group-hover:shadow-3xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${supportPackages[index].color} opacity-[0.04] group-hover:opacity-12 rounded-3xl transition-opacity duration-500`}></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-indigo-200/50 via-purple-200/40 to-pink-200/30 rounded-bl-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-200/50 via-pink-200/40 to-indigo-200/30 rounded-tr-3xl"></div>

                <div className="relative z-10">
                  <div className={`relative w-24 h-24 bg-gradient-to-br ${supportPackages[index].color} rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-indigo-500/40 mx-auto transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-2xl group-hover:shadow-indigo-500/60`}>
                    {/* Icon Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${supportPackages[index].color} rounded-2xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500`}></div>
                    {(() => {
                      const IconComponent = supportPackages[index].icon;
                      return <IconComponent className="relative z-10 text-4xl text-white drop-shadow-lg" />;
                    })()}
                  </div>

                  <h3 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-gray-800 to-gray-600 group-hover:from-indigo-600 group-hover:to-purple-600 bg-clip-text text-transparent transition-all duration-500">
                    {supportPackages[index].title}
                  </h3>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed text-center font-medium">
                    {supportPackages[index].description}
                  </p>

                  <div className="space-y-4">
                    {supportPackages[index].features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-4 group/feature"
                      >
                        <div className="transition-transform duration-300 group-hover/feature:scale-125 group-hover/feature:rotate-180">
                          <FaCheckCircle className="text-green-500 text-lg flex-shrink-0" />
                        </div>
                        <span className="text-base text-gray-700 font-medium group-hover/feature:text-indigo-600 transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
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

// Why Choose Us Grid Section Component
const WhyChooseUsGridSection = () => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-200px" });
  
  const items = [
    { icon: FaClock, title: "15-Minute Response", description: "Average response time of 15 minutes for critical IT issues and emergencies.", color: "from-indigo-500 to-purple-500" },
    { icon: FaUsers, title: "Certified Engineers", description: "Microsoft, AWS, Cisco, and other certified IT professionals on our team.", color: "from-blue-500 to-cyan-500" },
    { icon: FaEye, title: "Proactive Monitoring", description: "24/7 system monitoring to prevent issues before they impact your business.", color: "from-green-500 to-emerald-500" },
    { icon: FaShieldAlt, title: "Secure & Compliant", description: "Maintain security standards and compliance with our managed IT services.", color: "from-purple-500 to-pink-500" },
    { icon: FaHeart, title: "Client Satisfaction", description: "98% client satisfaction rate with our responsive and professional support.", color: "from-red-500 to-pink-500" },
    { icon: FaAward, title: "Proven SLAs", description: "Guaranteed service level agreements with measurable performance metrics.", color: "from-yellow-500 to-orange-500" }
  ];

  const trail = useTrail(items.length, {
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 50,
    scale: isVisible ? 1 : 0.9,
    config: config.slow,
    delay: 100
  });

  return (
    <section className="py-20 bg-white">
      <AnimatedTechBackground variant="light" />
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Why Choose Our IT Support Services?
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reliable IT support that keeps your business running 24/7
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trail.map((style, index) => (
            <animated.div
                key={index}
              style={style}
                className="group"
              >
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 border-2 border-gray-200/60 hover:border-indigo-300/80 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-indigo-500/30 shadow-lg shadow-indigo-500/5 h-full relative overflow-hidden hover:scale-[1.03] hover:-translate-y-3 group-hover:bg-white">
                <div className={`absolute inset-0 bg-gradient-to-br ${items[index].color} opacity-[0.02] group-hover:opacity-12 rounded-3xl transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${items[index].color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 transition-all duration-500 shadow-lg shadow-indigo-500/20 group-hover:shadow-xl group-hover:shadow-indigo-500/40 group-hover:rotate-12`}>
                    {/* Icon Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${items[index].color} rounded-2xl blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-500`}></div>
                    {(() => {
                      const IconComponent = items[index].icon;
                      return <IconComponent className="relative z-10 text-2xl text-white drop-shadow-md" />;
                    })()}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                    {items[index].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {items[index].description}
                  </p>
                </div>
              </div>
            </animated.div>
          ))}
        </div>
                      </div>
    </section>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-200px" });
  
  const testimonials = [
    {
      name: "David Lee",
      role: "CTO, Innovate Corp.",
      content: "Piweb Tech's IT support is unparalleled. Their proactive approach and rapid response times have kept our operations seamless. Truly a game-changer!",
      rating: 5,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Sophia Garcia",
      role: "Operations Manager, Global Solutions",
      content: "We rely heavily on our IT infrastructure, and Piweb Tech ensures it's always running perfectly. Their team is knowledgeable, efficient, and always a pleasure to work with.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Mark Thompson",
      role: "CEO, FutureTech Inc.",
      content: "The best IT support experience we've ever had. From complex server issues to routine maintenance, they handle everything with expertise and professionalism.",
      rating: 5,
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const trail = useTrail(testimonials.length, {
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 80,
    scale: isVisible ? 1 : 0.9,
    rotateY: isVisible ? 0 : -10,
    config: config.slow,
    delay: 150
  });

  return (
    <section className="relative py-32 bg-gradient-to-br from-white via-indigo-50/20 to-purple-50/20 overflow-hidden">
      <AnimatedTechBackground variant="light" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4">
        <SectionHeader 
          title="What Our Clients Say"
          description="Hear from our satisfied clients about our exceptional IT support"
          isVisible={isVisible}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {trail.map((style, index) => (
            <animated.div
              key={index}
              style={style}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

              <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl p-10 border-2 border-indigo-100/60 shadow-2xl shadow-indigo-500/10 h-full overflow-hidden transition-all duration-500 hover:shadow-indigo-500/40 hover:-translate-y-3 hover:scale-[1.02] hover:border-indigo-200/80 group-hover:shadow-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-3xl"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-100/30 to-transparent rounded-bl-3xl"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonials[index].rating)].map((_, i) => (
                      <FaAward key={i} className="text-yellow-400 text-xl" />
                    ))}
                  </div>
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed italic font-medium">
                    &ldquo;{testimonials[index].content}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[index].image}
                      alt={testimonials[index].name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-indigo-300 shadow-lg"
                    />
                    <div>
                      <h4 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        {testimonials[index].name}
                      </h4>
                      <p className="text-md text-gray-600 font-medium">{testimonials[index].role}</p>
                    </div>
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

// CTA Section Component
const CTASection = ({ openModal }) => {
  const [ref, isVisible] = useIntersectionObserver({ margin: "-100px" });
  
  const spring = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 50,
    scale: isVisible ? 1 : 0.95,
    config: config.slow
  });

  const titleSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    scale: isVisible ? 1 : 0.9,
    delay: 200,
    config: config.slow
  });

  const textSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 20,
    delay: 400,
    config: config.slow
  });

  return (
    <section className="relative py-32 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 overflow-hidden">
      <AnimatedTechBackground variant="dark" />

      <div className="absolute inset-0 overflow-hidden">
        {[
          { x: 15, y: 25, size: 250, color: 'from-indigo-500/30 to-purple-500/30', delay: 0 },
          { x: 75, y: 15, size: 200, color: 'from-purple-500/30 to-pink-500/30', delay: 2 },
          { x: 25, y: 75, size: 220, color: 'from-pink-500/30 to-indigo-500/30', delay: 4 },
          { x: 85, y: 80, size: 180, color: 'from-indigo-500/30 to-purple-500/30', delay: 6 }
        ].map((orb, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r ${orb.color} blur-3xl animate-pulse-orb`}
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              width: orb.size,
              height: orb.size,
              transform: 'translate(-50%, -50%)',
              animationDelay: `${orb.delay}s`,
              animationDuration: `${12 + i * 1.5}s`
            }}
          />
        ))}
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <animated.div
          style={spring}
          className="bg-white/15 backdrop-blur-2xl border-2 border-white/30 rounded-3xl p-16 shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-500 hover:scale-[1.02] hover:border-white/40 relative overflow-hidden group"
        >
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <animated.h2
              style={titleSpring}
              className="text-5xl sm:text-6xl font-bold text-white mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
              Get Instant IT Support
              </span>
            </animated.h2>
            <animated.p
              style={textSpring}
              className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-medium"
            >
              Professional IT support services to keep your business running smoothly.
            </animated.p>
            <animated.div
              style={textSpring}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <button
                onClick={openModal}
                className="px-10 py-5 bg-white text-indigo-700 font-bold rounded-xl hover:shadow-3xl hover:shadow-white/40 transition-all duration-300 flex items-center gap-3 mx-auto group text-xl hover:scale-105 hover:-translate-y-1"
              >
                Contact Support Team
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button
                onClick={openModal}
                className="px-10 py-5 border-2 border-white/50 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-3 mx-auto group backdrop-blur-sm text-xl hover:scale-105 hover:-translate-y-1"
              >
                View Support Plans
                <FaCog className="group-hover:scale-110 transition-transform" />
              </button>
            </animated.div>
            </div>
        </animated.div>
        </div>
      </section>
  );
};

// Section Header Component
const SectionHeader = ({ title, description, isVisible }) => {
  const titleSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    scale: isVisible ? 1 : 0.9,
    delay: 200,
    config: config.slow
  });

  const lineSpring = useSpring({
    width: isVisible ? 160 : 0,
    delay: 400,
    config: config.slow
  });

  const descSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 20,
    delay: 600,
    config: config.slow
  });

  return (
    <div className="text-center mb-20">
      <animated.h2
        style={titleSpring}
        className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8"
      >
        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          {title}
        </span>
      </animated.h2>
      <animated.div
        style={lineSpring}
        className="h-1.5 w-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-8 shadow-lg shadow-indigo-500/50"
      />
      <animated.p
        style={descSpring}
        className="text-2xl text-gray-700 max-w-3xl mx-auto font-medium"
      >
        {description}
      </animated.p>
    </div>
  );
};

export default ITSupport;
