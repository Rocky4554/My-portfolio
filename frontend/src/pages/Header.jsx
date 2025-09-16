// // import React, { useState, useEffect } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { Menu, X, Sun, Moon, Code } from 'lucide-react';
// // import { useTheme } from '../hooks/useTheme';
// // import { useScrollSpy } from '../hooks/useScrollSpy';

// // const Header = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const { isDark, toggleTheme } = useTheme();
// //   const activeSection = useScrollSpy(['home', 'about', 'projects', 'skills', 'contact']);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 50);
// //     };
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const scrollToSection = (sectionId) => {
// //     document.getElementById(sectionId)?.scrollIntoView({
// //       behavior: 'smooth',
// //       block: 'start',
// //     });
// //     setIsOpen(false);
// //   };

// //   const navItems = [
// //     { id: 'home', label: 'Home' },
// //     { id: 'about', label: 'About' },
// //     { id: 'projects', label: 'Projects' },
// //     { id: 'skills', label: 'Skills' },
// //     { id: 'contact', label: 'Contact' },
// //   ];

// //   return (
// //     <motion.header
// //       initial={{ y: -100 }}
// //       animate={{ y: 0 }}
// //       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
// //         isScrolled
// //           ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
// //           : 'bg-transparent'
// //       }`}
// //     >
// //       <nav className="container mx-auto px-6 py-4">
// //         <div className="flex items-center justify-between">
// //           {/* Logo */}
// //           <motion.div
// //             whileHover={{ scale: 1.05 }}
// //             className="flex items-center space-x-2 cursor-pointer"
// //             onClick={() => scrollToSection('home')}
// //           >
// //             <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
// //             <span className="text-xl font-bold text-gray-800 dark:text-white">
// //               Portfolio
// //             </span>
// //           </motion.div>

// //           {/* Desktop Navigation */}
// //           <div className="hidden md:flex items-center space-x-8">
// //             {navItems.map((item) => (
// //               <button
// //                 key={item.id}
// //                 onClick={() => scrollToSection(item.id)}
// //                 className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
// //                   activeSection === item.id
// //                     ? 'text-blue-600 dark:text-blue-400'
// //                     : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
// //                 }`}
// //               >
// //                 {item.label}
// //                 {activeSection === item.id && (
// //                   <motion.div
// //                     layoutId="activeSection"
// //                     className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
// //                   />
// //                 )}
// //               </button>
// //             ))}
            
// //             {/* Theme Toggle */}
// //             <motion.button
// //               whileHover={{ scale: 1.1 }}
// //               whileTap={{ scale: 0.9 }}
// //               onClick={toggleTheme}
// //               className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
// //             >
// //               {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
// //             </motion.button>
// //           </div>

// //           {/* Mobile Menu Button */}
// //           <div className="md:hidden flex items-center space-x-4">
// //             <motion.button
// //               whileHover={{ scale: 1.1 }}
// //               whileTap={{ scale: 0.9 }}
// //               onClick={toggleTheme}
// //               className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
// //             >
// //               {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
// //             </motion.button>
            
// //             <button
// //               onClick={() => setIsOpen(!isOpen)}
// //               className="p-2 text-gray-700 dark:text-gray-300"
// //             >
// //               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// //             </button>
// //           </div>
// //         </div>

// //         {/* Mobile Navigation */}
// //         <AnimatePresence>
// //           {isOpen && (
// //             <motion.div
// //               initial={{ opacity: 0, x: 300 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               exit={{ opacity: 0, x: 300 }}
// //               className="fixed right-0 top-0 h-full w-64 bg-white dark:bg-gray-900 shadow-2xl z-40 md:hidden"
// //             >
// //               <div className="flex flex-col pt-20 px-6">
// //                 {navItems.map((item, index) => (
// //                   <motion.button
// //                     key={item.id}
// //                     initial={{ opacity: 0, x: 50 }}
// //                     animate={{ opacity: 1, x: 0 }}
// //                     transition={{ delay: index * 0.1 }}
// //                     onClick={() => scrollToSection(item.id)}
// //                     className={`text-left py-4 text-lg font-medium transition-colors duration-200 ${
// //                       activeSection === item.id
// //                         ? 'text-blue-600 dark:text-blue-400'
// //                         : 'text-gray-700 dark:text-gray-300'
// //                     }`}
// //                   >
// //                     {item.label}
// //                   </motion.button>
// //                 ))}
// //               </div>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </nav>
// //     </motion.header>
// //   );
// // };

// // export default Header;
// /////////////////////

// // import { useState, useEffect } from "react";
// // import { motion } from "framer-motion";
// // import {
// //   Home,
// //   User,
// //   LayoutGrid,
// //   FileText,
// //   Image as ImageIcon,
// //   Sun,
// //   Moon,
// // } from "lucide-react";

// // // nav items with icons
// // const navItems = [
// //   { id: "home", label: "Home", icon: <Home className="h-4 w-4" /> },
// //   { id: "about", label: "About", icon: <User className="h-4 w-4" /> },
// //   { id: "projects", label: "Projects", icon: <LayoutGrid className="h-4 w-4" /> },
// //   { id: "skills", label: "Skills", icon: <FileText className="h-4 w-4" /> },
// //   { id: "contact", label: "Contacts", icon: <ImageIcon className="h-4 w-4" /> },
// // ];

// // export default function FloatingHeader() {
// //   const [active, setActive] = useState("home");
// //   const [darkMode, setDarkMode] = useState(
// //     () => localStorage.getItem("theme") === "dark"
// //   );

// //   // sync theme with <html> class + localStorage
// //   useEffect(() => {
// //     if (darkMode) {
// //       document.documentElement.classList.add("dark");
// //       localStorage.setItem("theme", "dark");
// //     } else {
// //       document.documentElement.classList.remove("dark");
// //       localStorage.setItem("theme", "light");
// //     }
// //   }, [darkMode]);

// //   const handleNavClick = (id) => {
// //     setActive(id);
// //     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
// //   };

// //   return (
// //     <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
// //       <div className="flex items-center gap-2 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md px-4 py-2 border border-gray-300 dark:border-gray-700 shadow-lg">
// //         {navItems.map((item) => (
// //           <motion.button
// //             key={item.id}
// //             onClick={() => handleNavClick(item.id)}
// //             whileTap={{ scale: 0.9 }}
// //             className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
// //               active === item.id
// //                 ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
// //                 : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
// //             }`}
// //           >
// //             {item.icon}
// //             {item.label}
// //           </motion.button>
// //         ))}

// //         {/* Divider */}
// //         <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-2" />

// //         {/* Theme Toggle */}
// //         <motion.button
// //           whileTap={{ rotate: 180, scale: 0.9 }}
// //           onClick={() => setDarkMode(!darkMode)}
// //           className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
// //         >
// //           {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
// //         </motion.button>
// //       </div>
// //     </div>
// //   );
// // }

// ////////////////////////////////
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   Home,
//   User,
//   LayoutGrid,
//   FileText,
//   Image as ImageIcon,
//   Sun,
//   Moon,
// } from "lucide-react";

// // nav items with icons
// const navItems = [
//   { id: "home", label: "Home", icon: <Home className="h-4 w-4" /> },
//   { id: "about", label: "About", icon: <User className="h-4 w-4" /> },
//   { id: "projects", label: "Projects", icon: <LayoutGrid className="h-4 w-4" /> },
//   { id: "skills", label: "Skills", icon: <FileText className="h-4 w-4" /> },
//   { id: "contact", label: "Contacts", icon: <ImageIcon className="h-4 w-4" /> },
// ];

// export default function FloatingHeader() {
//   const [active, setActive] = useState("home");
//   const [darkMode, setDarkMode] = useState(
//     () => localStorage.getItem("theme") === "dark"
//   );

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);

