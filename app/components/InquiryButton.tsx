'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface InquiryButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
}

export default function InquiryButton({ 
  text = "Inquire Now", 
  onClick,
  className = "" 
}: InquiryButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default action: open email
      window.location.href = 'mailto:info@rajaagencies.com?subject=Product Inquiry';
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(220, 38, 38, 0.3)' }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={`flex items-center justify-center gap-2 px-6 py-3 bg-[#DC2626] text-white font-semibold rounded-lg hover:bg-[#EF4444] transition-all duration-300 shadow-lg ${className}`}
    >
      <MessageCircle size={20} />
      {text}
    </motion.button>
  );
}
