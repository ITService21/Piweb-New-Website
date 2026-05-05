import { useEffect } from "react";
import { motion } from "framer-motion";
import { useModal } from "../Context/ModalContext";
import Navbar from "../Components/Navbar";
import AnimatedTechBackground from "../Components/AnimatedTechBackground";
import { FaShieldAlt, FaArrowRight } from "react-icons/fa";

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "We may collect the following types of information when you interact with our website or services:",
      "Personal Information: Name, email address, phone number, company name, and job title that you voluntarily provide through contact forms, enquiry submissions, or service requests.",
      "Usage Data: Pages visited, time spent on pages, browser type, device information, IP address, and referring URLs collected automatically through cookies and analytics tools.",
      "Project Data: Technical requirements, business objectives, and other project-related details shared during consultations or onboarding.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "We use the information we collect for the following purposes:",
      "To respond to your enquiries and provide customer support.",
      "To deliver, maintain, and improve our services including web development, AI/ML solutions, SEO optimisation, and cloud services.",
      "To send project updates, invoices, and service-related communications.",
      "To send promotional content and newsletters (only with your explicit consent; you can unsubscribe at any time).",
      "To analyse website usage patterns and improve user experience.",
      "To comply with legal obligations and enforce our terms of service.",
    ],
  },
  {
    title: "3. Cookies & Tracking Technologies",
    content: [
      "Our website uses cookies and similar tracking technologies to enhance your browsing experience. These include:",
      "Essential Cookies: Required for the website to function properly (e.g., session management).",
      "Analytics Cookies: Help us understand how visitors interact with our website using tools like Google Analytics.",
      "Marketing Cookies: Used to deliver relevant advertisements and measure campaign effectiveness.",
      "You can manage cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.",
    ],
  },
  {
    title: "4. Data Sharing & Third Parties",
    content: [
      "We do not sell, rent, or trade your personal information to third parties. We may share data with:",
      "Trusted Service Providers: Hosting providers, analytics platforms, and payment processors that assist us in operating our services, bound by confidentiality agreements.",
      "Legal Requirements: When required by law, regulation, or legal process, or to protect the rights, safety, and property of Piweb Tech, our clients, or the public.",
      "Business Transfers: In the event of a merger, acquisition, or sale of assets, your data may be transferred as part of the transaction with prior notice.",
    ],
  },
  {
    title: "5. Data Security",
    content: [
      "We implement industry-standard security measures to protect your personal information, including:",
      "SSL/TLS encryption for all data transmitted between your browser and our servers.",
      "Regular security audits and vulnerability assessments of our infrastructure.",
      "Access controls limiting data access to authorised personnel only.",
      "Secure cloud storage with encryption at rest for project and client data.",
      "While we strive to protect your information, no method of electronic transmission or storage is 100% secure. We encourage you to use strong passwords and exercise caution when sharing sensitive information online.",
    ],
  },
  {
    title: "6. Your Rights & Choices",
    content: [
      "Depending on your jurisdiction, you may have the following rights regarding your personal data:",
      "Access: Request a copy of the personal data we hold about you.",
      "Correction: Request correction of inaccurate or incomplete data.",
      "Deletion: Request deletion of your personal data, subject to legal retention requirements.",
      "Opt-Out: Unsubscribe from marketing communications at any time by clicking the unsubscribe link in our emails or contacting us directly.",
      "Data Portability: Request your data in a structured, commonly used, machine-readable format.",
      "To exercise any of these rights, please contact us at info@piwebtechnology.com",
    ],
  },
  {
    title: "7. Data Retention",
    content: [
      "We retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy, unless a longer retention period is required or permitted by law.",
      "Contact form submissions and enquiry data are retained for up to 24 months.",
      "Client project data is retained for the duration of the engagement and up to 36 months after project completion.",
      "Analytics data is retained in aggregated, anonymised form and does not identify individual users.",
    ],
  },
  {
    title: "8. Children's Privacy",
    content: [
      "Our services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a minor without parental consent, we will take steps to delete that information promptly.",
    ],
  },
  {
    title: "9. Third-Party Links",
    content: [
      "Our website may contain links to third-party websites and services. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party services you interact with.",
    ],
  },
  {
    title: "10. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. Any updates will be posted on this page with a revised \"Last Updated\" date. We encourage you to review this policy periodically.",
    ],
  },
  {
    title: "11. Contact Us",
    content: [
      "If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please reach out to us:",
      "Email: info@piwebtechnology.com",
      "Phone: +91-9351870445",
      "Address: Piweb Tech Software Solutions, India",
      "We are committed to addressing your concerns and will respond to your enquiry within 48 business hours.",
    ],
  },
];

const PrivacyPolicy = () => {
  const { openModal } = useModal();

  useEffect(() => {
    document.title = "Privacy Policy - Piweb Tech Software Solutions";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Read the Privacy Policy of Piweb Tech Software Solutions. Learn how we collect, use, and protect your personal information when you use our services."
    );

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      "content",
      "piweb tech privacy policy, data protection, personal information, cookies policy, GDPR, data security"
    );
  }, []);

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
                ease: "easeInOut",
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
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-400/30 mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <FaShieldAlt className="text-3xl text-red-400" />
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl text-pink-100 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your privacy matters to us. Learn how{" "}
              <span className="text-red-300 font-bold">Piweb Tech</span>{" "}
              collects, uses, and protects your personal information.
            </motion.p>

            <motion.div
              className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-md border border-red-400/30 rounded-full px-6 py-3 shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <FaShieldAlt className="text-red-400 text-xl" />
              <span className="text-red-300 font-bold">
                LAST UPDATED: MAY 2026
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="relative py-20 bg-white overflow-hidden">
        <AnimatedTechBackground variant="light" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              At <strong>Piweb Tech Software Solutions</strong>, we are
              committed to safeguarding the privacy and security of your
              personal information. This Privacy Policy explains how we collect,
              use, store, and protect the data you provide when using our
              website and services. By accessing our website or engaging our
              services, you agree to the practices described below.
            </p>
          </motion.div>

          {sections.map((section, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariant}
              className="mb-10"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                  {section.title}
                </span>
              </h2>
              <div className="space-y-3">
                {section.content.map((paragraph, pIdx) => (
                  <p
                    key={pIdx}
                    className={`text-gray-700 leading-relaxed ${
                      pIdx === 0 ? "font-medium" : "pl-4 border-l-2 border-red-200"
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
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
              Have Questions About Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We&apos;re here to help. Reach out to us if you have any concerns
              about your privacy or how we handle your information.
            </p>
            <motion.button
              onClick={openModal}
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-300 flex items-center gap-2 mx-auto group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
