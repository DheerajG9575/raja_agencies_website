'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Filter } from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import AnimatedSection from '../components/AnimatedSection';
import batteries from '../data/batteries.json';
import inverters from '../data/inverters.json';

export default function BatteriesAndInverters() {
  const [filter, setFilter] = useState<'all' | 'battery' | 'inverter'>('all');
  const [brandFilter, setBrandFilter] = useState<'all' | 'exide' | 'amaron'>('all');

  const allProducts = [...batteries, ...inverters];
  
  let filteredProducts = filter === 'all' 
    ? allProducts 
    : allProducts.filter(p => p.category === filter);
  
  // Apply brand filter
  if (brandFilter !== 'all') {
    filteredProducts = filteredProducts.filter(p => 
      p.brand?.toLowerCase() === brandFilter.toLowerCase()
    );
  }

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
              Batteries & Inverters
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-white/90 max-w-3xl"
            >
              Explore our comprehensive range of high-quality batteries and inverters 
              from trusted brands. Find the perfect power backup solution for your home or business.
            </motion.p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="container mx-auto px-4 mb-8">
          <AnimatedSection>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <Filter className="text-[#DC2626]" size={24} />
                <h2 className="text-xl font-bold text-gray-900">Filter Products</h2>
              </div>
              
              <div className="space-y-4">
                {/* Category Filter */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">By Category</h3>
                  <div className="flex flex-wrap gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFilter('all')}
                      className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                        filter === 'all'
                          ? 'bg-[#DC2626] text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      All Products
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFilter('battery')}
                      className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                        filter === 'battery'
                          ? 'bg-[#DC2626] text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Batteries Only
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFilter('inverter')}
                      className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                        filter === 'inverter'
                          ? 'bg-[#DC2626] text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Inverters Only
                    </motion.button>
                  </div>
                </div>

                {/* Brand Filter */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">By Brand</h3>
                  <div className="flex flex-wrap gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setBrandFilter('all')}
                      className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                        brandFilter === 'all'
                          ? 'bg-[#DC2626] text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      All Brands
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setBrandFilter('exide')}
                      className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                        brandFilter === 'exide'
                          ? 'bg-[#DC2626] text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Exide
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setBrandFilter('amaron')}
                      className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                        brandFilter === 'amaron'
                          ? 'bg-[#DC2626] text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Amaron
                    </motion.button>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 mt-4">
                Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </p>
            </div>
          </AnimatedSection>
        </section>

        {/* Products Grid */}
        <section className="container mx-auto px-4">
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

        {/* CTA Section */}
        <section className="container mx-auto px-4 mt-16">
          <AnimatedSection delay={0.2}>
            <div className="bg-gradient-to-r from-[#DC2626] to-[#991B1B] rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need Help Choosing?
              </h2>
              <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
                Our experts are here to help you select the perfect battery and inverter 
                combination for your specific requirements.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = 'mailto:rajaagenciesgnt@gmail.com'}
                className="bg-white text-[#DC2626] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Contact Our Experts
              </motion.button>
            </div>
          </AnimatedSection>
        </section>
      </main>

      <Footer />
    </div>
  );
}
