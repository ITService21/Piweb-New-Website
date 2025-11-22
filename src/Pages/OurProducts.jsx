import { useEffect } from "react";
import { motion } from "framer-motion";
import { useModal } from "../Context/ModalContext";
import Navbar from "../Components/Navbar";
import AnimatedTechBackground from "../Components/AnimatedTechBackground";
import { 
  FaHospital,
  FaCloud,
  FaBoxes,
  FaPills,
  FaShoppingCart,
  FaGraduationCap,
  FaHotel,
  FaCar,
  FaUtensils,
  FaHome,
  FaArrowRight,
  FaCheckCircle,
  FaRocket
} from "react-icons/fa";

const OurProducts = () => {
  const { openModal } = useModal();

  // SEO Meta Tags
  useEffect(() => {
    document.title = "Our Products - Piweb Tech | Enterprise Software Solutions";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Explore Piweb Tech\'s comprehensive suite of enterprise software solutions including Hospital Management, E-commerce, Cloud Infrastructure, and more. Transform your business with our innovative products.');
    
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'piweb tech products, enterprise software, hospital management system, e-commerce platform, cloud infrastructure, inventory management, software solutions');
  }, []);

  const products = [
    {
      icon: FaHospital,
      title: "Hospital Management System",
      description: "Complete healthcare management solution with patient records, billing, and scheduling",
      features: ["Patient Management", "Appointment Scheduling", "Billing & Insurance", "Pharmacy Integration"],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Socket.io"],
      gradient: "from-red-500 via-pink-500 to-purple-500",
      bgGradient: "from-red-500/10 to-pink-500/10",
      image: "https://images.pexels.com/photos/3845550/pexels-photo-3845550.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: FaCloud,
      title: "Cloud Infrastructure Platform",
      description: "Scalable cloud infrastructure management with automated deployment and monitoring",
      features: ["Auto Scaling", "Load Balancing", "Monitoring & Alerts", "Backup & Recovery"],
      technologies: ["Kubernetes", "Docker", "Terraform", "AWS", "Azure"],
      gradient: "from-pink-500 via-purple-500 to-indigo-500",
      bgGradient: "from-pink-500/10 to-purple-500/10",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: FaBoxes,
      title: "Inventory Management System",
      description: "Advanced inventory control with real-time tracking, automation, and analytics",
      features: ["Real-time Tracking", "Automated Reordering", "Multi-location Support", "Analytics Dashboard"],
      technologies: ["Angular", "Spring Boot", "MySQL", "Docker", "Kubernetes"],
      gradient: "from-purple-500 via-indigo-500 to-blue-500",
      bgGradient: "from-purple-500/10 to-indigo-500/10",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: FaPills,
      title: "Pharmacy Management System",
      description: "Complete pharmaceutical management with prescription processing and drug interaction checking",
      features: ["Prescription Processing", "Drug Interaction Check", "Inventory Management", "Billing System"],
      technologies: ["React", "Django", "PostgreSQL", "Redis", "AWS"],
      gradient: "from-indigo-500 via-blue-500 to-cyan-500",
      bgGradient: "from-indigo-500/10 to-blue-500/10",
      image: "https://images.pexels.com/photos/3845550/pexels-photo-3845550.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: FaShoppingCart,
      title: "E-Commerce Platform",
      description: "Full-featured online shopping platform with payment gateway and order management",
      features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Order Tracking"],
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "AWS"],
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: FaGraduationCap,
      title: "Learning Management System",
      description: "Comprehensive educational platform with course management and student tracking",
      features: ["Course Management", "Student Portal", "Assessment Tools", "Progress Tracking"],
      technologies: ["React", "Laravel", "MySQL", "AWS", "Video Streaming"],
      gradient: "from-cyan-500 via-teal-500 to-green-500",
      bgGradient: "from-cyan-500/10 to-teal-500/10",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: FaHotel,
      title: "Hotel Management System",
      description: "Complete hotel operations management with booking, billing, and guest services",
      features: ["Room Booking", "Guest Management", "Billing System", "Housekeeping"],
      technologies: ["Vue.js", "Node.js", "PostgreSQL", "AWS", "Payment Gateway"],
      gradient: "from-teal-500 via-green-500 to-emerald-500",
      bgGradient: "from-teal-500/10 to-green-500/10",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: FaCar,
      title: "Fleet Management System",
      description: "Advanced vehicle tracking and fleet optimization with GPS and maintenance scheduling",
      features: ["GPS Tracking", "Maintenance Scheduling", "Driver Management", "Fuel Monitoring"],
      technologies: ["React Native", "Node.js", "PostgreSQL", "Google Maps API", "AWS"],
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: FaUtensils,
      title: "Restaurant Management System",
      description: "Complete restaurant operations management with POS, inventory, and staff scheduling",
      features: ["POS System", "Menu Management", "Table Reservations", "Kitchen Display"],
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Stripe"],
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      bgGradient: "from-emerald-500/10 to-teal-500/10",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: FaHome,
      title: "Smart Home Automation",
      description: "IoT-based home automation system with device control and energy monitoring",
      features: ["Device Control", "Energy Monitoring", "Security System", "Voice Integration"],
      technologies: ["IoT", "Python", "MQTT", "React Native", "AWS IoT"],
      gradient: "from-cyan-500 via-blue-500 to-indigo-500",
      bgGradient: "from-cyan-500/10 to-blue-500/10",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
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
                Our Products
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-pink-100 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Comprehensive <span className="text-red-300 font-bold">enterprise software solutions</span> 
              {" "}designed to transform your business operations and drive growth.
            </motion.p>

            <motion.div
              className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-md border border-red-400/30 rounded-full px-6 py-3 shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <FaRocket className="text-red-400 text-xl" />
              <span className="text-red-300 font-bold">INNOVATION • EXCELLENCE • RESULTS</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
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
                Enterprise Solutions
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful software solutions built to scale with your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
                whileHover={{ scale: 1.05, y: -12, rotate: index % 2 === 0 ? 2 : -2 }}
              >
                <motion.div 
                  className="bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-red-300 transition-all duration-300 group-hover:shadow-2xl shadow-lg h-full flex flex-col relative"
                  whileHover={{ 
                    boxShadow: "0 25px 50px rgba(239, 68, 68, 0.3)",
                  }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${product.bgGradient} opacity-0 group-hover:opacity-20 rounded-3xl`}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10 flex flex-col h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${product.bgGradient} to-transparent`}></div>
                    <motion.div
                      className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <product.icon className="text-2xl text-white" />
                    </motion.div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                      {product.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <FaCheckCircle className="text-green-500 text-xs flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <motion.button
                      onClick={openModal}
                      className={`mt-auto w-full py-3 bg-gradient-to-r ${product.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn`}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Request Demo
                      <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>
                  </div>
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
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We can build a tailored software solution specifically for your business needs.
            </p>
            <motion.button
              onClick={openModal}
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-300 flex items-center gap-2 mx-auto group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Custom Quote
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurProducts;


