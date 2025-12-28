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
  FaExternalLinkAlt,
  FaGoogle
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
      name: "Aman Kaushal",
      position: "Business Owner",
      company: "Laptop Reselling Business",
      image: "https://lh3.googleusercontent.com/a/default-user=s96-c",
      rating: 5,
      text: "I have taken their website development service for my laptop reselling business and honestly I'm very happy with the result. The team was very friendly and professional, they listened to all my ideas properly and delivered a modern website.",
      project: "Website Development",
      gradient: "from-red-500 to-pink-500",
      source: "Google Reviews",
    },
    {
      name: "Antima Naruka",
      position: "Business Owner",
      company: "Business Website Client",
      image: "https://lh3.googleusercontent.com/a/default-user=s96-c",
      rating: 4,
      text: "The experience was smooth from start to end. They clearly understood our requirements and delivered exactly what we wanted. Support after delivery was also very good.",
      project: "Business Website Design",
      gradient: "from-pink-500 to-purple-500",
      source: "Google Reviews",
    },
    {
      name: "Kr Kapil Sisodiya",
      position: "Business Professional",
      company: "Technical Support Client",
      image: "https://lh3.googleusercontent.com/a/default-user=s96-c",
      rating: 5,
      text: "Their services helped me manage my work better. Earlier I faced frequent technical problems, but now everything runs smoothly. Really helpful service.",
      project: "Technical Support & Maintenance",
      gradient: "from-purple-500 to-indigo-500",
      source: "Google Reviews",
    },
    {
      name: "Ayushi",
      position: "Business Owner",
      company: "Business Website Client",
      image: "https://lh3.googleusercontent.com/a/default-user=s96-c",
      rating: 4,
      text: "Overall a very good experience! The website looks clean and professional. Some changes took time, but the final output was totally worth it.",
      project: "Business Website Development",
      gradient: "from-indigo-500 to-blue-500",
      source: "Google Reviews",
    },
    {
      name: "Deepak Singh Chauhan",
      position: "Website Owner",
      company: "SEO Client",
      image: "https://lh3.googleusercontent.com/a/default-user=s96-c",
      rating: 5,
      text: "Very nice experience. The design and layout are awesome. They also helped me with SEO setup. Highly recommended for website work.",
      project: "Website Development & SEO",
      gradient: "from-blue-500 to-cyan-500",
      source: "Google Reviews",
    },
    {
      name: "Nidhi Sharma",
      position: "Project Manager",
      company: "Corporate Client",
      image: "https://lh3.googleusercontent.com/a/default-user=s96-c",
      rating: 5,
      text: "Communication was consistent throughout the project. The support team was always responsive and helpful. Satisfied with the service.",
      project: "Web Development Project",
      gradient: "from-cyan-500 to-teal-500",
      source: "Google Reviews",
    },
    {
      name: "Sourabh Labana",
      position: "Company Owner",
      company: "Corporate Website",
      image: "https://lh3.googleusercontent.com/a/default-user=s96-c",
      rating: 5,
      text: "Piweb Tech Software Solutions ke saath experience kaafi professional raha. Website quality, functionality aur design sab excellent hai.",
      project: "Company Website Development",
      gradient: "from-teal-500 to-green-500",
      source: "Google Reviews",
    },
    // {
    //   name: "Lakshya Sharma",
    //   position: "Client",
    //   company: "Website Development",
    //   image: "https://lh3.googleusercontent.com/a/default-user=s96-c",
    //   rating: 5,
    //   text: "Customer support is awesome and the design quality is up to the mark.",
    //   project: "Website Design",
    //   gradient: "from-green-500 to-emerald-500",
    //   source: "Google Reviews",
    // },
    {
      name: "Vaishali Sharma",
      position: "Business Owner",
      company: "Service Quality Client",
      image: "https://lh3.googleusercontent.com/a/default-user=s96-c",
      rating: 5,
      text: "Excellent service quality and timely delivery.",
      project: "Web Development Services",
      gradient: "from-emerald-500 to-lime-500",
      source: "Google Reviews",
    },
    {
      name: "Sonu Pradhan",
      position: "Client",
      company: "Website Development",
      image: "https://lh3.googleusercontent.com/a/default-user=s96-c",
      rating: 5,
      text: "Customer support is awesome and the design is up to the mark.",
      project: "Website Design & Development",
      gradient: "from-orange-500 to-red-500",
      source: "Google Reviews",
    },
    {
      name: "Vikas Agarwal",
      position: "Business Professional",
      company: "Office Visit Client",
      image: "https://lh3.googleusercontent.com/a/default-user=s96-c",
      rating: 5,
      text: "Visited Piweb Tech Software Solutions personally. The team was professional, supportive, and clearly understood my requirements.",
      project: "Professional Services",
      gradient: "from-yellow-500 to-orange-500",
      source: "Google Reviews",
    },
  ];
  

  const portfolio = [
    {
      title: "GrowStartup (Client Site)",
      description: "Corporate & growth-focused website built for a startup accelerator.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Corporate",
      technologies: ["React", "Tailwind"],
      link: "https://growstartup.in/",
    },
    {
      title: "Optimal Classes (Client Site)",
      description: "Edu-tech platform landing and course pages for an online coaching brand.",
      image: "https://images.pexels.com/photos/4145194/pexels-photo-4145194.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Education",
      technologies: ["Next.js", "TypeScript"],
      link: "https://optimalclasses.in/home",
    },
    {
      title: "Arohan College (Client Site)",
      description: "Institution website with admissions, courses and contact workflows.",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Education",
      technologies: ["React", "CMS"],
      link: "https://www.arohancollege.com/",
    },
    {
      title: "Pitama India (Client Site)",
      description: "NGO/Social Work website with events, faculty and admission info.",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "NGO/Social Work",
      technologies: ["React", "PWA"],
      link: "https://pitamaindia.org/",
    },
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
              Don&apos;t just take our word for it. Here&apos;s what our <span className="text-red-300 font-bold">clients</span> 
              {" "}have to say about working with us.
            </motion.p>

            <motion.div
              className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-md border border-red-400/30 rounded-full px-6 py-3 shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <FaStar className="text-red-400 text-xl" />
              <span className="text-red-300 font-bold">TRUSTED BY 150+ BUSINESSES</span>
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
                      &quot;{testimonials[currentTestimonial].text}&quot;
                    </blockquote>
                    <div>
                      <p className="text-lg font-bold text-gray-800">
                        {testimonials[currentTestimonial].name}
                      </p>
                      <p className="text-gray-600">
                        {testimonials[currentTestimonial].position}, {testimonials[currentTestimonial].company}
                      </p>
                      <p className="text-sm text-red-600 font-semibold mt-2 flex items-center gap-2">
                        <FaGoogle className="text-sm" />
                        {testimonials[currentTestimonial].source} • {testimonials[currentTestimonial].project}
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
                    &quot;{testimonial.text}&quot;
                  </p>
                  <p className="text-xs text-red-600 font-semibold flex items-center gap-1">
                    <FaGoogle className="text-xs" />
                    {testimonial.source}
                  </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Portfolio Section */}
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
                Our Client Portfolio
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Live projects we&apos;ve delivered for our amazing clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-red-300 transition-all duration-300 group-hover:shadow-2xl shadow-lg">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-semibold rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-pink-600 transition-colors duration-300"
                    >
                      Visit Website
                      <FaExternalLinkAlt className="text-sm" />
                    </a>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help transform your business with innovative technology solutions.
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


