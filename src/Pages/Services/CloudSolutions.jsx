import { useState, useEffect, useRef } from "react";
import { useSpring, animated, useTrail, config } from "@react-spring/web";
import Navbar from "../../Components/Navbar";
import { useModal } from "../../Context/ModalContext";
import AnimatedTechBackground from "../../Components/AnimatedTechBackground";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { 
  FaCloud, 
  FaServer, 
  FaShieldAlt, 
  FaDatabase,
  FaCheckCircle,
  FaArrowRight,
  FaRocket,
  FaUsers,
  FaChartLine,
  FaLock,
  FaEye,
  FaStar,
  FaCogs
} from "react-icons/fa";

const CloudSolutions = () => {
  const { openModal } = useModal();
  const [counters, setCounters] = useState({
    uptime: 0,
    savings: 0,
    clients: 0,
    deployments: 0
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

    const element = document.getElementById('cloud-stats');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = { uptime: 99.9, savings: 40, clients: 30, deployments: 40 };
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
        setCounters(prev => ({ ...prev, [key]: Math.floor(current * 10) / 10 }));
      }, stepDuration);
    });
  };

  const offerings = [
    {
      icon: FaRocket,
      title: "Cloud Migration",
      description: "Seamless migration of your applications and data to the cloud with zero downtime.",
      color: "from-blue-500 to-cyan-500",
      features: ["Zero Downtime Migration", "Data Security", "Performance Optimization", "Cost Analysis"]
    },
    {
      icon: FaDatabase,
      title: "Backup & Recovery",
      description: "Comprehensive backup solutions with automated recovery and disaster prevention.",
      color: "from-green-500 to-emerald-500",
      features: ["Automated Backups", "Point-in-time Recovery", "Cross-region Replication", "Disaster Recovery"]
    },
    {
      icon: FaServer,
      title: "Cloud Hosting",
      description: "Scalable and reliable hosting solutions for websites and applications.",
      color: "from-purple-500 to-pink-500",
      features: ["Auto-scaling", "Load Balancing", "CDN Integration", "SSL Certificates"]
    },
    {
      icon: FaCogs,
      title: "DevOps Services",
      description: "Complete DevOps implementation with CI/CD pipelines and infrastructure automation.",
      color: "from-red-500 to-pink-500",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Logging", "Security Automation"]
    }
  ];

  const benefits = [
    {
      icon: FaChartLine,
      title: "Cost Savings",
      description: "Reduce infrastructure costs by up to 40% with pay-as-you-scale pricing models.",
      color: "from-green-500 to-emerald-500",
      metric: "40%",
      improvement: "Cost Reduction"
    },
    {
      icon: FaShieldAlt,
      title: "High Availability",
      description: "99.9% uptime guarantee with redundant systems and automatic failover.",
      color: "from-blue-500 to-cyan-500",
      metric: "99.9%",
      improvement: "Uptime Guarantee"
    },
    {
      icon: FaLock,
      title: "Enhanced Security",
      description: "Enterprise-grade security with encryption, access controls, and compliance.",
      color: "from-purple-500 to-pink-500",
      metric: "100%",
      improvement: "Data Protection"
    },
    {
      icon: FaRocket,
      title: "Scalability",
      description: "Scale resources instantly based on demand without infrastructure constraints.",
      color: "from-red-500 to-pink-500",
      metric: "10x",
      improvement: "Performance Boost"
    }
  ];

  const providers = [
    { name: "AWS", icon: FaCloud, color: "from-red-500 to-pink-500", description: "Amazon Web Services" },
    { name: "Azure", icon: FaCloud, color: "from-blue-500 to-cyan-500", description: "Microsoft Azure" },
    { name: "Google Cloud", icon: FaCloud, color: "from-green-500 to-emerald-500", description: "Google Cloud Platform" },
    { name: "DigitalOcean", icon: FaCloud, color: "from-blue-600 to-blue-800", description: "DigitalOcean" },
    { name: "Linode", icon: FaCloud, color: "from-purple-500 to-pink-500", description: "Linode" },
    { name: "Vultr", icon: FaCloud, color: "from-indigo-500 to-purple-500", description: "Vultr" }
  ];

  const services = [
    {
      title: "Infrastructure Setup",
      description: "Design and deploy cloud infrastructure tailored to your business needs.",
      icon: FaServer,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Application Migration",
      description: "Migrate your existing applications to the cloud with minimal disruption.",
      icon: FaRocket,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Security Implementation",
      description: "Implement comprehensive security measures and compliance standards.",
      icon: FaShieldAlt,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Monitoring & Support",
      description: "24/7 monitoring and support to ensure optimal cloud performance.",
      icon: FaEye,
      color: "from-red-500 to-pink-500"
    }
  ];

  const stats = [
    { number: counters.uptime, label: "Uptime Guarantee", icon: FaShieldAlt, suffix: "%" },
    { number: counters.savings, label: "Cost Savings", icon: FaChartLine, suffix: "%" },
    { number: counters.clients, label: "Happy Clients", icon: FaUsers, suffix: "+" },
    { number: counters.deployments, label: "Successful Deployments", icon: FaRocket, suffix: "+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navbar />
      
      {/* Hero Banner with Advanced Cloud Tech Background */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-indigo-500/10"></div>
          
          {/* Cloud Network Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="cloud-network" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
                  <circle cx="9" cy="9" r="2" fill="rgba(6, 182, 212, 0.4)" />
                  <path d="M9,0 Q9,9 18,9 M0,9 Q9,9 9,18" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cloud-network)" />
            </svg>
          </div>

          {/* Moving Cloud Tech Icons */}
          <div className="absolute inset-0 overflow-hidden">
            {[
              { icon: FaCloud, delay: 0, size: "text-2xl", color: "text-cyan-400/30", y: "15%" },
              { icon: FaServer, delay: 2, size: "text-xl", color: "text-blue-400/25", y: "15%" },
              { icon: FaDatabase, delay: 4, size: "text-3xl", color: "text-indigo-400/20", y: "15%" },
              { icon: FaRocket, delay: 6, size: "text-xl", color: "text-cyan-400/30", y: "15%" },
              { icon: FaCloud, delay: 8, size: "text-2xl", color: "text-blue-400/25", y: "15%" },
              { icon: FaServer, delay: 10, size: "text-xl", color: "text-indigo-400/20", y: "15%" },
              { icon: FaDatabase, delay: 12, size: "text-3xl", color: "text-cyan-400/30", y: "15%" },
              { icon: FaRocket, delay: 14, size: "text-xl", color: "text-blue-400/25", y: "15%" },
              { icon: FaCloud, delay: 16, size: "text-2xl", color: "text-indigo-400/20", y: "15%" },
              { icon: FaServer, delay: 18, size: "text-xl", color: "text-cyan-400/30", y: "15%" },
              { icon: FaCloud, delay: 1, size: "text-xl", color: "text-blue-400/20", y: "55%" },
              { icon: FaServer, delay: 3, size: "text-3xl", color: "text-indigo-400/25", y: "55%" },
              { icon: FaDatabase, delay: 5, size: "text-xl", color: "text-cyan-400/20", y: "55%" },
              { icon: FaRocket, delay: 7, size: "text-2xl", color: "text-blue-400/25", y: "55%" },
              { icon: FaCloud, delay: 9, size: "text-xl", color: "text-indigo-400/20", y: "55%" },
              { icon: FaServer, delay: 11, size: "text-3xl", color: "text-cyan-400/25", y: "55%" },
              { icon: FaDatabase, delay: 13, size: "text-xl", color: "text-blue-400/20", y: "55%" },
              { icon: FaRocket, delay: 15, size: "text-2xl", color: "text-indigo-400/25", y: "55%" },
              { icon: FaCloud, delay: 17, size: "text-xl", color: "text-cyan-400/20", y: "55%" },
              { icon: FaServer, delay: 19, size: "text-3xl", color: "text-blue-400/25", y: "55%" }
            ].map((item, i) => (
              <animated.div
                key={`cloud-tech-${i}`}
                className={`absolute ${item.color} ${item.size}`}
                style={{
                  top: item.y,
                  left: '-10%',
                }}
                animate={{
                  x: ['-10%', '110%'],
                  y: [0, Math.cos(i * 0.4) * 32, 0],
                  rotate: [0, 360, 0],
                  scale: [0.8, 1.4, 0.8],
                }}
                transition={{
                  duration: 35 + i * 2,
                  repeat: Infinity,
                  delay: item.delay,
                  ease: "linear"
                }}
              >
                <item.icon />
              </animated.div>
            ))}
          </div>

          {/* Floating Cloud Code Snippets */}
          <div className="absolute inset-0 overflow-hidden">
            {[
              { code: "AWS.deploy()", x: 10, y: 25, delay: 0 },
              { code: "Azure.migrate()", x: 80, y: 20, delay: 1 },
              { code: "GCP.scale()", x: 15, y: 65, delay: 2 },
              { code: "cloud.optimize()", x: 85, y: 75, delay: 3 },
              { code: "infra.asCode()", x: 20, y: 45, delay: 4 },
              { code: "kubernetes.run()", x: 70, y: 55, delay: 5 },
              { code: "docker.build()", x: 30, y: 85, delay: 6 },
              { code: "terraform.apply()", x: 60, y: 30, delay: 7 }
            ].map((snippet, i) => (
              <animated.div
                key={i}
                className="absolute text-xs font-mono text-cyan-400/60 bg-black/20 px-2 py-1 rounded backdrop-blur-sm"
                style={{
                  left: `${snippet.x}%`,
                  top: `${snippet.y}%`,
                }}
                animate={{
                  y: [0, -24, 0],
                  opacity: [0, 0.9, 0],
                  scale: [0.8, 1.1, 0.8],
                }}
                transition={{
                  duration: 7.2 + i * 0.3,
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
            { x: 15, y: 25, size: 200, color: 'from-cyan-500/20 to-blue-500/20', delay: 0 },
            { x: 75, y: 15, size: 150, color: 'from-blue-500/20 to-indigo-500/20', delay: 2 },
            { x: 25, y: 75, size: 180, color: 'from-indigo-500/20 to-cyan-500/20', delay: 4 },
            { x: 85, y: 80, size: 120, color: 'from-cyan-500/20 to-blue-500/20', delay: 6 }
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
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.7, 0.3],
                x: [0, 26, 0],
                y: [0, -26, 0],
              }}
              transition={{
                duration: 9.5 + i,
                repeat: Infinity,
                delay: orb.delay,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Particle Effects */}
          {[...Array(24)].map((_, i) => (
            <animated.div
              key={`cloud-particle-${i}`}
              className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                y: [0, -62, 0],
                x: [0, Math.random() * 125 - 62.5, 0],
              }}
              transition={{
                duration: 5.2 + Math.random() * 2,
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
              <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Scale Beyond Limits
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                with Cloud
              </span>
            </animated.h1>
            
            <animated.p 
              className="text-xl sm:text-2xl text-cyan-100 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Harness the power of <span className="text-cyan-300 font-bold">cloud computing</span> to 
              scale your business with <span className="text-blue-300 font-bold">unlimited potential</span>.
            </animated.p>

            <animated.div
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md border border-cyan-400/30 rounded-full px-6 py-3 shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <FaCloud className="text-cyan-400 text-xl" />
              <span className="text-cyan-300 font-bold">SCALABLE • SECURE • RELIABLE</span>
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
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  Cloud Expertise
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We specialize in AWS, Azure, and Google Cloud Platform implementations, helping 
                businesses migrate to the cloud and optimize their infrastructure for maximum 
                performance and cost efficiency.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our cloud solutions provide scalability, security, and reliability while reducing 
                infrastructure costs and improving operational efficiency.
              </p>
              <div className="flex flex-wrap gap-4">
                <animated.div
                  className="flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700 font-medium">Multi-Cloud Expertise</span>
                </animated.div>
                <animated.div
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700 font-medium">24/7 Support</span>
                </animated.div>
                <animated.div
                  className="flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700 font-medium">Cost Optimization</span>
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
                  src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Cloud Computing Solutions"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                <animated.div
                  className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Cloud Infrastructure</h3>
                  <p className="text-gray-600">Scalable and secure cloud solutions</p>
                </animated.div>
              </div>
            </animated.div>
          </div>
        </div>
      </section>

      {/* Offerings */}
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
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Our Cloud Offerings
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cloud services to transform your business infrastructure
            </p>
          </animated.div>

          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((offering, index) => (
              <animated.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
                whileHover={{ scale: 1.05, y: -8 }}
              >
                <animated.div 
                  className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-cyan-300 transition-all duration-300 group-hover:shadow-2xl shadow-lg h-full relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 25px 50px rgba(6, 182, 212, 0.25)",
                  }}
                >
                  <animated.div
                    className={`absolute inset-0 bg-gradient-to-br ${offering.color} opacity-0 group-hover:opacity-10 rounded-3xl`}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-100/30 to-transparent rounded-bl-3xl"></div>
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${offering.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 transition-transform duration-300 shadow-lg`}>
                    <offering.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                    {offering.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {offering.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {offering.features.map((feature, featureIndex) => (
                        <animated.div 
                          key={featureIndex} 
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                        <FaCheckCircle className="text-green-500 text-sm flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                        </animated.div>
                    ))}
                  </div>
                </div>
                </animated.div>
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
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Cloud Benefits
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with measurable cloud advantages
            </p>
          </animated.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <animated.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
                whileHover={{ scale: 1.1, y: -8 }}
              >
                <animated.div 
                  className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 border border-cyan-200/50 hover:border-cyan-300 transition-all duration-300 group-hover:shadow-2xl shadow-lg relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 25px 50px rgba(6, 182, 212, 0.25)",
                  }}
                >
                  <animated.div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 rounded-3xl`}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 transition-transform duration-300 shadow-lg`}>
                    <benefit.icon className="text-2xl text-white" />
                  </div>
                  <div className="text-4xl font-bold text-cyan-600 mb-2">
                    {benefit.metric}
                  </div>
                  <div className="text-gray-600 font-medium mb-4">{benefit.improvement}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
                </animated.div>
              </animated.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
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
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Cloud Providers
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expertise across all major cloud platforms
            </p>
          </animated.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {providers.map((provider, index) => (
              <animated.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
                whileHover={{ scale: 1.15, rotate: 5, y: -8 }}
              >
                <animated.div 
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-cyan-300 transition-all duration-300 group-hover:shadow-lg shadow-md text-center relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 15px 30px rgba(6, 182, 212, 0.25)",
                  }}
                >
                  <animated.div
                    className={`absolute inset-0 bg-gradient-to-br ${provider.color} opacity-0 group-hover:opacity-10 rounded-2xl`}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-br ${provider.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <provider.icon className="text-lg text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-800 group-hover:text-cyan-600 transition-colors duration-300 mb-1">
                    {provider.name}
                  </h4>
                  <p className="text-xs text-gray-500">{provider.description}</p>
                </div>
                </animated.div>
              </animated.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
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
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Cloud Services
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end cloud solutions for your business needs
            </p>
          </animated.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <animated.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
                whileHover={{ scale: 1.1, y: -8, rotate: 2 }}
              >
                <animated.div 
                  className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-cyan-300 transition-all duration-300 group-hover:shadow-2xl shadow-lg h-full relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 25px 50px rgba(6, 182, 212, 0.25)",
                  }}
                >
                  <animated.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-3xl`}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                </animated.div>
              </animated.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="cloud-stats" className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        <AnimatedTechBackground variant="dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <animated.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Cloud Performance Metrics
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven results from our cloud implementations
            </p>
          </animated.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <animated.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
                whileHover={{ scale: 1.1, y: -8 }}
              >
                <animated.div 
                  className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm border border-cyan-500/30 rounded-3xl p-8 hover:border-cyan-400/50 transition-all duration-300 group-hover:shadow-xl shadow-lg relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)",
                  }}
                >
                  <animated.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 rounded-3xl"
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="text-2xl text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
                </animated.div>
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
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Why Choose Our Cloud Solutions?
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading cloud expertise across all major platforms
            </p>
          </animated.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaCloud,
                title: "Multi-Cloud Expertise",
                description: "Certified experts in AWS, Azure, GCP, and other leading cloud platforms.",
                color: "from-cyan-500 to-blue-500"
              },
              {
                icon: FaChartLine,
                title: "Cost Optimization",
                description: "Reduce infrastructure costs by up to 40% with our optimization strategies.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: FaShieldAlt,
                title: "99.9% Uptime",
                description: "Enterprise-grade reliability with redundant systems and automatic failover.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: FaRocket,
                title: "Rapid Migration",
                description: "Zero-downtime migrations with minimal disruption to your business.",
                color: "from-red-500 to-pink-500"
              },
              {
                icon: FaUsers,
                title: "24/7 Cloud Support",
                description: "Round-the-clock monitoring and support from certified cloud engineers.",
                color: "from-indigo-500 to-purple-500"
              },
              {
                icon: FaLock,
                title: "Enterprise Security",
                description: "Bank-level encryption, compliance, and security best practices.",
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
                  className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-cyan-300 transition-all duration-300 group-hover:shadow-2xl shadow-lg h-full relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 25px 50px rgba(6, 182, 212, 0.25)",
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
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
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

      {/* Testimonials Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
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
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </animated.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sourabh Labana",
                role: "Adviaor, GrowStartup",
                content: "Piweb Tech's cloud migration transformed our infrastructure completely. We reduced costs by 45% and improved performance significantly. Outstanding service!",
                rating: 5,
                image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                name: "Suraj Bansal",
                role: "VP Engineering, CloudFirst Inc.",
                content: "The team's expertise in multi-cloud architecture is exceptional. They helped us optimize our AWS and Azure setup, resulting in better scalability and reliability.",
                rating: 5,
                image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                name: "Arnab Das",
                role: "CTO, TechCorp Solutions",
                content: "Best cloud consulting experience we've had. Professional, knowledgeable, and delivered exactly what they promised. Highly recommend their services!",
                rating: 5,
                image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
            ].map((testimonial, index) => (
              <animated.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
                whileHover={{ scale: 1.05, y: -8 }}
              >
                <animated.div 
                  className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-cyan-300 transition-all duration-300 group-hover:shadow-2xl shadow-lg h-full relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 25px 50px rgba(6, 182, 212, 0.25)",
                  }}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-100/30 to-transparent rounded-bl-3xl"></div>
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
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </animated.div>
              </animated.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 overflow-hidden">
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
              Move Your Business to Cloud
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transform your infrastructure with scalable, secure, and cost-effective cloud solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <animated.button
                onClick={openModal}
                className="px-8 py-4 bg-white text-cyan-600 font-bold rounded-xl hover:shadow-2xl hover:shadow-white/40 transition-all duration-300 flex items-center gap-2 mx-auto group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Cloud Migration
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </animated.button>
              {/* <animated.button
                onClick={openModal}
                className="px-8 py-4 border-2 border-white/50 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2 mx-auto group backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Cloud Consultation
                <FaCloud className="group-hover:scale-110 transition-transform" />
              </animated.button> */}
            </div>
          </animated.div>
        </div>
      </section>

    </div>
  );
};

export default CloudSolutions;