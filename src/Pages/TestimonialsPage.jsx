import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "../Context/ModalContext";
import Navbar from "../Components/Navbar";
import AnimatedTechBackground from "../Components/AnimatedTechBackground";
import { 
  FaQuoteLeft, 
  FaStar, 
  FaChevronLeft, 
  FaChevronRight,
  FaArrowRight,
  FaRocket
} from "react-icons/fa";

const TestimonialsPage = () => {
  const { openModal } = useModal();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // SEO Meta Tags
  useEffect(() => {
    document.title = "Client Testimonials - Piweb Tech | What Our Clients Say";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Read testimonials from our satisfied clients. Discover how Piweb Tech has helped businesses transform their operations with innovative software solutions. Real stories, real results.');
    
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'piweb tech testimonials, client reviews, customer testimonials, software company reviews, client success stories');
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO",
      company: "MediCare Solutions",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Piweb Tech transformed our hospital operations with their HMS solution. The system is intuitive, reliable, and has significantly improved our patient care efficiency. Their support team is exceptional and always available when we need them.",
      project: "Hospital Management System",
      gradient: "from-red-500 to-pink-500"
    },
    {
      name: "Michael Chen",
      position: "CTO",
      company: "RetailMax",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The e-commerce platform they built for us exceeded all expectations. Our online sales increased by 200% within the first year. The mobile app integration was seamless and the user experience is outstanding.",
      project: "E-commerce Platform",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      name: "Emily Rodriguez",
      position: "Operations Director",
      company: "Hotel Grand",
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Their hotel management system has revolutionized our operations. From booking management to guest services, everything is streamlined. The reporting features give us insights we never had before.",
      project: "Hotel Management System",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      name: "David Thompson",
      position: "IT Director",
      company: "Manufacturing Corp",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The cloud migration project was executed flawlessly. We reduced our infrastructure costs by 60% while improving reliability. Their DevOps implementation has made our deployments much more efficient.",
      project: "Cloud Migration & DevOps",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      name: "Lisa Wang",
      position: "Founder",
      company: "StartupTech",
      image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "As a startup, we needed a scalable solution that could grow with us. Piweb Tech delivered exactly that. Their custom software development approach and ongoing support have been invaluable to our growth.",
      project: "Custom Software Development",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Robert Martinez",
      position: "VP of Technology",
      company: "FinanceHub",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The fintech solution they developed for us is secure, scalable, and user-friendly. We've processed millions of transactions without any issues. Their attention to security and compliance is impressive.",
      project: "FinTech Platform",
      gradient: "from-cyan-500 to-teal-500"
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
                Client Testimonials
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-pink-100 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Don't just take our word for it. Here's what our <span className="text-red-300 font-bold">clients</span> 
              {" "}have to say about working with us.
            </motion.p>

            <motion.div
              className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-md border border-red-400/30 rounded-full px-6 py-3 shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <FaStar className="text-red-400 text-xl" />
              <span className="text-red-300 font-bold">TRUSTED BY 200+ COMPANIES</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Testimonial Carousel */}
      <section className="relative py-20 bg-white overflow-hidden">
        <AnimatedTechBackground variant="light" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 shadow-lg"
                    />
                  </div>
                  <div className="flex-grow text-center md:text-left">
                    <div className="flex justify-center md:justify-start gap-1 mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                    <FaQuoteLeft className={`text-4xl bg-gradient-to-r ${testimonials[currentTestimonial].gradient} bg-clip-text text-transparent mb-4 mx-auto md:mx-0`} />
                    <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed italic">
                      "{testimonials[currentTestimonial].text}"
                    </blockquote>
                    <div>
                      <p className="text-lg font-bold text-gray-800">
                        {testimonials[currentTestimonial].name}
                      </p>
                      <p className="text-gray-600">
                        {testimonials[currentTestimonial].position}, {testimonials[currentTestimonial].company}
                      </p>
                      <p className="text-sm text-red-600 font-semibold mt-2">
                        Project: {testimonials[currentTestimonial].project}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            >
              <FaChevronLeft className="text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            >
              <FaChevronRight className="text-gray-600" />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-red-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
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
                More Client Stories
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
                whileHover={{ scale: 1.08, y: -10, rotate: index % 2 === 0 ? 2 : -2 }}
              >
                <motion.div 
                  className="bg-white rounded-3xl p-6 border border-gray-200 hover:border-red-300 transition-all duration-300 group-hover:shadow-xl shadow-lg h-full relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 20px 40px rgba(239, 68, 68, 0.25)",
                  }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-10 rounded-3xl`}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                    />
                    <div>
                      <h3 className="font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                      <p className="text-xs text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3 line-clamp-4">
                    "{testimonial.text}"
                  </p>
                  <p className="text-xs text-red-600 font-semibold">
                    {testimonial.project}
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
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <motion.button
              onClick={openModal}
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-300 flex items-center gap-2 mx-auto group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;


