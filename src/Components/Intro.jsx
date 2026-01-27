import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Intro = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Logic for the counter
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 99) {
          clearInterval(timer);
          // 2. Wait a few milliseconds after 99%, then trigger the completion
          setTimeout(() => {
            onComplete(true);
          }, 500);
          return 99;
        }
        return prev + 1;
      });
    }, 30); // Speed of loading

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, y: -20 }} // Smooth fade out
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-zinc-950 flex flex-col items-center justify-center font-mono text-green-500"
    >
      <div className="w-">
        <h1 className="text-xl mb-4 tracking-tighter">
          SYSTEM_INIT: <span className="text-white">Welcome user!</span>
        </h1>

        {/* Progress Bar Container */}
        <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-green-500"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage Text */}
        <div className="mt-2 flex justify-between text-xs">
          <span>STATUS: LOADING_ASSETS</span>
          <span className="text-white">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Intro;
