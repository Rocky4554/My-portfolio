// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     await new Promise(resolve => setTimeout(resolve, 2000));
    
//     setIsSubmitting(false);
//     setFormData({ name: '', email: '', message: '' });
//     alert('Message sent successfully!');
//   };

//   const contactInfo = [
//     {
//       icon: <Mail className="h-6 w-6" />,
//       label: "Email",
//       value: "hello@johndoe.dev",
//       href: "mailto:hello@johndoe.dev"
//     },
//     {
//       icon: <Phone className="h-6 w-6" />,
//       label: "Phone",
//       value: "+1 (555) 123-4567",
//       href: "tel:+15551234567"
//     },
//     {
//       icon: <MapPin className="h-6 w-6" />,
//       label: "Location",
//       value: "San Francisco, CA",
//       href: "#"
//     }
//   ];

//   const socialLinks = [
//     {
//       icon: <Github className="h-6 w-6" />,
//       label: "GitHub",
//       href: "https://github.com",
//       color: "hover:text-gray-900 dark:hover:text-white"
//     },
//     {
//       icon: <Linkedin className="h-6 w-6" />,
//       label: "LinkedIn",
//       href: "https://linkedin.com",
//       color: "hover:text-blue-600"
//     },
//     {
//       icon: <Twitter className="h-6 w-6" />,
//       label: "Twitter",
//       href: "https://twitter.com",
//       color: "hover:text-blue-400"
//     }
//   ];

//   return (
//     <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
//       {/* Background elements */}
//       <div className="absolute inset-0 opacity-5 dark:opacity-10">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
//       </div>

//       <div className="container mx-auto px-6 relative">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
//             Get In Touch
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             Let's discuss your project and see how we can work together
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12">

// {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             <div>
//               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
//                 Contact Information
//               </h3>
//               <div className="space-y-4">
//                 {contactInfo.map((item, index) => (
//                   <motion.a
//                     key={index}
//                     href={item.href}
//                     whileHover={{ x: 5 }}
//                     className="flex items-center space-x-4 p-4 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/20 hover:shadow-lg transition-all duration-300"
//                   >
//                     <div className="text-blue-600 dark:text-blue-400">
//                       {item.icon}
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500 dark:text-gray-400">
//                         {item.label}
//                       </p>
//                       <p className="text-gray-900 dark:text-white font-medium">
//                         {item.value}
//                       </p>
//                     </div>
//                   </motion.a>
//                 ))}
//               </div>
//             </div>

//             {/* Social Links */}
//             <div>
//               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
//                 Follow Me
//               </h3>
//               <div className="flex space-x-4">
//                 {socialLinks.map((social, index) => (
//                   <motion.a
//                     key={index}
//                     href={social.href}
//                     whileHover={{ scale: 1.1, y: -2 }}
//                     whileTap={{ scale: 0.95 }}
//                     className={`p-4 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/20 text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 hover:shadow-lg`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     {social.icon}
//                   </motion.a>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
//                   placeholder="Your name"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
//                   placeholder="your@email.com"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={6}
//                   className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white resize-none"
//                   placeholder="Tell me about your project..."
//                 />
//               </div>

//               <motion.button
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <div className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
//                     <span>Sending...</span>
//                   </>
//                 ) : (
//                   <>
//                     <Send className="h-5 w-5" />
//                     <span>Send Message</span>
//                   </>
//                 )}
//               </motion.button>
//             </form>
//           </motion.div>

          
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

////////////////////////////


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  // API base URL
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await axios.post(`${API_BASE_URL}/api/contact-us`, {
        name: data.name.trim(),
        email: data.email.trim(),
        message: data.message.trim()
      });

      if (response.data.success) {
        setSubmitStatus('success');
        setIsFlipped(true);
        reset();
        // Reset flip after 5 seconds
        setTimeout(() => setIsFlipped(false), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "hello@johndoe.dev",
      href: "mailto:hello@johndoe.dev"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-blue-600"
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      label: "Twitter",
      href: "https://twitter.com",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
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
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Let's discuss your project and see how we can work together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info with Flip Animation */}
          <motion.div
            className="relative"
            style={{ perspective: 1000 }}
          >
            <motion.div
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <AnimatePresence initial={false} mode="wait">
                {!isFlipped ? (
                  <motion.div
                    key="front"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8 backface-hidden"
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Contact Information
                      </h3>
                      <div className="space-y-4">
                        {contactInfo.map((item, index) => (
                          <motion.a
                            key={index}
                            href={item.href}
                            whileHover={{ x: 5 }}
                            className="flex items-center space-x-4 p-4 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/20 hover:shadow-lg transition-all duration-300"
                          >
                            <div className="text-blue-600 dark:text-blue-400">
                              {item.icon}
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {item.label}
                              </p>
                              <p className="text-gray-900 dark:text-white font-medium">
                                {item.value}
                              </p>
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Follow Me
                      </h3>
                      <div className="flex space-x-4">
                        {socialLinks.map((social, index) => (
                          <motion.a
                            key={index}
                            href={social.href}
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className={`p-4 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/20 text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 hover:shadow-lg`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {social.icon}
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="back"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center bg-green-900 rounded-xl backface-hidden"
                    style={{ transform: 'rotateY(180deg)' }}
                  >
                    <div className="text-center p-8">
                      <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                      <p className="text-2xl font-bold text-green-400">
                        Message Sent Successfully!
                      </p>
                      <p className="text-gray-300 mt-2">
                        We'll get back to you within 24-48 hours.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  id="name"
                  {...register('name', {
                    required: 'Name is required',
                    minLength: {
                      value: 2,
                      message: 'Name must be at least 2 characters'
                    }
                  })}
                  className={`w-full px-4 py-3 bg-white dark:bg-gray-900 border ${
                    errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                  } rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white`}
                  placeholder="Your name"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Please enter a valid email address'
                    }
                  })}
                  className={`w-full px-4 py-3 bg-white dark:bg-gray-900 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                  } rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white`}
                  placeholder="your@email.com"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  {...register('message', {
                    required: 'Message is required',
                    minLength: {
                      value: 10,
                      message: 'Message must be at least 10 characters'
                    }
                  })}
                  rows={6}
                  className={`w-full px-4 py-3 bg-white dark:bg-gray-900 border ${
                    errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                  } rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white resize-none`}
                  placeholder="Tell me about your project..."
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                )}
              </div>

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-900 border border-red-600 text-red-100 rounded-lg flex items-start space-x-3">
                  <p className="text-sm">Something went wrong. Please try again.</p>
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default Contact;