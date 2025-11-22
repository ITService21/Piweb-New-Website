import { useEffect } from "react";
import { motion } from "framer-motion";
import { useModal } from "../Context/ModalContext";
import Navbar from "../Components/Navbar";
import AnimatedTechBackground from "../Components/AnimatedTechBackground";
import { 
  FaQuoteLeft,
  FaRocket,
  FaCode,
  FaHeart,
  FaArrowRight,
  FaCheckCircle
} from "react-icons/fa";

const OurTeam = () => {
  const { openModal } = useModal();

  // SEO Meta Tags
  useEffect(() => {
    document.title = "Our Team - Piweb Tech | Meet the People Behind Innovation";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Meet the talented team at Piweb Tech - developers, designers, and innovators working together to transform businesses through technology. Discover our culture, diversity, and expertise.');
    
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'piweb tech team, software development team, technology team, developers, designers, company culture, team members');
  }, []);

  const leadership = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
      vision: "Building the future of technology, one innovation at a time",
      message: "We believe technology should empower businesses to achieve extraordinary results.",
      gradient: "from-red-500 to-pink-500"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      vision: "Excellence in code, excellence in delivery",
      message: "Our technical expertise drives innovation and delivers exceptional solutions.",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400",
      vision: "Design that speaks, experiences that inspire",
      message: "We create beautiful, intuitive interfaces that users love.",
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  const engineering = [
    {
      name: "Alex Kumar",
      role: "Senior Full-Stack Developer",
      specialization: "React, Node.js, AWS",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Priya Patel",
      role: "Backend Architect",
      specialization: "Python, Django, PostgreSQL",
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      name: "David Kim",
      role: "DevOps Engineer",
      specialization: "Docker, Kubernetes, CI/CD",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "Lisa Wang",
      role: "Mobile Developer",
      specialization: "React Native, iOS, Android",
      image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const design = [
    {
      name: "Sophie Martin",
      role: "UI/UX Designer",
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      name: "James Wilson",
      role: "Product Designer",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  const business = [
    {
      name: "Rachel Green",
      role: "Sales Director",
      department: "Sales",
      image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400",
      gradient: "from-red-500 to-orange-500"
    },
    {
      name: "Tom Anderson",
      role: "Marketing Manager",
      department: "Marketing",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      name: "Maria Garcia",
      role: "Operations Lead",
      department: "Operations",
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400",
      gradient: "from-green-500 to-teal-500"
    },
    {
      name: "Chris Brown",
      role: "Sales Executive",
      department: "Sales",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Anna Taylor",
      role: "Content Strategist",
      department: "Marketing",
      image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400",
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "Ryan Lee",
      role: "Operations Manager",
      department: "Operations",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  const lifeAtPiweb = [
    "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
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
                Our Team
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-pink-100 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Meet the <span className="text-red-300 font-bold">talented individuals</span> who bring 
              innovation, creativity, and expertise to every project.
            </motion.p>

            <motion.button
              onClick={openModal}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-md border border-red-400/30 rounded-full px-8 py-4 shadow-xl text-white font-semibold hover:from-red-500/30 hover:to-pink-500/30 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaRocket className="text-red-400" />
              Join Our Team
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Team Philosophy */}
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
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team Collaboration"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <FaQuoteLeft className="text-2xl text-white" />
                </motion.div>
                <h2 className="text-4xl sm:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                    Team Philosophy
                  </span>
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Piweb Tech, we believe that great technology is built by great teams. 
                Our culture is built on collaboration, innovation, and a shared passion for 
                creating exceptional digital experiences.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We foster an environment where every team member can grow, contribute, 
                and make a meaningful impact. Diversity, creativity, and technical excellence 
                are at the heart of everything we do.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div
                  className="flex items-center gap-2 bg-gradient-to-r from-red-50 to-pink-50 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700 font-medium">Collaborative Culture</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700 font-medium">Continuous Learning</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700 font-medium">Work-Life Balance</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
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
                Leadership Team
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visionary leaders driving innovation and excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
                whileHover={{ scale: 1.08, y: -12, rotate: 2 }}
              >
                <motion.div 
                  className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-red-300 transition-all duration-300 group-hover:shadow-xl shadow-lg h-full relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 25px 50px rgba(239, 68, 68, 0.25)",
                  }}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-100/30 to-transparent rounded-bl-3xl"></div>
                  <div className="relative z-10">
                    <div className="relative mb-6">
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-200 group-hover:border-red-300 transition-colors duration-300"
                      />
                      <motion.div
                        className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br ${leader.gradient} rounded-full flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <FaRocket className="text-white text-xl" />
                      </motion.div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center group-hover:text-red-600 transition-colors duration-300">
                      {leader.name}
                    </h3>
                    <p className="text-red-600 font-semibold text-center mb-4">{leader.role}</p>
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 mb-4 border border-gray-100">
                      <p className="text-sm text-gray-600 italic mb-2">"{leader.vision}"</p>
                      <p className="text-sm text-gray-700">{leader.message}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dev & Engineering */}
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
                Development & Engineering
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {engineering.map((engineer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
                whileHover={{ scale: 1.15, rotate: 5, y: -10 }}
              >
                <motion.div 
                  className="bg-white rounded-3xl p-6 border border-gray-200 hover:border-red-300 transition-all duration-300 group-hover:shadow-xl shadow-lg h-full text-center relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 20px 40px rgba(239, 68, 68, 0.25)",
                  }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${engineer.gradient} opacity-0 group-hover:opacity-10 rounded-3xl`}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-100/20 to-transparent rounded-bl-3xl"></div>
                    <img 
                      src={engineer.image} 
                      alt={engineer.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-gray-200 group-hover:border-red-300 transition-colors duration-300"
                    />
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-br ${engineer.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <FaCode className="text-white" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-red-600 transition-colors duration-300">
                      {engineer.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{engineer.role}</p>
                    <p className="text-xs text-gray-500 bg-gray-50 rounded-full px-3 py-1 inline-block">
                      {engineer.specialization}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design & Creative */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
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
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Design Team"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                  Design & Creative
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our creative team brings ideas to life with stunning visuals, intuitive interfaces, 
                and user-centered design thinking.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {design.map((designer, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-red-300 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-lg shadow-md text-center">
                      <img 
                        src={designer.image} 
                        alt={designer.name}
                        className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-2 border-gray-200"
                      />
                      <h3 className="font-bold text-gray-800 mb-1 group-hover:text-red-600 transition-colors duration-300">
                        {designer.name}
                      </h3>
                      <p className="text-sm text-gray-600">{designer.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sales, Marketing, Ops */}
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
                Sales, Marketing & Operations
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {business.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
                whileHover={{ scale: 1.1, y: -10, rotate: index % 2 === 0 ? 2 : -2 }}
              >
                <motion.div 
                  className="bg-white rounded-3xl p-6 border border-gray-200 hover:border-red-300 transition-all duration-300 group-hover:shadow-xl shadow-lg h-full relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 20px 40px rgba(239, 68, 68, 0.2)",
                  }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 rounded-3xl`}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 group-hover:border-red-300 transition-colors duration-300"
                    />
                    <div>
                      <h3 className="font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-600">{member.role}</p>
                      <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${member.gradient} text-white`}>
                        {member.department}
                      </span>
                    </div>
                  </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at Piweb */}
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
                Life at Piweb
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A glimpse into our vibrant workplace culture and team moments
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {lifeAtPiweb.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl aspect-square"
              >
                <img 
                  src={image} 
                  alt={`Life at Piweb ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-semibold">Team Collaboration</p>
                  </div>
                </div>
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
            <motion.div
              className="inline-block mb-6"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <FaHeart className="text-red-500 text-5xl" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Join Our Growing Team
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of a team that's shaping the future of technology. 
              Explore opportunities and grow with us.
            </p>
            <motion.button
              onClick={openModal}
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-300 flex items-center gap-2 mx-auto group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
