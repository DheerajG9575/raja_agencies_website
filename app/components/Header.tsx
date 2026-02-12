'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { LayoutDashboard } from 'lucide-react';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#DC2626] hover:text-[#EF4444] transition-colors">
          Exide Power Systems
        </Link>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="flex items-center gap-2 px-6 py-2.5 bg-[#DC2626] text-white rounded-lg font-semibold hover:bg-[#EF4444] transition-all duration-300 shadow-lg hover:shadow-xl">
            <LayoutDashboard size={20} />
            Dashboard
          </button>
        </motion.div>
      </div>
    </motion.header>
  );
}
