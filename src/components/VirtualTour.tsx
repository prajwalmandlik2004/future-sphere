//  import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaVrCardboard,
  FaMousePointer,
  FaCompass,
  FaCube,
} from "react-icons/fa";

export default function VirtualTour() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: FaVrCardboard,
      title: "360° Experience",
      description:
        "Immerse yourself in our exhibits with full 360-degree views",
    },
    {
      icon: FaMousePointer,
      title: "Interactive Elements",
      description:
        "Click on exhibits to learn more with detailed information and videos",
    },
    {
      icon: FaCompass,
      title: "Self-Guided Navigation",
      description: "Move freely through the museum at your own pace",
    },
    {
      icon: FaCube,
      title: "3D Models",
      description: "Interact with detailed 3D models of key exhibits",
    },
  ];

  return (
    <section id="virtual-tour" className="py-20 bg-black">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 20 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base text-primary-400 font-semibold tracking-wide uppercase"
          >
            Virtual Tour
          </motion.h2>
          <motion.p
            initial={{ y: 20 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl"
          >
            Experience From Anywhere
          </motion.p>
        </div>

        <div className="relative">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img
              src="https://t4.ftcdn.net/jpg/08/93/76/75/360_F_893767595_6WRkhHzwFg03TqPD5RlvMVhMF1Bl4EBQ.jpg"
              alt="Virtual Tour Preview"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <FaVrCardboard className="h-6 w-6" />
                  Start Virtual Tour
                </motion.button>
              </div>
            </div>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative bg-gray-900 p-6 rounded-xl border border-gray-800"
              >
                <div className="absolute -top-4 left-4">
                  <div className="p-3 bg-primary-600 rounded-lg shadow-lg">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
