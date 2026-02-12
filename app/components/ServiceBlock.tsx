'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceBlockProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  delay?: number;
  children?: ReactNode;
}

export default function ServiceBlock({ 
  title, 
  description, 
  icon, 
  href, 
  delay = 0,
  children 
}: ServiceBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      viewport={{ once: true }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group relative"
    >
      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 hover:border-[#DC2626] transition-all duration-500 h-full">
        {/* Gradient Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#DC2626]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        <div className="relative p-4 flex flex-col h-full z-10">
          {/* Icon */}
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="w-12 h-12 bg-gradient-to-br from-[#DC2626] to-[#EF4444] rounded-xl flex items-center justify-center mb-3 shadow-lg group-hover:shadow-2xl group-hover:shadow-[#DC2626]/30 transition-all duration-500"
          >
            <div className="text-white">{icon}</div>
          </motion.div>

          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#DC2626] transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-3 flex-grow leading-snug">
            {description}
          </p>

          {/* Children (e.g., Carousel) */}
          {children && (
            <div className="mb-3">
              {children}
            </div>
          )}

          {/* CTA Button */}
          <Link href={href} className="cursor-pointer">
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-[#DC2626] font-semibold group/link cursor-pointer"
            >
              <span className="group-hover/link:underline">Explore</span>
              <ArrowRight 
                size={20} 
                className="group-hover/link:translate-x-1 transition-transform duration-300" 
              />
            </motion.div>
          </Link>
        </div>

        {/* Animated Border Effect */}
        <motion.div
          className="absolute inset-0 border-2 border-[#DC2626] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          initial={false}
          animate={{
            boxShadow: [
              '0 0 0 0 rgba(220, 38, 38, 0)',
              '0 0 20px 5px rgba(220, 38, 38, 0.3)',
              '0 0 0 0 rgba(220, 38, 38, 0)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </motion.div>
  );
}
