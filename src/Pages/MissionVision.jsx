import { useEffect } from "react";
import { motion } from "framer-motion";
import { useModal } from "../Context/ModalContext";
import Navbar from "../Components/Navbar";
import AnimatedTechBackground from "../Components/AnimatedTechBackground";
import { 
  FaBullseye, 
  FaEye, 
  FaRocket, 
  FaLightbulb, 
  FaUsers, 
  FaCheckCircle,
  FaArrowRight,
  FaQuoteLeft
} from "react-icons/fa";

const MissionVision = () => {
  const { openModal } = useModal();

  // SEO Meta Tags
  useEffect(() => {
    document.title = "Mission & Vision - Piweb Tech | Our Purpose & Future Goals";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Discover Piweb Tech\'s mission to empower businesses with innovative technology solutions and our vision to be the world\'s leading technology partner.');
    
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'piweb tech mission, company vision, technology company goals, software company values, digital transformation mission');
  }, []);

  const values = [
    {
      icon: FaRocket,
      title: "Innovation",
      description: "Constantly pushing boundaries to deliver cutting-edge solutions",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: FaUsers,
      title: "Client-Centric",
      description: "Your success is our success - building lasting relationships",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      icon: FaLightbulb,
      title: "Excellence",
      description: "Maintaining highest standards in quality and performance",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: FaCheckCircle,
      title: "Integrity",
      description: "Honesty and transparency in everything we do",
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
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
                Mission & Vision
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-pink-100 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our <span className="text-red-300 font-bold">purpose</span> drives us forward, 
              and our <span className="text-pink-300 font-bold">vision</span> shapes the future 
              we're building together.
            </motion.p>

            <motion.div
              className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-md border border-red-400/30 rounded-full px-6 py-3 shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <FaBullseye className="text-red-400 text-xl" />
              <span className="text-red-300 font-bold">PURPOSE • VISION • IMPACT</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="relative py-20 bg-white overflow-hidden">
        <AnimatedTechBackground variant="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <motion.div 
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-10 border-2 border-gray-200 hover:border-red-300 transition-all duration-300 group-hover:shadow-2xl shadow-xl h-full relative overflow-hidden"
                whileHover={{ 
                  boxShadow: "0 25px 50px rgba(239, 68, 68, 0.25)",
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-500/10 to-transparent rounded-bl-3xl"></div>
                <div className="relative z-10">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FaBullseye className="text-3xl text-white" />
                  </motion.div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 group-hover:text-red-600 transition-colors duration-300">
                    Our Mission
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    To empower businesses with innovative technology solutions that drive growth, 
                    efficiency, and competitive advantage in today's rapidly evolving digital landscape. 
                    We are committed to delivering excellence through cutting-edge development and 
                    exceptional service.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Transform businesses through technology</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Deliver exceptional value and results</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Build lasting client partnerships</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <motion.div 
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-10 border-2 border-gray-200 hover:border-pink-300 transition-all duration-300 group-hover:shadow-2xl shadow-xl h-full relative overflow-hidden"
                whileHover={{ 
                  boxShadow: "0 25px 50px rgba(236, 72, 153, 0.25)",
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-500/10 to-transparent rounded-bl-3xl"></div>
                <div className="relative z-10">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FaEye className="text-3xl text-white" />
                  </motion.div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 group-hover:text-pink-600 transition-colors duration-300">
                    Our Vision
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    To be the world's leading technology partner, recognized for our innovation, 
                    reliability, and transformative impact. We envision a future where technology 
                    seamlessly integrates with business goals to create unprecedented value and 
                    opportunities.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Global technology leadership</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Innovation at the forefront</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Transformative business impact</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Core Values */}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
                whileHover={{ scale: 1.1, y: -8, rotate: 2 }}
              >
                <motion.div 
                  className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-red-300 transition-all duration-300 group-hover:shadow-xl shadow-lg h-full text-center relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 20px 40px rgba(239, 68, 68, 0.2)",
                  }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 rounded-3xl`}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <value.icon className="text-2xl text-white" />
                  </motion.div>
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

      {/* CTA Section */}
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals with innovative technology solutions.
            </p>
            <motion.button
              onClick={openModal}
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-300 flex items-center gap-2 mx-auto group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MissionVision;


