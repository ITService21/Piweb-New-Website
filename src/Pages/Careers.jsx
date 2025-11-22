import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import { useModal } from "../Context/ModalContext";
import AnimatedTechBackground from "../Components/AnimatedTechBackground";
import { 
  FaCode, 
  FaPalette, 
  FaServer, 
  FaMobile, 
  FaShieldAlt, 
  FaRocket,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaHeart,
  FaLightbulb,
  FaGraduationCap,
  FaBriefcase,
  FaChevronRight,
  FaStar,
  FaCheckCircle,
  FaDatabase,
  FaCloud,
  FaSearch,
  FaChartLine,
  FaBrain,
  FaLaptop,
  FaCog,
  FaNetworkWired,
  FaGlobe,
  FaBullhorn,
  FaPenNib,
  FaVideo,
  FaCamera,
  FaFileAlt
} from "react-icons/fa";

const Careers = () => {
  const { openModal } = useModal();
  const [selectedJob, setSelectedJob] = useState(null);
  const [filter, setFilter] = useState("All");

  // SEO Meta Tags
  useEffect(() => {
    document.title = "Careers - Piweb Tech | Join Our Amazing Team";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Join Piweb Tech and build the future with us. Explore exciting career opportunities in frontend, backend, full-stack development, SEO, digital marketing, and more. Remote and on-site positions available.');
    
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'careers, jobs, software developer jobs, frontend developer, backend developer, react developer, node.js developer, PHP developer, SEO expert, digital marketing jobs');
  }, []);

  const departments = ["All", "Engineering", "Design", "Marketing", "Sales", "Operations"];

  const benefits = [
    {
      icon: FaHeart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, gym membership, and wellness programs",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: FaGraduationCap,
      title: "Learning & Development",
      description: "Training budget, conference attendance, and skill development programs",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaUsers,
      title: "Flexible Work",
      description: "Remote work options, flexible hours, and work-life balance",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FaRocket,
      title: "Career Growth",
      description: "Clear career paths, mentorship, and advancement opportunities",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FaStar,
      title: "Recognition",
      description: "Performance bonuses, awards, and recognition programs",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: FaLightbulb,
      title: "Innovation Time",
      description: "20% time for personal projects and innovation initiatives",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote / On-site",
      type: "Full-time",
      experience: "2-4 years",
      icon: FaCode,
      color: "from-blue-500 to-cyan-500",
      description: "We're looking for a talented Frontend Developer to create stunning, responsive user interfaces using modern JavaScript frameworks and libraries.",
      requirements: [
        "2+ years of experience with React, Vue.js, or Angular",
        "Strong knowledge of HTML5, CSS3, and JavaScript (ES6+)",
        "Experience with state management (Redux, Vuex, etc.)",
        "Familiarity with CSS preprocessors (SASS, LESS)",
        "Understanding of responsive design principles",
        "Experience with version control (Git)"
      ],
      responsibilities: [
        "Develop and maintain responsive web applications",
        "Collaborate with UI/UX designers to implement designs",
        "Optimize applications for maximum speed and scalability",
        "Write clean, maintainable, and well-documented code",
        "Participate in code reviews and team meetings"
      ]
    },
    {
      id: 2,
      title: "Backend Developer",
      department: "Engineering",
      location: "Remote / On-site",
      type: "Full-time",
      experience: "2-5 years",
      icon: FaServer,
      color: "from-green-500 to-emerald-500",
      description: "Join our backend team to build robust, scalable server-side applications and APIs that power our client solutions.",
      requirements: [
        "2+ years of backend development experience",
        "Proficiency in Node.js, Python, or Java",
        "Experience with RESTful and GraphQL APIs",
        "Knowledge of database design (SQL and NoSQL)",
        "Understanding of microservices architecture",
        "Experience with cloud platforms (AWS, Azure, GCP)"
      ],
      responsibilities: [
        "Design and develop server-side applications",
        "Create and maintain APIs and web services",
        "Optimize database queries and performance",
        "Implement security and data protection measures",
        "Collaborate with frontend developers and DevOps team"
      ]
    },
    {
      id: 3,
      title: "React Development Engineer",
      department: "Engineering",
      location: "Remote / On-site",
      type: "Full-time",
      experience: "3-6 years",
      icon: FaCode,
      color: "from-cyan-500 to-blue-500",
      description: "We need an experienced React engineer to lead frontend development initiatives and mentor junior developers.",
      requirements: [
        "3+ years of React development experience",
        "Deep understanding of React hooks, context, and lifecycle",
        "Experience with React ecosystem (Next.js, Gatsby, etc.)",
        "Knowledge of TypeScript",
        "Experience with testing frameworks (Jest, React Testing Library)",
        "Strong problem-solving and debugging skills"
      ],
      responsibilities: [
        "Lead React development projects",
        "Architect scalable frontend solutions",
        "Mentor junior React developers",
        "Review code and provide technical guidance",
        "Stay updated with React and frontend trends"
      ]
    },
    {
      id: 4,
      title: "Node.js Developer",
      department: "Engineering",
      location: "Remote / On-site",
      type: "Full-time",
      experience: "2-5 years",
      icon: FaServer,
      color: "from-green-600 to-emerald-600",
      description: "Build high-performance server applications using Node.js. Work on real-time systems, APIs, and microservices.",
      requirements: [
        "2+ years of Node.js development experience",
        "Proficiency in Express.js or similar frameworks",
        "Experience with asynchronous programming",
        "Knowledge of WebSockets and real-time applications",
        "Understanding of event-driven architecture",
        "Experience with MongoDB, PostgreSQL, or MySQL"
      ],
      responsibilities: [
        "Develop scalable Node.js applications",
        "Build RESTful and GraphQL APIs",
        "Implement real-time features",
        "Optimize application performance",
        "Write unit and integration tests"
      ]
    },
    {
      id: 5,
      title: "PHP Developer",
      department: "Engineering",
      location: "Remote / On-site",
      type: "Full-time",
      experience: "2-4 years",
      icon: FaCode,
      color: "from-indigo-500 to-purple-500",
      description: "Join our PHP team to develop and maintain web applications using modern PHP frameworks and best practices.",
      requirements: [
        "2+ years of PHP development experience",
        "Experience with Laravel, Symfony, or CodeIgniter",
        "Knowledge of MySQL or PostgreSQL",
        "Understanding of MVC architecture",
        "Experience with Composer and PHPUnit",
        "Familiarity with RESTful API development"
      ],
      responsibilities: [
        "Develop and maintain PHP applications",
        "Create and optimize database queries",
        "Implement security best practices",
        "Write clean, maintainable PHP code",
        "Collaborate with frontend developers"
      ]
    },
    {
      id: 6,
      title: "Full-Stack Developer",
      department: "Engineering",
      location: "Remote / On-site",
      type: "Full-time",
      experience: "3-6 years",
      icon: FaLaptop,
      color: "from-purple-500 to-pink-500",
      description: "We're seeking a versatile Full-Stack Developer who can work on both frontend and backend to deliver end-to-end solutions.",
      requirements: [
        "3+ years of full-stack development experience",
        "Proficiency in React, Node.js, or similar technologies",
        "Experience with database design and optimization",
        "Knowledge of cloud platforms and DevOps",
        "Strong problem-solving abilities",
        "Ability to work independently and in teams"
      ],
      responsibilities: [
        "Develop full-stack web applications",
        "Design database schemas and APIs",
        "Implement responsive frontend interfaces",
        "Deploy and maintain applications",
        "Collaborate across teams"
      ]
    },
    {
      id: 7,
      title: "SEO Expert",
      department: "Marketing",
      location: "Remote / On-site",
      type: "Full-time",
      experience: "2-5 years",
      icon: FaSearch,
      color: "from-yellow-500 to-orange-500",
      description: "Help our clients achieve top search engine rankings with your SEO expertise. Work on diverse projects across industries.",
      requirements: [
        "2+ years of SEO experience",
        "Deep knowledge of Google algorithms and ranking factors",
        "Experience with SEO tools (Ahrefs, SEMrush, Moz, etc.)",
        "Understanding of technical SEO",
        "Knowledge of keyword research and content optimization",
        "Experience with Google Analytics and Search Console"
      ],
      responsibilities: [
        "Conduct SEO audits and analysis",
        "Develop and implement SEO strategies",
        "Optimize website content and structure",
        "Monitor and report on SEO performance",
        "Stay updated with SEO trends and best practices"
      ]
    },
    {
      id: 8,
      title: "Google Ads Expert",
      department: "Marketing",
      location: "Remote / On-site",
      type: "Full-time",
      experience: "2-4 years",
      icon: FaBullhorn,
      color: "from-blue-500 to-indigo-500",
      description: "Manage and optimize Google Ads campaigns to drive results for our clients. Maximize ROI through data-driven strategies.",
      requirements: [
        "2+ years of Google Ads management experience",
        "Google Ads certification preferred",
        "Experience with Search, Display, and Shopping campaigns",
        "Knowledge of conversion tracking and optimization",
        "Understanding of keyword research and bidding strategies",
        "Proficiency in Google Analytics"
      ],
      responsibilities: [
        "Create and manage Google Ads campaigns",
        "Conduct keyword research and optimization",
        "Monitor campaign performance and budgets",
        "A/B test ad creatives and landing pages",
        "Provide regular performance reports"
      ]
    },
    {
      id: 9,
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / On-site",
      type: "Full-time",
      experience: "2-4 years",
      icon: FaPalette,
      color: "from-pink-500 to-rose-500",
      description: "Create beautiful, user-centered interfaces that delight users. Work on diverse projects across web and mobile platforms.",
      requirements: [
        "2+ years of UI/UX design experience",
        "Proficiency in Figma, Sketch, or Adobe XD",
        "Strong portfolio showcasing design skills",
        "Understanding of user research and testing",
        "Experience with design systems",
        "Knowledge of accessibility standards"
      ],
      responsibilities: [
        "Create wireframes, prototypes, and high-fidelity designs",
        "Conduct user research and usability testing",
        "Collaborate with developers and product managers",
        "Maintain and evolve design systems",
        "Present design concepts to stakeholders"
      ]
    },
    {
      id: 10,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / On-site",
      type: "Full-time",
      experience: "2-4 years",
      icon: FaCog,
      color: "from-gray-600 to-gray-800",
      description: "Build and maintain robust, scalable infrastructure. Ensure our applications run smoothly and securely in the cloud.",
      requirements: [
        "2+ years of DevOps or infrastructure experience",
        "Experience with AWS, Azure, or GCP",
        "Knowledge of Docker and Kubernetes",
        "Experience with CI/CD pipelines (Jenkins, GitLab CI, etc.)",
        "Understanding of monitoring and logging tools",
        "Knowledge of Infrastructure as Code (Terraform, CloudFormation)"
      ],
      responsibilities: [
        "Design and implement infrastructure solutions",
        "Automate deployment and scaling processes",
        "Monitor system performance and reliability",
        "Ensure security best practices",
        "Collaborate with development teams"
      ]
    },
    {
      id: 11,
      title: "Mobile App Developer",
      department: "Engineering",
      location: "Remote / On-site",
      type: "Full-time",
      experience: "2-3 years",
      icon: FaMobile,
      color: "from-indigo-500 to-purple-500",
      description: "Create amazing mobile experiences for iOS and Android. Work with React Native and native technologies.",
      requirements: [
        "2+ years of mobile development experience",
        "Experience with React Native or Flutter",
        "Knowledge of iOS and Android development",
        "Understanding of mobile app architecture",
        "Experience with app store deployment",
        "Familiarity with mobile UI/UX best practices"
      ],
      responsibilities: [
        "Develop cross-platform mobile applications",
        "Optimize app performance and user experience",
        "Collaborate with design and backend teams",
        "Test and debug mobile applications",
        "Stay updated with mobile development trends"
      ]
    },
    {
      id: 12,
      title: "Database Administrator",
      department: "Engineering",
      location: "Remote / On-site",
      type: "Full-time",
      experience: "3-5 years",
      icon: FaDatabase,
      color: "from-blue-600 to-cyan-600",
      description: "Manage and optimize our database infrastructure. Ensure data integrity, performance, and security.",
      requirements: [
        "3+ years of database administration experience",
        "Expertise in MySQL, PostgreSQL, or MongoDB",
        "Knowledge of database optimization and tuning",
        "Experience with backup and recovery procedures",
        "Understanding of database security",
        "Knowledge of cloud database services"
      ],
      responsibilities: [
        "Design and maintain database systems",
        "Optimize database performance",
        "Implement backup and recovery strategies",
        "Ensure data security and compliance",
        "Monitor database health and troubleshoot issues"
      ]
    },
    {
      id: 13,
      title: "Cloud Solutions Architect",
      department: "Engineering",
      location: "Remote / On-site",
      type: "Full-time",
      experience: "4-7 years",
      icon: FaCloud,
      color: "from-sky-500 to-blue-500",
      description: "Design and implement cloud solutions for our clients. Help them migrate to the cloud and optimize their infrastructure.",
      requirements: [
        "4+ years of cloud architecture experience",
        "Expertise in AWS, Azure, or GCP",
        "Cloud certifications preferred (AWS Solutions Architect, etc.)",
        "Experience with cloud migration projects",
        "Knowledge of cloud security and compliance",
        "Strong communication and client-facing skills"
      ],
      responsibilities: [
        "Design cloud architecture solutions",
        "Lead cloud migration projects",
        "Optimize cloud costs and performance",
        "Provide technical guidance to teams",
        "Work directly with clients"
      ]
    },
    {
      id: 14,
      title: "Cybersecurity Specialist",
      department: "Operations",
      location: "Remote / On-site",
      type: "Full-time",
      experience: "3-5 years",
      icon: FaShieldAlt,
      color: "from-red-500 to-pink-500",
      description: "Protect our systems and data with your cybersecurity expertise. Implement security measures and ensure compliance.",
      requirements: [
        "3+ years of cybersecurity experience",
        "Knowledge of security frameworks and standards",
        "Experience with penetration testing",
        "Understanding of network security",
        "Relevant certifications (CISSP, CISM, CEH, etc.)",
        "Experience with security tools and technologies"
      ],
      responsibilities: [
        "Implement security policies and procedures",
        "Conduct security assessments and audits",
        "Monitor and respond to security incidents",
        "Educate team on security best practices",
        "Ensure compliance with regulations"
      ]
    },
    {
      id: 15,
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote / On-site",
      type: "Full-time",
      experience: "2-4 years",
      icon: FaChartLine,
      color: "from-green-500 to-teal-500",
      description: "Drive growth through digital marketing strategies. Manage campaigns across multiple channels and platforms.",
      requirements: [
        "2+ years of digital marketing experience",
        "Experience with social media marketing",
        "Knowledge of email marketing and automation",
        "Understanding of marketing analytics",
        "Experience with marketing tools (HubSpot, Mailchimp, etc.)",
        "Strong content creation skills"
      ],
      responsibilities: [
        "Develop and execute digital marketing campaigns",
        "Manage social media accounts and content",
        "Create and optimize email campaigns",
        "Analyze campaign performance and ROI",
        "Stay updated with digital marketing trends"
      ]
    },
    {
      id: 16,
      title: "Content Writer",
      department: "Marketing",
      location: "Remote / On-site",
      type: "Full-time",
      experience: "1-3 years",
      icon: FaPenNib,
      color: "from-purple-500 to-indigo-500",
      description: "Create engaging, SEO-friendly content for websites, blogs, and marketing materials. Help our clients tell their stories.",
      requirements: [
        "1+ years of content writing experience",
        "Excellent writing and editing skills",
        "Understanding of SEO principles",
        "Ability to research and write on various topics",
        "Experience with content management systems",
        "Portfolio of published work"
      ],
      responsibilities: [
        "Write blog posts, articles, and web content",
        "Create marketing copy and social media content",
        "Optimize content for SEO",
        "Edit and proofread content",
        "Collaborate with marketing team"
      ]
    },
    {
      id: 17,
      title: "Sales Executive",
      department: "Sales",
      location: "Remote / On-site",
      type: "Full-time",
      experience: "2-5 years",
      icon: FaRocket,
      color: "from-orange-500 to-red-500",
      description: "Drive business growth by building relationships with clients and closing deals. Help businesses transform digitally.",
      requirements: [
        "2+ years of B2B sales experience",
        "Experience in IT/software sales preferred",
        "Strong communication and negotiation skills",
        "Ability to understand client needs",
        "Proven track record of meeting sales targets",
        "CRM experience (Salesforce, HubSpot, etc.)"
      ],
      responsibilities: [
        "Identify and qualify leads",
        "Conduct sales presentations and demos",
        "Build and maintain client relationships",
        "Negotiate contracts and close deals",
        "Meet and exceed sales targets"
      ]
    },
    {
      id: 18,
      title: "Project Manager",
      department: "Operations",
      location: "Remote / On-site",
      type: "Full-time",
      experience: "3-5 years",
      icon: FaBriefcase,
      color: "from-blue-500 to-cyan-500",
      description: "Lead software development projects from conception to delivery. Ensure projects are completed on time and within budget.",
      requirements: [
        "3+ years of project management experience",
        "Experience with Agile/Scrum methodologies",
        "PMP or Scrum Master certification preferred",
        "Strong leadership and communication skills",
        "Experience with project management tools (Jira, Asana, etc.)",
        "Technical background is a plus"
      ],
      responsibilities: [
        "Plan and execute software projects",
        "Coordinate with cross-functional teams",
        "Manage project timelines and budgets",
        "Communicate with stakeholders",
        "Identify and mitigate project risks"
      ]
    }
  ];

  const filteredJobs = filter === "All" 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === filter);

  const cultureValues = [
    {
      title: "Innovation",
      description: "We encourage creative thinking and embrace new technologies",
      icon: FaLightbulb
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and open communication",
      icon: FaUsers
    },
    {
      title: "Growth",
      description: "We invest in our team's professional development and career advancement",
      icon: FaRocket
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in everything we do",
      icon: FaStar
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        <AnimatedTechBackground variant="dark" />
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
                Join Our
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Amazing Team
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-pink-100 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Build the future with us. We&apos;re looking for <span className="text-red-300 font-bold">talented individuals</span> who share our passion for 
              <span className="text-pink-300 font-bold"> innovation</span> and 
              <span className="text-purple-300 font-bold"> excellence</span>.
            </motion.p>

            <motion.div
              className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-md border border-red-400/30 rounded-full px-6 py-3 shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <FaBriefcase className="text-red-400 text-xl" />
              <span className="text-red-300 font-bold">GROWTH • INNOVATION • IMPACT</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
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
                Our Culture
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where everyone can thrive and grow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
                whileHover={{ scale: 1.05, y: -8 }}
              >
                <motion.div 
                  className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-8 border border-red-200/50 hover:border-red-300 transition-all duration-300 hover:shadow-xl relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 20px 40px rgba(239, 68, 68, 0.2)",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 rounded-3xl"
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="text-2xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-red-600 transition-colors duration-300">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
                Benefits & Perks
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive benefits to support your personal and professional growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
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
                  className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-red-300 transition-all duration-300 group-hover:shadow-xl shadow-lg relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 20px 40px rgba(239, 68, 68, 0.2)",
                  }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 rounded-3xl`}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10">
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
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
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
                Open Positions
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our current job openings and find your perfect role
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {departments.map((dept) => (
                <motion.button
                  key={dept}
                  onClick={() => setFilter(dept)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    filter === dept
                      ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-red-300 hover:shadow-md"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {dept}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div 
                  className="bg-white rounded-3xl border border-gray-200 hover:border-red-300 transition-all duration-300 group-hover:shadow-xl shadow-lg overflow-hidden relative"
                  whileHover={{ 
                    boxShadow: "0 25px 50px rgba(239, 68, 68, 0.25)",
                  }}
                >
                  <div 
                    className="p-8 cursor-pointer"
                    onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <motion.div 
                          className={`w-16 h-16 bg-gradient-to-br ${job.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <job.icon className="text-2xl text-white" />
                        </motion.div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors duration-300">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 text-gray-600">
                            <span className="flex items-center">
                              <FaMapMarkerAlt className="mr-2 text-red-500" />
                              {job.location}
                            </span>
                            <span className="flex items-center">
                              <FaClock className="mr-2 text-red-500" />
                              {job.type}
                            </span>
                            <span className="bg-gradient-to-r from-red-50 to-pink-50 px-3 py-1 rounded-full text-sm font-medium border border-red-200">
                              {job.experience}
                            </span>
                            <span className="bg-gradient-to-r from-blue-50 to-cyan-50 px-3 py-1 rounded-full text-sm font-medium border border-blue-200">
                              {job.department}
                            </span>
                          </div>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: selectedJob === job.id ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaChevronRight className="text-gray-400 text-xl" />
                      </motion.div>
                    </div>
                  </div>

                  {selectedJob === job.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200 bg-gradient-to-br from-gray-50 to-white"
                    >
                      <div className="p-8">
                        <div className="grid lg:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                              <FaFileAlt className="mr-2 text-red-500" />
                              Job Description
                            </h4>
                            <p className="text-gray-600 mb-6 leading-relaxed">{job.description}</p>
                            
                            <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                              <FaCheckCircle className="mr-2 text-green-500" />
                              Requirements
                            </h4>
                            <ul className="space-y-2">
                              {job.requirements.map((req, reqIndex) => (
                                <motion.li 
                                  key={reqIndex} 
                                  className="flex items-start"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: reqIndex * 0.1 }}
                                >
                                  <FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                                  <span className="text-gray-600">{req}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                              <FaBriefcase className="mr-2 text-blue-500" />
                              Responsibilities
                            </h4>
                            <ul className="space-y-2">
                              {job.responsibilities.map((resp, respIndex) => (
                                <motion.li 
                                  key={respIndex} 
                                  className="flex items-start"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: respIndex * 0.1 }}
                                >
                                  <FaCheckCircle className="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                                  <span className="text-gray-600">{resp}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-8 pt-6 border-t border-gray-200">
                          <motion.button
                            onClick={openModal}
                            className="px-8 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 flex items-center gap-2"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Apply Now
                            <FaChevronRight className="text-sm group-hover:translate-x-1 transition-transform" />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  )}
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
              Don&apos;t See Your Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals. Send us your resume and let us know how you can contribute to our team.
            </p>
            <motion.button
              onClick={openModal}
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-300 flex items-center gap-2 mx-auto group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Your Resume
              <FaBriefcase className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
