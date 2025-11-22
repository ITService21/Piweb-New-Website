import { useRef } from "react";
import { useSpring, animated, useTrail, config } from "@react-spring/web";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import FormModal from "../../Components/FormModal";
import { useCTAModal } from "../../hooks/useCTAModal";
import AnimatedTechBackground from "../../Components/AnimatedTechBackground";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { 
  FaCode, 
  FaGlobe, 
  FaBrain, 
  FaServer, 
  FaCloud, 
  FaShieldAlt, 
  FaLaptop, 
  FaWrench,
  FaCogs,
  FaRocket,
  FaDatabase,
  FaMobile,
  FaPalette,
  FaChartLine,
  FaMicrochip,
  FaArrowRight
} from "react-icons/fa";

// Service data with comprehensive IT services content
const servicesData = [
    {
        id: "website-development",
        title: "Website Development",
        subtitle: "Transform Your Online Presence",
        icon: FaGlobe,
        description: "Create stunning, high-performance websites that drive business growth and engage your audience. We build cutting-edge websites using React, Next.js, Node.js, and modern CSS frameworks.",
        features: [
            "Responsive Design",
            "SEO Optimization",
            "Lightning Fast Performance",
            "Secure & Safe",
            "Mobile-First Approach",
            "Modern UI/UX Design",
            "CMS Integration",
            "E-Commerce Solutions"
        ],
        benefits: [
            "500+ Websites Built",
            "99.9% Uptime Guarantee",
            "24/7 Support Available",
            "50+ Happy Clients",
            "Award-Winning Designs"
        ],
        process: [
            "Planning & Strategy",
            "Design & Prototyping",
            "Development & Coding",
            "Testing & Quality",
            "Launch & Support"
        ],
        duration: "4-12 weeks",
        link: "/services/website-development",
        color: "from-red-500 to-pink-500"
    },
    {
        id: "ai-ml",
        title: "AI & ML",
        subtitle: "Intelligent Solutions for Your Business",
        icon: FaBrain,
        description: "Transform your business with AI and Machine Learning solutions. Predictive analytics, intelligent chatbots, computer vision, and NLP services powered by industry-leading AI expertise.",
        features: [
            "Predictive Analytics",
            "Intelligent Chatbots",
            "Computer Vision",
            "Natural Language Processing",
            "Machine Learning Models",
            "AI Consulting",
            "Data Science Solutions",
            "Automated Decision Making"
        ],
        benefits: [
            "95% Accuracy Improvement",
            "80% Efficiency Gain",
            "70% Process Automation",
            "150+ AI Projects",
            "Real-time Insights"
        ],
        process: [
            "Data Analysis & Strategy",
            "Model Development",
            "Training & Testing",
            "Integration & Deployment",
            "Monitoring & Optimization"
        ],
        duration: "6-16 weeks",
        link: "/services/ai-ml",
        color: "from-purple-500 to-pink-500"
    },
    {
        id: "software-development",
        title: "Custom Software Development",
        subtitle: "Tailored Software for Every Business",
        icon: FaCode,
        description: "Custom software development services tailored to your business needs. Scalable, secure, and user-centric solutions built with modern technologies by our expert development team.",
        features: [
            "Scalable Architecture",
            "Enterprise Security",
            "User-Centric Design",
            "Cloud Integration",
            "API Development",
            "Microservices",
            "DevOps Implementation",
            "Quality Assurance"
        ],
        benefits: [
            "300+ Custom Solutions",
            "99.9% Uptime",
            "50% Faster Development",
            "Enterprise-Grade Security",
            "Scalable Infrastructure"
        ],
        process: [
            "Requirements Analysis",
            "Architecture Design",
            "Agile Development",
            "Testing & QA",
            "Deployment & Support"
        ],
        duration: "8-24 weeks",
        link: "/services/software-development",
        color: "from-blue-500 to-cyan-500"
    },
    {
        id: "enterprise-systems",
        title: "Enterprise Management Systems",
        subtitle: "Complete Business Management Solutions",
        icon: FaServer,
        description: "Comprehensive enterprise management systems that streamline operations, improve efficiency, and drive business growth. From finance to HR, manage everything in one integrated platform.",
        features: [
            "Finance Management",
            "Human Resources",
            "Sales Management",
            "Operations",
            "Inventory Management",
            "Security & Compliance",
            "Business Intelligence",
            "Multi-tenant Architecture"
        ],
        benefits: [
            "40% Productivity Increase",
            "60% Reduction in Manual Work",
            "300% Growth Capacity",
            "99.9% Uptime Guarantee",
            "Enterprise Security"
        ],
        process: [
            "Business Analysis",
            "System Design",
            "Module Development",
            "Integration & Testing",
            "Training & Deployment"
        ],
        duration: "12-32 weeks",
        link: "/services/enterprise-systems",
        color: "from-indigo-500 to-purple-500"
    },
    {
        id: "cloud",
        title: "Cloud Solutions",
        subtitle: "Scale Beyond Limits with Cloud",
        icon: FaCloud,
        description: "Harness the power of cloud computing to scale your business with unlimited potential. Multi-cloud expertise across AWS, Azure, GCP with cost optimization and enterprise security.",
        features: [
            "Cloud Migration",
            "Backup & Recovery",
            "Cloud Hosting",
            "DevOps Services",
            "Multi-Cloud Strategy",
            "Cost Optimization",
            "Auto-scaling",
            "24/7 Monitoring"
        ],
        benefits: [
            "99.9% Uptime Guarantee",
            "40% Cost Savings",
            "200+ Happy Clients",
            "500+ Deployments",
            "Zero Downtime Migration"
        ],
        process: [
            "Cloud Assessment",
            "Strategy & Planning",
            "Migration Execution",
            "Optimization",
            "Ongoing Support"
        ],
        duration: "4-16 weeks",
        link: "/services/cloud",
        color: "from-cyan-500 to-blue-500"
    },
    {
        id: "cybersecurity",
        title: "Cybersecurity",
        subtitle: "Protect Your Digital Assets",
        icon: FaShieldAlt,
        description: "Enterprise-grade cybersecurity solutions to protect your business from threats. Comprehensive security services including threat detection, vulnerability assessment, and compliance management.",
        features: [
            "Threat Detection & Response",
            "Vulnerability Assessment",
            "Security Audits",
            "Penetration Testing",
            "Compliance Management",
            "Data Encryption",
            "Access Control",
            "Security Training"
        ],
        benefits: [
            "100% Threat Detection",
            "99.9% Security Uptime",
            "Zero Data Breaches",
            "24/7 Monitoring",
            "Compliance Certified"
        ],
        process: [
            "Security Assessment",
            "Risk Analysis",
            "Implementation",
            "Testing & Validation",
            "Ongoing Monitoring"
        ],
        duration: "4-12 weeks",
        link: "/services/cybersecurity",
        color: "from-red-500 to-orange-500"
    },
    {
        id: "digital-transformation",
        title: "Digital Transformation",
        subtitle: "Reimagine Your Business Digitally",
        icon: FaLaptop,
        description: "Transform your business with modernization and automation solutions that drive growth. From legacy system modernization to AI implementation, we transform your business processes.",
        features: [
            "Process Automation",
            "Data Analytics",
            "Cloud Migration",
            "AI Integration",
            "Legacy Modernization",
            "Change Management",
            "Digital Strategy",
            "IoT Solutions"
        ],
        benefits: [
            "40% Efficiency Gain",
            "Better Insights",
            "Enhanced Experience",
            "Future-Ready Solutions",
            "Industry Recognition"
        ],
        process: [
            "Assessment",
            "Strategy",
            "Implementation",
            "Growth & Optimization"
        ],
        duration: "8-24 weeks",
        link: "/services/digital-transformation",
        color: "from-green-500 to-blue-500"
    },
    {
        id: "it-support",
        title: "IT Support & Maintenance",
        subtitle: "Reliable IT Support for Your Business",
        icon: FaWrench,
        description: "Comprehensive IT support and maintenance services to keep your systems running smoothly. From help desk support to infrastructure management, we ensure your IT operations are seamless.",
        features: [
            "24/7 Help Desk",
            "Infrastructure Management",
            "Network Support",
            "Software Updates",
            "Backup & Recovery",
            "Security Monitoring",
            "Performance Optimization",
            "Proactive Maintenance"
        ],
        benefits: [
            "99.9% System Uptime",
            "Fast Response Times",
            "Proactive Monitoring",
            "Cost-Effective Solutions",
            "Expert Support Team"
        ],
        process: [
            "System Assessment",
            "Support Setup",
            "Monitoring Implementation",
            "Ongoing Maintenance",
            "Continuous Improvement"
        ],
        duration: "Ongoing",
        link: "/services/it-support",
        color: "from-gray-500 to-gray-700"
    }
];