//   const handleNavClick = (id) => {
//     setActive(id);
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
//       <div className="flex items-center gap-2 rounded-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg px-4 py-2 shadow-lg">
//         {navItems.map((item) => (
//           <motion.button
//             key={item.id}
//             onClick={() => handleNavClick(item.id)}
//             whileTap={{ scale: 0.9 }}
//             className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
//               active === item.id || item.id === "home"
//                 ? "bg-blue-100 dark:bg-blue-800/40 text-blue-700 dark:text-blue-200"
//                 : "text-gray-700 dark:text-gray-300"
//             } hover:bg-blue-100 dark:hover:bg-blue-800/40 hover:text-blue-700 dark:hover:text-blue-200`}
//           >
//             {item.icon}
//             {item.label}
//           </motion.button>
//         ))}

//         <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-2" />

//         <motion.button
//           whileTap={{ rotate: 180, scale: 0.9 }}
//           onClick={() => setDarkMode(!darkMode)}
//           className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
//         >
//           {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//         </motion.button>
//       </div>
//     </div>
//   );
// }


///////////

// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Home,
//   User,
//   LayoutGrid,
//   FileText,
//   Image as ImageIcon,
//   Sun,
//   Moon,
// } from "lucide-react";
// import { useTheme } from "../hooks/useTheme"; // Add this import

