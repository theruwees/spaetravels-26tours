import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Hero3DProps {
  children: ReactNode;
  variant?: "travel" | "gallery" | "destinations" | "blog" | "about";
}

const Hero3D = ({ children, variant = "travel" }: Hero3DProps) => {
  const getFloatingElements = () => {
    switch (variant) {
      case "travel":
        return (
          <>
            {/* Floating islands */}
            <motion.div
              className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-20"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-25"
              animate={{
                y: [0, -15, 0],
                x: [0, -8, 0],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.div
              className="absolute bottom-32 left-1/4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-30"
              animate={{
                y: [0, -25, 0],
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </>
        );

      case "gallery":
        return (
          <>
            {/* Camera-like floating elements */}
            <motion.div
              className="absolute top-16 right-16 w-6 h-6 border-2 border-white/30 rounded opacity-40"
              animate={{
                rotate: [0, 90, 180, 270, 360],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute bottom-20 left-12 w-4 h-4 bg-white/20 rounded-full"
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
            <motion.div
              className="absolute top-1/3 left-8 w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-50"
              animate={{
                x: [0, 40, 0],
                y: [0, -20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />
          </>
        );

      case "destinations":
        return (
          <>
            {/* Map pin-like elements */}
            <motion.div
              className="absolute top-24 left-16 w-3 h-4 bg-red-500 opacity-40"
              style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
              animate={{
                y: [0, -15, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-28 right-20 w-2 h-3 bg-blue-500 opacity-50"
              style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
              animate={{
                y: [0, -12, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.div
              className="absolute top-1/2 right-8 w-16 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </>
        );

      case "blog":
        return (
          <>
            {/* Book/page elements */}
            <motion.div
              className="absolute top-20 right-24 w-8 h-6 border border-white/30 rounded-sm opacity-40"
              animate={{
                rotateY: [0, 180, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-32 left-20 w-1 h-8 bg-white/30 rounded-full"
              animate={{
                scaleY: [0.5, 1, 0.5],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
            <motion.div
              className="absolute top-1/3 left-12 w-12 h-8 border border-white/20 rounded opacity-30"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </>
        );

      case "about":
        return (
          <>
            {/* People/connection elements */}
            <motion.div
              className="absolute top-16 left-20 w-6 h-6 border-2 border-white/40 rounded-full opacity-50"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-24 right-16 w-4 h-4 bg-white/30 rounded-full"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.div
              className="absolute top-1/2 right-24 w-20 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-purple-700"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {/* Large floating circles */}
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-60 h-60 bg-white/5 rounded-full blur-xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Small animated particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Variant-specific floating elements */}
      <div className="absolute inset-0">{getFloatingElements()}</div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Hero3D;
