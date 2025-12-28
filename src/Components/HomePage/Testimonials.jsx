import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight, FaCode, FaServer, FaCloud, FaShieldAlt, FaBrain, FaRocket } from "react-icons/fa";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO",
      company: "MediCare Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      rating: 5,
      text: "TechVision transformed our hospital operations with their HMS solution. The system is intuitive, reliable, and has significantly improved our patient care efficiency. Their support team is exceptional and always available when we need them.",
      project: "Hospital Management System"
    },
    {
      name: "Michael Chen",
      position: "CTO",
      company: "RetailMax",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      rating: 5,
      text: "The e-commerce platform they built for us exceeded all expectations. Our online sales increased by 200% within the first year. The mobile app integration was seamless and the user experience is outstanding.",
      project: "E-commerce Platform"
    },
    {
      name: "Emily Rodriguez",
      position: "Operations Director",
      company: "Hotel Grand",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      rating: 5,
      text: "Their hotel management system has revolutionized our operations. From booking management to guest services, everything is streamlined. The reporting features give us insights we never had before.",
      project: "Hotel Management System"
    },
    {
      name: "David Thompson",
      position: "IT Director",
      company: "Manufacturing Corp",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      rating: 5,
      text: "The cloud migration project was executed flawlessly. We reduced our infrastructure costs by 60% while improving reliability. Their DevOps implementation has made our deployments much more efficient.",
      project: "Cloud Migration & DevOps"
    },
    {
      name: "Lisa Wang",
      position: "Founder",
      company: "StartupTech",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      rating: 5,
      text: "As a startup, we needed a scalable solution that could grow with us. TechVision delivered exactly that. Their custom software development approach and ongoing support have been invaluable to our growth.",
      project: "Custom Software Development"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-24 sm:py-32 md:py-40 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Unique Creative Background Effects - Same as CoreServices */}
      <div className="absolute inset-0">
        {/* Hexagonal Service Grid Pattern */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="testimonials-hexagon" x="0" y="0" width="15" height="13" patternUnits="userSpaceOnUse">
                <polygon 
                  points="7.5,1 12.99,4 12.99,10 7.5,13 2.01,10 2.01,4" 
                  stroke="rgba(239, 68, 68, 0.3)" 
                  strokeWidth="0.3" 
                  fill="none"
                />
                <circle cx="7.5" cy="6.5" r="0.8" fill="rgba(236, 72, 153, 0.4)" />
                <circle cx="4" cy="3" r="0.3" fill="rgba(147, 51, 234, 0.3)" />
                <circle cx="11" cy="10" r="0.3" fill="rgba(59, 130, 246, 0.3)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#testimonials-hexagon)" />
          </svg>
        </div>

        {/* Spiral Energy Waves */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-full"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <motion.div
                className={`absolute w-96 h-96 border-2 rounded-full ${
                  i % 2 === 0 ? 'border-red-400/20' : 'border-pink-400/20'
                }`}
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  scale: [0.5, 2, 0.5],
                  opacity: [0, 0.6, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  delay: i * 2,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Floating Service Orbs with Trails */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { icon: FaCode, x: 15, y: 20, trail: "red", path: "M15,20 Q50,10 85,30 Q50,50 15,20" },
            { icon: FaServer, x: 85, y: 25, trail: "pink", path: "M85,25 Q50,15 15,35 Q50,55 85,25" },
            { icon: FaCloud, x: 20, y: 70, trail: "purple", path: "M20,70 Q60,50 80,80 Q40,90 20,70" },
            { icon: FaShieldAlt, x: 80, y: 75, trail: "blue", path: "M80,75 Q40,55 20,85 Q60,95 80,75" },
            { icon: FaBrain, x: 50, y: 15, trail: "red", path: "M50,15 Q20,40 50,65 Q80,40 50,15" },
            { icon: FaRocket, x: 50, y: 85, trail: "pink", path: "M50,85 Q80,60 50,35 Q20,60 50,85" }
          ].map((item, i) => (
            <div key={i}>
              {/* Animated Trail */}
              <motion.div
                className="absolute"
                style={{
                  left: `${item.x}%`,
                  top: `${item.y}%`,
                }}
              >
                <svg width="400" height="300" className="absolute -translate-x-1/2 -translate-y-1/2">
                  <motion.path
                    d={item.path}
                    stroke={`rgba(${item.trail === 'red' ? '239, 68, 68' : item.trail === 'pink' ? '236, 72, 153' : item.trail === 'purple' ? '147, 51, 234' : '59, 130, 246'}, 0.3)`}
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="10 5"
                    animate={{
                      strokeDashoffset: [0, -50],
                      opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{
                      duration: 4 + i * 0.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </svg>
              </motion.div>
              
              {/* Floating Icon */}
              <motion.div
                className={`absolute text-2xl ${
                  item.trail === 'red' ? 'text-red-400/60' : 
                  item.trail === 'pink' ? 'text-pink-400/60' : 
                  item.trail === 'purple' ? 'text-purple-400/60' : 'text-blue-400/60'
                }`}
                animate={{
                  x: [0, 200, 0, -100, 0],
                  y: [0, -50, 100, 50, 0],
                  rotate: [0, 90, 180, 270, 360],
                  scale: [0.8, 1.2, 0.8, 1.1, 0.8],
                }}
                transition={{
                  duration: 12 + i * 2,
                  repeat: Infinity,
                  delay: i * 1.5,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${item.x}%`,
                  top: `${item.y}%`,
                }}
              >
                <item.icon />
              </motion.div>
            </div>
          ))}
        </div>

        {/* Particle Constellation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-red-400 to-pink-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Morphing Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { x: 20, y: 30, size: 60, color: "red" },
            { x: 70, y: 20, size: 80, color: "pink" },
            { x: 30, y: 70, size: 70, color: "purple" },
            { x: 80, y: 80, size: 50, color: "blue" }
          ].map((shape, i) => (
            <motion.div
              key={i}
              className={`absolute border-2 ${
                shape.color === 'red' ? 'border-red-400/20' : 
                shape.color === 'pink' ? 'border-pink-400/20' : 
                shape.color === 'purple' ? 'border-purple-400/20' : 'border-blue-400/20'
              }`}
              style={{
                left: `${shape.x}%`,
                top: `${shape.y}%`,
                width: shape.size,
                height: shape.size,
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                borderRadius: ["0%", "50%", "25%", "0%"],
                rotate: [0, 90, 180, 270, 360],
                scale: [1, 1.3, 0.7, 1.1, 1],
                opacity: [0.2, 0.6, 0.3, 0.8, 0.2],
              }}
              transition={{
                duration: 8 + i * 1.5,
                repeat: Infinity,
                delay: i * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Digital Service Tags */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { tag: "API", x: 10, y: 25, delay: 0 },
            { tag: "UI/UX", x: 90, y: 20, delay: 1 },
            { tag: "DevOps", x: 15, y: 75, delay: 2 },
            { tag: "ML/AI", x: 85, y: 80, delay: 3 },
            { tag: "Cloud", x: 50, y: 10, delay: 4 },
            { tag: "Mobile", x: 50, y: 90, delay: 5 }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="absolute text-xs font-bold text-red-300/70 bg-gradient-to-r from-red-500/10 to-pink-500/10 px-3 py-1 rounded-full border border-red-400/30 backdrop-blur-sm"
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
              }}
              animate={{
                y: [0, -30, 0, 20, 0],
                x: [0, 15, 0, -10, 0],
                opacity: [0, 1, 0.5, 1, 0],
                scale: [0.8, 1.2, 0.9, 1.1, 0.8],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 8 + i * 0.5,
                repeat: Infinity,
                delay: item.delay * 1.5,
                ease: "easeInOut"
              }}
            >
              {item.tag}
            </motion.div>
          ))}
        </div>

        {/* Pulsing Energy Grid */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, row) => (
            [...Array(8)].map((_, col) => (
              <motion.div
                key={`${row}-${col}`}
                className="absolute w-2 h-2 bg-gradient-to-r from-red-400/30 to-pink-400/30 rounded-full"
                style={{
                  left: `${10 + col * 12}%`,
                  top: `${20 + row * 15}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: (row * 8 + col) * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))
          ))}
        </div>

        {/* Floating Service Bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8 bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-full border border-red-400/20 backdrop-blur-sm flex items-center justify-center"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${100 + Math.random() * 20}%`,
              }}
              animate={{
                y: [0, -window.innerHeight - 100],
                x: [0, Math.sin(i) * 100],
                rotate: [0, 360],
                scale: [0.5, 1, 0.5],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "linear"
              }}
            >
              <div className="w-2 h-2 bg-red-400/50 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            What Our <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-800/90 via-gray-900/90 to-black/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-red-500/20"
          >
            <div className="flex items-center justify-center mb-6">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaQuoteLeft className="text-4xl text-red-500" />
              </motion.div>
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-200 text-center mb-8 leading-relaxed">
              &ldquo;{testimonials[currentTestimonial].text}&rdquo;
            </blockquote>
            
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <FaStar className="text-yellow-400 text-xl" />
                </motion.div>
              ))}
            </div>
            
            <div className="flex items-center justify-center">
              <motion.img 
                src={testimonials[currentTestimonial].image} 
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-red-500/50"
                whileHover={{ scale: 1.1, borderColor: 'rgba(239, 68, 68, 1)' }}
                transition={{ duration: 0.3 }}
              />
              <div className="text-center">
                <h4 className="text-lg font-bold text-white">{testimonials[currentTestimonial].name}</h4>
                {/* <p className="text-red-400 font-medium">{testimonials[currentTestimonial].position}</p> */}
                {/* <p className="text-gray-300">{testimonials[currentTestimonial].company}</p> */}
                <p className="text-sm text-gray-400 mt-1">Project: {testimonials[currentTestimonial].project}</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center border border-red-500/30 hover:border-red-500/60 transition-all duration-300"
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(239, 68, 68, 0.2)' }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronLeft className="text-red-400" />
          </motion.button>
          
          <motion.button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center border border-red-500/30 hover:border-red-500/60 transition-all duration-300"
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(239, 68, 68, 0.2)' }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronRight className="text-red-400" />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-red-500 h-3 w-8' 
                  : 'bg-gray-600 hover:bg-gray-500 h-3 w-3'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
