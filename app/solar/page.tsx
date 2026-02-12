'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Building2, Home, Zap, TrendingDown, Shield, Leaf } from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import AnimatedSection from '../components/AnimatedSection';
import solarData from '../data/solar.json';

export default function Solar() {
  const [activeTab, setActiveTab] = useState<'all' | 'commercial' | 'residential'>('all');

  const filteredProducts = activeTab === 'all' 
    ? solarData 
    : solarData.filter(p => p.type === activeTab);

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
              Solar Solutions
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-white/90 max-w-3xl"
            >
              Harness the power of the sun with our premium solar panel systems. 
              Professional installation for both commercial and residential properties.
            </motion.p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 mb-12">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why Choose <span className="text-[#DC2626]">Solar Energy?</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-[#DC2626] transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#DC2626] to-[#EF4444] rounded-lg flex items-center justify-center mb-4">
                  <TrendingDown className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Save Money</h3>
                <p className="text-gray-600">
                  Reduce your electricity bills by up to 80% with our efficient solar systems.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-[#DC2626] transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#DC2626] to-[#EF4444] rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Go Green</h3>
                <p className="text-gray-600">
                  Reduce your carbon footprint and contribute to a cleaner environment.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-[#DC2626] transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#DC2626] to-[#EF4444] rounded-lg flex items-center justify-center mb-4">
                  <Shield className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">25-Year Warranty</h3>
                <p className="text-gray-600">
                  Peace of mind with our industry-leading warranty and quality assurance.
                </p>
              </motion.div>
            </div>
          </AnimatedSection>
        </section>

        {/* Category Tabs */}
        <section className="container mx-auto px-4 mb-8">
          <AnimatedSection delay={0.1}>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Choose Your Solution
              </h2>
              
              <div className="flex flex-wrap gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab('all')}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'all'
                      ? 'bg-[#DC2626] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Zap size={20} />
                  All Solutions
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab('commercial')}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'commercial'
                      ? 'bg-[#DC2626] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Building2 size={20} />
                  Commercial
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab('residential')}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'residential'
                      ? 'bg-[#DC2626] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Home size={20} />
                  Residential
                </motion.button>
              </div>

              <p className="text-sm text-gray-600 mt-4">
                Showing {filteredProducts.length} solution{filteredProducts.length !== 1 ? 's' : ''}
              </p>
            </div>
          </AnimatedSection>
        </section>

        {/* Products Grid */}
        <section className="container mx-auto px-4 mb-12">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard
                  name={product.name}
                  image={product.image}
                  specs={product.specs}
                  delay={index * 0.05}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Installation Info Section */}
        <section className="container mx-auto px-4 mb-12">
          <AnimatedSection delay={0.2}>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Professional Installation Included
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#DC2626] rounded-lg flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Site Assessment</h3>
                    <p className="text-gray-600">
                      Our experts evaluate your property to design the optimal solar system.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#DC2626] rounded-lg flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Professional Installation</h3>
                    <p className="text-gray-600">
                      Certified technicians install your system with precision and care.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#DC2626] rounded-lg flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Testing & Commissioning</h3>
                    <p className="text-gray-600">
                      We ensure everything works perfectly before handover.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#DC2626] rounded-lg flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Ongoing Support</h3>
                    <p className="text-gray-600">
                      24/7 maintenance and monitoring support for peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4">
          <AnimatedSection delay={0.3}>
            <div className="bg-gradient-to-r from-[#DC2626] to-[#991B1B] rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Go Solar?
              </h2>
              <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
                Get a free consultation and quote for your solar installation. 
                Our experts will help you choose the perfect system for your needs.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = 'mailto:rajaagenciesgnt@gmail.com?subject=Solar Installation Inquiry'}
                className="bg-white text-[#DC2626] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Request Free Consultation
              </motion.button>
            </div>
          </AnimatedSection>
        </section>
      </main>

      <Footer />
    </div>
  );
}
