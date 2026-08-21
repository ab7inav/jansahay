"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useSaarthi } from "./SaarthiProvider";
import Image from "next/image";
import { Hand, ThumbsUp } from "lucide-react";

export function SaarthiSVG({ 
  className = "", 
  size = 120 
}: { 
  className?: string;
  size?: number;
}) {
  const { state, isDragging, gesture } = useSaarthi();

  // Mouse tracking physics for subtle 3D tilt effect on the image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  
  // Create a subtle 3D rotation based on mouse position
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // State-based styling
  let bodyBounce = [0, -3, 0];
  let bodyScale = [1, 1.01, 1];
  let bounceDuration = 3;
  let filterStyle = "none";

  if (isDragging) {
    bodyBounce = [0, 0, 0];
    bodyScale = [1.1, 1.1, 1.1]; // Surprised scale up
    filterStyle = "drop-shadow(0 0 20px rgba(0,0,0,0.15))";
  } else if (state === "emergency") {
    bodyBounce = [0, 0, 0];
    bodyScale = [1, 1, 1];
    filterStyle = "drop-shadow(0 0 15px rgba(217, 45, 32, 0.6))"; // Red glow
  } else if (state === "success" || state === "happy") {
    bodyBounce = [0, -10, 0]; // Jump
    bodyScale = [1, 1.05, 1];
    bounceDuration = 0.5;
    filterStyle = "drop-shadow(0 0 15px rgba(35, 139, 87, 0.5))"; // Green glow
  } else if (state === "thinking" || state === "confused") {
    bodyBounce = [0, -2, 0];
    bodyScale = [1, 1.02, 1];
    bounceDuration = 1.5;
    filterStyle = "drop-shadow(0 0 15px rgba(105, 65, 198, 0.5))"; // Purple AI glow
  } else if (state === "listening") {
    filterStyle = "drop-shadow(0 0 15px rgba(23, 105, 170, 0.5))"; // Blue glow
  }

  // Determine gesture icon
  const getGestureIcon = () => {
    switch (gesture) {
      case "point_left": return <div className="absolute top-1/2 -left-12 -translate-y-1/2 rotate-180 animate-bounce"><Hand className="w-8 h-8 text-jansahay-blue fill-white" /></div>;
      case "point_right": return <div className="absolute top-1/2 -right-12 -translate-y-1/2 animate-bounce"><Hand className="w-8 h-8 text-jansahay-blue fill-white" /></div>;
      case "point_up": return <div className="absolute -top-12 left-1/2 -translate-x-1/2 -rotate-90 animate-bounce"><Hand className="w-8 h-8 text-jansahay-blue fill-white" /></div>;
      case "point_down": return <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 rotate-90 animate-bounce"><Hand className="w-8 h-8 text-jansahay-blue fill-white" /></div>;
      case "thumbs_up": return <div className="absolute top-0 -right-4 animate-bounce"><ThumbsUp className="w-8 h-8 text-jansahay-green fill-white" /></div>;
      case "wave": return <div className="absolute -top-4 -right-4 animate-bounce origin-bottom"><Hand className="w-8 h-8 text-jansahay-blue fill-white" /></div>;
      default: return null;
    }
  };

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      
      {/* Listening Waveform Background */}
      <AnimatePresence>
        {state === "listening" && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.2 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
            className="absolute inset-0 bg-jansahay-blue/20 rounded-full blur-xl"
          />
        )}
      </AnimatePresence>

      <motion.div 
        className={`relative w-full h-full rounded-full overflow-hidden shadow-xl border-4 ${state === 'emergency' ? 'border-jansahay-red' : 'border-transparent'}`}
        style={{ 
          perspective: 1000,
          filter: filterStyle
        }}
        animate={{ y: bodyBounce, scale: bodyScale }}
        transition={{ repeat: Infinity, duration: bounceDuration, ease: "easeInOut" }}
      >
        <motion.div
          className="relative"
          style={{
            rotateX,
            rotateY,
            width: '100%',
            height: '100%',
            transformStyle: "preserve-3d"
          }}
        >
          {/* Breathing animation wrapper */}
          <motion.div 
            animate={{ 
              y: [0, -5, 0], 
              scaleY: [1, 1.02, 1],
              scaleX: [1, 0.99, 1] 
            }} 
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-full h-full"
          >
            {/* We use Next.js Image with a highly polished 3D render */}
            <Image 
              src="/saarthi.jpg" 
              alt="Saarthi Mascot" 
              fill
              sizes={`${size}px`}
              className="object-cover scale-110 pointer-events-none" 
              priority
            />
          </motion.div>
          
          {/* State overlays */}
          {state === "thinking" && (
            <div className="absolute inset-0 bg-jansahay-purple/10 mix-blend-overlay"></div>
          )}
          {state === "emergency" && (
            <div className="absolute inset-0 bg-jansahay-red/10 mix-blend-overlay"></div>
          )}
        </motion.div>
      </motion.div>

      {/* Floating Gesture Overlays */}
      <AnimatePresence>
        {gesture !== "none" && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute inset-0 z-10 pointer-events-none"
          >
            {getGestureIcon()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
