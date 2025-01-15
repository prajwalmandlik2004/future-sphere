import React, { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Tickets() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedTicket, setSelectedTicket] = useState<number | null>(null);

  const tickets = [
    {
      name: "Adult Ticket",
      price: 300,
      description: "For visitors 18 and above",
      features: [
        "Access to all exhibits",
        "Interactive demonstrations",
        "Science shows",
        "Guided tours",
        "Free workshop access"
      ],
      image: "https://media.istockphoto.com/id/1009638284/photo/business-team-walking-together.jpg?s=612x612&w=0&k=20&c=oi5-SXjaQd1CAp30BrIqtBSJf4_jAemjNvHYAWfHlEA="
    },
    {
      name: "Youth Ticket",
      price: 200,
      description: "For visitors below 18",
      features: [
        "Access to all exhibits",
        "Interactive demonstrations",
        "Science shows",
        "Special youth activities",
        "Educational materials"
      ],
      image: "https://media.istockphoto.com/id/1338737959/photo/little-kids-schoolchildren-pupils-students-running-hurrying-to-the-school-building-for.jpg?s=612x612&w=0&k=20&c=u2eZV7PY4TTGKvxRBRkhiaDoFFEFPKeOlCsYARCqFSI="
    }
  ];

  return (
    <section id="tickets" className="relative py-20 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <motion.h2
            initial={{ y: 20 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base text-primary-400 font-semibold tracking-wide uppercase"
          >
            Tickets
          </motion.h2>
          <motion.p
            initial={{ y: 20 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl"
          >
            Choose Your Experience
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {tickets.map((ticket, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20">
                <div className="h-48 overflow-hidden">
                  <img
                    src={ticket.image}
                    alt={ticket.name}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white">{ticket.name}</h3>
                  <p className="mt-4 text-gray-400">{ticket.description}</p>
                  <div className="mt-6 flex items-baseline">
                    <span className="text-5xl font-extrabold text-white">₹{ticket.price}</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedTicket(selectedTicket === index ? null : index)}
                    className="mt-8 w-full rounded-lg py-3 px-6 text-base font-medium bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-300"
                  >
                    <span className="flex items-center justify-center">
                      View Details
                      <ChevronDown
                        className={`ml-2 h-5 w-5 transform transition-transform duration-300 ${
                          selectedTicket === index ? 'rotate-180' : ''
                        }`}
                      />
                    </span>
                  </motion.button>

                  <AnimatePresence>
                    {selectedTicket === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-6 space-y-4 border-t border-gray-800 pt-6">
                          {ticket.features.map((feature, featureIndex) => (
                            <motion.li
                              key={featureIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: featureIndex * 0.1 }}
                              className="flex items-center"
                            >
                              <Check className="h-5 w-5 text-primary-400" />
                              <span className="ml-3 text-gray-400">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="mt-6 w-full rounded-lg bg-primary-600 py-3 px-6 text-base font-medium text-white hover:bg-primary-700 transition-colors duration-300"
                        >
                          Get Tickets
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}