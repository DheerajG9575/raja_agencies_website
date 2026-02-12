'use client';

import { motion } from 'framer-motion';
import { Check, LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface RecommendationCardProps {
  icon?: LucideIcon;
  iconElement?: ReactNode;
  title: string;
  description?: string;
  selected: boolean;
  onClick: () => void;
  disabled?: boolean;
}

export default function RecommendationCard({
  icon: Icon,
  iconElement,
  title,
  description,
  selected,
  onClick,
  disabled = false,
}: RecommendationCardProps) {
  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.05, y: -4 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={disabled}
      className={`relative p-4 md:p-5 rounded-xl border-2 transition-all duration-300 text-left w-full min-h-[100px] ${
        selected
          ? 'bg-gradient-to-br from-[#DC2626] to-[#991B1B] border-[#DC2626] text-white shadow-xl'
          : 'bg-white border-gray-200 hover:border-[#DC2626] text-gray-900 shadow-md hover:shadow-lg'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      {/* Checkmark for selected */}
      {selected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-3 right-3 bg-white text-[#DC2626] rounded-full p-1"
        >
          <Check size={16} strokeWidth={3} />
        </motion.div>
      )}

      {/* Icon */}
      {(Icon || iconElement) && (
        <div className={`mb-3 ${selected ? 'text-white' : 'text-[#DC2626]'}`}>
          {Icon ? <Icon size={28} strokeWidth={2.5} /> : iconElement}
        </div>
      )}

      {/* Title */}
      <h3 className={`text-base md:text-lg font-bold mb-1 ${selected ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>

      {/* Description */}
      {description && (
        <p className={`text-xs md:text-sm ${selected ? 'text-white/90' : 'text-gray-600'}`}>
          {description}
        </p>
      )}

      {/* Glow effect when selected */}
      {selected && (
        <motion.div
          className="absolute inset-0 rounded-xl bg-[#DC2626]/20 pointer-events-none"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}
    </motion.button>
  );
}
