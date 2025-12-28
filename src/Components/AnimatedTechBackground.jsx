// AnimatedTechBackground.jsx
import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import {
  FaCode,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaLightbulb,
  FaRocket,
  FaServer,
  FaMobile,
  FaBrain,
  FaCog,
} from "react-icons/fa";

const AnimatedTechBackgroundComponent = ({ variant = "type1", theme = "dark" }) => {
  // Backward compatibility: if user passes "light"/"dark" as variant
  const isThemeFromVariant = variant === "light" || variant === "dark";
  const effectiveTheme = isThemeFromVariant ? variant : theme;
  const isDark = effectiveTheme === "dark";

  // ---------- COMMON MEMOS ----------
  const particles = useMemo(
    () =>
      [...Array(20)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        dx: Math.random() * 60 - 30,
        dy: Math.random() * 60 - 30,
        duration: 4 + Math.random() * 3,
        delay: Math.random() * 4,
      })),
    []
  );

  const techItems = useMemo(
    () => [
      { icon: FaCode, x: 15, y: 20, trail: "red", path: "M15,20 Q50,10 85,30 Q50,50 15,20" },
      { icon: FaDatabase, x: 85, y: 25, trail: "pink", path: "M85,25 Q50,15 15,35 Q50,55 85,25" },
      { icon: FaCloud, x: 20, y: 70, trail: "purple", path: "M20,70 Q60,50 80,80 Q40,90 20,70" },
      { icon: FaShieldAlt, x: 80, y: 75, trail: "blue", path: "M80,75 Q40,55 20,85 Q60,95 80,75" },
      { icon: FaLightbulb, x: 50, y: 15, trail: "red", path: "M50,15 Q20,40 50,65 Q80,40 50,15" },
      { icon: FaRocket, x: 50, y: 85, trail: "pink", path: "M50,85 Q80,60 50,35 Q20,60 50,85" },
      { icon: FaServer, x: 10, y: 50, trail: "purple", path: "M10,50 Q40,30 70,50 Q40,70 10,50" },
      { icon: FaMobile, x: 90, y: 60, trail: "blue", path: "M90,60 Q60,40 30,60 Q60,80 90,60" },
      { icon: FaBrain, x: 30, y: 40, trail: "red", path: "M30,40 Q60,20 90,40 Q60,60 30,40" },
      { icon: FaCog, x: 70, y: 40, trail: "pink", path: "M70,40 Q40,20 10,40 Q40,60 70,40" },
    ],
    []
  );

  const gradientOrbs = useMemo(
    () => [
      { x: 15, y: 25, size: 200, color: "from-red-500/20 to-pink-500/20", delay: 0 },
      { x: 75, y: 15, size: 150, color: "from-pink-500/20 to-purple-500/20", delay: 2 },
      { x: 25, y: 75, size: 180, color: "from-purple-500/20 to-indigo-500/20", delay: 4 },
      { x: 85, y: 80, size: 120, color: "from-indigo-500/20 to-blue-500/20", delay: 6 },
    ],
    []
  );

  const morphShapes = useMemo(
    () => [
      { x: 20, y: 30, size: 60, color: "red" },
      { x: 70, y: 20, size: 80, color: "pink" },
      { x: 15, y: 70, size: 50, color: "purple" },
      { x: 85, y: 75, size: 70, color: "blue" },
    ],
    []
  );

  // ---------- VARIANT RENDERERS ----------

  // TYPE 1 – your original tech grid + waves + icons
  const renderType1 = () => (
    <>
      {/* Electric Grid Pattern */}
      <div className={`absolute inset-0 ${isDark ? "opacity-10" : "opacity-5"} z-0`}>
        <svg className="w-full h-full">
          <defs>
            <pattern id="tech-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke={isDark ? "rgba(239, 68, 68, 0.2)" : "rgba(239, 68, 68, 0.15)"}
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-grid)" />
        </svg>
      </div>

      {/* Spiral Energy Waves */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-full"
            style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
          >
            <motion.div
              className={`absolute w-96 h-96 border-2 rounded-full ${
                i % 2 === 0
                  ? isDark
                    ? "border-red-400/20"
                    : "border-red-400/15"
                  : isDark
                  ? "border-pink-400/20"
                  : "border-pink-400/15"
              }`}
              style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
              animate={{ scale: [0.7, 1.8, 0.7], opacity: [0, 0.5, 0], rotate: [0, 180, 360] }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                delay: i * 2,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Floating Tech Icons with Trails */}
      <div className="absolute inset-0 overflow-hidden">
        {techItems.map((item, i) => (
          <div key={i}>
            {/* Trail */}
            <motion.div
              className="absolute"
              style={{ left: `${item.x}%`, top: `${item.y}%` }}
            >
              <svg
                width="400"
                height="300"
                className="absolute -translate-x-1/2 -translate-y-1/2"
              >
                <motion.path
                  d={item.path}
                  stroke={`rgba(${
                    item.trail === "red"
                      ? "239, 68, 68"
                      : item.trail === "pink"
                      ? "236, 72, 153"
                      : item.trail === "purple"
                      ? "147, 51, 234"
                      : "59, 130, 246"
                  }, ${isDark ? "0.3" : "0.2"})`}
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="10 5"
                  animate={{ strokeDashoffset: [0, -50], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 5 + i * 0.5, repeat: Infinity, ease: "linear" }}
                />
              </svg>
            </motion.div>

            {/* Icon */}
            <motion.div
              className={`absolute text-2xl ${
                item.trail === "red"
                  ? isDark
                    ? "text-red-400/60"
                    : "text-red-400/40"
                  : item.trail === "pink"
                  ? isDark
                    ? "text-pink-400/60"
                    : "text-pink-400/40"
                  : item.trail === "purple"
                  ? isDark
                    ? "text-purple-400/60"
                    : "text-purple-400/40"
                  : isDark
                  ? "text-blue-400/60"
                  : "text-blue-400/40"
              }`}
              animate={{
                y: [0, -20, 0, 12, 0],
                scale: [0.9, 1.1, 0.9, 1.05, 0.9],
                rotate: [0, 10, -10, 5, 0],
              }}
              transition={{
                duration: 14 + i * 2,
                repeat: Infinity,
                delay: i * 1.2,
                ease: "easeInOut",
              }}
              style={{ left: `${item.x}%`, top: `${item.y}%` }}
            >
              <item.icon />
            </motion.div>
          </div>
        ))}
      </div>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className={`absolute w-1 h-1 rounded-full ${
              isDark
                ? "bg-gradient-to-r from-red-400 to-pink-400"
                : "bg-gradient-to-r from-red-300 to-pink-300"
            }`}
            style={{ left: `${p.left}%`, top: `${p.top}%` }}
            animate={{ scale: [0, 1, 0], opacity: [0, 1, 0], x: [0, p.dx], y: [0, p.dy] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {gradientOrbs.map((orb, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r ${orb.color} blur-xl`}
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              width: orb.size,
              height: orb.size,
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.25, 0.5, 0.25],
              x: [0, 18, 0],
              y: [0, -18, 0],
            }}
            transition={{
              duration: 9 + i,
              repeat: Infinity,
              delay: orb.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Morph shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {morphShapes.map((shape, i) => (
          <motion.div
            key={i}
            className={`absolute ${
              shape.color === "red"
                ? isDark
                  ? "border-red-400/20"
                  : "border-red-400/10"
                : shape.color === "pink"
                ? isDark
                  ? "border-pink-400/20"
                  : "border-pink-400/10"
                : shape.color === "purple"
                ? isDark
                  ? "border-purple-400/20"
                  : "border-purple-400/10"
                : isDark
                ? "border-blue-400/20"
                : "border-blue-400/10"
            } border-2`}
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: shape.size,
              height: shape.size,
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
              scale: [1, 1.15, 0.9, 1.05, 1],
              borderRadius: ["20%", "50%", "25%", "45%", "20%"],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </>
  );

  // TYPE 2 – diagonal circuit lines + subtle glowing nodes
  const renderType2 = () => (
    <>
      <div className="absolute inset-0">
        <svg className="w-full h-full">
          <defs>
            <pattern id="diag-lines" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M-10 10 L10 -10 M0 60 L60 0 M50 70 L70 50"
                stroke={isDark ? "rgba(96,165,250,0.25)" : "rgba(59,130,246,0.15)"}
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diag-lines)" />
        </svg>
      </div>
      {/* Nodes */}
      <div className="absolute inset-0">
        {particles.slice(0, 16).map((p) => (
          <motion.div
            key={p.id}
            className={`absolute rounded-full ${
              isDark ? "bg-sky-400/70" : "bg-sky-300/60"
            }`}
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: 4,
              height: 4,
            }}
            animate={{ scale: [0.7, 1.3, 0.7], opacity: [0.1, 0.7, 0.1] }}
            transition={{
              duration: 2.5 + (p.id % 5),
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      {/* Floating big icons center cluster */}
      <div className="absolute inset-0">
        {[
          { icon: FaCode, x: 40, y: 40 },
          { icon: FaDatabase, x: 60, y: 42 },
          { icon: FaCloud, x: 50, y: 55 },
          { icon: FaBrain, x: 45, y: 30 },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`absolute text-4xl ${
              isDark ? "text-sky-400/60" : "text-sky-500/40"
            }`}
            style={{ left: `${item.x}%`, top: `${item.y}%`, transform: "translate(-50%, -50%)" }}
            animate={{
              y: [0, -8, 0, 6, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <item.icon />
          </motion.div>
        ))}
      </div>
    </>
  );

  // TYPE 3 – vertical matrix rain style lines with nodes
  const renderType3 = () => (
    <>
      <div className="absolute inset-0">
        <svg className="w-full h-full">
          <defs>
            <pattern id="vertical-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M20 0 L20 40"
                stroke={isDark ? "rgba(52,211,153,0.25)" : "rgba(16,185,129,0.15)"}
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#vertical-grid)" />
        </svg>
      </div>
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-px"
          style={{
            left: `${(i + 1) * (100 / 13)}%`,
            top: "-20%",
            height: "140%",
            background: isDark
              ? "linear-gradient(to bottom, rgba(52,211,153,0.0), rgba(52,211,153,0.5), rgba(52,211,153,0.0))"
              : "linear-gradient(to bottom, rgba(16,185,129,0.0), rgba(16,185,129,0.4), rgba(16,185,129,0.0))",
          }}
          animate={{ y: ["0%", "20%", "0%"] }}
          transition={{
            duration: 10 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Icons horizontally */}
      <div className="absolute inset-0">
        {[
          { icon: FaServer, x: 20, y: 40 },
          { icon: FaDatabase, x: 40, y: 60 },
          { icon: FaCog, x: 60, y: 35 },
          { icon: FaMobile, x: 80, y: 55 },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`absolute text-3xl ${
              isDark ? "text-emerald-400/70" : "text-emerald-500/50"
            }`}
            style={{ left: `${item.x}%`, top: `${item.y}%`, transform: "translate(-50%, -50%)" }}
            animate={{ y: [0, -6, 0], scale: [1, 1.05, 1] }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <item.icon />
          </motion.div>
        ))}
      </div>
    </>
  );

  // TYPE 4 – hex / mesh style dots + connecting lines
  const renderType4 = () => (
    <>
      <div className="absolute inset-0">
        <svg className="w-full h-full">
          <defs>
            <pattern id="node-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle
                cx="10"
                cy="10"
                r="1"
                fill={isDark ? "rgba(244,114,182,0.45)" : "rgba(244,114,182,0.35)"}
              />
              <circle
                cx="30"
                cy="30"
                r="1"
                fill={isDark ? "rgba(244,114,182,0.45)" : "rgba(244,114,182,0.35)"}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#node-grid)" />
        </svg>
      </div>
      <div className="absolute inset-0">
        {particles.slice(0, 14).map((p) => (
          <motion.div
            key={p.id}
            className="absolute"
            style={{ left: `${p.left}%`, top: `${p.top}%` }}
          >
            <motion.div
              className={`w-2 h-2 rounded-full ${
                isDark ? "bg-fuchsia-400/80" : "bg-fuchsia-400/70"
              }`}
              animate={{ scale: [0.9, 1.4, 0.9], opacity: [0.3, 0.9, 0.3] }}
              transition={{
                duration: 3 + (p.id % 4),
                repeat: Infinity,
                delay: p.delay,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}
      </div>
      {/* Central glowing orb */}
      <motion.div
        className={`absolute rounded-full blur-3xl ${
          isDark ? "bg-fuchsia-500/30" : "bg-fuchsia-400/30"
        }`}
        style={{
          left: "50%",
          top: "50%",
          width: 260,
          height: 260,
          transform: "translate(-50%, -50%)",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Icons around */} 
      <div className="absolute inset-0">
        {[
          { icon: FaBrain, x: 50, y: 30 },
          { icon: FaRocket, x: 65, y: 55 },
          { icon: FaLightbulb, x: 35, y: 55 },
          { icon: FaShieldAlt, x: 50, y: 70 },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`absolute text-3xl ${
              isDark ? "text-fuchsia-300/80" : "text-fuchsia-500/70"
            }`}
            style={{ left: `${item.x}%`, top: `${item.y}%`, transform: "translate(-50%, -50%)" }}
            animate={{ scale: [1, 1.08, 1], rotate: [0, 4, -4, 0] }}
            transition={{
              duration: 7 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <item.icon />
          </motion.div>
        ))}
      </div>
    </>
  );

  // TYPE 5 – radial concentric rings + orbiting icons
  const renderType5 = () => (
    <>
      {/* Radial rings */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full border ${
              isDark ? "border-indigo-400/25" : "border-indigo-300/20"
            }`}
            style={{
              left: "50%",
              top: "50%",
              width: 220 + i * 120,
              height: 220 + i * 120,
              transform: "translate(-50%, -50%)",
            }}
            animate={{ opacity: [0.15, 0.5, 0.15], scale: [1, 1.05, 1] }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      {/* Orbiting icons */}
      <div className="absolute inset-0">
        {[
          { icon: FaCloud, radius: 160, startAngle: 0 },
          { icon: FaDatabase, radius: 220, startAngle: 90 },
          { icon: FaServer, radius: 280, startAngle: 180 },
          { icon: FaMobile, radius: 220, startAngle: 270 },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`absolute text-3xl ${
              isDark ? "text-indigo-300/80" : "text-indigo-500/70"
            }`}
            style={{ left: "50%", top: "50%" }}
            animate={{
              rotate: [item.startAngle, item.startAngle + 360],
            }}
            transition={{
              duration: 30 + i * 4,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div
              style={{
                transform: `translate(-50%, -50%) translateX(${item.radius}px)`,
              }}
            >
              <item.icon />
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );

  // TYPE 6 – soft diagonal gradient bands + minimal dots
  const renderType6 = () => (
    <>
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: isDark
              ? "linear-gradient(135deg, rgba(56,189,248,0.15), rgba(147,51,234,0.25))"
              : "linear-gradient(135deg, rgba(56,189,248,0.12), rgba(147,51,234,0.18))",
          }}
        />
      </div>
      <div className="absolute inset-0">
        {particles.slice(0, 12).map((p) => (
          <motion.div
            key={p.id}
            className={`absolute rounded-full ${
              isDark ? "bg-cyan-300/90" : "bg-cyan-400/80"
            }`}
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: 3,
              height: 3,
            }}
            animate={{ y: [0, -12, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{
              duration: 5 + (p.id % 4),
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0">
        {[
          { icon: FaCode, x: 20, y: 30 },
          { icon: FaCloud, x: 50, y: 50 },
          { icon: FaBrain, x: 80, y: 40 },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`absolute text-4xl ${
              isDark ? "text-white/15" : "text-slate-800/20"
            }`}
            style={{ left: `${item.x}%`, top: `${item.y}%`, transform: "translate(-50%, -50%)" }}
            animate={{ y: [0, 4, 0], scale: [1, 1.03, 1] }}
            transition={{
              duration: 9 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <item.icon />
          </motion.div>
        ))}
      </div>
    </>
  );

  // TYPE 7 – waveform style curves (for AI / audio / signals vibe)
  const renderType7 = () => (
    <>
      <div className="absolute inset-0">
        <svg className="w-full h-full">
          {[...Array(4)].map((_, i) => (
            <motion.path
              key={i}
              d={`M0 ${30 + i * 15} Q 25 ${20 + i * 10}, 50 ${30 +
                i * 15} T 100 ${30 + i * 15}`}
              fill="none"
              stroke={
                isDark
                  ? `rgba(129,140,248,${0.15 + i * 0.08})`
                  : `rgba(79,70,229,${0.1 + i * 0.06})`
              }
              strokeWidth="1.5"
              animate={{ transform: ["translateY(0px)", "translateY(5px)", "translateY(0px)"] }}
              transition={{
                duration: 7 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      </div>
      <div className="absolute inset-0">
        {[
          { icon: FaBrain, x: 30, y: 40 },
          { icon: FaCog, x: 60, y: 55 },
          { icon: FaLightbulb, x: 80, y: 35 },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`absolute text-3xl ${
              isDark ? "text-indigo-300/80" : "text-indigo-500/70"
            }`}
            style={{ left: `${item.x}%`, top: `${item.y}%`, transform: "translate(-50%, -50%)" }}
            animate={{ y: [0, -4, 0], scale: [1, 1.06, 1] }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <item.icon />
          </motion.div>
        ))}
      </div>
    </>
  );

  // TYPE 8 – subtle radial grid + rotating squares
  const renderType8 = () => (
    <>
      <div className="absolute inset-0">
        <svg className="w-full h-full">
          <defs>
            <radialGradient id="radial-grid" cx="50%" cy="50%" r="70%">
              <stop
                offset="0%"
                stopColor={isDark ? "rgba(15,23,42,0)" : "rgba(248,250,252,0)"}
              />
              <stop
                offset="100%"
                stopColor={isDark ? "rgba(59,130,246,0.25)" : "rgba(59,130,246,0.12)"}
              />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#radial-grid)" />
        </svg>
      </div>
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute border ${
              isDark ? "border-blue-300/30" : "border-blue-400/20"
            }`}
            style={{
              left: "50%",
              top: "50%",
              width: 80 + i * 40,
              height: 80 + i * 40,
              transform: "translate(-50%, -50%)",
            }}
            animate={{ rotate: [0, i % 2 === 0 ? 10 : -10, 0] }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0">
        {[
          { icon: FaDatabase, x: 40, y: 40 },
          { icon: FaServer, x: 60, y: 60 },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`absolute text-4xl ${
              isDark ? "text-blue-300/80" : "text-blue-500/70"
            }`}
            style={{ left: `${item.x}%`, top: `${item.y}%`, transform: "translate(-50%, -50%)" }}
            animate={{ scale: [1, 1.08, 1], rotate: [0, 3, -3, 0] }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <item.icon />
          </motion.div>
        ))}
      </div>
    </>
  );

  // TYPE 9 – bottom tech skyline + rising particles
  const renderType9 = () => (
    <>
      <div className="absolute inset-x-0 bottom-0 h-1/3">
        <svg className="w-full h-full">
          <path
            d="M0 80 L10 60 L25 70 L35 40 L50 65 L65 45 L80 70 L95 55 L100 65 L100 100 L0 100 Z"
            fill={isDark ? "rgba(15,23,42,0.9)" : "rgba(15,23,42,0.8)"}
          />
        </svg>
      </div>
      {/* Rising particles */}
      <div className="absolute inset-0">
        {particles.slice(0, 18).map((p) => (
          <motion.div
            key={p.id}
            className={`absolute rounded-full ${
              isDark ? "bg-cyan-300/90" : "bg-cyan-400/80"
            }`}
            style={{
              left: `${p.left}%`,
              bottom: `${Math.random() * 10}%`,
              width: 3,
              height: 3,
            }}
            animate={{ y: [0, -80, 0], opacity: [0, 1, 0] }}
            transition={{
              duration: 5 + (p.id % 5),
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      {/* Icons sitting on skyline */}
      <div className="absolute inset-x-0 bottom-1/3">
        {[
          { icon: FaServer, x: 20 },
          { icon: FaDatabase, x: 45 },
          { icon: FaCloud, x: 70 },
          { icon: FaShieldAlt, x: 85 },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`absolute text-2xl ${
              isDark ? "text-cyan-300/80" : "text-cyan-400/70"
            }`}
            style={{ left: `${item.x}%`, bottom: "-10%" }}
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <item.icon />
          </motion.div>
        ))}
      </div>
    </>
  );

  // TYPE 10 – ultra-minimal dot field + single central glow
  const renderType10 = () => (
    <>
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-40">
          <defs>
            <pattern id="dot-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle
                cx="1.5"
                cy="1.5"
                r="1"
                fill={isDark ? "rgba(148,163,184,0.7)" : "rgba(148,163,184,0.7)"}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </svg>
      </div>
      {/* Center glow */}
      <motion.div
        className={`absolute rounded-full blur-3xl ${
          isDark ? "bg-sky-500/30" : "bg-sky-400/30"
        }`}
        style={{
          left: "50%",
          top: "50%",
          width: 220,
          height: 220,
          transform: "translate(-50%, -50%)",
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.6, 0.25] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute text-5xl ${
          isDark ? "text-sky-200/90" : "text-sky-600/80"
        }`}
        style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        animate={{ scale: [1, 1.05, 1], rotate: [0, 3, -3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaCode />
      </motion.div>
    </>
  );

  // ---------- VARIANT SWITCH ----------
  const renderByVariant = () => {
    switch (variant) {
      case "type2":
        return renderType2();
      case "type3":
        return renderType3();
      case "type4":
        return renderType4();
      case "type5":
        return renderType5();
      case "type6":
        return renderType6();
      case "type7":
        return renderType7();
      case "type8":
        return renderType8();
      case "type9":
        return renderType9();
      case "type10":
        return renderType10();
      case "light":
      case "dark":
      case "type1":
      default:
        return renderType1();
    }
  };

  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      style={{ willChange: "transform", transform: "translateZ(0)" }}
    >
      {renderByVariant()}
    </div>
  );
};

AnimatedTechBackgroundComponent.propTypes = {
  variant: PropTypes.oneOf([
    "light",
    "dark",
    "type1",
    "type2",
    "type3",
    "type4",
    "type5",
    "type6",
    "type7",
    "type8",
    "type9",
    "type10",
  ]),
  theme: PropTypes.oneOf(["light", "dark"]),
};

const AnimatedTechBackground = memo(AnimatedTechBackgroundComponent);

export default AnimatedTechBackground;
