import { motion } from "framer-motion";

const ClientLogos = () => {

  const clients = [
    { name: "Microsoft", logo: "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png" },
    { name: "Google", logo: "https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png" },
    { name: "Amazon", logo: "https://logos-world.net/wp-content/uploads/2020/09/Amazon-Logo.png" },
    { name: "Apple", logo: "https://logos-world.net/wp-content/uploads/2020/09/Apple-Logo.png" },
    { name: "IBM", logo: "https://logos-world.net/wp-content/uploads/2020/09/IBM-Logo.png" },
    { name: "Oracle", logo: "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png" },
    { name: "Salesforce", logo: "https://logos-world.net/wp-content/uploads/2020/09/Salesforce-Logo.png" },
    { name: "Adobe", logo: "https://logos-world.net/wp-content/uploads/2020/09/Adobe-Logo.png" },
    { name: "Intel", logo: "https://logos-world.net/wp-content/uploads/2020/09/Intel-Logo.png" },
    { name: "Cisco", logo: "https://logos-world.net/wp-content/uploads/2020/09/Cisco-Logo.png" },
    { name: "Dell", logo: "https://logos-world.net/wp-content/uploads/2020/09/Dell-Logo.png" },
    { name: "HP", logo: "https://logos-world.net/wp-content/uploads/2020/09/HP-Logo.png" }
  ];

  const partners = [
    { name: "AWS", logo: "https://logos-world.net/wp-content/uploads/2020/09/Amazon-Web-Services-AWS-Logo.png" },
    { name: "Azure", logo: "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Azure-Logo.png" },
    { name: "Google Cloud", logo: "https://logos-world.net/wp-content/uploads/2020/09/Google-Cloud-Logo.png" },
    { name: "Docker", logo: "https://logos-world.net/wp-content/uploads/2020/09/Docker-Logo.png" },
    { name: "Kubernetes", logo: "https://logos-world.net/wp-content/uploads/2020/09/Kubernetes-Logo.png" },
    { name: "GitHub", logo: "https://logos-world.net/wp-content/uploads/2020/09/GitHub-Logo.png" }
  ];

  const certifications = [
    { name: "ISO 27001", description: "Information Security Management" },
    { name: "ISO 9001", description: "Quality Management System" },
    { name: "CMMI Level 3", description: "Capability Maturity Model" },
    { name: "AWS Partner", description: "Advanced Consulting Partner" },
    { name: "Microsoft Gold", description: "Gold Partner Status" },
    { name: "Google Cloud", description: "Premier Partner" }
  ];


  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We&apos;re proud to work with some of the world&apos;s most innovative companies and organizations
          </p>
        </motion.div>

        {/* Client Logos Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Clients</h3>
          <div className="relative overflow-hidden">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-indigo-50 via-purple-50 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-pink-50 via-purple-50 to-transparent z-10"></div>
            
            {/* Infinite scrolling carousel */}
            <div className="flex animate-scroll">
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 group"
                >
                  <div className="w-40 h-24 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 border border-red-100/50 group-hover:border-red-300 group-hover:bg-white group-hover:scale-105">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="max-h-14 max-w-28 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Technology Partners</h3>
          <div className="relative overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-pink-50 via-purple-50 to-transparent z-10"></div>
            
            {/* Reverse scrolling carousel */}
            <div className="flex animate-scroll-reverse">
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-6 group"
                >
                  <div className="w-32 h-20 flex items-center justify-center bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 border border-purple-100/50 group-hover:border-purple-300 group-hover:scale-105">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-h-10 max-w-24 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Certifications & Awards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white p-6 rounded-2xl shadow-2xl hover:shadow-red-500/20 transition-all duration-300 group-hover:-translate-y-2 border-l-4 border-red-500">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h4>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
