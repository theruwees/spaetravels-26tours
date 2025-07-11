import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedBackgroundProps {
  children: ReactNode;
  variant?: "dots" | "waves" | "geometric" | "particles";
  className?: string;
}

const AnimatedBackground = ({
  children,
  variant = "dots",
  className = "",
}: AnimatedBackgroundProps) => {
  const renderPattern = () => {
    switch (variant) {
      case "dots":
        return (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary/20 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  y: [null, -20, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        );

      case "waves":
        return (
          <div className="absolute inset-0 overflow-hidden">
            <svg
              className="absolute bottom-0 left-0 w-full h-24"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z"
                fill="rgba(59, 130, 246, 0.1)"
                initial={{
                  d: "M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z",
                }}
                animate={{
                  d: [
                    "M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z",
                    "M0,80 C150,40 350,120 600,80 C850,40 1050,100 1200,80 L1200,120 L0,120 Z",
                    "M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </div>
        );

      case "geometric":
        return (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute border border-primary/20"
                style={{
                  width: 50 + Math.random() * 100,
                  height: 50 + Math.random() * 100,
                  left: Math.random() * 100 + "%",
                  top: Math.random() * 100 + "%",
                }}
                initial={{ rotate: 0, opacity: 0.1 }}
                animate={{ rotate: 360, opacity: [0.1, 0.3, 0.1] }}
                transition={{
                  duration: 10 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        );

      case "particles":
        return (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gradient-to-r from-primary to-blue-500 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: window.innerHeight + 50,
                }}
                animate={{
                  y: -50,
                  x: Math.random() * window.innerWidth,
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`relative ${className}`}>
      {renderPattern()}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AnimatedBackground;
