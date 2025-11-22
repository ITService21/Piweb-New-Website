import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  FaProjectDiagram, 
  FaUsers, 
  FaAward, 
  FaCheckCircle,
  FaGlobe,
  FaCode,
  FaServer,
  FaStar
} from "react-icons/fa";

const KeyStats = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { 
      number: 500, 
      suffix: "+", 
      label: "Projects Delivered", 
      icon: FaProjectDiagram,
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      number: 200, 
      suffix: "+", 
      label: "Happy Clients", 
      icon: FaUsers,
      gradient: "from-cyan-500 to-blue-500"
    },
    { 
      number: 15, 
      suffix: "+", 
      label: "Years Experience", 
      icon: FaAward,
      gradient: "from-blue-500 to-indigo-500"
    },
    { 
      number: 99.9, 
      suffix: "%", 
      label: "Uptime Guarantee", 
      icon: FaCheckCircle,
      gradient: "from-indigo-500 to-purple-500"
    },
    { 
      number: 50, 
      suffix: "+", 
      label: "Countries Served", 
      icon: FaGlobe,
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      number: 1000, 
      suffix: "+", 
      label: "Lines of Code", 
      icon: FaCode,
      gradient: "from-pink-500 to-red-500"
    }
  ];

  const Counter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;
      
      let startTime;
      const startCount = 0;
      const endCount = end;
      
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * (endCount - startCount) + startCount));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return <span>{count}</span>;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-red-400/30 via-pink-400/20 to-purple-500/30"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: '400% 400%',
          }}
        />

        {/* Floating Geometric Shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i % 3) * 25}%`,
              width: `${40 + (i % 3) * 20}px`,
              height: `${40 + (i % 3) * 20}px`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 180, 360],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 15 + (i * 2),
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut",
            }}
          >
            {i % 4 === 0 && (
              <div className="w-full h-full border-2 border-white/20 rounded-full" />
            )}
            {i % 4 === 1 && (
              <div className="w-full h-full border-2 border-white/20 rotate-45" />
            )}
            {i % 4 === 2 && (
              <div className="w-full h-full">
                <div className="w-full h-full border-2 border-white/20 rounded-lg rotate-12" />
              </div>
            )}
            {i % 4 === 3 && (
              <div className="w-full h-full border-2 border-white/20 transform rotate-45">
                <div className="w-1/2 h-1/2 bg-white/10 rounded-full mx-auto mt-1/4" />
              </div>
            )}
          </motion.div>
        ))}

        {/* Animated Grid Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-[0.08]"
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='15' cy='15' r='1'/%3E%3Ccircle cx='45' cy='45' r='1'/%3E%3Cpath d='M30 10 L30 50 M10 30 L50 30' stroke='%23ffffff' stroke-width='0.5' stroke-opacity='0.2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Pulsing Orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full blur-2xl"
            style={{
              width: `${80 + i * 20}px`,
              height: `${80 + i * 20}px`,
              left: `${5 + i * 15}%`,
              top: `${10 + (i % 2) * 60}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
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
              i % 3 === 0 ? 'bg-gradient-to-br from-white/20 to-pink-300/20' :
              i % 3 === 1 ? 'bg-gradient-to-br from-pink-300/20 to-purple-300/20' :
              'bg-gradient-to-br from-purple-300/20 to-red-300/20'
            }`}></div>
          </motion.div>
        ))}

        {/* Animated Sparkles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Flowing Lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
            </linearGradient>
          </defs>
          {[...Array(4)].map((_, i) => (
            <motion.path
              key={`line-${i}`}
              d={`M${i * 25},0 Q${50 + i * 25},${50 + i * 10} ${100 + i * 25},100 T${200 + i * 25},200`}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0], 
                opacity: [0, 0.6, 0],
                x: [0, 100, 200]
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>

        {/* Radial Pulse Effect */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-96 h-96 rounded-full border border-white/20" />
          <div className="absolute w-64 h-64 rounded-full border border-white/30" />
          <div className="absolute w-32 h-32 rounded-full border border-white/40" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto">
            Numbers that speak for our commitment to excellence and client satisfaction
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => {
            const gradients = [
              "from-white to-pink-200",
              "from-pink-200 to-purple-200",
              "from-purple-200 to-indigo-200",
              "from-indigo-200 to-blue-200",
              "from-blue-200 to-cyan-200",
              "from-cyan-200 to-teal-200"
            ];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                onViewportEnter={() => setIsVisible(true)}
                className="text-center group"
              >
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 group-hover:-translate-y-2 border border-white/20">
                  <div className={`w-16 h-16 bg-gradient-to-r ${gradients[index]} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <stat.icon className="text-2xl text-red-600" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    <Counter end={stat.number} />
                    <span className="text-pink-200">{stat.suffix}</span>
                  </div>
                  <p className="text-pink-100 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyStats;
