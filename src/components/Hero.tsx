import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
        style={{ filter: 'brightness(0.4)' }}
      >
        <source src="https://cdn.coverr.co/videos/coverr-a-futuristic-tunnel-2741/1080p.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/30 to-primary-900/30 mix-blend-multiply"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight"
        >
          Where Science Meets
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="block text-primary-400"
          >
            Imagination
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
        >
          Step into tomorrow's world today. Experience cutting-edge technology, 
          groundbreaking innovations, and the future of human achievement.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="group inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-all duration-300">
            Plan Your Visit
            <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 transition-all duration-300">
            Virtual Tour
          </button>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white text-sm flex flex-col items-center"
        >
          <span className="mb-2">Scroll to Explore</span>
          <ChevronRight className="h-6 w-6 transform rotate-90" />
        </motion.div>
      </div>
    </div>
  );
}