import { Link } from "react-router-dom";
import { useState } from "react";
import { API_ENDPOINTS } from "../config/api";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    // Simple email validation
    if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      setIsSubscribed(false);
      return;
    }
    try {
      await fetch(API_ENDPOINTS.SEND_FORM_MAIL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          smtp: {
            host: "mail.piwebtechnology.com",
            port: 587,
            secure: false,
            user: "sumit@piwebtechnology.com", 
            pass: "cvkzxxpvgejtejkj",
          },
          to: "sumit@piwebtechnology.com",
          subject: "Newsletter signup",
          fields: {
            email: email,
          },
        }),
      });
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 10000); // Show message for 10 seconds
    } catch {
      setErrorMsg("An error occurred. Please try again.");
      setIsSubscribed(false);
    }
  };

  const socialLinks = [
    { icon: FaLinkedin, name: "LinkedIn", url: "https://www.linkedin.com/company/piweb-tech-software-solution/", color: "from-blue-600 to-blue-800" },
    // { icon: FaTwitter, name: "Twitter", url: "#", color: "from-cyan-500 to-blue-500" },
    // { icon: FaWhatsapp, name: "WhatsApp", url: "https://wa.me/9351870445", color: "from-green-500 to-emerald-500" },
    { icon: FaInstagram, name: "Instagram", url: "#", color: "from-pink-500 to-purple-500" },
    { icon: FaFacebook, name: "Facebook", url: "https://m.facebook.com/p/PIweb-Tech-software-solutions-61575722429951/", color: "from-blue-600 to-blue-800" },
    // { icon: FaYoutube, name: "YouTube", url: "#", color: "from-red-500 to-red-700" }
  ];
  

  return (
    <footer className="bg-gray-900 text-white py-10">
      {/* Newsletter Subscription Section */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <div className="rounded-2xl p-6 md:p-8 border border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold mb-2 flex items-center gap-2 text-white">
                <FaEnvelope className="text-pink-500" />
                Stay Updated with Our Newsletter
              </h3>
              <p className="text-white/80 text-sm">
                Subscribe to our newsletter and get monthly updates on software
                trends, tech tips, security best practices, exclusive offers,
                and strategies to grow your business with digital solutions.{" "}
              </p>
            </div>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 w-full md:w-auto"
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 pr-12 rounded-lg border-0 text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
                <FaEnvelope className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:from-red-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap shadow-lg hover:shadow-xl"
              >
                {isSubscribed ? "✓ Subscribed!" : "Subscribe"}
              </button>
            </form>
          </div>
          {errorMsg && (
            <div className="mt-4 text-center">
              <p className="text-red-400 text-sm">{errorMsg}</p>
            </div>
          )}
          {isSubscribed && (
            <div className="mt-4 text-center">
              <p className="text-white/90 text-sm">
                Thank you for subscribing! We&apos;ll send you monthly updates
                on our offers and MSME opportunities.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h2 className="text-lg font-semibold mb-4">📈 Piweb Technology</h2>
          <p className="text-gray-400 text-sm">
            We help small and medium businesses go digital with custom software,
            web and mobile apps, automation tools, and secure tech solutions
            that boost efficiency, reduce manual work, and accelerate growth.{" "}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link to="/" className="hover:text-pink-400">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services/website-development"
                className="hover:text-pink-400"
              >
                Website Development
              </Link>
            </li>
            <li>
              <Link
                to="/services/software-development"
                className="hover:text-pink-400"
              >
                Software Development
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-pink-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-pink-400">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +91 9351870445
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> 15, Ganesh Nagar 1st Jaipur N, Jhotwara,
              Jaipur, Rajasthan, India
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-1">Follow Us</h3>
          <div className="grid grid-cols-3 gap-3 w-[90px]">
            {socialLinks?.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="w-[26px] rounded-2xl p-[1px] hover:border-blue-300 transition-all duration-300 group-hover:shadow-lg shadow-md text-center">
                  <div className={`w-6 h-6 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <social.icon className="text-lg text-white" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Piweb Technology — All Rights Reserved
      </div>
    </footer>
  );
}
