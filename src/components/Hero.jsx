// import React from 'react';
// import { motion } from 'framer-motion';
// import { ChevronDown, Download, Mail } from 'lucide-react';

// const Hero = () => {
//   const scrollToSection = (sectionId) => {
//     document.getElementById(sectionId)?.scrollIntoView({
//       behavior: 'smooth',
//       block: 'start',
//     });
//   };

//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
//       {/* Background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20" />
      
//       {/* Animated background elements */}
//       <div className="absolute inset-0">
//         <motion.div
//           animate={{
//             x: [0, 100, 0],
//             y: [0, -100, 0],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300/20 dark:bg-blue-500/20 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{
//             x: [0, -100, 0],
//             y: [0, 100, 0],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/20 rounded-full blur-3xl"
//         />
//       </div>

//       <div className="container mx-auto px-6 text-center relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 100 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//             className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-medium mb-4"
//           >
//             Hello, I'm
//           </motion.p>
          
//           <motion.h1
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//             className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
//           >
//             John Doe
//           </motion.h1>
          
//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//             className="text-xl md:text-3xl text-gray-700 dark:text-gray-300 font-light mb-8"
//           >
//             Full Stack Developer
//           </motion.p>
          
//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8, duration: 0.8 }}
//             className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
//           >
//             I create exceptional digital experiences that combine beautiful design 
//             with powerful functionality
//           </motion.p>
          
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1, duration: 0.8 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//           >
//             <motion.button
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => scrollToSection('projects')}
//               className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
//             >
//               <span>View My Work</span>
//               <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
//             </motion.button>
            
//             <motion.button
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => scrollToSection('contact')}
//               className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2"
//             >
//               <Mail className="h-5 w-5" />
//               <span>Contact Me</span>
//             </motion.button>
//           </motion.div>
//         </motion.div>
//       </div>
      
//       {/* Scroll indicator */}
//       <motion.div
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//       >
//         <ChevronDown className="h-8 w-8 text-gray-400 dark:text-gray-600" />
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;




////////////////


import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail } from 'lucide-react';
import { useTheme } from "../hooks/useTheme"; // Adjust path based on your project structure
import DotGrid from './DotGrid'; // Adjust path if necessary

const Hero = () => {
  const { isDark } = useTheme();

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20" />
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:bg-black" /> */}
      {/* DotGrid Background (only in dark mode) */}
      {isDark && (
        <div className="absolute inset-0 z-0">
          <DotGrid
            dotSize={7}
            gap={15}
            baseColor="#5227FF"
            activeColor="#5227FF"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
      )}

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300/20 dark:bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-medium mb-4"
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          >
            John Doe
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-3xl text-gray-700 dark:text-gray-300 font-light mb-8"
          >
            Full Stack Developer
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            I create exceptional digital experiences that combine beautiful design 
            with powerful functionality
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <span>View My Work</span>
              <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2"
            >
              <Mail className="h-5 w-5" />
              <span>Contact Me</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="h-8 w-8 text-gray-400 dark:text-gray-600" />
      </motion.div>
    </section>
  );
};

export default Hero;