'use client';

import { motion } from 'framer-motion';
import { Battery, Sun, Wrench } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import ServiceBlock from './components/ServiceBlock';
import Carousel from './components/Carousel';

export default function Home() {
  // Sample carousel images for batteries/inverters
  const batteryImages = [
    '/products/batteries/battery1.jpg',
    '/products/batteries/battery2.jpg',
    '/products/batteries/battery3.jpg',
    '/products/inverters/inverter1.jpg',
    '/products/inverters/inverter2.jpg',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8"
          >
            {/* Logo - Using styled text since user will provide image later */}
            <div className="mb-6 flex justify-center">
              <motion.div
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 360 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="bg-gradient-to-br from-[#DC2626] to-[#991B1B] text-white px-12 py-8 rounded-2xl shadow-2xl"
              >
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                  Raja Agencies
                </h1>
              </motion.div>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-700 font-medium"
            >
              We are in sales and services since{' '}
              <span className="text-[#DC2626] font-bold text-3xl">1992</span>
            </motion.p>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-1 bg-gradient-to-r from-transparent via-[#DC2626] to-transparent max-w-md mx-auto mb-12"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-20"
          >
            Your trusted partner for quality batteries, inverters, solar solutions, 
            and professional installation services.
          </motion.p>
        </section>

        {/* Three Service Blocks */}
        <section className="container mx-auto px-4 pb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
          >
            Our <span className="text-[#DC2626]">Services</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Block 1: Batteries & Inverters */}
            <ServiceBlock
              title="Batteries & Inverters"
              description="Wide range of high-quality batteries and inverters from leading brands. Find the perfect power backup solution for your needs."
              icon={<Battery size={32} />}
              href="/batteriesandinverters"
              delay={0.1}
            >
              <Carousel images={batteryImages} autoplay={true} interval={3000} />
            </ServiceBlock>

            {/* Block 2: Solar Solutions */}
            <ServiceBlock
              title="Solar Solutions"
              description="Professional solar panel installation for commercial and residential properties. Harness renewable energy and reduce electricity costs."
              icon={<Sun size={32} />}
              href="/solar"
              delay={0.2}
            >
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-gradient-to-br from-[#FEE2E2] to-white p-4 rounded-lg text-center border border-[#DC2626]/20">
                  <p className="text-sm font-semibold text-[#DC2626]">Commercial</p>
                  <p className="text-xs text-gray-600 mt-1">Large-scale installations</p>
                </div>
                <div className="bg-gradient-to-br from-[#FEE2E2] to-white p-4 rounded-lg text-center border border-[#DC2626]/20">
                  <p className="text-sm font-semibold text-[#DC2626]">Residential</p>
                  <p className="text-xs text-gray-600 mt-1">Home solar systems</p>
                </div>
              </div>
            </ServiceBlock>

            {/* Block 3: Services */}
            <ServiceBlock
              title="Installation & Services"
              description="Expert installation, maintenance, and repair services. Our experienced technicians ensure optimal performance and longevity."
              icon={<Wrench size={32} />}
              href="/services"
              delay={0.3}
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-2 h-2 bg-[#DC2626] rounded-full"></span>
                  Professional Installation
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-2 h-2 bg-[#DC2626] rounded-full"></span>
                  Regular Maintenance
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-2 h-2 bg-[#DC2626] rounded-full"></span>
                  24/7 Repair Support
                </div>
              </div>
            </ServiceBlock>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="bg-gradient-to-r from-[#DC2626] to-[#991B1B] py-16 mt-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-5xl font-bold mb-2">30+</p>
                <p className="text-xl">Years of Experience</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-5xl font-bold mb-2">10,000+</p>
                <p className="text-xl">Happy Customers</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-5xl font-bold mb-2">100%</p>
                <p className="text-xl">Quality Assured</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
