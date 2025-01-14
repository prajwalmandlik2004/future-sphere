import React from 'react';
import { Bot, Cpu, Rocket, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function Exhibits() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const exhibits = [
    {
      title: "AI & Robotics Lab",
      description: "Interact with advanced AI systems and robotic demonstrations",
      icon: Bot,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
      additionalImages: [
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800",
      ]
    },
    {
      title: "Virtual Reality Zone",
      description: "Experience immersive virtual worlds and cutting-edge VR technology",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80&w=800",
      additionalImages: [
        "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1626387346567-68d0c49ce1e5?auto=format&fit=crop&q=80&w=800",
      ]
    },
    {
      title: "Space Exploration",
      description: "Journey through the cosmos in our state-of-the-art planetarium",
      icon: Rocket,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      additionalImages: [
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=800",
      ]
    },
    {
      title: "Renewable Energy",
      description: "Discover sustainable technologies shaping our future",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800",
      additionalImages: [
        "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800",
      ]
    },
  ];

  return (
    <section id="exhibits" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <motion.h2
            initial={{ y: 20 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base text-blue-400 font-semibold tracking-wide uppercase"
          >
            Exhibits
          </motion.h2>
          <motion.p
            initial={{ y: 20 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl"
          >
            Interactive Experiences
          </motion.p>
        </div>

        <div className="mt-20">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="w-full py-12"
          >
            {exhibits.map((exhibit, index) => (
              <SwiperSlide key={index} className="w-[300px] sm:w-[400px]">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative group rounded-lg overflow-hidden"
                >
                  <div className="relative h-[400px] w-full">
                    <img
                      src={exhibit.image}
                      alt={exhibit.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center gap-2">
                          <exhibit.icon className="h-6 w-6 text-blue-400" />
                          <h3 className="text-xl font-bold text-white">{exhibit.title}</h3>
                        </div>
                        <p className="mt-2 text-sm text-gray-300">{exhibit.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {exhibits.map((exhibit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-gray-900 rounded-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-500 rounded-lg">
                  <exhibit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{exhibit.title}</h3>
              </div>
              <p className="text-gray-400 mb-6">{exhibit.description}</p>
              <div className="grid grid-cols-2 gap-2">
                {exhibit.additionalImages.map((img, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={img}
                    alt={`${exhibit.title} detail ${imgIndex + 1}`}
                    className="rounded-lg h-24 w-full object-cover"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}