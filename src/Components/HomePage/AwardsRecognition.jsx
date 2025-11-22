import { motion } from "framer-motion";
import { 
  FaAward, 
  FaTrophy, 
  FaMedal, 
  FaCertificate, 
  FaStar,
  FaCheckCircle,
  FaRocket,
  FaShieldAlt
} from "react-icons/fa";

const AwardsRecognition = () => {
  const awards = [
    {
      icon: FaTrophy,
      title: "Best IT Company 2024",
      organization: "Tech Excellence Awards",
      year: "2024",
      description: "Recognized for outstanding innovation and client satisfaction",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: FaAward,
      title: "Innovation in Healthcare Technology",
      organization: "Digital Health Awards",
      year: "2024",
      description: "Awarded for breakthrough HMS solution implementation",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaMedal,
      title: "Excellence in Cloud Solutions",
      organization: "Cloud Computing Awards",
      year: "2023",
      description: "Recognized for exceptional cloud migration services",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: FaCertificate,
      title: "ISO 27001:2013 Certified",
      organization: "International Organization for Standardization",
      year: "2023",
      description: "Information Security Management System certification",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: FaStar,
      title: "Top 10 Software Development Company",
      organization: "Software Development Magazine",
      year: "2023",
      description: "Listed among the top software development companies",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: FaRocket,
      title: "Fastest Growing IT Company",
      organization: "Business Growth Awards",
      year: "2023",
      description: "Recognized for rapid growth and market expansion",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const certifications = [
    { name: "ISO 9001:2015", description: "Quality Management System" },
    { name: "CMMI Level 3", description: "Capability Maturity Model Integration" },
    { name: "AWS Advanced Partner", description: "Amazon Web Services" },
    { name: "Microsoft Gold Partner", description: "Microsoft Partnership" },
    { name: "Google Cloud Partner", description: "Google Cloud Platform" },
    { name: "Docker Certified", description: "Container Technology" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Awards & <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Recognition</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence has been recognized by industry leaders and certification bodies
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 p-8 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-r ${award.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <award.icon className="text-2xl text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {award.year}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{award.title}</h3>
                <p className="text-blue-600 font-medium mb-3">{award.organization}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{award.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Certifications & Partnerships</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <FaCheckCircle className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsRecognition;
