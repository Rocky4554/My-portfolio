import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      name: "React",
      level: 95,
      icon: "⚛️",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "JavaScript",
      level: 90,
      icon: "🟨",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      name: "Node.js",
      level: 85,
      icon: "🟢",
      color: "from-green-400 to-green-600"
    },
    {
      name: "TypeScript",
      level: 80,
      icon: "🔷",
      color: "from-blue-500 to-blue-700"
    },
    {
      name: "Python",
      level: 75,
      icon: "🐍",
      color: "from-blue-400 to-yellow-500"
    },
    {
      name: "MongoDB",
      level: 85,
      icon: "🍃",
      color: "from-green-500 to-green-700"
    },
    {
      name: "PostgreSQL",
      level: 80,
      icon: "🐘",
      color: "from-blue-600 to-indigo-600"
    },
    {
      name: "Docker",
      level: 70,
      icon: "🐳",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "AWS",
      level: 75,
      icon: "☁️",
      color: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Glassmorphism card */}
              <div className="relative p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl border border-white/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 m-[-1px]">
                  
                  {/* Skill icon and name */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}% Proficiency
                      </p>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="relative">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`h-2 bg-gradient-to-r ${skill.color} rounded-full relative`}
                      >
                        <div className="absolute right-0 top-0 w-2 h-2 bg-white rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Floating particles effect */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="relative">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            y: [-10, -20, -10],
                            x: [0, 5, 0],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 2,
                            delay: i * 0.5,
                            repeat: Infinity,
                          }}
                          className={`absolute w-1 h-1 bg-gradient-to-r ${skill.color} rounded-full`}
                          style={{
                            left: i * 4,
                            top: i * -2
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;