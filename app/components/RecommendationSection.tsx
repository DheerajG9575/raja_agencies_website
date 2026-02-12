'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Battery, Sun, Sparkles } from 'lucide-react';
import BatteryRecommendation from './BatteryRecommendation';
import SolarRecommendation from './SolarRecommendation';
import AnimatedSection from './AnimatedSection';

type Tab = 'battery' | 'solar';

export default function RecommendationSection() {
  const [activeTab, setActiveTab] = useState<Tab>('battery');

  return (
    <AnimatedSection delay={0.2}>
      <section className="container mx-auto px-4 py-16 md:py-20">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4"
          >
            <Sparkles className="text-[#DC2626]" size={24} />
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              Calculate Your Power Needs
            </h2>
            <Sparkles className="text-[#DC2626]" size={24} />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-base md:text-xl text-gray-600 px-4"
          >
            Get <span className="text-[#DC2626] font-semibold">instant recommendations</span> with our real-time calculator!
          </motion.p>
        </div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex bg-gray-100 rounded-xl p-1.5 shadow-lg">
            <button
              onClick={() => setActiveTab('battery')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'battery'
                  ? 'bg-gradient-to-r from-[#DC2626] to-[#EF4444] text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Battery size={20} />
              <span className="hidden sm:inline">Battery Calculator</span>
              <span className="sm:hidden">Battery</span>
            </button>
            <button
              onClick={() => setActiveTab('solar')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'solar'
                  ? 'bg-gradient-to-r from-[#DC2626] to-[#EF4444] text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Sun size={20} />
              <span className="hidden sm:inline">Solar Calculator</span>
              <span className="sm:hidden">Solar</span>
            </button>
          </div>
        </motion.div>

        {/* Content Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-white rounded-xl md:rounded-2xl shadow-2xl p-4 md:p-10 border-2 border-gray-100"
        >
          {activeTab === 'battery' ? <BatteryRecommendation /> : <SolarRecommendation />}
        </motion.div>

        {/* Help Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-6 md:mt-8 px-4"
        >
          <p className="text-sm md:text-base text-gray-600">
            Need expert advice? Contact us at{' '}
            <a href="tel:+917893456161" className="text-[#DC2626] font-semibold hover:underline">
              +91 78934 56161
            </a>
            {' '}or{' '}
            <a href="mailto:rajaagenciesgnt@gmail.com" className="text-[#DC2626] font-semibold hover:underline break-all">
              rajaagenciesgnt@gmail.com
            </a>
          </p>
        </motion.div>
      </section>
    </AnimatedSection>
  );
}
