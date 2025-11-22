import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  FaHospital, FaBoxes, FaPills, FaCheckCircle, FaChevronRight, 
  FaShoppingCart, FaGraduationCap, FaBuilding, FaCar, FaUtensils, FaHome,
  FaPlane, FaGamepad, FaTimes, FaUser, FaPhone, FaEnvelope, FaGlobe,
  FaStar, FaLightbulb, FaCog, FaRocket, FaCloud, FaMobile,
  FaShieldAlt, FaChartLine
} from "react-icons/fa";

const ProductsShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showFormModal, setShowFormModal] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    countryCode: '+1',
    company: '',
    message: ''
  });

  const products = [
    {
      icon: FaHospital,
      title: "Hospital Management System",
      description: "Complete healthcare management solution with patient records, billing, and scheduling",
      features: ["Patient Management", "Appointment Scheduling", "Billing & Insurance", "Pharmacy Integration"],
      detailedFeatures: [
        "Electronic Health Records (EHR)",
        "Patient Registration & Demographics",
        "Appointment Scheduling & Calendar",
        "Billing & Insurance Claims",
        "Pharmacy & Drug Management",
        "Laboratory Information System",
        "Radiology & Imaging",
        "Staff Management & Payroll",
        "Inventory & Supply Chain",
        "Reporting & Analytics"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Socket.io"],
      gradient: "from-red-500 via-pink-500 to-purple-500",
      shadowColor: "shadow-red-500/30",
      hoverShadow: "group-hover:shadow-red-500/50",
      bgGradient: "from-red-500/10 to-pink-500/10"
    },
    {
      icon: FaCloud,
      title: "Cloud Infrastructure Platform",
      description: "Scalable cloud infrastructure management with automated deployment and monitoring",
      features: ["Auto Scaling", "Load Balancing", "Monitoring & Alerts", "Backup & Recovery"],
      detailedFeatures: [
        "Automated Infrastructure Provisioning",
        "Container Orchestration",
        "Multi-cloud Deployment",
        "Real-time Performance Monitoring",
        "Automated Backup & Disaster Recovery",
        "Security & Compliance Management",
        "Cost Optimization & Analytics",
        "CI/CD Pipeline Integration",
        "API Gateway Management",
        "Serverless Function Management"
      ],
      technologies: ["Kubernetes", "Docker", "Terraform", "AWS", "Azure"],
      gradient: "from-pink-500 via-purple-500 to-indigo-500",
      shadowColor: "shadow-pink-500/30",
      hoverShadow: "group-hover:shadow-pink-500/50",
      bgGradient: "from-pink-500/10 to-purple-500/10"
    },
    {
      icon: FaBoxes,
      title: "Inventory Management System",
      description: "Advanced inventory control with real-time tracking, automation, and analytics",
      features: ["Real-time Tracking", "Automated Reordering", "Multi-location Support", "Analytics Dashboard"],
      detailedFeatures: [
        "Real-time Inventory Tracking",
        "Automated Reorder Points",
        "Multi-location Management",
        "Barcode & QR Code Scanning",
        "Supplier Management",
        "Purchase Order Management",
        "Stock Movement History",
        "Low Stock Alerts",
        "Analytics & Reporting",
        "Mobile App Integration"
      ],
      technologies: ["Angular", "Spring Boot", "MySQL", "Docker", "Kubernetes"],
      gradient: "from-purple-500 via-indigo-500 to-blue-500",
      shadowColor: "shadow-purple-500/30",
      hoverShadow: "group-hover:shadow-purple-500/50",
      bgGradient: "from-purple-500/10 to-indigo-500/10"
    },
    {
      icon: FaPills,
      title: "Pharmacy Management System",
      description: "Complete pharmaceutical management with prescription processing and drug interaction checking",
      features: ["Prescription Processing", "Drug Interaction Check", "Inventory Management", "Billing System"],
      detailedFeatures: [
        "Electronic Prescription Processing",
        "Drug Interaction Checking",
        "Medication Dispensing",
        "Insurance Claims Processing",
        "Patient Medication History",
        "Inventory & Expiry Management",
        "Automated Refill Reminders",
        "Clinical Decision Support",
        "Regulatory Compliance",
        "Financial Reporting"
      ],
      technologies: ["React", "Django", "PostgreSQL", "Redis", "AWS"],
      gradient: "from-indigo-500 via-blue-500 to-cyan-500",
      shadowColor: "shadow-indigo-500/30",
      hoverShadow: "group-hover:shadow-indigo-500/50",
      bgGradient: "from-indigo-500/10 to-blue-500/10"
    },
    {
      icon: FaShoppingCart,
      title: "E-Commerce Platform",
      description: "Full-featured online shopping platform with payment gateway and order management",
      features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Order Tracking"],
      detailedFeatures: [
        "Product Catalog Management",
        "Shopping Cart & Wishlist",
        "Multiple Payment Gateways",
        "Order Management System",
        "Customer Account Management",
        "Inventory Synchronization",
        "Shipping & Logistics",
        "Reviews & Ratings",
        "SEO Optimization",
        "Analytics & Reports"
      ],
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "AWS"],
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      shadowColor: "shadow-blue-500/30",
      hoverShadow: "group-hover:shadow-blue-500/50",
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: FaGraduationCap,
      title: "Learning Management System",
      description: "Comprehensive educational platform with course management and student tracking",
      features: ["Course Management", "Student Portal", "Assessment Tools", "Progress Tracking"],
      detailedFeatures: [
        "Course Creation & Management",
        "Student Enrollment System",
        "Interactive Learning Materials",
        "Assignment & Quiz Management",
        "Grade Book & Progress Tracking",
        "Discussion Forums",
        "Video Conferencing Integration",
        "Certificate Generation",
        "Parent/Guardian Portal",
        "Mobile Learning App"
      ],
      technologies: ["React", "Express.js", "MongoDB", "Socket.io", "AWS"],
      gradient: "from-cyan-500 via-teal-500 to-green-500",
      shadowColor: "shadow-cyan-500/30",
      hoverShadow: "group-hover:shadow-cyan-500/50",
      bgGradient: "from-cyan-500/10 to-teal-500/10"
    },
    {
      icon: FaBuilding,
      title: "Property Management System",
      description: "Complete real estate management solution for properties, tenants, and maintenance",
      features: ["Property Listings", "Tenant Management", "Maintenance Tracking", "Financial Reports"],
      detailedFeatures: [
        "Property Portfolio Management",
        "Tenant Screening & Onboarding",
        "Lease Agreement Management",
        "Rent Collection & Tracking",
        "Maintenance Request System",
        "Vendor Management",
        "Financial Reporting",
        "Document Management",
        "Communication Portal",
        "Mobile Inspection App"
      ],
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS", "Twilio"],
      gradient: "from-teal-500 via-green-500 to-emerald-500",
      shadowColor: "shadow-teal-500/30",
      hoverShadow: "group-hover:shadow-teal-500/50",
      bgGradient: "from-teal-500/10 to-green-500/10"
    },
    {
      icon: FaCar,
      title: "Fleet Management System",
      description: "Advanced vehicle tracking and fleet optimization with GPS and maintenance scheduling",
      features: ["GPS Tracking", "Maintenance Scheduling", "Driver Management", "Fuel Monitoring"],
      detailedFeatures: [
        "Real-time GPS Vehicle Tracking",
        "Route Optimization",
        "Driver Behavior Monitoring",
        "Maintenance Scheduling",
        "Fuel Management & Monitoring",
        "Vehicle Inspection Checklists",
        "Accident & Incident Reporting",
        "Driver Performance Analytics",
        "Compliance Management",
        "Mobile Driver App"
      ],
      technologies: ["React Native", "Node.js", "PostgreSQL", "Google Maps API", "AWS"],
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      shadowColor: "shadow-green-500/30",
      hoverShadow: "group-hover:shadow-green-500/50",
      bgGradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      icon: FaUtensils,
      title: "Restaurant Management System",
      description: "Complete restaurant operations management with POS, inventory, and staff scheduling",
      features: ["POS System", "Menu Management", "Table Reservations", "Kitchen Display"],
      detailedFeatures: [
        "Point of Sale (POS) System",
        "Menu & Recipe Management",
        "Table Reservation System",
        "Kitchen Display System",
        "Inventory & Supply Management",
        "Staff Scheduling & Payroll",
        "Customer Loyalty Program",
        "Online Ordering Integration",
        "Financial Reporting",
        "Multi-location Support"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Stripe"],
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      shadowColor: "shadow-emerald-500/30",
      hoverShadow: "group-hover:shadow-emerald-500/50",
      bgGradient: "from-emerald-500/10 to-teal-500/10"
    },
    {
      icon: FaHome,
      title: "Smart Home Automation",
      description: "IoT-based home automation system with device control and energy monitoring",
      features: ["Device Control", "Energy Monitoring", "Security System", "Voice Integration"],
      detailedFeatures: [
        "Smart Device Control Hub",
        "Energy Usage Monitoring",
        "Security & Surveillance System",
        "Climate Control Automation",
        "Lighting Management",
        "Voice Assistant Integration",
        "Mobile App Control",
        "Scheduling & Automation Rules",
        "Remote Access & Monitoring",
        "Energy Optimization Insights"
      ],
      technologies: ["IoT", "Python", "MQTT", "React Native", "AWS IoT"],
      gradient: "from-cyan-500 via-blue-500 to-indigo-500",
      shadowColor: "shadow-cyan-500/30",
      hoverShadow: "group-hover:shadow-cyan-500/50",
      bgGradient: "from-cyan-500/10 to-blue-500/10"
    },
    {
      icon: FaPlane,
      title: "Travel Management System",
      description: "Comprehensive travel booking and management platform with itinerary planning",
      features: ["Flight Booking", "Hotel Reservations", "Itinerary Planning", "Expense Tracking"],
      detailedFeatures: [
        "Flight Search & Booking",
        "Hotel Reservation System",
        "Car Rental Integration",
        "Itinerary Planning & Management",
        "Travel Expense Tracking",
        "Document Management",
        "Travel Policy Compliance",
        "Approval Workflows",
        "Reporting & Analytics",
        "Mobile Travel App"
      ],
      technologies: ["Angular", "Spring Boot", "Oracle", "Microservices", "Docker"],
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      shadowColor: "shadow-blue-500/30",
      hoverShadow: "group-hover:shadow-blue-500/50",
      bgGradient: "from-blue-500/10 to-indigo-500/10"
    },
    {
      icon: FaGamepad,
      title: "Gaming Platform",
      description: "Multi-player gaming platform with tournaments, leaderboards, and social features",
      features: ["Multi-player Games", "Tournament System", "Leaderboards", "Social Features"],
      detailedFeatures: [
        "Multi-player Game Engine",
        "Tournament & Competition System",
        "Real-time Leaderboards",
        "Player Profiles & Statistics",
        "Social Features & Chat",
        "In-game Purchases & Rewards",
        "Anti-cheat System",
        "Game Analytics",
        "Community Forums",
        "Mobile Gaming Support"
      ],
      technologies: ["Unity", "Node.js", "Redis", "WebSocket", "AWS GameLift"],
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      shadowColor: "shadow-indigo-500/30",
      hoverShadow: "group-hover:shadow-indigo-500/50",
      bgGradient: "from-indigo-500/10 to-purple-500/10"
    },
    {
      icon: FaCog,
      title: "Manufacturing ERP",
      description: "Enterprise resource planning system for manufacturing with production and quality control",
      features: ["Production Planning", "Quality Control", "Supply Chain", "Financial Management"],
      detailedFeatures: [
        "Production Planning & Scheduling",
        "Quality Control & Assurance",
        "Supply Chain Management",
        "Inventory & Warehouse Management",
        "Financial Management & Accounting",
        "Human Resources Management",
        "Customer Relationship Management",
        "Business Intelligence & Reporting",
        "Compliance & Regulatory Management",
        "Mobile Workforce Management"
      ],
      technologies: ["SAP", "Oracle", "Java", "Spring Framework", "PostgreSQL"],
      gradient: "from-purple-500 via-pink-500 to-red-500",
      shadowColor: "shadow-purple-500/30",
      hoverShadow: "group-hover:shadow-purple-500/50",
      bgGradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: FaRocket,
      title: "Startup Incubator Platform",
      description: "Complete platform for startup incubation with mentorship, funding, and resource management",
      features: ["Startup Profiles", "Mentorship Matching", "Funding Tracker", "Resource Library"],
      detailedFeatures: [
        "Startup Profile & Pitch Deck Management",
        "Mentor-Startup Matching System",
        "Funding & Investment Tracking",
        "Resource Library & Knowledge Base",
        "Event & Workshop Management",
        "Progress Tracking & Milestones",
        "Networking & Community Features",
        "Application & Selection Process",
        "Performance Analytics",
        "Alumni Network Management"
      ],
      technologies: ["React", "GraphQL", "Node.js", "MongoDB", "AWS"],
      gradient: "from-pink-500 via-red-500 to-orange-500",
      shadowColor: "shadow-pink-500/30",
      hoverShadow: "group-hover:shadow-pink-500/50",
      bgGradient: "from-pink-500/10 to-red-500/10"
    },
    {
      icon: FaLightbulb,
      title: "Innovation Management Platform",
      description: "Platform for managing innovation processes, idea generation, and project development",
      features: ["Idea Management", "Innovation Pipeline", "Collaboration Tools", "Project Tracking"],
      detailedFeatures: [
        "Idea Submission & Evaluation",
        "Innovation Pipeline Management",
        "Collaboration & Team Formation",
        "Project Development Tracking",
        "Innovation Challenges & Contests",
        "Intellectual Property Management",
        "Resource Allocation & Budgeting",
        "Performance Metrics & KPIs",
        "Innovation Portfolio Management",
        "External Partnership Integration"
      ],
      technologies: ["Vue.js", "Django", "PostgreSQL", "Elasticsearch", "Docker"],
      gradient: "from-red-500 via-orange-500 to-yellow-500",
      shadowColor: "shadow-red-500/30",
      hoverShadow: "group-hover:shadow-red-500/50",
      bgGradient: "from-red-500/10 to-orange-500/10"
    },
    {
      icon: FaStar,
      title: "Customer Experience Platform",
      description: "Comprehensive customer experience management with feedback, analytics, and engagement tools",
      features: ["Feedback Management", "Customer Analytics", "Engagement Tools", "Survey Platform"],
      detailedFeatures: [
        "Multi-channel Feedback Collection",
        "Customer Journey Mapping",
        "Real-time Analytics & Insights",
        "Survey & Poll Management",
        "Customer Segmentation",
        "Engagement Campaign Management",
        "Sentiment Analysis & NLP",
        "Customer Support Integration",
        "Performance Dashboards",
        "Predictive Customer Analytics"
      ],
      technologies: ["React", "Python", "TensorFlow", "Elasticsearch", "Kafka"],
      gradient: "from-orange-500 via-yellow-500 to-green-500",
      shadowColor: "shadow-orange-500/30",
      hoverShadow: "group-hover:shadow-orange-500/50",
      bgGradient: "from-orange-500/10 to-yellow-500/10"
    }
  ];

  const countryCodes = [
    { code: '+1', country: 'US/CA' },
    { code: '+44', country: 'UK' },
    { code: '+91', country: 'IN' },
    { code: '+86', country: 'CN' },
    { code: '+49', country: 'DE' },
    { code: '+33', country: 'FR' },
    { code: '+81', country: 'JP' },
    { code: '+61', country: 'AU' }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    setShowFormModal(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      country: '',
      countryCode: '+1',
      company: '',
      message: ''
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLoadMore = () => {
    setVisibleProducts(prev => Math.min(prev + 4, products.length));
  };

  return (
    <>
      {/* Enhanced Company Details Section - Dark Theme */}
      <div className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden border-t border-gray-800/50">
        {/* Animated Binary Background */}
        <div className="absolute inset-0 overflow-hidden"></div>
          {/* Binary Number Streams */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute font-mono text-green-400/20 text-xs whitespace-nowrap select-none"
              style={{
                top: `${(i * 8)}%`,
                fontSize: `${0.6 + Math.random() * 0.4}rem`,
                lineHeight: '1.2',
              }}
              animate={{
                x: ['-100vw', '100vw'],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
            >
              {Array.from({ length: 200 }, () => Math.random() > 0.5 ? '1' : '0').join('')}
            </motion.div>
          ))}
          
          {/* Additional Binary Streams with Different Speeds */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`fast-${i}`}
              className="absolute font-mono text-blue-400/15 text-xs whitespace-nowrap select-none"
              style={{
                top: `${10 + (i * 12)}%`,
                fontSize: `${0.5 + Math.random() * 0.3}rem`,
                lineHeight: '1.1',
              }}
              animate={{
                x: ['-100vw', '100vw'],
              }}
              transition={{
                duration: 8 + Math.random() * 6,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 8,
              }}
            >
              {Array.from({ length: 300 }, () => Math.random() > 0.4 ? '1' : '0').join('')}
            </motion.div>
          ))}

          {/* Slow Moving Large Binary */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`slow-${i}`}
              className="absolute font-mono text-purple-400/10 text-sm whitespace-nowrap select-none"
              style={{
                top: `${20 + (i * 20)}%`,
                fontSize: `${0.8 + Math.random() * 0.4}rem`,
                lineHeight: '1.3',
              }}
              animate={{
                x: ['-100vw', '100vw'],
              }}
              transition={{
                duration: 25 + Math.random() * 15,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 10,
              }}
            >
              {Array.from({ length: 150 }, () => Math.random() > 0.6 ? '1' : '0').join('')}
            </motion.div>
          ))}
        </div>

        {/* Matrix-style Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="matrixPattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="30" height="30" fill="none" stroke="#10b981" strokeWidth="0.5"/>
                <circle cx="15" cy="15" r="1" fill="#10b981" opacity="0.3"/>
                <text x="15" y="18" textAnchor="middle" fontSize="8" fill="#10b981" opacity="0.2">1</text>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#matrixPattern)"/>
          </svg>
        </div>

        {/* Floating Digital Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`float-${i}`}
              className="absolute text-green-400/20 font-mono text-lg"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.3, 0.1],
                scale: [0.8, 1.2, 0.8],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8 + Math.random() * 12,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            >
              {Math.random() > 0.5 ? '01' : '10'}
            </motion.div>
          ))}
        </div>

        {/* Glowing Orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full blur-xl"
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              left: `${10 + i * 15}%`,
              top: `${10 + (i % 2) * 70}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
          >
            <div className={`w-full h-full rounded-full ${
              i % 3 === 0 ? 'bg-gradient-to-br from-green-400/20 to-blue-400/20' :
              i % 3 === 1 ? 'bg-gradient-to-br from-blue-400/20 to-purple-400/20' :
              'bg-gradient-to-br from-purple-400/20 to-pink-400/20'
            }`}></div>
          </motion.div>
        ))}

        {/* Cyber Grid Lines */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent"
              style={{
                top: `${12.5 * (i + 1)}%`,
                width: '100%',
              }}
              animate={{
                opacity: [0, 0.5, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-3 gap-8 sm:gap-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Company Overview */}
            <motion.div
              className="bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-green-400/20 p-6 sm:p-8 shadow-2xl hover:shadow-green-400/20 transition-all duration-300 hover:border-green-400/40"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center mb-6">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-green-500/30"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(34, 197, 94, 0.3)',
                      '0 0 40px rgba(34, 197, 94, 0.5)',
                      '0 0 20px rgba(34, 197, 94, 0.3)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FaBuilding className="text-white text-xl" />
                </motion.div>
                <h3 className="text-xl font-bold text-white">About Piweb Tech</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Piweb Tech is a dynamic startup focused on delivering cutting-edge digital solutions. 
                We specialize in creating innovative software products that transform business operations.
              </p>
              <div className="space-y-2">
                <motion.div 
                  className="flex items-center text-sm text-gray-400"
                  whileHover={{ x: 5, color: '#10b981' }}
                  transition={{ duration: 0.2 }}
                >
                  <FaCheckCircle className="text-green-400 mr-2" />
                  <span>Fresh Perspective & Innovation</span>
                </motion.div>
                <motion.div 
                  className="flex items-center text-sm text-gray-400"
                  whileHover={{ x: 5, color: '#10b981' }}
                  transition={{ duration: 0.2 }}
                >
                  <FaCheckCircle className="text-green-400 mr-2" />
                  <span>Modern Technology Stack</span>
                </motion.div>
                <motion.div 
                  className="flex items-center text-sm text-gray-400"
                  whileHover={{ x: 5, color: '#10b981' }}
                  transition={{ duration: 0.2 }}
                >
                  <FaCheckCircle className="text-green-400 mr-2" />
                  <span>Agile Development Approach</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Our Mission */}
            <motion.div
              className="bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-blue-400/20 p-6 sm:p-8 shadow-2xl hover:shadow-blue-400/20 transition-all duration-300 hover:border-blue-400/40"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center mb-6">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-blue-500/30"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(59, 130, 246, 0.3)',
                      '0 0 40px rgba(59, 130, 246, 0.5)',
                      '0 0 20px rgba(59, 130, 246, 0.3)',
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FaRocket className="text-white text-xl" />
                </motion.div>
                <h3 className="text-xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                To empower businesses with innovative digital solutions that drive growth, efficiency, and success. 
                We believe in transforming ideas into powerful software products.
              </p>
              <motion.div 
                className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-4 border border-blue-400/20"
                whileHover={{ borderColor: 'rgba(59, 130, 246, 0.4)' }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm text-gray-300 italic">
                  &ldquo;Innovation is not just what we do, it&apos;s who we are. Every line of code, every design decision, 
                  every feature we build is crafted with passion and precision.&rdquo;
                </p>
              </motion.div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              className="bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-purple-400/20 p-6 sm:p-8 shadow-2xl hover:shadow-purple-400/20 transition-all duration-300 hover:border-purple-400/40"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
             >
              <div className="flex items-center mb-6">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-purple-500/30"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(168, 85, 247, 0.3)',
                      '0 0 40px rgba(168, 85, 247, 0.5)',
                      '0 0 20px rgba(168, 85, 247, 0.3)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FaStar className="text-white text-xl" />
                </motion.div>
                <h3 className="text-xl font-bold text-white">Why Choose Us</h3>
              </div>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-3 mt-0.5"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaLightbulb className="text-white text-sm" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Innovation First</h4>
                    <p className="text-xs text-gray-400">Latest technologies and creative solutions</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3 mt-0.5"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaCog className="text-white text-sm" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Quality Focused</h4>
                    <p className="text-xs text-gray-400">Rigorous testing and quality assurance</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 mt-0.5"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaRocket className="text-white text-sm" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Fast Delivery</h4>
                    <p className="text-xs text-gray-400">Agile development with quick turnaround</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

      <section className="relative py-24 sm:py-32 md:py-40 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Enhanced Moving Background Effects */}
      <div className="absolute inset-0">
        {/* Floating Product Icons */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-6 h-6 sm:w-8 sm:h-8 border border-red-200/40 rounded-xl bg-gradient-to-br from-red-50/60 to-pink-50/60 flex items-center justify-center shadow-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -50, -20],
                x: [0, 20, 0],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 12 + i * 0.8,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            >
              <div className="w-2 h-2 bg-gradient-to-br from-red-400/50 to-pink-400/50 rounded-full shadow-sm"></div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Gradient Orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${150 + i * 20}px`,
              height: `${150 + i * 20}px`,
              left: `${15 + i * 12}%`,
              top: `${5 + i * 12}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.25, 0.1],
              x: [0, 60, 0],
              y: [0, -40, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut",
            }}
          >
            <div className={`w-full h-full rounded-full blur-2xl ${
              i % 4 === 0 ? 'bg-gradient-to-br from-red-400/25 to-pink-400/25' :
              i % 4 === 1 ? 'bg-gradient-to-br from-pink-400/25 to-purple-400/25' :
              i % 4 === 2 ? 'bg-gradient-to-br from-purple-400/25 to-indigo-400/25' :
              'bg-gradient-to-br from-indigo-400/25 to-red-400/25'
            }`}></div>
          </motion.div>
        ))}

        {/* Floating Tech Symbols */}
        <div className="absolute inset-0 overflow-hidden">
          {[FaRocket, FaLightbulb, FaCog, FaStar, FaCloud].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute text-red-300/20 text-2xl sm:text-3xl"
              style={{
                left: `${10 + i * 18}%`,
                top: `${20 + i * 10}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 360],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 20 + i * 2,
                repeat: Infinity,
                delay: i * 3,
                ease: "easeInOut",
              }}
            >
              <Icon />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20 md:mb-24"
        >
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 md:mb-10 px-4 relative"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Our 
            </span>
            <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent ml-4">
              Products
            </span>
            
            {/* Glowing underline accent */}
            <motion.div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-full shadow-lg shadow-red-500/30"
              initial={{ width: 0 }}
              whileInView={{ width: '60%' }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.h2>

          <motion.div
            className="flex justify-center mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500/15 to-pink-500/15 backdrop-blur-md border border-red-200/50 rounded-full px-6 py-3 shadow-xl shadow-red-500/20">
              <FaRocket className="text-red-500 text-lg drop-shadow-lg" />
              <span className="text-red-700 font-bold text-sm sm:text-base">
                INNOVATIVE • SCALABLE • RELIABLE
              </span>
            </div>
          </motion.div>

          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Industry-leading management systems designed to <span className="bg-red-50 px-2 py-1 rounded-lg font-semibold text-red-700">streamline operations</span> and <span className="bg-pink-50 px-2 py-1 rounded-lg font-semibold text-pink-700">boost efficiency</span> across various industries
          </motion.p>
        </motion.div>

        {/* Enhanced Products Grid - 2 Cards Per Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
          {products.slice(0, visibleProducts).map((product, index) => (
              <motion.div
                key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              className="group relative"
            >
              {/* Enhanced Product Card */}
              <div className={`relative bg-white/90 backdrop-blur-md rounded-3xl border border-gray-200/50 hover:border-red-300/70 transition-all duration-700 group-hover:-translate-y-4 group-hover:scale-[1.03] overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-red-500/20 ${product.shadowColor} ${product.hoverShadow}`}>
                
                {/* Animated Background Patterns */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Animated Mesh Pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      backgroundImage: `radial-gradient(circle at 25% 25%, ${product.gradient.includes('red') ? '#ef4444' : product.gradient.includes('blue') ? '#3b82f6' : '#8b5cf6'} 2px, transparent 2px)`,
                      backgroundSize: '20px 20px',
                    }}
                  />
                  
                  {/* Corner Accents */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-500/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-pink-500/10 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Enhanced Icon with Effects */}
                <div className="relative mt-8 mb-6 flex justify-center">
                  <motion.div 
                    className={`relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl`}
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: [0, -3, 3, 0],
                      y: -8 
                    }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                  >
                    {/* Icon Glow Effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${product.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                    
                    <product.icon className="relative z-10 text-2xl sm:text-3xl text-white drop-shadow-2xl" />
                  </motion.div>
                </div>
                
                {/* Enhanced Card Content */}
                <div className="relative p-6 sm:p-8">
                  {/* Product Title with Animated Underline */}
                  <motion.div className="text-center mb-4">
                    <motion.h3 
                      className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300 relative inline-block"
                      whileHover={{ scale: 1.02 }}
                    >
                      {product.title}
                      <motion.div
                        className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                    </motion.h3>
                  </motion.div>
                  
                  {/* Enhanced Description */}
                  <motion.p 
                    className="text-gray-600 text-center leading-relaxed text-sm mb-6 line-clamp-3 group-hover:text-gray-700 transition-colors duration-300"
                    initial={{ opacity: 0.8 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {product.description}
                  </motion.p>
                  
                  {/* Simple Feature Indicator */}
                  <div className="mb-6">
                    <motion.div 
                      className="flex items-center justify-center text-xs text-gray-500 bg-gray-50/50 rounded-lg py-2 px-3"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <FaCheckCircle className="text-red-500 mr-2 text-xs" />
                      <span className="font-medium">Full-Featured Solution</span>
                    </motion.div>
                  </div>
                  
                  {/* Enhanced Action Buttons */}
                  <div className="space-y-3">
                    <motion.button
                      onClick={() => setSelectedProduct(product)}
                      className="w-full flex items-center justify-center text-red-600 font-semibold group-hover:text-red-700 transition-all duration-300 py-3 border-2 border-red-200 rounded-xl hover:bg-red-50 hover:border-red-300 relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="relative z-10 mr-2">View Details</span>
                      <motion.div
                        animate={{ x: [0, 2, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <FaChevronRight className="text-xs" />
                      </motion.div>
                    </motion.button>
                    
                    <motion.button
                      onClick={() => setShowFormModal(true)}
                      className={`w-full px-4 py-3 bg-gradient-to-r ${product.gradient} text-white rounded-xl hover:shadow-xl transition-all duration-300 font-semibold text-sm relative overflow-hidden group/btn`}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10">Request Demo</span>
                    </motion.button>
                  </div>
                </div>
                    </div>
            </motion.div>
          ))}
                  </div>
                  
        {/* Load More Button */}
        {visibleProducts < products.length && (
          <motion.div
            className="flex justify-center mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={handleLoadMore}
              className="group relative px-8 py-4 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Load More Products
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaChevronRight />
                </motion.div>
              </span>
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Product Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative p-8">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <FaTimes className="text-gray-600" />
                </button>

                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${selectedProduct.gradient} rounded-2xl flex items-center justify-center mr-4`}>
                    <selectedProduct.icon className="text-2xl text-white" />
                        </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800">{selectedProduct.title}</h2>
                    <p className="text-gray-600 mt-1">{selectedProduct.description}</p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Detailed Features</h3>
                    <div className="grid md:grid-cols-2 gap-3 mb-8">
                      {selectedProduct.detailedFeatures.map((feature, index) => (
                        <motion.div 
                          key={index} 
                          className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors duration-200"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <FaCheckCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Key Benefits</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="p-4 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl border border-red-100">
                        <FaRocket className="text-red-500 text-2xl mb-2" />
                        <h4 className="font-semibold text-gray-800 mb-1">Performance</h4>
                        <p className="text-gray-600 text-sm">High-performance architecture with optimized workflows</p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl border border-pink-100">
                        <FaShieldAlt className="text-pink-500 text-2xl mb-2" />
                        <h4 className="font-semibold text-gray-800 mb-1">Security</h4>
                        <p className="text-gray-600 text-sm">Enterprise-grade security with data encryption</p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border border-purple-100">
                        <FaChartLine className="text-purple-500 text-2xl mb-2" />
                        <h4 className="font-semibold text-gray-800 mb-1">Analytics</h4>
                        <p className="text-gray-600 text-sm">Advanced analytics and reporting capabilities</p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border border-indigo-100">
                        <FaMobile className="text-indigo-500 text-2xl mb-2" />
                        <h4 className="font-semibold text-gray-800 mb-1">Mobile Ready</h4>
                        <p className="text-gray-600 text-sm">Responsive design with mobile applications</p>
                      </div>
                    </div>
                        </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProduct.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          className="px-3 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-medium hover:from-red-100 hover:to-pink-100 hover:text-red-700 transition-all duration-200 cursor-default"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 mb-6">
                      <h4 className="font-bold text-gray-800 mb-3">Implementation Timeline</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Planning & Design</span>
                          <span className="text-sm font-medium text-gray-800">2-3 weeks</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Development</span>
                          <span className="text-sm font-medium text-gray-800">6-8 weeks</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Testing & Deployment</span>
                          <span className="text-sm font-medium text-gray-800">2-3 weeks</span>
                        </div>
                        <div className="border-t pt-2 mt-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-semibold text-gray-800">Total Timeline</span>
                            <span className="text-sm font-bold text-red-600">10-14 weeks</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <button
                        onClick={() => {
                          setSelectedProduct(null);
                          setShowFormModal(true);
                        }}
                        className={`w-full px-6 py-3 bg-gradient-to-r ${selectedProduct.gradient} text-white rounded-xl hover:shadow-lg transition-all duration-300 font-medium flex items-center justify-center gap-2`}
                      >
                        <FaRocket />
                        Request Demo
                      </button>
                      <button
                        onClick={() => setSelectedProduct(null)}
                        className="w-full px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-300 font-medium"
                      >
                        Close
                      </button>
                    </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              </motion.div>
        )}
      </AnimatePresence>

      {/* Form Modal */}
      <AnimatePresence>
        {showFormModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowFormModal(false)}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative p-8">
                <button
                  onClick={() => setShowFormModal(false)}
                  className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <FaTimes className="text-gray-600" />
                </button>

                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">Request Demo</h2>
                  <p className="text-gray-600">Fill out the form below and we&apos;ll get back to you within 24 hours</p>
        </div>

                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FaUser className="inline mr-2" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        placeholder="Enter your full name"
                      />
      </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FaEnvelope className="inline mr-2" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FaPhone className="inline mr-2" />
                        Phone Number *
                      </label>
                      <div className="flex">
                        <select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleInputChange}
                          className="px-3 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-50"
                        >
                          {countryCodes.map((country) => (
                            <option key={country.code} value={country.code}>
                              {country.code} ({country.country})
                            </option>
                          ))}
                        </select>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="flex-1 px-4 py-3 border border-l-0 border-gray-300 rounded-r-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                          placeholder="Phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FaGlobe className="inline mr-2" />
                        Country *
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        placeholder="Enter your country"
                      />
        </div>
      </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaBuilding className="inline mr-2" />
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 font-medium"
                    >
                      Send Request
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowFormModal(false)}
                      className="px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-300 font-medium"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
    </>
  );
};

export default ProductsShowcase;
