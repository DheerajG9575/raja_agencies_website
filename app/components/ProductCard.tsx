'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import InquiryButton from './InquiryButton';

interface ProductCardProps {
  name: string;
  image: string;
  specs: string[];
  delay?: number;
}

export default function ProductCard({ name, image, specs, delay = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#DC2626]"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#DC2626] transition-colors">
          {name}
        </h3>

        {/* Specifications */}
        <ul className="space-y-2 mb-4">
          {specs.map((spec, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#DC2626] rounded-full"></span>
              {spec}
            </li>
          ))}
        </ul>

        {/* Inquiry Button */}
        <InquiryButton className="w-full" />
      </div>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-[#DC2626]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      />
    </motion.div>
  );
}
