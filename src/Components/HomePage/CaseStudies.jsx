import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  FaArrowRight, 
  FaCheckCircle, 
  FaIndustry,
  FaRocket,
  FaStar,
  FaCode,
  FaChartLine,
  FaTrophy,
  FaHeart,
  FaCalendarAlt,
  FaUsers,
  FaDollarSign,
  FaAward,
  FaExternalLinkAlt,
  FaPlay,
  FaDownload,
  FaShareAlt,
  FaBookmark,
  FaThumbsUp,
  FaCloud,
  FaShieldAlt,
  FaServer,
  FaBrain
} from "react-icons/fa";

const CaseStudies = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCase, setSelectedCase] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookmarkedCases, setBookmarkedCases] = useState(new Set());
  const [likedCases, setLikedCases] = useState(new Set());
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const caseStudies = [
    {
      title: "Hospital Management System",
      client: "Regional Medical Center",
      industry: "Healthcare",
      icon: FaHeart,
      image: "https://cdn.pixabay.com/photo/2016/04/19/13/22/hospital-1338585_1280.jpg",
      challenge: "Manual processes and scattered patient data across multiple systems causing inefficiencies",
      solution: "Custom HMS with EHR integration and automated workflows",
      results: [
        "50% reduction in administrative time",
        "30% improvement in patient satisfaction",
        "40% increase in operational efficiency",
        "99.9% system uptime achieved"
      ],
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-500/10 to-pink-500/10",
      shadowColor: "shadow-red-500/30",
      accentColor: "red",
      duration: "6 Months",
      team: "8  Devs",
      budget: "$50k",
      tech: ["React", "Node.js", "PostgreSQL", "AWS"],
      category: "Enterprise Software",
      rating: 4.9,
      testimonial: "Piweb Tech transformed our hospital operations completely. The system is intuitive and has dramatically improved our efficiency.",
      clientLogo: "https://via.placeholder.com/120x40/ef4444/ffffff?text=Regional+Medical",
      screenshots: [
        "https://cdn.pixabay.com/photo/2016/04/19/13/22/hospital-1338585_1280.jpg",
        "https://cdn.pixabay.com/photo/2020/04/23/22/38/hospital-5084249_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/11/15/11/37/doctor-2951379_1280.jpg"
      ],
      demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      liveSiteUrl: "https://demo-hospital.piwebtech.com",
      detailedDescription: "Comprehensive hospital management system that streamlined patient care workflows, integrated multiple legacy systems, and provided real-time analytics for better decision making.",
      keyFeatures: [
        "Patient Registration & Medical Records",
        "Appointment Scheduling System",
        "Billing & Insurance Management",
        "Pharmacy Integration",
        "Real-time Analytics Dashboard",
        "Mobile App for Doctors"
      ],
      challenges: [
        "Legacy system integration complexity",
        "HIPAA compliance requirements",
        "Staff training and adoption",
        "Data migration from 5 different systems"
      ],
      outcomes: [
        "Reduced patient wait times by 40%",
        "Eliminated paper-based processes",
        "Improved staff productivity significantly",
        "Enhanced patient experience scores"
      ]
    },
    {
      title: "E-commerce Platform Development",
      client: "Fashion Retail Chain",
      industry: "Retail",
      icon: FaRocket,
      image: "https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_1280.jpg",
      challenge: "Outdated online platform with poor user experience and low conversion rates",
      solution: "Modern e-commerce platform with mobile app and AI-powered recommendations",
      results: [
        "200% increase in online sales",
        "40% improvement in conversion rate",
        "60% faster page load times",
        "85% customer satisfaction score"
      ],
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-pink-500/10 to-purple-500/10",
      shadowColor: "shadow-pink-500/30",
      accentColor: "pink",
      duration: "8 Months",
      team: "12  Devs",
      budget: "$95k",
      tech: ["Vue.js", "Laravel", "MySQL", "Redis"],
      category: "E-commerce Platform",
      rating: 4.8,
      testimonial: "Our online sales skyrocketed after the new platform launch. The AI recommendations are incredibly accurate!",
      clientLogo: "https://via.placeholder.com/120x40/ec4899/ffffff?text=Fashion+Retail",
      screenshots: [
        "https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/11/10/11/04/online-shopping-1813964_1280.jpg",
        "https://cdn.pixabay.com/photo/2018/03/22/02/37/email-3249062_1280.jpg"
      ],
      demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      liveSiteUrl: "https://demo-ecommerce.piwebtech.com",
      detailedDescription: "Complete e-commerce ecosystem with advanced features including AI-powered product recommendations, real-time inventory management, and seamless payment integration across multiple channels.",
      keyFeatures: [
        "AI-Powered Product Recommendations",
        "Multi-vendor Marketplace",
        "Real-time Inventory Management",
        "Advanced Search & Filtering",
        "Mobile-First Design",
        "Payment Gateway Integration"
      ],
      challenges: [
        "High traffic load optimization",
        "Complex product catalog management",
        "Multi-vendor payment splitting",
        "Real-time inventory synchronization"
      ],
      outcomes: [
        "Handled 10x traffic increase seamlessly",
        "Reduced cart abandonment by 35%",
        "Increased average order value by 45%",
        "Achieved 99.9% uptime during peak seasons"
      ]
    },
    {
      title: "Cloud Migration & DevOps",
      client: "Manufacturing Company",
      industry: "Manufacturing",
      icon: FaIndustry,
      image: "https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg",
      challenge: "On-premise infrastructure with scalability issues and high maintenance costs",
      solution: "AWS cloud migration with DevOps implementation and automated CI/CD",
      results: [
        "60% cost reduction in infrastructure",
        "99.9% uptime with improved reliability",
        "50% faster deployment cycles",
        "80% reduction in manual operations"
      ],
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-indigo-500/10",
      shadowColor: "shadow-purple-500/30",
      accentColor: "purple",
      duration: "4 Months",
      team: "6  Devs",
      budget: "$60k",
      tech: ["Docker", "Kubernetes", "AWS", "Jenkins"],
      category: "Cloud Infrastructure",
      rating: 4.9,
      testimonial: "The cloud migration was seamless. Our operational costs dropped significantly while performance improved.",
      clientLogo: "https://via.placeholder.com/120x40/8b5cf6/ffffff?text=Manufacturing+Co",
      screenshots: [
        "https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg",
        "https://cdn.pixabay.com/photo/2020/07/08/04/12/data-center-5382459_1280.jpg",
        "https://cdn.pixabay.com/photo/2020/02/03/00/12/cloud-4815424_1280.jpg"
      ],
      demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      liveSiteUrl: "https://demo-cloud.piwebtech.com",
      detailedDescription: "Complete infrastructure transformation from legacy on-premise systems to modern cloud-native architecture with automated deployment pipelines and comprehensive monitoring.",
      keyFeatures: [
        "Containerized Application Architecture",
        "Automated CI/CD Pipelines",
        "Infrastructure as Code",
        "Real-time Monitoring & Alerting",
        "Auto-scaling Capabilities",
        "Disaster Recovery Setup"
      ],
      challenges: [
        "Zero-downtime migration strategy",
        "Legacy application modernization",
        "Team training on new technologies",
        "Security compliance requirements"
      ],
      outcomes: [
        "Eliminated server maintenance overhead",
        "Achieved elastic scaling capabilities",
        "Reduced deployment time from hours to minutes",
        "Improved system reliability significantly"
      ]
    },
    {
      title: "FinTech Mobile App Development",
      client: "Digital Banking Startup",
      industry: "Finance",
      icon: FaChartLine,
      image: "https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg",
      challenge: "Need for secure, user-friendly mobile banking solution with advanced features",
      solution: "Native mobile app with biometric authentication and real-time transaction processing",
      results: [
        "1M+ app downloads in first year",
        "95% user satisfaction rating",
        "50% faster transaction processing",
        "Zero security breaches"
      ],
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-indigo-500/10 to-blue-500/10",
      shadowColor: "shadow-indigo-500/30",
      accentColor: "indigo",
      duration: "10 Months",
      team: "15  Devs",
      budget: "$100k",
      tech: ["React Native", "Node.js", "MongoDB", "Stripe"],
      category: "Mobile Application",
      rating: 4.7,
      testimonial: "The app exceeded our expectations. User adoption was incredible and the security features are top-notch.",
      clientLogo: "https://via.placeholder.com/120x40/6366f1/ffffff?text=Digital+Banking",
      screenshots: [
        "https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg",
        "https://cdn.pixabay.com/photo/2020/07/12/07/47/business-5396071_1280.jpg",
        "https://cdn.pixabay.com/photo/2018/01/17/20/22/analytics-3088958_1280.jpg"
      ],
      demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      liveSiteUrl: "https://demo-fintech.piwebtech.com",
      detailedDescription: "Comprehensive mobile banking application with cutting-edge security features, intuitive user interface, and seamless integration with banking infrastructure and third-party financial services.",
      keyFeatures: [
        "Biometric Authentication",
        "Real-time Transaction Processing",
        "Investment Portfolio Management",
        "Bill Payment Integration",
        "Expense Tracking & Analytics",
        "Peer-to-Peer Transfers"
      ],
      challenges: [
        "Banking regulations compliance",
        "High-security requirements",
        "Real-time transaction processing",
        "Cross-platform consistency"
      ],
      outcomes: [
        "Achieved top 10 ranking in finance apps",
        "Processed $100M+ in transactions safely",
        "Reduced customer service calls by 60%",
        "Won 'Best Mobile Banking App' award"
      ]
    }
  ];


  const openModal = (caseStudy) => {
    setSelectedCase(caseStudy);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCase(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

  const toggleBookmark = (caseId) => {
    setBookmarkedCases(prev => {
      const newSet = new Set(prev);
      if (newSet.has(caseId)) {
        newSet.delete(caseId);
      } else {
        newSet.add(caseId);
      }
      return newSet;
    });
  };

  const toggleLike = (caseId) => {
    setLikedCases(prev => {
      const newSet = new Set(prev);
      if (newSet.has(caseId)) {
        newSet.delete(caseId);
      } else {
        newSet.add(caseId);
      }
      return newSet;
    });
  };

  const nextImage = () => {
    if (selectedCase && selectedCase.screenshots) {
      setCurrentImageIndex((prev) => 
        prev === selectedCase.screenshots.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedCase && selectedCase.screenshots) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedCase.screenshots.length - 1 : prev - 1
      );
    }
  };

  const handleShare = async (caseStudy) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: caseStudy.title,
          text: caseStudy.challenge,
          url: caseStudy.liveSiteUrl,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(caseStudy.liveSiteUrl);
    }
  };

  return (
    <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* 🎨 Top Separator - Wave Design Matching Theme */}
      <div className="absolute top-0 left-0 right-0 h-24 z-10 overflow-hidden pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradientTopCase" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(239, 68, 68, 0.1)" />
              <stop offset="50%" stopColor="rgba(236, 72, 153, 0.2)" />
              <stop offset="100%" stopColor="rgba(239, 68, 68, 0.1)" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,50 Q300,30 600,50 T1200,50 L1200,100 L0,100 Z"
            fill="url(#waveGradientTopCase)"
            animate={{
              d: [
                "M0,50 Q300,30 600,50 T1200,50 L1200,100 L0,100 Z",
                "M0,50 Q300,70 600,50 T1200,50 L1200,100 L0,100 Z",
                "M0,50 Q300,30 600,50 T1200,50 L1200,100 L0,100 Z",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
      
      {/* Animated Border Line */}
      <div className="absolute top-0 left-0 right-0 h-px z-20 pointer-events-none">
        <motion.div
          className="h-full"
          style={{
            backgroundImage: 'linear-gradient(to right, transparent, rgb(239, 68, 68), rgb(236, 72, 153), transparent)',
          }}
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      
      {/* Decorative Top Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full z-20 pointer-events-none" />

      {/* Unique Creative Background Effects - Same as Testimonials (Light Mode) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
{/* Square Grid Pattern */}
{/* Enhanced Square Grid Pattern */}
{/* True Square Tile Pattern */}

      {/* ⚡ Electric Grid Pattern - Light Theme */}
      <div className="absolute inset-0 opacity-3 z-0">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="rgba(239, 68, 68, 0.15)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
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

        {/* Morphing Square Geometric Shapes - Enhanced */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { x: 20, y: 30, size: 60, color: "red" },
            { x: 70, y: 20, size: 80, color: "pink" },
            { x: 30, y: 70, size: 70, color: "purple" },
            { x: 80, y: 80, size: 50, color: "blue" },
            { x: 10, y: 50, size: 55, color: "red" },
            { x: 90, y: 60, size: 65, color: "pink" },
            { x: 50, y: 10, size: 45, color: "purple" },
            { x: 50, y: 90, size: 75, color: "blue" }
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
                borderRadius: ["0%", "50%", "25%", "0%", "15%", "0%"],
                rotate: [0, 90, 180, 270, 360],
                scale: [1, 1.3, 0.7, 1.1, 1.2, 1],
                opacity: [0.2, 0.6, 0.3, 0.8, 0.4, 0.2],
                x: [0, Math.sin(i) * 30, -Math.sin(i) * 20, 0],
                y: [0, Math.cos(i) * 30, -Math.cos(i) * 20, 0],
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

      <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-red-200/50 rounded-full px-6 py-3 shadow-lg">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <FaTrophy className="text-red-500 text-lg" />
              </motion.div>
              <span className="text-red-700 font-semibold text-sm">CLIENT SUCCESS • PROVEN RESULTS • REAL IMPACT</span>
            </div>
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Success{" "}
            <motion.span 
              className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent relative"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: '200% 100%',
              }}
            >
              Stories
            </motion.span>
            
            {/* Glowing Underline */}
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '60%' }}
              transition={{ 
                width: { duration: 1.2, delay: 0.8 },
                boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              viewport={{ once: true }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(239, 68, 68, 0.5)',
                  '0 0 40px rgba(236, 72, 153, 0.7)',
                  '0 0 20px rgba(147, 51, 234, 0.5)',
                  '0 0 20px rgba(239, 68, 68, 0.5)',
                ],
              }}
            />
          </motion.h2>
          
          <motion.p 
            className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Real projects, real results. See how{" "}
            <motion.span 
              className="font-semibold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: '200% 100%',
              }}
            >
              Piweb Tech
            </motion.span>
            {" "}has helped businesses transform their operations and achieve{" "}
            <motion.span 
              className="font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              style={{
                backgroundSize: '200% 100%',
              }}
            >
              extraordinary success
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Enhanced Case Studies Grid - 2 cards per row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {caseStudies.map((study, index) => (
              <motion.div
                key={index}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Enhanced Case Study Card - Fixed Height */}
              <motion.div 
                className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 overflow-hidden h- [800px] flex flex-col"
                whileHover={{ 
                  scale: 1.02, 
                  y: -15,
                  rotateY: 2,
                }}
                animate={{
                  borderColor: hoveredCard === index ? 'rgba(239, 68, 68, 0.4)' : 'rgba(156, 163, 175, 0.3)',
                  boxShadow: hoveredCard === index ? 
                    '0 30px 60px rgba(239, 68, 68, 0.2)' : 
                    '0 15px 35px rgba(0, 0, 0, 0.1)',
                }}
                transition={{ 
                  scale: { duration: 0.3 },
                  y: { duration: 0.3 },
                  rotateY: { duration: 0.3 },
                  borderColor: { duration: 0.5 },
                  boxShadow: { duration: 0.5 },
                }}
              >
                {/* Enhanced Image Section */}
                <div className="relative   md:overflow-hidden">
                  <motion.img 
                      src={study.image} 
                      alt={study.title}
                    className="h-[170px] w-[100%] "
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Dynamic Gradient Overlay */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-t ${study.bgGradient} to-transparent`}
                    animate={{
                      background: hoveredCard === index ? 
                        `linear-gradient(to top, rgba(239, 68, 68, 0.8), transparent)` :
                        `linear-gradient(to top, rgba(239, 68, 68, 0.6), transparent)`
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Industry Badge with Icon */}
                    <div className="absolute top-4 left-4">
                    <motion.div
                      className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm text-red-600 px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <study.icon className="text-sm" />
                        {study.industry}
                    </motion.div>
                  </div>

                  {/* Interactive Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <motion.button
                      className={`w-10 h-10 rounded-full backdrop-blur-sm border border-white/40 flex items-center justify-center text-sm transition-all duration-300 ${
                        bookmarkedCases.has(index) 
                          ? 'bg-red-500/90 text-white' 
                          : 'bg-white/90 text-gray-600 hover:text-red-600'
                      }`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBookmark(index);
                      }}
                    >
                      <FaBookmark />
                    </motion.button>
                    
                    <motion.button
                      className={`w-10 h-10 rounded-full backdrop-blur-sm border border-white/40 flex items-center justify-center text-sm transition-all duration-300 ${
                        likedCases.has(index) 
                          ? 'bg-pink-500/90 text-white' 
                          : 'bg-white/90 text-gray-600 hover:text-pink-600'
                      }`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(index);
                      }}
                    >
                      <FaThumbsUp />
                    </motion.button>

                    <motion.button
                      className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-white/40 flex items-center justify-center text-gray-600 hover:text-blue-600 text-sm transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShare(study);
                      }}
                    >
                      <FaShareAlt />
                    </motion.button>
                    </div>

                  {/* Rating Badge */}
                  <div className="absolute bottom-4 right-4">
                    <motion.div
                      className="inline-flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: hoveredCard === index ? 1 : 0, scale: hoveredCard === index ? 1 : 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaStar className="text-yellow-400 text-xs" />
                      <span>{study.rating}</span>
                    </motion.div>
                    </div>

                  {/* Project Category Badge */}
                  <div className="absolute bottom-4 left-4">
                    <motion.div
                      className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: hoveredCard === index ? 1 : 0, scale: hoveredCard === index ? 1 : 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaAward className="text-xs" />
                      <span>{study.category}</span>
                    </motion.div>
                  </div>
                  
                  {/* Title and Client */}
                  <div className="absolute bottom-12 left-4 right-4">
                    <motion.h3 
                      className="text-[15px] md:text-xl font-bold text-white mb-2 leading-tight"
                      animate={{
                        y: hoveredCard === index ? -5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {study.title}
                    </motion.h3>
                    <motion.p 
                      className="text-pink-100 text-sm font-medium"
                      animate={{
                        opacity: hoveredCard === index ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {study.client}
                    </motion.p>
                  </div>

                  {/* Floating Icon */}
                  <motion.div
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r ${study.gradient} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-90`}
                    animate={{
                      scale: hoveredCard === index ? [1, 1.2, 1] : 1,
                      rotate: hoveredCard === index ? 360 : 0,
                    }}
                    transition={{ 
                      scale: { duration: 2, repeat: Infinity },
                      rotate: { duration: 1 }
                    }}
                  >
                    <study.icon className="text-2xl text-white" />
                  </motion.div>
                </div>
                
                {/* Enhanced Content Section - Flexible */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col">
                  {/* Challenge Section */}
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <h4 className="text-lg font-bold text-gray-900">Challenge</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{study.challenge}</p>
                  </motion.div>
                  
                  {/* Solution Section */}
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <h4 className="text-lg font-bold text-gray-900">Solution</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
                  </motion.div>

                  {/* Tech Stack */}
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <h4 className="text-lg font-bold text-gray-900">Technologies</h4>
                          </div>
                    <div className="flex flex-wrap gap-2">
                      {study.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200"
                          whileHover={{ scale: 1.05, backgroundColor: '#fee2e2' }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                        ))}
                      </div>
                  </motion.div>
                  
                  {/* Results Section */}
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <h4 className="text-lg font-bold text-gray-900">Results</h4>
                    </div>
                    <div className="space-y-3">
                      {study.results.map((result, resultIndex) => (
                        <motion.div 
                          key={resultIndex} 
                          className="flex items-center text-sm text-gray-600"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + resultIndex * 0.1 + 0.7 }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                          </motion.div>
                          <span className="font-medium">{result}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Enhanced CTA Section - Sticky to bottom */}
                  <motion.div 
                    className="flex items-center justify-between pt-6 border-t border-gray-200 mt-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.8 }}
                  >
                    <motion.div 
                      className="flex items-center text-red-600 font-semibold cursor-pointer"
                      whileHover={{ x: 8, color: '#dc2626' }}
                      transition={{ duration: 0.3 }}
                      onClick={() => openModal(study)}
                    >
                      <span className="text-sm">View Full Case Study</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <FaArrowRight className="ml-2 text-sm" />
                      </motion.div>
                    </motion.div>
                    
                    <motion.button 
                      className={`px-4 py-3 md:px-6 md:py-3 bg-gradient-to-r ${study.gradient} text-white rounded-xl font-semibold text-[12px] md:text-sm shadow-lg`}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -2,
                        boxShadow: '0 10px 30px rgba(239, 68, 68, 0.4)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => openModal(study)}
                    >
                        Learn More
                    </motion.button>
                  </motion.div>
                    </div>

                {/* Corner Accent Lines */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-60 transition-opacity duration-500">
                  <div className="absolute top-4 right-4 w-12 h-px bg-gradient-to-r from-red-400 to-pink-400"></div>
                  <div className="absolute top-4 right-4 w-px h-12 bg-gradient-to-b from-red-400 to-pink-400"></div>
                  </div>
                <div className="absolute bottom-0 left-0 w-20 h-20 opacity-0 group-hover:opacity-60 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 w-12 h-px bg-gradient-to-r from-purple-400 to-indigo-400"></div>
                  <div className="absolute bottom-4 left-4 w-px h-12 bg-gradient-to-b from-purple-400 to-indigo-400"></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <motion.div
          className="text-center mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-4 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <FaRocket />
            </motion.div>
            <span>Ready to Create Your Success Story?</span>
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Detailed Case Study Modal */}
        <AnimatePresence>
          {isModalOpen && selectedCase && (
            <motion.div
              className="pt-20 md:pt-28 fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              {/* Enhanced Backdrop */}
              <motion.div 
                className="absolute inset-0 bg-black/70 backdrop-blur-md" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            
            {/* Modal Content */}
            <motion.div
              className="relative bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Enhanced Header Controls */}
              <div className="absolute top-6 right-6 z-20 flex gap-2">
                {/* <motion.button
                  onClick={() => window.open(selectedCase.liveSiteUrl, '_blank')}
                  className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaExternalLinkAlt className="text-sm" />
                </motion.button> */}
                
                <motion.button
                  onClick={() => handleShare(selectedCase)}
                  className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-green-600 hover:bg-green-50 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaShareAlt className="text-sm" />
                </motion.button>

                <motion.button
                  onClick={closeModal}
                  className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-red-600 hover:bg-red-50 transition-all duration-300 shadow-lg text-xl font-bold"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ×
                </motion.button>
              </div>

              {/* Enhanced Modal Header with Image Carousel */}
              <div className="relative h-80 overflow-hidden rounded-t-3xl">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentImageIndex}
                    src={selectedCase.screenshots[currentImageIndex]} 
                    alt={`${selectedCase.title} - Screenshot ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
                
                {/* Image Navigation */}
                {/* <div className="absolute inset-y-0 left-4 flex items-center">
                  <motion.button
                    onClick={prevImage}
                    className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    ←
                  </motion.button>
                </div>
                
                <div className="absolute inset-y-0 right-4 flex items-center">
                  <motion.button
                    onClick={nextImage}
                    className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    →
                  </motion.button>
                </div> */}

                {/* Image Indicators */}
                {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {selectedCase.screenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div> */}

                <div className={`absolute inset-0 bg-gradient-to-t ${selectedCase.bgGradient} to-transparent`} />
                
                {/* Header Content */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${selectedCase.gradient} rounded-2xl flex items-center justify-center`}>
                      <selectedCase.icon className="text-2xl text-white" />
                    </div>
                    <div>
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                        {selectedCase.industry}
                      </span>
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedCase.title}</h2>
                  <p className="text-[14px]md:text-xl opacity-90">{selectedCase.client}</p>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-8">
                {/* Enhanced Project Overview */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <motion.div 
                    className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 text-center border border-red-100"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaCalendarAlt className="text-2xl text-red-500 mx-auto mb-3" />
                    <div className="md:text-2xl text-[23px] font-bold text-gray-900">{selectedCase.duration}</div>
                    <div className="text-sm text-gray-600">Duration</div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 text-center border border-blue-100"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaUsers className="text-2xl text-blue-500 mx-auto mb-3" />
                    <div className="md:text-2xl text-[22px] font-bold text-gray-900">{selectedCase.team}</div>
                    <div className="text-sm text-gray-600">Team Size</div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center border border-green-100"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaDollarSign className="text-2xl text-green-500 mx-auto mb-3" />
                    <div className="md:text-2xl text-[22px] font-bold text-gray-900">{selectedCase.budget}</div>
                    <div className="text-sm text-gray-600">Budget</div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 text-center border border-yellow-100"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaStar className="text-2xl text-yellow-500 mx-auto mb-3" />
                    <div className="md:text-2xl text-[22px] font-bold text-gray-900">{selectedCase.rating}</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </motion.div>
                </div>

                {/* Client Testimonial */}
        

                {/* Detailed Description */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">{selectedCase.detailedDescription}</p>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {/* Challenge Details */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      Challenges Faced
                    </h3>
                    <div className="space-y-3">
                      {selectedCase.challenges.map((challenge, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Solution Details */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      Our Solution
                    </h3>
                    <div className="p-4 bg-green-50 rounded-lg mb-4">
                      <p className="text-gray-700">{selectedCase.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    Key Features Implemented
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedCase.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <FaCheckCircle className="text-blue-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Stack */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedCase.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Quantitative Results */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      Measurable Results
                    </h3>
                    <div className="space-y-3">
                      {selectedCase.results.map((result, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                          <FaCheckCircle className="text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Business Outcomes */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      Business Impact
                    </h3>
                    <div className="space-y-3">
                      {selectedCase.outcomes.map((outcome, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                          <FaTrophy className="text-orange-500 flex-shrink-0" />
                          <span className="text-gray-700">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Enhanced Modal CTA */}
                {/* <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Start Your Project?</h3>
                    <p className="text-gray-600">Let&apos;s create something amazing together like we did for {selectedCase.client}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <motion.button
                      className={`px-6 py-4 bg-gradient-to-r ${selectedCase.gradient} text-white rounded-2xl font-semibold shadow-xl`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={closeModal}
                    >
                      <FaRocket className="inline mr-2" />
                      Start Similar Project
                    </motion.button>
                    
                    <motion.button
                      className="px-6 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold hover:border-gray-400 hover:bg-gray-50"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(selectedCase.liveSiteUrl, '_blank')}
                    >
                      <FaPlay className="inline mr-2" />
                      View Live Demo
                    </motion.button>
                    
                    <motion.button
                      className="px-6 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold hover:border-gray-400 hover:bg-gray-50"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        // In a real app, this would trigger a download
                        alert('Case study PDF would be downloaded');
                      }}
                    >
                      <FaDownload className="inline mr-2" />
                      Download PDF
                    </motion.button>
                  </div>
 
                </div> */}

                <div className="mt-6 text-center">
                    {/* <p className="text-sm text-gray-500">
                      This project increased {selectedCase.client}&apos;s efficiency by{" "}
                      <span className="font-semibold text-red-600">
                        {selectedCase.results[0].match(/\d+/)?.[0]}%
                      </span>
                    </p> */}
                  </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CaseStudies;
