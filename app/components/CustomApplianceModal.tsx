'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus } from 'lucide-react';
import { CustomAppliance } from '../utils/batteryCalculator';

interface CustomApplianceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (appliance: CustomAppliance) => void;
}

export default function CustomApplianceModal({
  isOpen,
  onClose,
  onAdd,
}: CustomApplianceModalProps) {
  const [name, setName] = useState('');
  const [wattage, setWattage] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please enter appliance name');
      return;
    }

    const wattageNum = parseInt(wattage);
    if (!wattage || isNaN(wattageNum) || wattageNum <= 0) {
      setError('Please enter a valid wattage');
      return;
    }

    const quantityNum = parseInt(quantity);
    if (!quantity || isNaN(quantityNum) || quantityNum <= 0) {
      setError('Please enter a valid quantity');
      return;
    }

    onAdd({
      name: name.trim(),
      wattage: wattageNum,
      quantity: quantityNum,
    });

    // Reset form
    setName('');
    setWattage('');
    setQuantity('1');
    onClose();
  };

  const handleClose = () => {
    setName('');
    setWattage('');
    setQuantity('1');
    setError('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative"
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>

              {/* Header */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Add Custom Appliance
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Enter the details of your appliance
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Appliance Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Appliance Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g., Microwave, Gaming PC"
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-[#DC2626] outline-none transition-colors"
                  />
                </div>

                {/* Wattage */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Power Consumption (Watts)
                  </label>
                  <input
                    type="number"
                    value={wattage}
                    onChange={(e) => setWattage(e.target.value)}
                    placeholder="e.g., 800"
                    min="1"
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-[#DC2626] outline-none transition-colors"
                  />
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Quantity
                  </label>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="1"
                    min="1"
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-[#DC2626] outline-none transition-colors"
                  />
                </div>

                {/* Error message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg text-sm"
                  >
                    {error}
                  </motion.div>
                )}

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="flex-1 px-4 py-2.5 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2.5 bg-[#DC2626] text-white rounded-lg font-semibold hover:bg-[#EF4444] transition-colors flex items-center justify-center gap-2"
                  >
                    <Plus size={18} />
                    Add Appliance
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
