import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HERO_CONTENT } from '../constants/data'
import profileImg from '../assets/profile.jpeg'



const techStack = ['Java', 'C++', 'Qt', 'SQL', 'Spring Boot', 'Hibernate'];

function Information() {
  const [currentTech, setCurrentTech] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techStack.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative  overflow-hidden">
      {/* Geometric background patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 border border-purple-500/30 rounded-full" />
        <div className="absolute bottom-40 right-20 w-96 h-96 border border-pink-500/20 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 border border-indigo-500/20 rotate-45" />
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400 rounded-full"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
            opacity: Math.random() * 0.5 
          }}
          animate={{ 
            y: [null, Math.random() * -100],
            opacity: [null, 0] 
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity,
            delay: Math.random() * 5 
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Status badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-full"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm text-neutral-300">Available for opportunities</span>
            </motion.div>

            {/* Main heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-7xl lg:text-8xl font-black tracking-tight"
              >
                <span className="block text-white">Swarna C S</span>
               <span className="block bg-gradient-to-r from-slate-300 via-slate-500 to-slate-800
 bg-clip-text text-transparent text-xl md:text-2xl lg:text-6xl">
  Java Developer
</span>

              </motion.h1>

              {/* Dynamic role text */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3 text-2xl lg:text-3xl text-neutral-400"
              >
                <span className="font-light">Building with</span>
                <motion.span
                  key={currentTech}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="font-bold text-purple-400"
                >
                  {techStack[currentTech]}
                </motion.span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl text-neutral-400 leading-relaxed max-w-2xl"
            >
              {HERO_CONTENT}
            </motion.p>
          </motion.div>

          {/* Right Side - Creative Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative flex justify-center items-center"
          >
            {/* Rotating rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[400px] h-[400px] border-2 border-purple-500/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[350px] h-[350px] border-2 border-pink-500/20 rounded-full"
            />

            {/* Center profile container */}
            <div className="relative z-10 w-80 h-80 lg:w-96 lg:h-96">
              {/* Gradient glow */}
              <div className="absolute inset-0  rounded-full blur-3xl opacity-40 animate-pulse" />
              
              {/* Image container */}
              <div className="relative w-full h-full p-1 rounded-full">
                <div className="w-full h-full bg-neutral-900 rounded-full overflow-hidden flex items-center justify-center">
                  <div className="w-full h-full flex items-center justify-center text-neutral-600 text-xl font-semibold bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-950">
              <img
              className=" rounded-lg object-cover" src={profileImg} alt='Profile-img' />                 
              </div>
                </div>
              </div>

            
            </div>
          </motion.div>
        </div>

       
      </div>
    </div>
  );
}

export default Information;