// // nav items with icons
// const navItems = [
//   { id: "home", label: "Home", icon: <Home className="h-4 w-4" /> },
//   { id: "about", label: "About", icon: <User className="h-4 w-4" /> },
//   { id: "projects", label: "Projects", icon: <LayoutGrid className="h-4 w-4" /> },
//   { id: "skills", label: "Skills", icon: <FileText className="h-4 w-4" /> },
//   { id: "contact", label: "Contacts", icon: <ImageIcon className="h-4 w-4" /> },
// ];

// export default function FloatingHeader() {
//   const [active, setActive] = useState("home");
//   const { isDark, toggleTheme } = useTheme(); // Use the theme context

//   const handleNavClick = (id) => {
//     setActive(id);
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
//       <div className="flex items-center gap-2 rounded-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm px-4 py-2 shadow-lg">
//         {navItems.map((item) => (
//           <motion.button
//             key={item.id}
//             onClick={() => handleNavClick(item.id)}
//             whileTap={{ scale: 0.9 }}
//             className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
//               active === item.id || item.id === "home"
//                 ? "bg-blue-100 dark:bg-cyan-900 text-blue-800 dark:text-blue-200"
//                 : "text-gray-700 dark:text-gray-300"
//             } hover:bg-blue-100 dark:hover:bg-blue-800/40 hover:text-blue-700 dark:hover:text-blue-200`}
//           >
//             {item.icon}
//             {item.label}
//           </motion.button>
//         ))}

//         <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-2" />

//         <motion.button
//           whileTap={{ rotate: 180, scale: 0.9 }}
//           onClick={toggleTheme} // Use toggleTheme from context
//           className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
//         >
//           {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//         </motion.button>
//       </div>
//     </div>
//   );
// }

///////////////
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Home,
  User,
  LayoutGrid,
  FileText,
  Image as ImageIcon,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const navItems = [
  { id: "home", label: "Home", icon: <Home className="h-4 w-4" /> },
  { id: "about", label: "About", icon: <User className="h-4 w-4" /> },
  { id: "projects", label: "Projects", icon: <LayoutGrid className="h-4 w-4" /> },
  { id: "skills", label: "Skills", icon: <FileText className="h-4 w-4" /> },
  { id: "contact", label: "Contacts", icon: <ImageIcon className="h-4 w-4" /> },
];

export default function FloatingHeader() {
  const [active, setActive] = useState("home");
  const { isDark, toggleTheme } = useTheme();

  const handleNavClick = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // 🔥 Scroll spy
  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-50px 0px -50% 0px",
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // const blurHeaderStyles = {
  //   height: "var(--static-space-80, 5rem)",
  //   background: `linear-gradient(
  //     var(--gradient-direction, 180deg),
  //     color-mix(in srgb, var(--base-color) 60%, transparent),
  //     color-mix(in srgb, var(--base-color) 30%, transparent),
  //     transparent
  //   )`,
  //   backdropFilter: "blur(12px)",
  //   "--static-space-80": "5rem",
  //   "--base-color": isDark ? "#111827" : "#ffffff",
  //   "--gradient-direction": "180deg",
  // };

  const blurHeaderStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: "2rem", // slightly bigger so blur shows below header
  background: isDark
    ? "linear-gradient(to bottom, rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.6), transparent)"
    : "linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.6), transparent)",
  backdropFilter: "blur(16px)", // stronger blur
  WebkitBackdropFilter: "blur(16px)", // safari support
  pointerEvents: "none", // make it non-clickable
  zIndex: 40,
};
  return (
    <>
      {/* ✨ Full-width blur background with CSS variables */}
      <div 
        className="fixed top-0 left-0 right-0 z-40"
        style={blurHeaderStyles}
      />
      
      {/* Header container */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center">
        {/* Actual header */}
        <div className="mt-4 flex items-center gap-2 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl px-4 py-2 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              whileTap={{ scale: 0.9 }}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                active === item.id
                  ? "bg-blue-100 dark:bg-cyan-900 text-blue-800 dark:text-blue-200"
                : "text-gray-700 dark:text-gray-300"
              } hover:bg-blue-100 dark:hover:bg-cyan-900 hover:text-blue-700 dark:hover:text-blue-200`}
            >
              {item.icon}
              {item.label}
            </motion.button>
          ))}

          <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-2" />

          <motion.button
            whileTap={{ rotate: 180, scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </motion.button>
        </div>
      </div>
    </>
  );
}