export default function AllServices({ className = "" }) {
    const { showFormModal, setShowFormModal, ctaRef } = useCTAModal();

    return (
        <section 
            className={`mt-[40px] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden ${className}`} 
            style={{ backgroundColor: '#FFFFFF' }}
        >
            {/* Enhanced Animated Background with Tech Objects */}
            <AnimatedTechBackground variant="light" />
            <div className="absolute inset-0 overflow-hidden">
                {/* Animated Mesh Background */}
                <animated.div 
                    className="absolute inset-0 opacity-30"
                    animate={{
                        background: [
                            "radial-gradient(circle at 20% 50%, rgba(239,68,68,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(236,72,153,0.15) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(147,51,234,0.15) 0%, transparent 50%)",
                            "radial-gradient(circle at 80% 20%, rgba(236,72,153,0.15) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(147,51,234,0.15) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(239,68,68,0.15) 0%, transparent 50%)",
                            "radial-gradient(circle at 20% 50%, rgba(239,68,68,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(236,72,153,0.15) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(147,51,234,0.15) 0%, transparent 50%)"
                        ]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Moving Tech Icons - Multiple Rows */}
                <div className="absolute inset-0 overflow-hidden">
                    {[
                        { icon: FaCode, delay: 0, size: "text-2xl", color: "text-red-400/30", y: "15%" },
                        { icon: FaGlobe, delay: 2, size: "text-xl", color: "text-pink-400/25", y: "15%" },
                        { icon: FaBrain, delay: 4, size: "text-3xl", color: "text-purple-400/20", y: "15%" },
                        { icon: FaServer, delay: 6, size: "text-xl", color: "text-red-400/30", y: "15%" },
                        { icon: FaCloud, delay: 8, size: "text-2xl", color: "text-pink-400/25", y: "15%" },
                        { icon: FaShieldAlt, delay: 10, size: "text-xl", color: "text-purple-400/20", y: "15%" },
                        { icon: FaLaptop, delay: 12, size: "text-3xl", color: "text-red-400/30", y: "15%" },
                        { icon: FaWrench, delay: 14, size: "text-xl", color: "text-pink-400/25", y: "15%" },
                        { icon: FaCode, delay: 16, size: "text-2xl", color: "text-purple-400/20", y: "15%" },
                        { icon: FaGlobe, delay: 18, size: "text-xl", color: "text-red-400/30", y: "15%" },
                        { icon: FaCode, delay: 1, size: "text-xl", color: "text-pink-400/20", y: "55%" },
                        { icon: FaBrain, delay: 3, size: "text-3xl", color: "text-purple-400/25", y: "55%" },
                        { icon: FaServer, delay: 5, size: "text-xl", color: "text-red-400/20", y: "55%" },
                        { icon: FaCloud, delay: 7, size: "text-2xl", color: "text-pink-400/25", y: "55%" },
                        { icon: FaShieldAlt, delay: 9, size: "text-xl", color: "text-purple-400/20", y: "55%" },
                        { icon: FaLaptop, delay: 11, size: "text-3xl", color: "text-red-400/25", y: "55%" },
                        { icon: FaWrench, delay: 13, size: "text-xl", color: "text-pink-400/20", y: "55%" },
                        { icon: FaCode, delay: 15, size: "text-2xl", color: "text-purple-400/25", y: "55%" },
                        { icon: FaGlobe, delay: 17, size: "text-xl", color: "text-red-400/20", y: "55%" },
                        { icon: FaBrain, delay: 19, size: "text-3xl", color: "text-pink-400/25", y: "55%" }
                    ].map((item, i) => (
                        <animated.div
                            key={`all-tech-${i}`}
                            className={`absolute ${item.color} ${item.size}`}
                            style={{
                                top: item.y,
                                left: '-10%',
                            }}
                            animate={{
                                x: ['-10%', '110%'],
                                y: [0, Math.sin(i * 0.3) * 30, 0],
                                rotate: [0, 360, 0],
                                scale: [0.8, 1.4, 0.8],
                            }}
                            transition={{
                                duration: 30 + i * 2,
                                repeat: Infinity,
                                delay: item.delay,
                                ease: "linear"
                            }}
                        >
                            <item.icon />
                        </animated.div>
                    ))}
                </div>
                
                {/* Tech Geometric Objects - Scattered Across Page */}
                {[...Array(12)].map((_, i) => {
                    const shapes = [
                        // Circles
                        "w-16 h-16 sm:w-20 sm:h-20 rounded-full",
                        "w-12 h-12 sm:w-16 sm:h-16 rounded-full",
                        "w-20 h-20 sm:w-24 sm:h-24 rounded-full",
                        // Squares
                        "w-14 h-14 sm:w-18 sm:h-18 rounded-lg",
                        "w-10 h-10 sm:w-14 sm:h-14 rounded-lg",
                        "w-16 h-16 sm:w-20 sm:h-20 rounded-lg",
                        // Triangles (using clip-path)
                        "w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-orange-400/30",
                        "w-0 h-0 border-l-[16px] border-r-[16px] border-b-[28px] border-l-transparent border-r-transparent border-b-orange-400/30",
                        // Diamonds
                        "w-12 h-12 sm:w-16 sm:h-16 transform rotate-45",
                        "w-8 h-8 sm:w-12 sm:h-12 transform rotate-45",
                        // Hexagons (approximated with rounded corners)
                        "w-14 h-14 sm:w-18 sm:h-18 rounded-lg transform rotate-12",
                        "w-10 h-10 sm:w-14 sm:h-14 rounded-lg transform -rotate-12"
                    ];
                    
                    return (
                        <animated.div
                            key={i}
                            className={`absolute ${shapes[i % shapes.length]} bg-gradient-to-r from-red-400/25 to-pink-400/25`}
                            animate={{
                                x: [0, 150, -80, 0],
                                y: [0, -120, 60, 0],
                                rotate: [0, 180, -180, 0],
                                scale: [0.6, 1.4, 1, 0.6],
                            }}
                            transition={{
                                duration: 20 + i * 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 1.2,
                            }}
                            style={{
                                left: `${5 + (i * 7) % 85}%`,
                                top: `${10 + (i * 8) % 70}%`,
                            }}
                        />
                    );
                })}
                
                {/* Additional Orange Objects - Scattered Randomly */}
                {[...Array(15)].map((_, i) => {
                    const objectTypes = [
                        // Small circles
                        "w-6 h-6 sm:w-8 sm:h-8 rounded-full",
                        "w-4 h-4 sm:w-6 sm:h-6 rounded-full",
                        // Small squares
                        "w-5 h-5 sm:w-7 sm:h-7 rounded",
                        "w-3 h-3 sm:w-5 sm:h-5 rounded",
                        // Small triangles
                        "w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-orange-400/20",
                        "w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-orange-400/20",
                        // Small diamonds
                        "w-4 h-4 sm:w-6 sm:h-6 transform rotate-45",
                        "w-3 h-3 sm:w-5 sm:h-5 transform rotate-45",
                        // Small rectangles
                        "w-8 h-4 sm:w-10 sm:h-5 rounded",
                        "w-6 h-3 sm:w-8 sm:h-4 rounded",
                        // Small ovals
                        "w-10 h-6 sm:w-12 sm:h-8 rounded-full",
                        "w-8 h-5 sm:w-10 sm:h-6 rounded-full",
                        // Small stars (approximated)
                        "w-6 h-6 sm:w-8 sm:h-8 transform rotate-45",
                        "w-4 h-4 sm:w-6 sm:h-6 transform rotate-45",
                        // Small hexagons
                        "w-6 h-6 sm:w-8 sm:h-8 rounded-lg transform rotate-30"
                    ];
                    
                    return (
                        <animated.div
                            key={`small-${i}`}
                            className={`absolute ${objectTypes[i % objectTypes.length]} bg-gradient-to-r from-red-300/20 to-pink-300/20`}
                            animate={{
                                x: [0, 100, -50, 0],
                                y: [0, -80, 40, 0],
                                rotate: [0, 360, -360, 0],
                                scale: [0.5, 1.2, 0.8, 0.5],
                            }}
                            transition={{
                                duration: 15 + i * 1,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.8,
                            }}
                            style={{
                                left: `${Math.random() * 90}%`,
                                top: `${Math.random() * 80}%`,
                            }}
                        />
                    );
                })}
                
                {/* Orange Animated Lines - Scattered */}
                {[...Array(8)].map((_, i) => (
                    <animated.div
                        key={`line-${i}`}
                        className="absolute h-1 sm:h-2 bg-gradient-to-r from-red-400/40 to-pink-400/40"
                        animate={{
                            scaleX: [0, 1, 0],
                            opacity: [0, 0.6, 0],
                        }}
                        transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.6,
                        }}
                        style={{
                            width: `${200 + i * 50}px`,
                            left: `${Math.random() * 80}%`,
                            top: `${Math.random() * 70}%`,
                            transform: `rotate(${Math.random() * 360}deg)`,
                        }}
                    />
                ))}
                
                {/* Orange Floating Objects - Various Shapes */}
                {[...Array(10)].map((_, i) => {
                    const shapes = [
                        // Large circles
                        "w-14 h-14 sm:w-18 sm:h-18 rounded-full",
                        "w-10 h-10 sm:w-14 sm:h-14 rounded-full",
                        // Large squares
                        "w-12 h-12 sm:w-16 sm:h-16 rounded-lg",
                        "w-8 h-8 sm:w-12 sm:h-12 rounded-lg",
                        // Large triangles
                        "w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-orange-400/25",
                        "w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-orange-400/25",
                        // Large diamonds
                        "w-10 h-10 sm:w-14 sm:h-14 transform rotate-45",
                        "w-8 h-8 sm:w-12 sm:h-12 transform rotate-45",
                        // Large rectangles
                        "w-16 h-8 sm:w-20 sm:h-10 rounded-lg",
                        "w-12 h-6 sm:w-16 sm:h-8 rounded-lg"
                    ];
                    
                    return (
                        <animated.div
                            key={`floating-${i}`}
                            className={`absolute ${shapes[i % shapes.length]} bg-gradient-to-r from-red-400/30 to-pink-400/30`}
                            animate={{
                                x: [0, 120, -60, 0],
                                y: [0, -100, 50, 0],
                                rotate: [0, 180, -180, 0],
                                scale: [0.6, 1.3, 0.9, 0.6],
                            }}
                            transition={{
                                duration: 18 + i * 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 1.8,
                            }}
                            style={{
                                left: `${Math.random() * 85}%`,
                                top: `${Math.random() * 75}%`,
                            }}
                        />
                    );
                })}
            </div>

            {/* Header Section */}
            <animated.div 
                className="relative z-10 text-center mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: false, amount: 0.15 }}
            >
                <animated.div
                    className="text-center"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <animated.h1 
                        className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <motion.span 
                            className="text-gray-900"
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Our
                        </motion.span>
                        <motion.span 
                            className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent"
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            {" "}Comprehensive
                        </motion.span>
                        <br />
                        <motion.span 
                            className="text-gray-900"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.6 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Services
                        </motion.span>
                    </animated.h1>
                    
                    <animated.p 
                        className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Empowering MSMEs and startups with end-to-end business solutions. From funding to growth, we provide comprehensive support to help your business thrive in today&apos;s competitive landscape.
                    </animated.p>
                </animated.div>
            </animated.div>

            {/* Services Grid */}
            <animated.div 
                className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: false, amount: 0.15 }}
            >
                {servicesData.map((service, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <animated.div
                            key={service.id}
                            initial={{ opacity: 0, x: isEven ? -120 : 120, y: 30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                            viewport={{ once: false, amount: 0.2 }}
                            className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden group"
                            whileHover={{ 
                                scale: 1.02, 
                                y: -5,
                                transition: { duration: 0.3 }
                            }}
                        >
                        <animated.div 
                            className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300"
                            style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                        />
                        <div className="relative z-10">
                            {/* Service Icon */}
                            <animated.div 
                                className={`w-16 h-16 bg-gradient-to-br ${service.color || 'from-red-500 to-pink-500'} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 transition-transform duration-300 shadow-lg`}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                {service.icon && <service.icon className="text-2xl text-white" />}
                            </animated.div>
                            
                            {/* Service Title */}
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-300">
                                {service.title}
                            </h2>
                            
                            {/* Service Subtitle */}
                            <p className={`font-semibold text-lg mb-4 bg-gradient-to-r ${service.color || 'from-red-500 to-pink-500'} bg-clip-text text-transparent`}>
                                {service.subtitle}
                            </p>
                            
                            {/* Service Description */}
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {service.description}
                            </p>
                            
                            {/* Features Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                {service.features.slice(0, 4).map((feature, featureIndex) => (
                                    <animated.div
                                        key={featureIndex}
                                        className="flex items-center gap-2 text-sm text-gray-700"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.05 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color || 'from-red-500 to-pink-500'} rounded-full`}></div>
                                        {feature}
                                    </animated.div>
                                ))}
                            </div>
                            
                            {/* Duration */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                <animated.div 
                                    className={`bg-gradient-to-r from-red-50 to-pink-50 p-3 rounded-lg border border-red-100`}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="text-sm font-semibold text-red-600">Duration</div>
                                    <div className="text-lg font-bold text-gray-800">{service.duration}</div>
                                </animated.div>
                            </div>
                            
                            {/* CTA Button */}
                            <motion.a
                                href={service.link}
                                className={`inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r ${service.color || 'from-red-500 to-pink-500'} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300`}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Learn More
                                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                        </div>
                    </animated.div>
                    );
                })}
            </animated.div>

            {/* Why Choose Us Section */}
            <animated.div 
                className="relative z-10 mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: false, amount: 0.15 }}
            >
                <animated.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <animated.h2 
                        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Why Choose Our Services?
                    </animated.h2>
                    <animated.p 
                        className="text-lg text-gray-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        We combine expertise, experience, and dedication to deliver exceptional results for your business
                    </animated.p>
                </animated.div>

                <animated.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: false, amount: 0.15 }}
                >
                    {[
                        {
                            icon: "🎯",
                            title: "Expert Team",
                            description: "15+ years of combined experience in MSME consulting and business development"
                        },
                        {
                            icon: "⚡",
                            title: "Fast Results",
                            description: "Quick turnaround times with 95% success rate in applications and approvals"
                        },
                        {
                            icon: "🤝",
                            title: "24/7 Support",
                            description: "Round-the-clock assistance and guidance throughout your business journey"
                        }
                    ].map((item, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <animated.div
                                key={index}
                                initial={{ opacity: 0, x: isEven ? -120 : 120, y: 30 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                                viewport={{ once: false, amount: 0.2 }}
                                className="text-center p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl border border-red-100"
                                whileHover={{ 
                                    scale: 1.02, 
                                    y: -3,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </animated.div>
                        );
                    })}
                </animated.div>
            </animated.div>

            {/* CTA Section */}
            <animated.div
                ref={ctaRef}
                className="relative bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-3xl p-12 text-center text-white overflow-hidden"
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <div className="relative z-10">
                    <animated.h2 
                        className="text-4xl sm:text-5xl font-bold mb-6"
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Ready to Transform Your Business?
                    </animated.h2>
                    <animated.p 
                        className="text-xl mb-8 opacity-90 max-w-3xl mx-auto"
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Join thousands of successful MSMEs who trust us with their growth journey. Get started today with our comprehensive business solutions.
                    </animated.p>
                    <animated.div 
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <button
                            onClick={() => setShowFormModal(true)}
                            className="px-10 py-4 bg-white text-red-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
                        >
                            Get Started Today
                        </button>
                        <a
                            href="tel:+919876543210"
                            className="px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-red-600 transition-all duration-300"
                        >
                            Call Now: +91 93518 70445
                        </a>
                    </animated.div>
                </div>
            </animated.div>

            {/* Form Modal */}
            <FormModal
                open={showFormModal}
                onClose={() => setShowFormModal(false)}
            />
        </section>
    );
}

// PropTypes
AllServices.propTypes = {
    className: PropTypes.string,
};
