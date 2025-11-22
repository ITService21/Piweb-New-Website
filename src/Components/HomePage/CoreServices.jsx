import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaCode, FaCloud, FaShieldAlt, FaRocket, FaLaptopCode, FaServer, FaMobileAlt, FaBrain, FaChevronRight, FaStar, FaLightbulb, FaCog } from "react-icons/fa";
import ServiceModal from "../ServiceModal";
import { useModal } from "../../Context/ModalContext";

const CoreServices = () => {
  const { openModal } = useModal();
  const [mobileVisibleCount, setMobileVisibleCount] = useState(4);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const services = [
    {
      icon: FaCode,
      title: "Custom Software Development",
      description: "Tailored solutions built with modern technologies to accelerate your business growth",
      gradient: "from-red-500 via-pink-500 to-purple-500",
      shadowColor: "shadow-red-500/30",
      hoverShadow: "group-hover:shadow-red-500/50",
      bgGradient: "from-red-500/10 to-pink-500/10",
      borderGradient: "from-red-500/50 to-pink-500/50",
      highlight: "Development"
    },
    {
      icon: FaServer,
      title: "Enterprise Management Systems",
      description: "Comprehensive business management solutions for seamless operations",
      gradient: "from-pink-500 via-purple-500 to-indigo-500",
      shadowColor: "shadow-pink-500/30",
      hoverShadow: "group-hover:shadow-pink-500/50",
      bgGradient: "from-pink-500/10 to-purple-500/10",
      borderGradient: "from-pink-500/50 to-purple-500/50",
      highlight: "Enterprise"
    },
    {
      icon: FaMobileAlt,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile solutions for iOS and Android",
      gradient: "from-teal-500 via-green-500 to-emerald-500",
      shadowColor: "shadow-teal-500/30",
      hoverShadow: "group-hover:shadow-teal-500/50",
      bgGradient: "from-teal-500/10 to-green-500/10",
      borderGradient: "from-teal-500/50 to-green-500/50",
      highlight: "Mobile"
    },
    {
      icon: FaBrain,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by AI/ML to drive innovation and efficiency",
      gradient: "from-green-500 via-emerald-500 to-red-500",
      shadowColor: "shadow-green-500/30",
      hoverShadow: "group-hover:shadow-green-500/50",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      borderGradient: "from-green-500/50 to-emerald-500/50",
      highlight: "AI/ML"
    },
    {
      icon: FaCloud,
      title: "Cloud Solutions & Migration",
      description: "Seamless cloud infrastructure and migration with enterprise-grade security",
      gradient: "from-purple-500 via-indigo-500 to-blue-500",
      shadowColor: "shadow-purple-500/30",
      hoverShadow: "group-hover:shadow-purple-500/50",
      bgGradient: "from-purple-500/10 to-indigo-500/10",
      borderGradient: "from-purple-500/50 to-indigo-500/50",
      highlight: "Cloud"
    },
    {
      icon: FaShieldAlt,
      title: "Cybersecurity Services",
      description: "Advanced security solutions and compliance to protect your digital assets",
      gradient: "from-indigo-500 via-blue-500 to-cyan-500",
      shadowColor: "shadow-indigo-500/30",
      hoverShadow: "group-hover:shadow-indigo-500/50",
      bgGradient: "from-indigo-500/10 to-blue-500/10",
      borderGradient: "from-indigo-500/50 to-blue-500/50",
      highlight: "Security"
    },
    {
      icon: FaRocket,
      title: "Digital Transformation",
      description: "Complete digital transformation consulting to modernize your business",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      shadowColor: "shadow-blue-500/30",
      hoverShadow: "group-hover:shadow-blue-500/50",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      borderGradient: "from-blue-500/50 to-cyan-500/50",
      highlight: "Transform"
    },
    {
      icon: FaServer,
      title: "Database Management",
      description: "Robust database solutions with optimization and backup strategies",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      shadowColor: "shadow-emerald-500/30",
      hoverShadow: "group-hover:shadow-emerald-500/50",
      bgGradient: "from-emerald-500/10 to-teal-500/10",
      borderGradient: "from-emerald-500/50 to-teal-500/50",
      highlight: "Database"
    },
    {
      icon: FaCode,
      title: "API Development",
      description: "RESTful and GraphQL APIs with comprehensive documentation and testing",
      gradient: "from-cyan-500 via-blue-500 to-indigo-500",
      shadowColor: "shadow-cyan-500/30",
      hoverShadow: "group-hover:shadow-cyan-500/50",
      bgGradient: "from-cyan-500/10 to-blue-500/10",
      borderGradient: "from-cyan-500/50 to-blue-500/50",
      highlight: "API"
    },
    {
      icon: FaCog,
      title: "DevOps & Automation",
      description: "CI/CD pipelines, infrastructure automation, and deployment strategies",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      shadowColor: "shadow-indigo-500/30",
      hoverShadow: "group-hover:shadow-indigo-500/50",
      bgGradient: "from-indigo-500/10 to-purple-500/10",
      borderGradient: "from-indigo-500/50 to-purple-500/50",
      highlight: "DevOps"
    },
    {
      icon: FaLightbulb,
      title: "Digital Consulting",
      description: "Strategic technology consulting to optimize your digital transformation journey",
      gradient: "from-pink-500 via-red-500 to-orange-500",
      shadowColor: "shadow-pink-500/30",
      hoverShadow: "group-hover:shadow-pink-500/50",
      bgGradient: "from-pink-500/10 to-red-500/10",
      borderGradient: "from-pink-500/50 to-red-500/50",
      highlight: "Consulting"
    },
    {
      icon: FaLaptopCode,
      title: "IT Support & Maintenance",
      description: "24/7 technical support and maintenance for uninterrupted operations",
      gradient: "from-cyan-500 via-teal-500 to-green-500",
      shadowColor: "shadow-cyan-500/30",
      hoverShadow: "group-hover:shadow-cyan-500/50",
      bgGradient: "from-cyan-500/10 to-teal-500/10",
      borderGradient: "from-cyan-500/50 to-teal-500/50",
      highlight: "Support"
    },
  ];

  // Service details for modal - Matching exact card content
  const getServiceDetails = (service) => {
    const serviceDetailsMap = {
      "Custom Software Development": {
        name: "Custom Software Development",
        description: "Tailored solutions built with modern technologies to accelerate your business growth",
        icon: "💻",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200",
        processingTime: "4-12 weeks",
        eligibility: [
          "Clear business requirements and objectives",
          "Defined project scope and timeline",
          "Budget allocation for development",
          "Stakeholder availability for feedback",
          "Technical infrastructure readiness",
          "Compliance and security requirements"
        ],
        documents: [
          "Business requirements document",
          "Technical specifications",
          "Design mockups and wireframes",
          "Brand guidelines",
          "API documentation (if applicable)",
          "Security and compliance requirements",
          "Hosting and infrastructure details",
          "Timeline and milestone expectations"
        ],
        benefits: [
          "100% customized to your business needs",
          "Scalable architecture for future growth",
          "Modern tech stack (React, Node.js, Python, etc.)",
          "Agile development methodology",
          "Ongoing support and maintenance",
          "Performance optimization"
        ],
        process: [
          {
            title: "Requirements Analysis",
            description: "Deep dive into your business needs, goals, and technical requirements"
          },
          {
            title: "Design & Architecture",
            description: "Create system architecture, database design, and UI/UX mockups"
          },
          {
            title: "Development & Testing",
            description: "Agile development with regular sprints, code reviews, and testing"
          },
          {
            title: "Deployment & Launch",
            description: "Deploy to production environment with monitoring and optimization"
          },
          {
            title: "Support & Maintenance",
            description: "Ongoing support, updates, and feature enhancements"
          }
        ],
        links: [
          {
            title: "Our Portfolio",
            url: "/portfolio",
            description: "View our custom software development projects"
          },
          {
            title: "Technology Stack",
            url: "/technologies",
            description: "Technologies we use for development"
          }
        ]
      },
      "Enterprise Management Systems": {
        name: "Enterprise Management Systems",
        description: "Comprehensive business management solutions for seamless operations",
        icon: "🏢",
        image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
        processingTime: "8-16 weeks",
        eligibility: [
          "Business with multiple departments",
          "Need for integrated systems",
          "Data management requirements",
          "Process automation needs",
          "Multi-user access requirements",
          "Reporting and analytics needs"
        ],
        documents: [
          "Current system documentation",
          "Business process workflows",
          "Department requirements",
          "Data migration requirements",
          "Integration requirements",
          "User access and permissions",
          "Reporting requirements",
          "Compliance requirements"
        ],
        benefits: [
          "Unified business operations",
          "Real-time data and analytics",
          "Automated workflows",
          "Improved decision-making",
          "Reduced operational costs",
          "Enhanced productivity"
        ],
        process: [
          {
            title: "Business Analysis",
            description: "Analyze current processes and identify improvement opportunities"
          },
          {
            title: "System Design",
            description: "Design integrated system architecture and modules"
          },
          {
            title: "Development & Integration",
            description: "Build and integrate all system modules"
          },
          {
            title: "Testing & Training",
            description: "Comprehensive testing and user training programs"
          },
          {
            title: "Deployment & Support",
            description: "Deploy system and provide ongoing support"
          }
        ],
        links: [
          {
            title: "ERP Solutions",
            url: "/services/enterprise-systems",
            description: "Learn more about our ERP solutions"
          }
        ]
      },
      "Mobile App Development": {
        name: "Mobile App Development",
        description: "Native and cross-platform mobile solutions for iOS and Android",
        icon: "📱",
        image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1200",
        processingTime: "6-14 weeks",
        eligibility: [
          "Clear app concept and objectives",
          "Target audience definition",
          "Platform requirements (iOS/Android/Both)",
          "Design and branding guidelines",
          "Feature requirements",
          "App store compliance"
        ],
        documents: [
          "App concept and wireframes",
          "Design mockups",
          "Feature specifications",
          "Brand assets",
          "App store requirements",
          "Backend API requirements",
          "Third-party integrations",
          "Testing requirements"
        ],
        benefits: [
          "Native and cross-platform options",
          "App Store optimization",
          "Push notifications",
          "Offline functionality",
          "Secure authentication",
          "Analytics integration"
        ],
        process: [
          {
            title: "Concept & Design",
            description: "Define app concept, create wireframes and design mockups"
          },
          {
            title: "Development",
            description: "Build app using native or cross-platform frameworks"
          },
          {
            title: "Testing & QA",
            description: "Comprehensive testing on multiple devices and OS versions"
          },
          {
            title: "App Store Submission",
            description: "Prepare and submit to Apple App Store and Google Play"
          },
          {
            title: "Launch & Updates",
            description: "Launch app and provide regular updates and maintenance"
          }
        ],
        links: [
          {
            title: "Mobile Portfolio",
            url: "/portfolio/mobile",
            description: "View our mobile app projects"
          }
        ]
      },
      "AI & Machine Learning": {
        name: "AI & Machine Learning",
        description: "Intelligent solutions powered by AI/ML to drive innovation and efficiency",
        icon: "🤖",
        image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
        processingTime: "8-20 weeks",
        eligibility: [
          "Data availability and quality",
          "Clear use case definition",
          "Technical infrastructure",
          "Data science team collaboration",
          "Budget for AI/ML development",
          "Compliance with data regulations"
        ],
        documents: [
          "Use case documentation",
          "Data sources and availability",
          "Expected outcomes and KPIs",
          "Infrastructure requirements",
          "Model requirements",
          "Integration requirements",
          "Data privacy compliance",
          "Testing and validation criteria"
        ],
        benefits: [
          "Predictive analytics",
          "Automated decision-making",
          "Process optimization",
          "Cost reduction",
          "Enhanced customer experience",
          "Competitive advantage"
        ],
        process: [
          {
            title: "Data Analysis",
            description: "Analyze available data and identify patterns"
          },
          {
            title: "Model Development",
            description: "Develop and train machine learning models"
          },
          {
            title: "Integration",
            description: "Integrate AI/ML models into existing systems"
          },
          {
            title: "Testing & Validation",
            description: "Test models and validate accuracy and performance"
          },
          {
            title: "Deployment & Monitoring",
            description: "Deploy models and set up monitoring systems"
          }
        ],
        links: [
          {
            title: "AI Solutions",
            url: "/services/ai-ml",
            description: "Explore our AI & ML services"
          }
        ]
      },
      "Cloud Solutions & Migration": {
        name: "Cloud Solutions & Migration",
        description: "Seamless cloud infrastructure and migration with enterprise-grade security",
        icon: "☁️",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200",
        processingTime: "4-12 weeks",
        eligibility: [
          "Existing infrastructure or new setup",
          "Cloud platform preference",
          "Security and compliance requirements",
          "Scalability needs",
          "Budget for cloud services",
          "Technical team availability"
        ],
        documents: [
          "Current infrastructure details",
          "Application inventory",
          "Data migration requirements",
          "Security requirements",
          "Compliance requirements",
          "Performance requirements",
          "Disaster recovery needs",
          "Budget allocation"
        ],
        benefits: [
          "Scalable infrastructure",
          "Cost optimization",
          "High availability",
          "Enhanced security",
          "Disaster recovery",
          "Global accessibility"
        ],
        process: [
          {
            title: "Assessment & Planning",
            description: "Assess current infrastructure and plan migration strategy"
          },
          {
            title: "Architecture Design",
            description: "Design cloud architecture and infrastructure"
          },
          {
            title: "Migration Execution",
            description: "Execute migration with minimal downtime"
          },
          {
            title: "Optimization",
            description: "Optimize performance and costs"
          },
          {
            title: "Monitoring & Support",
            description: "Set up monitoring and provide ongoing support"
          }
        ],
        links: [
          {
            title: "Cloud Services",
            url: "/services/cloud-solutions",
            description: "Learn about our cloud solutions"
          }
        ]
      },
      "Cybersecurity Services": {
        name: "Cybersecurity Services",
        description: "Advanced security solutions and compliance to protect your digital assets",
        icon: "🛡️",
        image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200",
        processingTime: "2-8 weeks",
        eligibility: [
          "Existing IT infrastructure",
          "Security concerns or requirements",
          "Compliance needs",
          "Data protection requirements",
          "Network infrastructure",
          "Security budget allocation"
        ],
        documents: [
          "Current security assessment",
          "Infrastructure details",
          "Compliance requirements",
          "Security policies",
          "Incident history",
          "Access control requirements",
          "Data classification",
          "Risk assessment"
        ],
        benefits: [
          "Threat detection and prevention",
          "Data encryption",
          "Access control",
          "Compliance assurance",
          "Security monitoring",
          "Incident response"
        ],
        process: [
          {
            title: "Security Assessment",
            description: "Comprehensive security audit and vulnerability assessment"
          },
          {
            title: "Strategy Development",
            description: "Develop security strategy and implementation plan"
          },
          {
            title: "Implementation",
            description: "Implement security measures and tools"
          },
          {
            title: "Testing & Validation",
            description: "Test security measures and validate effectiveness"
          },
          {
            title: "Monitoring & Maintenance",
            description: "Set up continuous monitoring and maintenance"
          }
        ],
        links: [
          {
            title: "Cybersecurity",
            url: "/services/cybersecurity",
            description: "Explore our cybersecurity services"
          }
        ]
      },
      "Digital Transformation": {
        name: "Digital Transformation",
        description: "Complete digital transformation consulting to modernize your business",
        icon: "🚀",
        image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
        processingTime: "12-24 weeks",
        eligibility: [
          "Business ready for digitalization",
          "Leadership commitment",
          "Change management readiness",
          "Budget for transformation",
          "Clear business objectives",
          "Stakeholder alignment"
        ],
        documents: [
          "Current business processes",
          "Digital maturity assessment",
          "Business objectives",
          "Technology requirements",
          "Change management plan",
          "Budget and timeline",
          "Success metrics",
          "Risk assessment"
        ],
        benefits: [
          "Improved efficiency",
          "Enhanced customer experience",
          "Data-driven decisions",
          "Competitive advantage",
          "Innovation capability",
          "Business growth"
        ],
        process: [
          {
            title: "Assessment & Strategy",
            description: "Assess current state and develop transformation strategy"
          },
          {
            title: "Planning & Roadmap",
            description: "Create detailed transformation roadmap and plan"
          },
          {
            title: "Implementation",
            description: "Execute transformation initiatives"
          },
          {
            title: "Change Management",
            description: "Manage organizational change and adoption"
          },
          {
            title: "Optimization & Growth",
            description: "Optimize processes and drive continuous improvement"
          }
        ],
        links: [
          {
            title: "Digital Transformation",
            url: "/services/digital-transformation",
            description: "Learn about our transformation services"
          }
        ]
      },
      "Database Management": {
        name: "Database Management",
        description: "Robust database solutions with optimization and backup strategies",
        icon: "🗄️",
        image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
        processingTime: "2-6 weeks",
        eligibility: [
          "Existing database or new setup",
          "Data volume and growth expectations",
          "Performance requirements",
          "Backup and recovery needs",
          "Security requirements",
          "Compliance needs"
        ],
        documents: [
          "Current database details",
          "Data volume and structure",
          "Performance requirements",
          "Backup requirements",
          "Security requirements",
          "Compliance requirements",
          "Integration needs",
          "Scalability expectations"
        ],
        benefits: [
          "Optimized performance",
          "Automated backups",
          "Data security",
          "Scalability",
          "Disaster recovery",
          "24/7 monitoring"
        ],
        process: [
          {
            title: "Database Assessment",
            description: "Assess current database and identify optimization opportunities"
          },
          {
            title: "Design & Planning",
            description: "Design database architecture and optimization plan"
          },
          {
            title: "Implementation",
            description: "Implement database solutions and optimizations"
          },
          {
            title: "Testing & Tuning",
            description: "Test performance and fine-tune configurations"
          },
          {
            title: "Monitoring & Maintenance",
            description: "Set up monitoring and provide ongoing maintenance"
          }
        ],
        links: []
      },
      "API Development": {
        name: "API Development",
        description: "RESTful and GraphQL APIs with comprehensive documentation and testing",
        icon: "🔌",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200",
        processingTime: "3-8 weeks",
        eligibility: [
          "System integration needs",
          "Third-party integrations",
          "Mobile app backend",
          "Microservices architecture",
          "API security requirements",
          "Documentation needs"
        ],
        documents: [
          "API requirements",
          "Integration specifications",
          "Authentication requirements",
          "Data format specifications",
          "Rate limiting requirements",
          "Documentation requirements",
          "Testing requirements",
          "Security requirements"
        ],
        benefits: [
          "RESTful and GraphQL APIs",
          "Comprehensive documentation",
          "API security",
          "Rate limiting",
          "Versioning support",
          "Testing and monitoring"
        ],
        process: [
          {
            title: "Requirements Analysis",
            description: "Analyze API requirements and specifications"
          },
          {
            title: "Design & Architecture",
            description: "Design API architecture and endpoints"
          },
          {
            title: "Development",
            description: "Develop APIs with security and documentation"
          },
          {
            title: "Testing",
            description: "Comprehensive API testing and validation"
          },
          {
            title: "Deployment & Documentation",
            description: "Deploy APIs and provide comprehensive documentation"
          }
        ],
        links: []
      },
      "DevOps & Automation": {
        name: "DevOps & Automation",
        description: "CI/CD pipelines, infrastructure automation, and deployment strategies",
        icon: "⚙️",
        image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
        processingTime: "4-10 weeks",
        eligibility: [
          "Development team",
          "Deployment requirements",
          "Infrastructure needs",
          "Automation goals",
          "Monitoring requirements",
          "Scalability needs"
        ],
        documents: [
          "Current deployment process",
          "Infrastructure details",
          "CI/CD requirements",
          "Automation goals",
          "Monitoring requirements",
          "Security requirements",
          "Scalability needs",
          "Tool preferences"
        ],
        benefits: [
          "Automated deployments",
          "Faster release cycles",
          "Infrastructure as code",
          "Continuous monitoring",
          "Improved reliability",
          "Cost optimization"
        ],
        process: [
          {
            title: "Assessment & Planning",
            description: "Assess current processes and plan automation strategy"
          },
          {
            title: "Pipeline Setup",
            description: "Set up CI/CD pipelines and automation"
          },
          {
            title: "Infrastructure Automation",
            description: "Automate infrastructure provisioning and management"
          },
          {
            title: "Testing & Validation",
            description: "Test automation and validate effectiveness"
          },
          {
            title: "Monitoring & Optimization",
            description: "Set up monitoring and optimize processes"
          }
        ],
        links: []
      },
      "Digital Consulting": {
        name: "Digital Consulting",
        description: "Strategic technology consulting to optimize your digital transformation journey",
        icon: "💡",
        image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
        processingTime: "2-8 weeks",
        eligibility: [
          "Business seeking digital strategy",
          "Technology decisions needed",
          "Digital transformation planning",
          "Process optimization needs",
          "Technology assessment required",
          "Strategic guidance needed"
        ],
        documents: [
          "Business objectives",
          "Current technology stack",
          "Business processes",
          "Challenges and pain points",
          "Budget and timeline",
          "Success criteria",
          "Stakeholder requirements",
          "Industry requirements"
        ],
        benefits: [
          "Strategic guidance",
          "Technology recommendations",
          "Cost optimization",
          "Risk mitigation",
          "Best practices",
          "Roadmap development"
        ],
        process: [
          {
            title: "Discovery & Analysis",
            description: "Understand business needs and current state"
          },
          {
            title: "Strategy Development",
            description: "Develop digital strategy and recommendations"
          },
          {
            title: "Roadmap Creation",
            description: "Create implementation roadmap and plan"
          },
          {
            title: "Presentation & Review",
            description: "Present strategy and gather feedback"
          },
          {
            title: "Implementation Support",
            description: "Provide ongoing support during implementation"
          }
        ],
        links: []
      },
      "IT Support & Maintenance": {
        name: "IT Support & Maintenance",
        description: "24/7 technical support and maintenance for uninterrupted operations",
        icon: "🛠️",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200",
        processingTime: "Ongoing",
        eligibility: [
          "IT infrastructure in place",
          "Support requirements",
          "Maintenance needs",
          "Response time requirements",
          "Budget for support",
          "Service level expectations"
        ],
        documents: [
          "Infrastructure details",
          "Support requirements",
          "Service level expectations",
          "Response time requirements",
          "Maintenance schedule",
          "Access requirements",
          "Escalation procedures",
          "Reporting requirements"
        ],
        benefits: [
          "24/7 support availability",
          "Proactive monitoring",
          "Fast response times",
          "Preventive maintenance",
          "Expert technical team",
          "Cost-effective support"
        ],
        process: [
          {
            title: "Assessment & Onboarding",
            description: "Assess infrastructure and onboard to support system"
          },
          {
            title: "Monitoring Setup",
            description: "Set up monitoring and alerting systems"
          },
          {
            title: "Support Activation",
            description: "Activate 24/7 support services"
          },
          {
            title: "Maintenance Schedule",
            description: "Establish preventive maintenance schedule"
          },
          {
            title: "Ongoing Support",
            description: "Provide continuous support and optimization"
          }
        ],
        links: [
          {
            title: "IT Support",
            url: "/services/it-support",
            description: "Learn about our IT support services"
          }
        ]
      }
    };

    return serviceDetailsMap[service.title] || null;
  };

  const handleServiceClick = (service) => {
    const serviceDetails = getServiceDetails(service);
    if (serviceDetails) {
      setSelectedService(serviceDetails);
      setIsModalOpen(true);
    }
  };

  const handleLoadMore = () => {
    setMobileVisibleCount(prev => Math.min(prev + 4, services.length));
  };

  // Use useEffect to handle responsive visibility
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const visibleServices = isMobile ? services.slice(0, mobileVisibleCount) : services;
  const hasMoreServices = isMobile && mobileVisibleCount < services.length;

  return (
    <section className="relative py-24 sm:py-32 md:py-40 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Unique Creative Background Effects */}
      <div className="absolute inset-0">
        {/* Hexagonal Service Grid Pattern */}
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="services-hexagon" x="0" y="0" width="15" height="13" patternUnits="userSpaceOnUse">
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
            <rect width="100%" height="100%" fill="url(#services-hexagon)" />
          </svg>
        </div>

        {/* Spiral Energy Waves */}
        <div className="absolute inset-0 overflow-hidden">
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
        <div className="absolute inset-0 overflow-hidden">
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
        <div className="absolute inset-0 overflow-hidden">
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
        <div className="absolute inset-0 overflow-hidden">
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
        <div className="absolute inset-0 overflow-hidden">
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
        <div className="absolute inset-0 overflow-hidden">
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
        <div className="absolute inset-0 overflow-hidden">
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
        {/* Enhanced Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20 md:mb-24"
        >
          <motion.div
            className="block mb-8 sm:mb-10 md:mb-12"
            animate={{
              scale: 1.02,
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 px-4 relative"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent">
                Our 
              </span>
              <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent ml-4">
                Core Services
              </span>
              
              {/* Glowing underline accent */}
              <motion.div 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-full shadow-lg shadow-red-500/50"
                initial={{ width: 0 }}
                whileInView={{ width: '80%' }}
                transition={{ duration: 1, delay: 0.8 }}
                viewport={{ once: true }}
              />
              
              {/* Sci-fi glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-400/20 via-pink-400/20 to-purple-400/20 blur-lg"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: [0, 0.8, 0.4, 0.8, 0],
                  scale: [0.5, 1.2, 1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4,
                  delay: 1,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              />
            </motion.h2>
          </motion.div>

          {/* Enhanced Dark Badge */}
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-md border border-red-400/30 rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 mb-8 sm:mb-10 md:mb-12 shadow-xl shadow-red-500/30 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Animated background shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/20 to-transparent transform -skew-x-12 translate-x-[-100%] opacity-0 group-hover:translate-x-[300%] group-hover:opacity-100 transition-all duration-1000"></div>
            
            {/* Pulsing border effect */}
            <motion.div
              className="absolute inset-0 border border-red-400/50 rounded-full"
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              animate={{ 
                rotate: 10,
                scale: 1.1
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <FaCog className="text-red-400 text-lg sm:text-xl drop-shadow-lg" />
            </motion.div>
            <span className="text-red-300 font-bold text-sm sm:text-base md:text-lg text-center relative z-10">
              <span className="hidden sm:inline">ENTERPRISE • SCALABLE • SECURE</span>
              <span className="sm:hidden">ENTERPRISE SOLUTIONS</span>
            </span>
          </motion.div>

          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-pink-100 max-w-4xl mx-auto leading-relaxed px-4 mt-6 sm:mt-8 md:mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Comprehensive IT solutions designed to <span className="bg-red-500/20 px-2 py-1 rounded-lg font-semibold text-red-300 border border-red-400/30">accelerate</span> your business growth and <span className="bg-pink-500/20 px-2 py-1 rounded-lg font-semibold text-pink-300 border border-pink-400/30">digital transformation</span> with cutting-edge technology
          </motion.p>
        </motion.div>

        {/* Enhanced Services Grid - 3 Cards Per Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 lg:gap-20 justify-items-center">
          {visibleServices.map((service, index) => (
              <motion.div
                key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              className="group relative"
            >
              {/* Service Badge */}
              <div className="flex justify-center mb-4">
                <motion.div 
                  className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-center py-2 px-4 rounded-full shadow-lg border border-red-400/30"
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    boxShadow: [
                      "0 4px 6px rgba(239, 68, 68, 0.3)",
                      "0 8px 25px rgba(239, 68, 68, 0.5)",
                      "0 4px 6px rgba(239, 68, 68, 0.3)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-xs font-bold tracking-wide uppercase">
                    {service.highlight}
                  </span>
                </motion.div>
                  </div>

              {/* Enhanced Dark Service Card */}
              <div className={`relative bg-gradient-to-br from-gray-800/90 to-black/90 backdrop-blur-sm rounded-3xl border-2 border-red-500/20 hover:border-red-400/50 transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-[1.03] overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-red-500/25 h-full flex flex-col p-6 sm:p-8 ${service.shadowColor} ${service.hoverShadow}`}>
                
                {/* Glowing corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-red-500/10 to-transparent rounded-br-3xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-pink-500/10 to-transparent rounded-tl-3xl"></div>
                
                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 border border-red-400/30 rounded-3xl"
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                />
                
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl`}></div>
                
                {/* Enhanced Icon */}
                <motion.div 
                  className={`relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:shadow-red-500/40`}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: 5,
                    y: -5 
                  }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                  animate={{
                    y: -2,
                  }}
                  style={{
                    transition: `box-shadow 0.3s ease`,
                  }}
                >
                  <service.icon className="text-3xl sm:text-4xl text-white drop-shadow-lg relative z-10" />
                  
                  {/* Multi-layered glow effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 rounded-2xl"></div>
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-red-500/30 to-pink-500/30 rounded-2xl blur-sm opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  
                  {/* Animated ring */}
                  <motion.div 
                    className="absolute -inset-2 border-2 border-red-400/30 rounded-2xl"
                    animate={{
                      scale: 1.1,
                      opacity: 0.6
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                
                <motion.h3 
                  className="text-xl sm:text-2xl font-bold text-white mb-4 text-center group-hover:text-red-300 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {service.title}
                </motion.h3>
                
                <p className="text-gray-300 text-center leading-relaxed text-base sm:text-lg flex-1 mb-6">
                  {service.description}
                </p>
                
                {/* Premium progress indicator */}
                <div className="flex justify-center items-center space-x-3">
                  <div className="flex space-x-2">
                    {[1, 2, 3].map((dot) => (
                      <motion.div
                        key={dot}
                        className="relative"
                        animate={{ 
                          y: -4
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          repeatType: "reverse", 
                          delay: dot * 0.4,
                          ease: "easeInOut"
                        }}
                      >
                        <motion.div
                          className="w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full shadow-lg relative overflow-hidden"
                          animate={{ 
                            scale: 1.2,
                            opacity: 1
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            repeatType: "reverse", 
                            delay: dot * 0.2,
                            ease: "easeInOut"
                          }}
                        >
                          {/* Inner glow */}
                          <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full"></div>
                        </motion.div>
                        
                        {/* Outer ring */}
                        <motion.div 
                          className="absolute -inset-1 border border-red-300/40 rounded-full"
                          animate={{
                            scale: 1.4,
                            opacity: 0.2
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: dot * 0.4 + 0.5,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Status line */}
                  <motion.div 
                    className="h-px w-8 bg-gradient-to-r from-red-400/50 to-pink-400/50"
                    animate={{
                      scaleX: 1,
                      opacity: 1
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  />
                </div>
                
                {/* Enhanced Dark Learn More Button */}
                <motion.div 
                  className="mt-6 flex items-center justify-center text-red-300 font-semibold group-hover:text-red-200 transition-colors duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => handleServiceClick(service)}
                >
                  <span className="mr-2">Explore Service</span>
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <FaChevronRight className="text-sm" />
                  </motion.div>
                </motion.div>
                
                {/* Glowing bottom accent */}
                <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent rounded-full shadow-lg shadow-red-500/30"></div>
                </div>
              </motion.div>
          ))}
        </div>

        {/* Load More Button - Mobile Only */}
        {hasMoreServices && (
          <motion.div
            className="mt-12 text-center md:hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.button
              onClick={handleLoadMore}
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-300 flex items-center gap-2 mx-auto border border-red-400/30"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Services
              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaChevronRight />
              </motion.div>
            </motion.button>
            <p className="text-gray-400 text-sm mt-3">
              Showing {mobileVisibleCount} of {services.length} services
            </p>
          </motion.div>
        )}

        {/* Dark Call to Action Section */}
        <motion.div
          className="mt-20 sm:mt-24 md:mt-32 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-4 bg-gradient-to-r from-gray-800/80 via-black/80 to-gray-800/80 backdrop-blur-sm border-2 border-red-500/30 rounded-3xl p-8 sm:p-10 shadow-xl shadow-red-500/20 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated dark background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-pink-500/10 to-purple-500/10 opacity-50"></div>
            
            {/* Pulsing border glow */}
            <motion.div
              className="absolute inset-0 border border-red-400/40 rounded-3xl"
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.01, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              animate={{ 
                rotate: 15,
                scale: 1.1
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <FaStar className="text-red-400 text-3xl drop-shadow-lg" />
            </motion.div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                Let&apos;s discuss how our services can accelerate your digital journey
              </p>
              <motion.button
                onClick={openModal}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-300 flex items-center gap-2 mx-auto group border border-red-400/30"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Service Modal */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedService(null);
        }}
        service={selectedService}
      />
    </section>
  );
};

export default CoreServices;
