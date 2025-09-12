import React from 'react';
import { motion } from 'framer-motion';
import { Award, Coffee, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "5+ Years Experience",
      description: "Building web applications"
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "100+ Projects",
      description: "Successfully delivered"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "50+ Happy Clients",
      description: "Worldwide collaboration"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Performance",
      description: "Optimized solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate developer creating digital experiences that matter
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 dark:bg-blue-500 rounded-xl flex items-center justify-center">
                <Zap className="h-12 w-12 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Bio and Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience 
                creating digital solutions that combine beautiful design with robust functionality. 
                I specialize in React, Node.js, and modern web technologies.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="text-blue-600 dark:text-blue-400">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;