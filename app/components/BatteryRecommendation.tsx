'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Trash2, Zap } from 'lucide-react';
import ApplianceSelector from './ApplianceSelector';
import CustomApplianceModal from './CustomApplianceModal';
import { APPLIANCES, CustomAppliance, BatteryRecommendation as RecommendationType, calculateRealTime } from '../utils/batteryCalculator';

export default function BatteryRecommendation() {
  const [appliances, setAppliances] = useState<Record<string, number>>({});
  const [backupHours, setBackupHours] = useState(4);
  const [customAppliances, setCustomAppliances] = useState<CustomAppliance[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recommendation, setRecommendation] = useState<RecommendationType | null>(null);

  // Real-time calculation on any change
  useEffect(() => {
    const result = calculateRealTime(appliances, backupHours, customAppliances);
    setRecommendation(result);
  }, [appliances, backupHours, customAppliances]);

  const handleApplianceChange = (id: string, quantity: number) => {
    setAppliances(prev => ({
      ...prev,
      [id]: quantity,
    }));
  };

  const handleAddCustomAppliance = (appliance: CustomAppliance) => {
    setCustomAppliances(prev => [...prev, appliance]);
  };

  const handleRemoveCustomAppliance = (index: number) => {
    setCustomAppliances(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full space-y-6">
      {/* Appliances Selection */}
      <div>
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
          Select Your Appliances
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {APPLIANCES.map((appliance) => (
            <ApplianceSelector
              key={appliance.id}
              name={appliance.name}
              wattage={appliance.wattage}
              unit={appliance.unit}
              quantity={appliances[appliance.id] || 0}
              onChange={(quantity) => handleApplianceChange(appliance.id, quantity)}
            />
          ))}
        </div>

        {/* Custom Appliances */}
        {customAppliances.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Custom Appliances</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {customAppliances.map((custom, index) => (
                <div
                  key={index}
                  className="flex flex-col p-3 bg-gradient-to-br from-[#FEE2E2] to-white rounded-lg border-2 border-[#DC2626]/30 relative"
                >
                  <button
                    onClick={() => handleRemoveCustomAppliance(index)}
                    className="absolute top-2 right-2 p-1 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                  <h4 className="font-semibold text-gray-900 text-sm pr-6">
                    {custom.name}
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">
                    {custom.wattage}W × {custom.quantity}
                  </p>
                  <p className="text-sm font-bold text-[#DC2626] mt-1">
                    = {custom.wattage * custom.quantity}W
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add Custom Appliance Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsModalOpen(true)}
          className="w-full mt-4 py-3 px-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-[#DC2626] hover:text-[#DC2626] transition-all flex items-center justify-center gap-2 font-semibold"
        >
          <Plus size={20} />
          Add Custom Appliance
        </motion.button>
      </div>

      {/* Backup Duration Slider */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg md:text-xl font-bold text-gray-900">
            Backup Duration
          </h3>
          <span className="text-2xl font-bold text-[#DC2626]">
            {backupHours.toFixed(1)} hrs
          </span>
        </div>
        <div className="relative">
          <input
            type="range"
            min="2"
            max="10"
            step="0.5"
            value={backupHours}
            onChange={(e) => setBackupHours(Number(e.target.value))}
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#DC2626]"
            style={{
              background: `linear-gradient(to right, #DC2626 0%, #DC2626 ${((backupHours - 2) / 8) * 100}%, #e5e7eb ${((backupHours - 2) / 8) * 100}%, #e5e7eb 100%)`
            }}
          />
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>2 hours</span>
            <span>10 hours</span>
          </div>
        </div>
      </div>

      {/* Live Recommendation */}
      {recommendation && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-gradient-to-br from-[#DC2626] to-[#991B1B] rounded-2xl p-6 md:p-8 text-white shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white text-[#DC2626] rounded-full p-2">
              <Zap size={24} strokeWidth={2.5} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold">Live Recommendation</h3>
          </div>

          {/* Total Load */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4 border border-white/20">
            <div className="flex justify-between items-center">
              <span className="text-sm text-white/80">Total Load</span>
              <span className="text-3xl font-bold">{recommendation.totalLoad}W</span>
            </div>
            <div className="mt-2 pt-2 border-t border-white/20 text-xs text-white/70">
              Required: {recommendation.requiredBatteryAh}Ah battery, {recommendation.requiredInverterVA}VA inverter
            </div>
          </div>

          {recommendation.totalLoad > 0 ? (
            <>
              {/* Battery Recommendation */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-5 mb-4 border border-white/20">
                <p className="text-xs md:text-sm font-semibold text-white/80 mb-2">
                  Recommended Battery
                </p>
                <h4 className="text-lg md:text-xl font-bold mb-3">
                  {recommendation.battery.name}
                </h4>
                <ul className="space-y-1.5">
                  {recommendation.battery.specs.map((spec, idx) => (
                    <li key={idx} className="text-xs md:text-sm text-white/90 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inverter Recommendation */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-5 mb-4 border border-white/20">
                <p className="text-xs md:text-sm font-semibold text-white/80 mb-2">
                  Recommended Inverter
                </p>
                <h4 className="text-lg md:text-xl font-bold mb-3">
                  {recommendation.inverter.name}
                </h4>
                <ul className="space-y-1.5">
                  {recommendation.inverter.specs.map((spec, idx) => (
                    <li key={idx} className="text-xs md:text-sm text-white/90 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Explanation */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-5 mb-4 border border-white/20">
                <p className="text-xs md:text-sm leading-relaxed">{recommendation.explanation}</p>
              </div>

              {/* Get Quote Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const applianceList = APPLIANCES
                    .filter(a => appliances[a.id] > 0)
                    .map(a => `${a.name} (${appliances[a.id]}x)`)
                    .concat(customAppliances.map(c => `${c.name} (${c.quantity}x)`))
                    .join(', ');
                  
                  window.location.href = `mailto:rajaagenciesgnt@gmail.com?subject=Quote Request: ${recommendation.battery.name} + ${recommendation.inverter.name}&body=I need a quote for:%0D%0A%0D%0AAppliances: ${applianceList}%0D%0ABackup Duration: ${backupHours} hours%0D%0ATotal Load: ${recommendation.totalLoad}W%0D%0A%0D%0ARecommended:%0D%0ABattery: ${recommendation.battery.name}%0D%0AInverter: ${recommendation.inverter.name}`;
                }}
                className="w-full bg-white text-[#DC2626] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg"
              >
                Get Quote for This Combo
              </motion.button>
            </>
          ) : (
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <p className="text-white/90">{recommendation.explanation}</p>
            </div>
          )}
        </motion.div>
      )}

      {/* Custom Appliance Modal */}
      <CustomApplianceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddCustomAppliance}
      />
    </div>
  );
}
