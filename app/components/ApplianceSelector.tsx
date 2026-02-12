'use client';

import { motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';

interface ApplianceSelectorProps {
  name: string;
  wattage: number;
  unit: string;
  quantity: number;
  onChange: (newQuantity: number) => void;
}

export default function ApplianceSelector({
  name,
  wattage,
  unit,
  quantity,
  onChange,
}: ApplianceSelectorProps) {
  const handleIncrement = () => {
    onChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      onChange(quantity - 1);
    }
  };

  return (
    <div className="flex items-center justify-between p-2.5 bg-white rounded-lg border-2 border-gray-200 hover:border-[#DC2626] transition-all">
      <div className="flex-1 min-w-0 mr-2">
        <h4 className="font-semibold text-gray-900 text-sm truncate">{name}</h4>
        <p className="text-xs text-gray-500">
          {wattage}W {unit && `${unit}`}
        </p>
      </div>

      <div className="flex items-center gap-1.5 flex-shrink-0">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleDecrement}
          disabled={quantity === 0}
          className={`w-7 h-7 rounded-md flex items-center justify-center transition-all ${
            quantity === 0
              ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-[#DC2626] hover:text-white'
          }`}
        >
          <Minus size={14} />
        </motion.button>

        <div className="w-8 text-center">
          <span className="text-base font-bold text-[#DC2626]">{quantity}</span>
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleIncrement}
          className="w-7 h-7 rounded-md bg-[#DC2626] text-white hover:bg-[#EF4444] flex items-center justify-center transition-all"
        >
          <Plus size={14} />
        </motion.button>
      </div>
    </div>
  );
}
