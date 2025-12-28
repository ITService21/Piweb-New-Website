import { useRef, useEffect, useState, useMemo } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import Navbar from "../../Components/Navbar";
import { useModal } from "../../Context/ModalContext";
import AnimatedTechBackground from "../../Components/AnimatedTechBackground";
import { 
  FaMobileAlt, 
  FaApple, 
  FaAndroid,
  FaCode,
  FaCheckCircle,
  FaArrowRight,
  FaUsers,
  FaHeart,
  FaClock,
  FaAward,
  FaPalette,
  FaRocket,
  FaShieldAlt,
  FaGlobe
} from "react-icons/fa";

// Custom hook for Intersection Observer
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const optionsRef = useRef(options);

  useEffect(() => {
    optionsRef.current = options;
  }, [options]);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (optionsRef.current.once !== false) {
          observer.disconnect();
        }
      }
    }, {
      threshold: 0.1,
      rootMargin: optionsRef.current.margin || "-100px",
      ...optionsRef.current
    });

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, []);

  return [ref, isVisible];
};

const MobileAppDevelopment = () => {
  const { openModal } = useModal();

  const services = [
    {
      icon: FaApple,
      title: "iOS App Development",
      description: "Native iOS applications built with Swift for maximum performance and user experience.",
      color: "from-gray-500 to-gray-700",
      features: ["Swift Development", "App Store Optimization", "iOS 16+ Support", "Smooth Performance"]
    },
    {
      icon: FaAndroid,
      title: "Android App Development",
      description: "Robust Android apps built with Kotlin for superior functionality and reach.",
      color: "from-green-500 to-emerald-500",
      features: ["Kotlin Development", "Google Play Optimization", "Android 13+ Support", "Battery Optimization"]
    },
    {
      icon: FaCode,
      title: "Cross-Platform Development",
      description: "Reach both iOS and Android users with efficient cross-platform solutions like React Native.",
      color: "from-blue-500 to-cyan-500",
      features: ["React Native", "Flutter", "Code Sharing", "Faster Development"]
    },
    {
      icon: FaPalette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed for mobile-first experiences and user engagement.",
      color: "from-purple-500 to-pink-500",
      features: ["Mobile Design", "User Research", "Prototyping", "Usability Testing"]
    }
  ];

  const whyChooseUs = [
    {
      icon: FaClock,
      title: "Fast Delivery",
      description: "Agile development methodology ensures rapid iterations and quick time-to-market.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaUsers,
      title: "Expert Team",
      description: "Certified mobile developers with extensive experience across iOS and Android platforms.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FaAward,
      title: "Quality Assurance",
      description: "Rigorous testing on multiple devices to ensure flawless performance and user experience.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FaHeart,
      title: "Post-Launch Support",
      description: "Continuous support, updates, and maintenance to keep your app performing optimally.",
      color: "from-red-500 to-pink-500"
    }
  ];

  const developmentPackages = [
    {
      title: "Startup Mobile App",
      description: "Perfect for startups launching their first mobile application.",
      icon: FaRocket,
      color: "from-blue-500 to-cyan-500",
      features: ["iOS & Android", "Modern UI/UX", "Basic Features", "3-Month Support"]
    },
    {
      title: "Enterprise Mobile Solution",
      description: "Comprehensive mobile solutions for growing businesses with complex requirements.",
      icon: FaGlobe,
      color: "from-green-500 to-emerald-500",
      features: ["Advanced Features", "Backend Integration", "Analytics", "6-Month Support"]
    },
    {
      title: "Premium Mobile Platform",
      description: "Enterprise-grade mobile platform with cutting-edge features and dedicated support.",
      icon: FaShieldAlt,
      color: "from-purple-500 to-pink-500",
      features: ["Custom Solutions", "24/7 Support", "Dedicated Team", "Ongoing Updates"]
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
      
      {/* Hero Banner with Mobile App Development Tech Background */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-cyan-500/5 to-blue-500/10"></div>
          
          {/* Mobile Network Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="mobile-network" x="0" y="0" width="17" height="17" patternUnits="userSpaceOnUse">
                  <rect x="6" y="2" width="5" height="13" stroke="rgba(34, 197, 94, 0.3)" strokeWidth="0.5" fill="none" />
                  <circle cx="8.5" cy="8.5" r="1.8" fill="rgba(6, 182, 212, 0.4)" />
                  <path d="M0,8.5 L3,8.5 M14,8.5 L17,8.5" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#mobile-network)" />
            </svg>
          </div>

          {/* Moving Mobile App Dev Icons - Using CSS animations */}
          <div className="absolute inset-0 overflow-hidden">
            {[
              { icon: FaMobileAlt, delay: 0, size: "text-2xl", color: "text-green-400/30", y: "15%" },
              { icon: FaApple, delay: 2, size: "text-xl", color: "text-cyan-400/25", y: "15%" },
              { icon: FaAndroid, delay: 4, size: "text-3xl", color: "text-blue-400/20", y: "15%" },
              { icon: FaCode, delay: 6, size: "text-xl", color: "text-green-400/30", y: "15%" },
              { icon: FaPalette, delay: 8, size: "text-2xl", color: "text-cyan-400/25", y: "15%" },
              { icon: FaMobileAlt, delay: 10, size: "text-xl", color: "text-blue-400/20", y: "15%" },
              { icon: FaApple, delay: 12, size: "text-3xl", color: "text-green-400/30", y: "15%" },
              { icon: FaAndroid, delay: 14, size: "text-xl", color: "text-cyan-400/25", y: "15%" },
              { icon: FaCode, delay: 16, size: "text-2xl", color: "text-blue-400/20", y: "15%" },
              { icon: FaPalette, delay: 18, size: "text-xl", color: "text-green-400/30", y: "15%" },
              { icon: FaMobileAlt, delay: 1, size: "text-xl", color: "text-cyan-400/20", y: "55%" },
              { icon: FaApple, delay: 3, size: "text-3xl", color: "text-blue-400/25", y: "55%" },
              { icon: FaAndroid, delay: 5, size: "text-xl", color: "text-green-400/20", y: "55%" },
              { icon: FaCode, delay: 7, size: "text-2xl", color: "text-cyan-400/25", y: "55%" },
              { icon: FaPalette, delay: 9, size: "text-xl", color: "text-blue-400/20", y: "55%" },
              { icon: FaMobileAlt, delay: 11, size: "text-3xl", color: "text-green-400/25", y: "55%" },
              { icon: FaApple, delay: 13, size: "text-xl", color: "text-cyan-400/20", y: "55%" },
              { icon: FaAndroid, delay: 15, size: "text-2xl", color: "text-blue-400/25", y: "55%" },
              { icon: FaCode, delay: 17, size: "text-xl", color: "text-green-400/20", y: "55%" },
              { icon: FaPalette, delay: 19, size: "text-3xl", color: "text-cyan-400/25", y: "55%" }
            ].map((item, i) => (
              <div
                key={`mobile-tech-${i}`}
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

          {/* Floating Mobile App Code Snippets - Using CSS animations */}
          <div className="absolute inset-0 overflow-hidden">
            {[
              { code: "app.build()", x: 10, y: 25, delay: 0 },
              { code: "ui.design()", x: 80, y: 20, delay: 1 },
              { code: "api.connect()", x: 15, y: 65, delay: 2 },
              { code: "push.notify()", x: 85, y: 75, delay: 3 },
              { code: "storage.sync()", x: 20, y: 45, delay: 4 },
              { code: "camera.capture()", x: 70, y: 55, delay: 5 },
              { code: "location.track()", x: 30, y: 85, delay: 6 },
              { code: "payment.process()", x: 60, y: 30, delay: 7 }
            ].map((snippet, i) => (
              <div
                key={i}
                className="absolute text-xs font-mono text-green-400/60 bg-black/20 px-2 py-1 rounded backdrop-blur-sm animate-float-code"
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
            { x: 15, y: 25, size: 200, color: 'from-green-500/20 to-cyan-500/20', delay: 0 },
            { x: 75, y: 15, size: 150, color: 'from-cyan-500/20 to-blue-500/20', delay: 2 },
            { x: 25, y: 75, size: 180, color: 'from-blue-500/20 to-green-500/20', delay: 4 },
            { x: 85, y: 80, size: 120, color: 'from-green-500/20 to-cyan-500/20', delay: 6 }
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
              key={`mobile-particle-${i}`}
              className="absolute w-2 h-2 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full animate-particle"
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
              <span className="bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent">
                Innovative Mobile Apps
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                for iOS & Android
              </span>
            </animated.h1>
            
            <animated.p 
              className="text-xl sm:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-8"
              style={textSpring}
            >
              Custom <span className="text-green-300 font-bold">mobile applications</span> designed to 
              deliver <span className="text-cyan-300 font-bold">exceptional user experiences</span> and drive business growth.
            </animated.p>

            <animated.div
              style={textSpring}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={openModal}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-green-500/40 transition-all duration-300 flex items-center gap-2 group hover:scale-105 hover:-translate-y-1"
              >
                Start Your App
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={openModal}
                className="px-8 py-4 border-2 border-white/50 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2 group backdrop-blur-sm hover:scale-105 hover:-translate-y-1"
              >
                View Portfolio
                <FaMobileAlt className="group-hover:scale-110 transition-transform" />
              </button>
            </animated.div>
          </animated.div>
        </div>
      </section>

      {/* Overview */}
      <section className="relative py-32 bg-gradient-to-br from-white via-green-50/30 to-cyan-50/30 overflow-hidden">
        <AnimatedTechBackground variant="light" />
        
        {/* Enhanced Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Overview Content */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">
                  Mobile-First Development
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We create powerful mobile applications that combine stunning design with robust functionality. 
                Our development process ensures your app stands out in a competitive marketplace.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From concept to App Store launch, we handle every aspect of mobile app development with expertise 
                in both native and cross-platform technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-gradient-to-r from-green-50 to-cyan-50 px-4 py-2 rounded-full hover:scale-105 transition-transform">
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700 font-medium">iOS & Android</span>
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 px-4 py-2 rounded-full hover:scale-105 transition-transform">
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700 font-medium">App Store Ready</span>
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-green-50 px-4 py-2 rounded-full hover:scale-105 transition-transform">
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700 font-medium">Post-Launch Support</span>
                </div>
              </div>
            </div>

            {/* Overview Image */}
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Mobile App Development"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 hover:scale-102 transition-transform">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Apps</h3>
                <p className="text-gray-600">Crafted with precision and passion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">
              Our Mobile Services
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-cyan-500 mx-auto rounded-full mb-16"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 border border-gray-200 hover:border-green-300 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl shadow-lg h-full"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500 text-sm flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
            Why Choose Us?
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-cyan-500 mx-auto rounded-full mb-16"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm border border-green-500/30 rounded-3xl p-8 hover:border-green-400/50 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl shadow-lg">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">
              Development Packages
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-cyan-500 mx-auto rounded-full mb-16"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {developmentPackages.map((pkg, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-green-400 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl shadow-lg"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${pkg.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <pkg.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {pkg.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {pkg.description}
                </p>
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={openModal}
                  className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-green-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-500 via-cyan-500 to-blue-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Launch Your Mobile App?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s transform your app idea into a market-leading mobile application.
          </p>
          <button
            onClick={openModal}
            className="px-8 py-4 bg-white text-green-600 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default MobileAppDevelopment;
