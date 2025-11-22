import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { 
  FaSearch, 
  FaHashtag, 
  FaCalendarAlt, 
  FaUser, 
  FaEye,
  FaHeart,
  FaComment,
  FaArrowRight,
  FaRocket,
  FaClock
} from "react-icons/fa";

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const tags = ["All", "AI & ML", "Web Dev", "Cybersecurity", "Cloud", "Mobile", "DevOps", "Data Science"];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence in Business",
      excerpt: "Explore how AI is transforming business operations and what it means for the future of work.",
      content: "Artificial Intelligence (AI) is revolutionizing the way businesses operate, from automating routine tasks to providing insights that drive strategic decisions. In this comprehensive guide, we explore the current state of AI in business and what the future holds.\n\nAI technologies like machine learning, natural language processing, and computer vision are being integrated into various business processes. Companies are using AI for customer service chatbots, predictive analytics, fraud detection, and personalized marketing campaigns.\n\nThe benefits of AI implementation include increased efficiency, reduced costs, improved customer experience, and better decision-making capabilities. However, businesses must also consider challenges such as data privacy, ethical concerns, and the need for skilled personnel.\n\nLooking ahead, we can expect AI to become even more sophisticated, with advances in areas like autonomous systems, advanced robotics, and more natural human-AI interactions. Businesses that embrace AI now will be better positioned to compete in the digital economy.\n\nTo successfully implement AI, organizations should start with clear objectives, ensure data quality, invest in training, and maintain ethical standards. The future of business is undoubtedly AI-powered, and companies that adapt will thrive.",
      author: "Dr. Sarah Johnson",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["AI & ML", "Business"],
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600",
      views: 1250,
      likes: 89,
      comments: 23
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for 2024",
      excerpt: "Essential cybersecurity strategies to protect your business from evolving threats in the digital age.",
      content: "Cybersecurity has become a critical concern for businesses of all sizes. With the increasing sophistication of cyber threats, organizations must implement comprehensive security strategies to protect their data and systems.\n\nKey cybersecurity best practices include implementing multi-factor authentication, regular security training for employees, keeping software updated, using strong passwords, and implementing network segmentation. Businesses should also have incident response plans and regularly test their security measures.\n\nEmerging threats include ransomware attacks, phishing schemes, supply chain attacks, and AI-powered cyber attacks. Organizations must stay vigilant and adapt their security strategies to address these evolving threats.\n\nData protection regulations like GDPR and CCPA require businesses to implement appropriate security measures and maintain compliance. This includes data encryption, access controls, and regular security audits.\n\nInvesting in cybersecurity is not just about protecting against threats; it's also about building trust with customers and maintaining business continuity. Companies that prioritize cybersecurity will be better positioned to succeed in the digital economy.",
      author: "Michael Chen",
      date: "2024-01-12",
      readTime: "6 min read",
      tags: ["Cybersecurity", "Security"],
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600",
      views: 980,
      likes: 67,
      comments: 18
    },
    {
      id: 3,
      title: "Cloud Computing Trends and Benefits",
      excerpt: "Discover the latest trends in cloud computing and how businesses can leverage cloud technologies for growth.",
      content: "Cloud computing has transformed the way businesses operate, offering scalability, flexibility, and cost-effectiveness. As we move through 2024, several key trends are shaping the cloud landscape.\n\nMulti-cloud strategies are becoming increasingly popular, allowing businesses to leverage the strengths of different cloud providers. This approach provides better redundancy, avoids vendor lock-in, and optimizes costs.\n\nEdge computing is another significant trend, bringing computing power closer to data sources. This reduces latency and improves performance for applications that require real-time processing.\n\nServerless computing continues to gain traction, offering businesses the ability to run applications without managing servers. This approach reduces operational overhead and allows for automatic scaling.\n\nCloud security remains a top priority, with businesses implementing zero-trust architectures and advanced threat detection systems. Compliance with regulations like GDPR and HIPAA is also driving cloud security investments.\n\nThe benefits of cloud computing include reduced IT costs, improved scalability, enhanced collaboration, and better disaster recovery capabilities. Businesses that embrace cloud technologies will be better positioned to compete in the digital economy.",
      author: "Emily Rodriguez",
      date: "2024-01-10",
      readTime: "7 min read",
      tags: ["Cloud", "Technology"],
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600",
      views: 1100,
      likes: 78,
      comments: 25
    },
    {
      id: 4,
      title: "Mobile App Development: Best Practices",
      excerpt: "Learn the essential best practices for mobile app development to create successful and user-friendly applications.",
      content: "Mobile app development has evolved significantly, with new technologies and frameworks making it easier to create powerful applications. However, success in mobile app development requires following best practices and understanding user needs.\n\nUser experience (UX) design is crucial for mobile app success. This includes intuitive navigation, responsive design, and accessibility features. Apps should be designed with the user in mind, providing clear value and easy-to-use interfaces.\n\nPerformance optimization is essential for mobile apps. This includes efficient code, proper image optimization, and minimal battery usage. Users expect fast, responsive applications that don't drain their device's resources.\n\nSecurity is another critical consideration. Mobile apps often handle sensitive data, so implementing proper authentication, encryption, and secure communication protocols is essential.\n\nCross-platform development using frameworks like React Native and Flutter allows developers to create apps for multiple platforms with a single codebase. This approach can reduce development time and costs while maintaining quality.\n\nTesting is crucial for mobile app success. This includes unit testing, integration testing, and user acceptance testing. Apps should be tested on various devices and operating systems to ensure compatibility.\n\nThe mobile app market continues to grow, with businesses investing heavily in mobile solutions. Companies that create high-quality, user-friendly mobile apps will be better positioned to engage with their customers and drive business growth.",
      author: "David Kim",
      date: "2024-01-08",
      readTime: "9 min read",
      tags: ["Mobile", "Development"],
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600",
      views: 850,
      likes: 56,
      comments: 14
    },
    {
      id: 5,
      title: "DevOps: Streamlining Software Development",
      excerpt: "Understand how DevOps practices can improve software development efficiency and deployment reliability.",
      content: "DevOps has revolutionized software development by bridging the gap between development and operations teams. This approach emphasizes collaboration, automation, and continuous improvement.\n\nKey DevOps practices include continuous integration and continuous deployment (CI/CD), infrastructure as code, automated testing, and monitoring. These practices help teams deliver software faster and more reliably.\n\nAutomation is a core principle of DevOps. This includes automated testing, deployment, and monitoring. By automating repetitive tasks, teams can focus on more strategic work and reduce the risk of human error.\n\nCollaboration between development and operations teams is essential for DevOps success. This includes shared responsibilities, open communication, and a culture of continuous improvement.\n\nDevOps tools and technologies continue to evolve, with new solutions for containerization, orchestration, and monitoring. Popular tools include Docker, Kubernetes, Jenkins, and various cloud platforms.\n\nThe benefits of DevOps include faster time to market, improved quality, better collaboration, and increased efficiency. Organizations that embrace DevOps practices will be better positioned to compete in the fast-paced digital economy.\n\nImplementing DevOps requires cultural change, investment in tools and training, and a commitment to continuous improvement. However, the benefits far outweigh the challenges, making DevOps essential for modern software development.",
      author: "Lisa Wang",
      date: "2024-01-05",
      readTime: "10 min read",
      tags: ["DevOps", "Development"],
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600",
      views: 920,
      likes: 72,
      comments: 19
    },
    {
      id: 6,
      title: "Data Science: Transforming Business Insights",
      excerpt: "Explore how data science is helping businesses make better decisions and gain competitive advantages.",
      content: "Data science is transforming how businesses operate by providing insights from large datasets. This field combines statistics, programming, and domain expertise to extract valuable information from data.\n\nKey data science techniques include machine learning, statistical analysis, data visualization, and predictive modeling. These techniques help businesses understand patterns, make predictions, and optimize processes.\n\nData collection and preparation are crucial steps in the data science process. This includes cleaning data, handling missing values, and ensuring data quality. The quality of insights depends heavily on the quality of the underlying data.\n\nMachine learning algorithms can identify patterns in data that humans might miss. This includes classification, regression, clustering, and recommendation systems. These algorithms can be applied to various business problems.\n\nData visualization is essential for communicating insights effectively. This includes charts, graphs, and interactive dashboards that help stakeholders understand complex data.\n\nThe benefits of data science include better decision-making, improved efficiency, competitive advantages, and new business opportunities. Companies that invest in data science capabilities will be better positioned to succeed in the data-driven economy.\n\nImplementing data science requires skilled personnel, appropriate tools, and a data-driven culture. Organizations should invest in training, hire qualified data scientists, and create an environment that values data-driven decision making.",
      author: "Dr. James Wilson",
      date: "2024-01-03",
      readTime: "11 min read",
      tags: ["Data Science", "Analytics"],
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600",
      views: 1050,
      likes: 81,
      comments: 22
    }
  ];

  const featuredPosts = blogPosts.slice(0, 3);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === "All" || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const openModal = (post) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPost(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10"></div>
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                y: [0, -40, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 2,
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
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Tech Insights
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                & Innovation
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Stay updated with the latest <span className="text-blue-300 font-bold">technology trends</span> and 
              <span className="text-purple-300 font-bold"> industry insights</span>.
            </motion.p>

            <motion.div
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-blue-400/30 rounded-full px-6 py-3 shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <FaRocket className="text-blue-400 text-xl" />
              <span className="text-blue-300 font-bold">EXPLORE • LEARN • INNOVATE</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Tag Filters */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedTag === tag
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tag === "All" ? tag : `#${tag}`}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Featured Articles
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Handpicked articles covering the latest trends and insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {post.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-blue-500 text-sm font-medium">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <FaUser className="text-blue-500" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaCalendarAlt className="text-green-500" />
                          {post.date}
                        </span>
                      </div>
                      <span className="flex items-center gap-1">
                        <FaClock className="text-orange-500" />
                        {post.readTime}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <FaEye className="text-blue-500" />
                          {post.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaHeart className="text-red-500" />
                          {post.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaComment className="text-green-500" />
                          {post.comments}
                        </span>
                      </div>
                      <motion.button
                        onClick={() => openModal(post)}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Read More
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                All Articles
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our complete collection of technology articles and insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        {post.tags[0]}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {post.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-blue-500 text-sm font-medium">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <FaUser className="text-blue-500" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaCalendarAlt className="text-green-500" />
                          {post.date}
                        </span>
                      </div>
                      <span className="flex items-center gap-1">
                        <FaClock className="text-orange-500" />
                        {post.readTime}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <FaEye className="text-blue-500" />
                          {post.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaHeart className="text-red-500" />
                          {post.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaComment className="text-green-500" />
                          {post.comments}
                        </span>
                      </div>
                      <motion.button
                        onClick={() => openModal(post)}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Read More
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12 shadow-xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest technology insights and industry updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <motion.button
                className="px-8 py-3 bg-white text-blue-600 font-bold rounded-xl hover:shadow-2xl hover:shadow-white/40 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
                <FaArrowRight />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {showModal && selectedPost && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
              >
                ×
              </button>
            </div>
            <div className="p-8 overflow-y-auto max-h-[60vh]">
              <div className="flex items-center gap-2 mb-4">
                {selectedPost.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {selectedPost.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1">
                  <FaUser className="text-blue-500" />
                  {selectedPost.author}
                </span>
                <span className="flex items-center gap-1">
                  <FaCalendarAlt className="text-green-500" />
                  {selectedPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <FaClock className="text-orange-500" />
                  {selectedPost.readTime}
                </span>
              </div>
              <div className="prose prose-lg max-w-none">
                {selectedPost.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
};

export default Blogs;