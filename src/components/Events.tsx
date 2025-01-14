import React from 'react';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-parallax';

export default function Events() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const events = [
    {
      title: "AI Workshop Series",
      date: "March 15-17, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Innovation Lab - Level 2",
      capacity: "30 participants",
      description: "Learn the fundamentals of artificial intelligence and machine learning through hands-on workshops.",
      image: "https://images.unsplash.com/photo-1526378800651-c1c6b5b27aea?auto=format&fit=crop&q=80&w=800",
      tags: ["Workshop", "AI", "Beginner-Friendly"]
    },
    {
      title: "Space Tech Hackathon",
      date: "April 5-7, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Main Exhibition Hall",
      capacity: "100 participants",
      description: "Join teams of innovators to solve space exploration challenges using cutting-edge technology.",
      image: "https://images.unsplash.com/photo-1517976547714-720226b864c1?auto=format&fit=crop&q=80&w=800",
      tags: ["Hackathon", "Space", "Competition"]
    },
    {
      title: "Future of Robotics",
      date: "April 20, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Auditorium",
      capacity: "200 participants",
      description: "Expert panel discussion on the latest developments in robotics and automation.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
      tags: ["Panel", "Robotics", "Expert Talk"]
    }
  ];

  return (
    <section id="events" className="py-20 bg-gray-900 overflow-hidden">
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
            className="text-base text-blue-400 font-semibold tracking-wide uppercase"
          >
            Events
          </motion.h2>
          <motion.p
            initial={{ y: 20 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl"
          >
            Upcoming Programs
          </motion.p>
        </div>

        <div className="grid gap-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.3, duration: 0.6 }}
            >
              <Parallax
                blur={0}
                bgImage={event.image}
                bgImageAlt={event.title}
                strength={200}
                className="rounded-xl overflow-hidden"
              >
                <div className="min-h-[400px] bg-gradient-to-r from-black/80 to-transparent p-8 flex items-center">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                      <div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {event.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">{event.title}</h3>
                        <p className="text-gray-300 text-lg">{event.description}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center text-gray-300">
                          <Calendar className="h-5 w-5 mr-2 text-blue-400" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <Clock className="h-5 w-5 mr-2 text-blue-400" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <MapPin className="h-5 w-5 mr-2 text-blue-400" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <Users className="h-5 w-5 mr-2 text-blue-400" />
                          <span>{event.capacity}</span>
                        </div>
                      </div>
                      <button className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
                        Register Now
                      </button>
                    </div>
                    <div className="hidden md:block">
                      {/* Additional content or graphics could go here */}
                    </div>
                  </div>
                </div>
              </Parallax>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}