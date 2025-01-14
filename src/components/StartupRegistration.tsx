import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket } from 'lucide-react';

export default function StartupRegistration() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const industries = [
    "Artificial Intelligence",
    "Biotechnology",
    "Clean Energy",
    "Education Technology",
    "Financial Technology",
    "Healthcare",
    "Internet of Things",
    "Robotics",
    "Space Technology",
    "Other"
  ];

  const priceRanges = [
    "Under ₹5 Lakhs",
    "₹5 Lakhs - ₹20 Lakhs",
    "₹20 Lakhs - ₹50 Lakhs",
    "₹50 Lakhs - ₹1 Crore",
    "Above ₹1 Crore"
  ];

  return (
    <section id="startup" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <div className="p-3 bg-primary-600 rounded-full">
              <Rocket className="h-8 w-8 text-white" />
            </div>
          </motion.div>
          <motion.h2
            initial={{ y: 20 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base text-primary-400 font-semibold tracking-wide uppercase"
          >
            Startup Zone
          </motion.h2>
          <motion.p
            initial={{ y: 20 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl"
          >
            Register Your Startup
          </motion.p>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800"
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-primary-500 focus:ring-primary-500"
                required
              />
            </div>

            <div>
              <label htmlFor="idea" className="block text-sm font-medium text-gray-300">
                Startup Idea
                <span className="text-gray-500 text-xs ml-2">(500 words max)</span>
              </label>
              <textarea
                id="idea"
                rows={6}
                maxLength={500}
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-primary-500 focus:ring-primary-500"
                required
              ></textarea>
            </div>

            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-gray-300">
                Industry
              </label>
              <select
                id="industry"
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-primary-500 focus:ring-primary-500"
                required
              >
                <option value="">Select an industry</option>
                {industries.map((industry, index) => (
                  <option key={index} value={industry.toLowerCase().replace(/\s+/g, '-')}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="price-range" className="block text-sm font-medium text-gray-300">
                Price Range
              </label>
              <select
                id="price-range"
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-primary-500 focus:ring-primary-500"
                required
              >
                <option value="">Select a price range</option>
                {priceRanges.map((range, index) => (
                  <option key={index} value={range.toLowerCase().replace(/\s+/g, '-')}>
                    {range}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="prototypes" className="block text-sm font-medium text-gray-300">
                Number of Prototypes
              </label>
              <input
                type="number"
                id="prototypes"
                min="0"
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-primary-500 focus:ring-primary-500"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-300"
            >
              Register Startup
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}