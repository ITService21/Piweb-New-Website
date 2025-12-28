import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaCogs,
  FaBriefcase,
  FaUsers,
  FaEye,
  FaBox,
  FaComments,
  FaGlobe,
  FaBrain,
  FaCode,
  FaServer,
  FaCloud,
  FaShieldAlt,
  FaLaptop,
  FaWrench,
  FaSearch
} from "react-icons/fa";

export const NavbarLinks = [
  {
    name: "HOME",
    link: "/home",
    icon: FaHome,
    subLinks: [],
    class: ""
  },
  {
    name: "ABOUT US",
    link: "/about-us",
    icon: FaInfoCircle,
    subLinks: [
      { name: "About Us", link: "/about-us", icon: FaInfoCircle },
      { name: "Mission & Vision", link: "/about-us/mission-vision", icon: FaEye },
      // { name: "Our Team", link: "/about-us/ourteam", icon: FaUsers },
      { name: "Our Products", link: "/about-us/ourproducts", icon: FaBox },
      { name: "Our Testimonials", link: "/about-us/ourtestimonials", icon: FaComments },
    ],
  },
 
 
 

   {
    name: "SERVICES",
    link: "/services/all",
    class: "",
    icon: FaCogs,
    subLinks: [
      // { name: "All Services", link: "/services/all", icon: FaCogs },
      { name: "Website Development", link: "/services/website-development", icon: FaGlobe },
      { name: "AI & ML", link: "/services/ai-ml", icon: FaBrain },
      { name: "SEO Optimization", link: "/services/seo-optimization", icon: FaSearch },
      { name: "Custom Software Development", link: "/services/software-development", icon: FaCode },
      { name: "Enterprise Management Systems", link: "/services/enterprise-systems", icon: FaServer },
      { name: "Cloud Solutions", link: "/services/cloud", icon: FaCloud },
      { name: "Cybersecurity", link: "/services/cybersecurity", icon: FaShieldAlt },
      // { name: "Digital Transformation", link: "/services/digital-transformation", icon: FaLaptop },
      { name: "IT Support & Maintenance", link: "/services/it-support", icon: FaWrench },
    ], 
  },
  {
    name: "CAREERS",
    link: "/careers",
    class: "",
    icon: FaBriefcase,
    subLinks: [],
  },

   {
    name: "BLOG",
    link: "/blog",
    class: "",
    icon: FaEnvelope,
    subLinks: [],
  },
  {
    name: "CONTACT US",
    link: "/contact-us",
    class: "",
    icon: FaEnvelope,
    subLinks: [],
  },

];

export default NavbarLinks;
