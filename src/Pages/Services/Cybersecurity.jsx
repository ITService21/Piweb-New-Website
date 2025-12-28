import { useState, useEffect, useRef } from "react";
import { useSpring, animated, useTrail, config } from "@react-spring/web";
import Navbar from "../../Components/Navbar";
import { useModal } from "../../Context/ModalContext";
import AnimatedTechBackground from "../../Components/AnimatedTechBackground";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { 
  FaShieldAlt, 
  FaLock, 
  FaEye, 
  FaSearch,
  FaCheckCircle,
  FaArrowRight,
  FaRocket,
  FaUsers,
  FaChartLine,
  FaClock,
  FaAward
} from "react-icons/fa";

const Cybersecurity = () => {
  const { openModal } = useModal();
  const [counters, setCounters] = useState({
    threats: 0,
    clients: 0,
    incidents: 0,
    protection: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCounters();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('security-stats');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = { threats: 1000, clients: 110, incidents: 0, protection: 100 };
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
      icon: FaSearch,
      title: "Penetration Testing",
      description: "Comprehensive security assessments to identify vulnerabilities before attackers do.",
      color: "from-red-500 to-pink-500",
      features: ["Network Testing", "Web Application Testing", "Social Engineering", "Physical Security"]
    },
    {
      icon: FaShieldAlt,
      title: "Firewall Setup",
      description: "Advanced firewall configuration and management to protect your network perimeter.",
      color: "from-blue-500 to-cyan-500",
      features: ["Next-Gen Firewalls", "Intrusion Prevention", "Traffic Filtering", "VPN Configuration"]
    },
    {
      icon: FaEye,
      title: "Threat Monitoring",
      description: "24/7 security monitoring and incident response to detect and prevent attacks.",
      color: "from-green-500 to-emerald-500",
      features: ["SIEM Implementation", "Log Analysis", "Threat Intelligence", "Incident Response"]
    },
    {
      icon: FaLock,
      title: "Security Audits",
      description: "Comprehensive security audits and compliance assessments for your organization.",
      color: "from-purple-500 to-pink-500",
      features: ["Compliance Audits", "Risk Assessment", "Security Policies", "Training Programs"]
    }
  ];

  const benefits = [
    {
      icon: FaShieldAlt,
      title: "Complete Protection",
      description: "Multi-layered security approach protecting all aspects of your digital infrastructure.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaClock,
      title: "24/7 Monitoring",
      description: "Round-the-clock security monitoring and rapid incident response capabilities.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FaUsers,
      title: "Expert Team",
      description: "Certified security professionals with years of experience in cybersecurity.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FaAward,
      title: "Proven SLAs",
      description: "Guaranteed response times and service level agreements for peace of mind.",
      color: "from-red-500 to-pink-500"
    }
  ];

  const stats = [
    { number: counters.threats, label: "Threats Blocked", icon: FaShieldAlt, suffix: "+" },
    { number: counters.clients, label: "Clients Secured", icon: FaUsers, suffix: "+" },
    { number: counters.incidents, label: "Security Incidents", icon: FaEye, suffix: "" },
    { number: counters.protection, label: "Protection Rate", icon: FaLock, suffix: "%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navbar />
      
      {/* Hero Banner with Advanced Security Tech Background */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/5 to-yellow-500/10"></div>
          
          {/* Security Shield Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="security-shield" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
                  <path d="M11,2 L18,6 L18,12 Q18,18 11,20 Q4,18 4,12 L4,6 Z" stroke="rgba(239, 68, 68, 0.4)" strokeWidth="0.5" fill="none" />
                  <circle cx="11" cy="11" r="1.5" fill="rgba(251, 146, 60, 0.5)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#security-shield)" />
            </svg>
          </div>

          {/* Moving Security Tech Icons */}
          <div className="absolute inset-0 overflow-hidden">
            {[
              { icon: FaShieldAlt, delay: 0, size: "text-2xl", color: "text-red-400/30", y: "15%" },
              { icon: FaLock, delay: 2, size: "text-xl", color: "text-orange-400/25", y: "15%" },
              { icon: FaEye, delay: 4, size: "text-3xl", color: "text-yellow-400/20", y: "15%" },
              { icon: FaShieldAlt, delay: 6, size: "text-xl", color: "text-red-400/30", y: "15%" },
              { icon: FaLock, delay: 8, size: "text-2xl", color: "text-orange-400/25", y: "15%" },
              { icon: FaEye, delay: 10, size: "text-xl", color: "text-yellow-400/20", y: "15%" },
              { icon: FaShieldAlt, delay: 12, size: "text-3xl", color: "text-red-400/30", y: "15%" },
              { icon: FaLock, delay: 14, size: "text-xl", color: "text-orange-400/25", y: "15%" },
              { icon: FaEye, delay: 16, size: "text-2xl", color: "text-yellow-400/20", y: "15%" },
              { icon: FaShieldAlt, delay: 18, size: "text-xl", color: "text-red-400/30", y: "15%" },
              { icon: FaShieldAlt, delay: 1, size: "text-xl", color: "text-orange-400/20", y: "55%" },
              { icon: FaLock, delay: 3, size: "text-3xl", color: "text-yellow-400/25", y: "55%" },
              { icon: FaEye, delay: 5, size: "text-xl", color: "text-red-400/20", y: "55%" },
              { icon: FaShieldAlt, delay: 7, size: "text-2xl", color: "text-orange-400/25", y: "55%" },
              { icon: FaLock, delay: 9, size: "text-xl", color: "text-yellow-400/20", y: "55%" },
              { icon: FaEye, delay: 11, size: "text-3xl", color: "text-red-400/25", y: "55%" },
              { icon: FaShieldAlt, delay: 13, size: "text-xl", color: "text-orange-400/20", y: "55%" },
              { icon: FaLock, delay: 15, size: "text-2xl", color: "text-yellow-400/25", y: "55%" },
              { icon: FaEye, delay: 17, size: "text-xl", color: "text-red-400/20", y: "55%" },
              { icon: FaShieldAlt, delay: 19, size: "text-3xl", color: "text-orange-400/25", y: "55%" }
            ].map((item, i) => (
              <animated.div
                key={`sec-tech-${i}`}
                className={`absolute ${item.color} ${item.size}`}
                style={{
                  top: item.y,
                  left: '-10%',
                }}
                animate={{
                  x: ['-10%', '110%'],
                  y: [0, Math.sin(i * 0.35) * 35, 0],
                  rotate: [0, 360, 0],
                  scale: [0.8, 1.45, 0.8],
                }}
                transition={{
                  duration: 33 + i * 2,
                  repeat: Infinity,
                  delay: item.delay,
                  ease: "linear"
                }}
              >
                <item.icon />
              </animated.div>
            ))}
          </div>

          {/* Floating Security Code Snippets */}
          <div className="absolute inset-0 overflow-hidden">
            {[
              { code: "encrypt.data()", x: 10, y: 25, delay: 0 },
              { code: "firewall.protect()", x: 80, y: 20, delay: 1 },
              { code: "threat.detect()", x: 15, y: 65, delay: 2 },
              { code: "security.audit()", x: 85, y: 75, delay: 3 },
              { code: "vpn.secure()", x: 20, y: 45, delay: 4 },
              { code: "SIEM.monitor()", x: 70, y: 55, delay: 5 },
              { code: "compliance.check()", x: 30, y: 85, delay: 6 },
              { code: "access.control()", x: 60, y: 30, delay: 7 }
            ].map((snippet, i) => (
              <animated.div
                key={i}
                className="absolute text-xs font-mono text-red-400/60 bg-black/20 px-2 py-1 rounded backdrop-blur-sm"
                style={{
                  left: `${snippet.x}%`,
                  top: `${snippet.y}%`,
                }}
                animate={{
                  y: [0, -26, 0],
                  opacity: [0, 0.92, 0],
                  scale: [0.8, 1.12, 0.8],
                }}
                transition={{
                  duration: 7.5 + i * 0.3,
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
            { x: 15, y: 25, size: 200, color: 'from-red-500/20 to-orange-500/20', delay: 0 },
            { x: 75, y: 15, size: 150, color: 'from-orange-500/20 to-yellow-500/20', delay: 2 },
            { x: 25, y: 75, size: 180, color: 'from-yellow-500/20 to-red-500/20', delay: 4 },
            { x: 85, y: 80, size: 120, color: 'from-red-500/20 to-orange-500/20', delay: 6 }
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
                scale: [1, 1.32, 1],
                opacity: [0.3, 0.72, 0.3],
                x: [0, 28, 0],
                y: [0, -28, 0],
              }}
              transition={{
                duration: 9.8 + i,
                repeat: Infinity,
                delay: orb.delay,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Particle Effects */}
          {[...Array(26)].map((_, i) => (
            <animated.div
              key={`sec-particle-${i}`}
              className="absolute w-2 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                y: [0, -65, 0],
                x: [0, Math.random() * 130 - 65, 0],
              }}
              transition={{
                duration: 5.5 + Math.random() * 2,
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
              <span className="bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
                Defend. Detect. Protect.
              </span>
            </animated.h1>
            
            <animated.p 
              className="text-xl sm:text-2xl text-red-100 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Comprehensive <span className="text-red-300 font-bold">cybersecurity solutions</span> to 
              protect your business from <span className="text-orange-300 font-bold">digital threats</span>.
            </animated.p>

            <animated.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* <animated.button
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-300 flex items-center gap-2 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Secure My Business
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </animated.button>
              <animated.button
                className="px-8 py-4 border-2 border-white/50 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2 group backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Security Assessment
                <FaShieldAlt className="group-hover:scale-110 transition-transform" />
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
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Cyber Defense Solutions
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our comprehensive cybersecurity services protect your business from evolving threats 
                with advanced security measures, continuous monitoring, and rapid incident response.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From penetration testing to 24/7 monitoring, we provide end-to-end security solutions 
                that keep your data and systems safe from cyber attacks.
              </p>
              <div className="flex flex-wrap gap-4">
                <animated.div
                  className="flex items-center gap-2 bg-gradient-to-r from-red-50 to-orange-50 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700 font-medium">24/7 Monitoring</span>
                </animated.div>
                <animated.div
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700 font-medium">Expert Team</span>
                </animated.div>
                <animated.div
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700 font-medium">Rapid Response</span>
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
                  src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Cybersecurity Solutions"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                <animated.div
                  className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Advanced Security</h3>
                  <p className="text-gray-600">Protecting your digital assets</p>
                </animated.div>
              </div>
            </animated.div>
          </div>
        </div>
      </section>

      {/* Key Services */}
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
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Key Services
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cybersecurity services to protect your business
            </p>
          </animated.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <animated.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-red-300 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl shadow-lg h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-red-600 transition-colors duration-300">
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
              </animated.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Why Choose Us
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted cybersecurity partner with proven expertise
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
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-red-300 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl shadow-lg h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-red-600 transition-colors duration-300">
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

      {/* Security Stats */}
      <section id="security-stats" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <animated.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Security Performance
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven track record in protecting businesses from cyber threats
            </p>
          </animated.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <animated.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm border border-red-500/30 rounded-3xl p-8 hover:border-red-400/50 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="text-2xl text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
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
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Why Choose Our Cybersecurity Services?
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted security partner protecting businesses from evolving cyber threats
            </p>
          </animated.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaShieldAlt,
                title: "100% Protection Rate",
                description: "Zero security incidents for our clients with comprehensive threat protection.",
                color: "from-red-500 to-orange-500"
              },
              {
                icon: FaEye,
                title: "24/7 Monitoring",
                description: "Round-the-clock security monitoring with rapid incident response capabilities.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: FaUsers,
                title: "Certified Experts",
                description: "CISSP, CEH, and other certified security professionals on our team.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: FaLock,
                title: "Multi-Layer Defense",
                description: "Comprehensive security approach protecting all aspects of your infrastructure.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: FaAward,
                title: "Compliance Ready",
                description: "GDPR, HIPAA, SOC 2, and other compliance standards built into our solutions.",
                color: "from-indigo-500 to-purple-500"
              },
              {
                icon: FaClock,
                title: "Rapid Response",
                description: "Average response time of 15 minutes for critical security incidents.",
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
                  className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-red-300 transition-all duration-300 group-hover:shadow-2xl shadow-lg h-full relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 25px 50px rgba(239, 68, 68, 0.25)",
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
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-red-600 transition-colors duration-300">
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500">
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
              Secure My Business Now
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Protect your business with comprehensive cybersecurity solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <animated.button
                onClick={openModal}
                className="px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:shadow-2xl hover:shadow-white/40 transition-all duration-300 flex items-center gap-2 mx-auto group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Security Assessment
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </animated.button> */}
              <animated.button
                onClick={openModal}
                className="px-8 py-4 border-2 border-white/50 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2 mx-auto group backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Security Expert
                <FaShieldAlt className="group-hover:scale-110 transition-transform" />
              </animated.button>
            </div>
          </animated.div>
        </div>
      </section>

    </div>
  );
};

export default Cybersecurity;