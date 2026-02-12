'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Wrench, Settings, Clock, CheckCircle, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import InquiryButton from '../components/InquiryButton';

export default function Services() {
  const services = [
    {
      icon: <Wrench size={32} />,
      title: "Professional Installation",
      description: "Expert installation services for batteries, inverters, and solar systems. Our certified technicians ensure proper setup and optimal performance.",
      features: [
        "Site assessment and planning",
        "Professional mounting and wiring",
        "System testing and commissioning",
        "User training and documentation",
        "Compliance with safety standards"
      ]
    },
    {
      icon: <Settings size={32} />,
      title: "Regular Maintenance",
      description: "Keep your systems running at peak efficiency with our comprehensive maintenance packages. Prevent issues before they occur.",
      features: [
        "Periodic system inspection",
        "Cleaning and optimization",
        "Performance monitoring",
        "Preventive maintenance",
        "Detailed service reports"
      ]
    },
    {
      icon: <Clock size={32} />,
      title: "24/7 Repair Support",
      description: "Fast and reliable repair services whenever you need them. Our expert technicians are available round the clock.",
      features: [
        "Emergency repair services",
        "Same-day response",
        "Genuine spare parts",
        "Experienced technicians",
        "Warranty on repairs"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Header />
      
      <main className="pt-24 pb-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#DC2626] to-[#991B1B] text-white py-16 mb-12">
          <div className="container mx-auto px-4">
            <Link href="/">
              <motion.button
                whileHover={{ x: -5 }}
                className="flex items-center gap-2 text-white/90 hover:text-white mb-6 text-sm"
              >
                <ArrowLeft size={20} />
                Back to Home
              </motion.button>
            </Link>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Our Services
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-white/90 max-w-3xl"
            >
              Comprehensive installation, maintenance, and repair services backed by 
              over 30 years of expertise. Your satisfaction is our priority.
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="container mx-auto px-4 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100 hover:border-[#DC2626] transition-all duration-500 h-full"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-br from-[#DC2626] to-[#EF4444] rounded-xl flex items-center justify-center mb-6 shadow-lg"
                  >
                    <div className="text-white">{service.icon}</div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="text-[#DC2626] flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <InquiryButton 
                    text="Request Service" 
                    className="w-full"
                  />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="container mx-auto px-4 mb-12">
          <AnimatedSection delay={0.2}>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
                Why Choose <span className="text-[#DC2626]">Raja Agencies?</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-white rounded-xl shadow-md"
                >
                  <div className="text-5xl font-bold text-[#DC2626] mb-3">30+</div>
                  <p className="text-gray-700 font-semibold">Years of Experience</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-white rounded-xl shadow-md"
                >
                  <div className="text-5xl font-bold text-[#DC2626] mb-3">10K+</div>
                  <p className="text-gray-700 font-semibold">Happy Customers</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-white rounded-xl shadow-md"
                >
                  <div className="text-5xl font-bold text-[#DC2626] mb-3">24/7</div>
                  <p className="text-gray-700 font-semibold">Support Available</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-white rounded-xl shadow-md"
                >
                  <div className="text-5xl font-bold text-[#DC2626] mb-3">100%</div>
                  <p className="text-gray-700 font-semibold">Quality Assured</p>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Service Process */}
        <section className="container mx-auto px-4 mb-12">
          <AnimatedSection delay={0.3}>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              Our Service <span className="text-[#DC2626]">Process</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Contact Us", desc: "Reach out via phone, email, or inquiry form" },
                { step: "2", title: "Assessment", desc: "Our experts evaluate your requirements" },
                { step: "3", title: "Service", desc: "Professional execution of the service" },
                { step: "4", title: "Follow-up", desc: "We ensure your complete satisfaction" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-[#DC2626] transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#DC2626] to-[#EF4444] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-center text-sm">
                      {item.desc}
                    </p>
                  </div>
                  
                  {/* Arrow */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-[#DC2626]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* Contact CTA */}
        <section className="container mx-auto px-4">
          <AnimatedSection delay={0.4}>
            <div className="bg-gradient-to-r from-[#DC2626] to-[#991B1B] rounded-2xl p-8 md:p-12 text-white shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Need Immediate Assistance?
                </h2>
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                  Our customer support team is available 24/7 to help you with any queries or service requests.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <motion.a
                  href="tel:+91XXXXXXXXXX"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 bg-white text-[#DC2626] px-6 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg"
                >
                  <Phone size={24} />
                  <span>Call Us Now</span>
                </motion.a>

                <motion.a
                  href="mailto:rajaagenciesgnt@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 bg-white text-[#DC2626] px-6 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg"
                >
                  <Mail size={24} />
                  <span>Email Us</span>
                </motion.a>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </main>

      <Footer />
    </div>
  );
}
