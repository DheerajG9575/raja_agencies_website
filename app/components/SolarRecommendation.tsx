'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Sun } from 'lucide-react';
import { SolarType, SolarGoal, getSolarRecommendation } from '../utils/solarCalculator';

export default function SolarRecommendation() {
  const [solarType, setSolarType] = useState<SolarType>('residential');
  const [monthlyBill, setMonthlyBill] = useState(5000);
  const [roofSpace, setRoofSpace] = useState(500);
  const [goal, setGoal] = useState<SolarGoal>('reduce_bills');
  const [recommendation, setRecommendation] = useState<any>(null);

  // Real-time calculation on any change
  useEffect(() => {
    const result = getSolarRecommendation(solarType, monthlyBill, roofSpace, goal);
    setRecommendation(result);
  }, [solarType, monthlyBill, roofSpace, goal]);

  const goals: { id: SolarGoal; label: string; description: string }[] = [
    { id: 'reduce_bills', label: 'Reduce Bills', description: 'Lower electricity costs' },
    { id: 'independence', label: 'Power Independence', description: 'Complete self-sufficiency' },
    { id: 'backup', label: 'Backup Power', description: 'During outages' },
    { id: 'environmental', label: 'Go Green', description: 'Environmental impact' },
  ];

  return (
    <div className="w-full space-y-6">
      {/* Installation Type */}
      <div>
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
          Installation Type
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setSolarType('residential')}
            className={`p-4 rounded-xl border-2 transition-all ${
              solarType === 'residential'
                ? 'bg-gradient-to-br from-[#DC2626] to-[#991B1B] border-[#DC2626] text-white'
                : 'bg-white border-gray-200 text-gray-700 hover:border-[#DC2626]'
            }`}
          >
            <Home size={24} className="mx-auto mb-2" />
            <div className="font-bold">Residential</div>
            <div className={`text-xs mt-1 ${solarType === 'residential' ? 'text-white/80' : 'text-gray-500'}`}>
              Home solar systems
            </div>
          </button>
          <button
            onClick={() => setSolarType('commercial')}
            className={`p-4 rounded-xl border-2 transition-all ${
              solarType === 'commercial'
                ? 'bg-gradient-to-br from-[#DC2626] to-[#991B1B] border-[#DC2626] text-white'
                : 'bg-white border-gray-200 text-gray-700 hover:border-[#DC2626]'
            }`}
          >
            <Building2 size={24} className="mx-auto mb-2" />
            <div className="font-bold">Commercial</div>
            <div className={`text-xs mt-1 ${solarType === 'commercial' ? 'text-white/80' : 'text-gray-500'}`}>
              Business installations
            </div>
          </button>
        </div>
      </div>

      {/* Monthly Bill Slider */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg md:text-xl font-bold text-gray-900">
            Monthly Electricity Bill
          </h3>
          <span className="text-2xl font-bold text-[#DC2626]">
            ₹{monthlyBill.toLocaleString('en-IN')}
          </span>
        </div>
        <div className="relative">
          <input
            type="range"
            min="2000"
            max="50000"
            step="500"
            value={monthlyBill}
            onChange={(e) => setMonthlyBill(Number(e.target.value))}
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#DC2626]"
            style={{
              background: `linear-gradient(to right, #DC2626 0%, #DC2626 ${((monthlyBill - 2000) / 48000) * 100}%, #e5e7eb ${((monthlyBill - 2000) / 48000) * 100}%, #e5e7eb 100%)`
            }}
          />
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>₹2,000</span>
            <span>₹50,000</span>
          </div>
        </div>
      </div>

      {/* Roof Space Slider */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg md:text-xl font-bold text-gray-900">
            Available Roof Space
          </h3>
          <span className="text-2xl font-bold text-[#DC2626]">
            {roofSpace} sq.ft
          </span>
        </div>
        <div className="relative">
          <input
            type="range"
            min="100"
            max="2000"
            step="50"
            value={roofSpace}
            onChange={(e) => setRoofSpace(Number(e.target.value))}
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#DC2626]"
            style={{
              background: `linear-gradient(to right, #DC2626 0%, #DC2626 ${((roofSpace - 100) / 1900) * 100}%, #e5e7eb ${((roofSpace - 100) / 1900) * 100}%, #e5e7eb 100%)`
            }}
          />
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>100 sq.ft</span>
            <span>2,000 sq.ft</span>
          </div>
        </div>
      </div>

      {/* Primary Goal */}
      <div>
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
          Primary Goal
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {goals.map((g) => (
            <button
              key={g.id}
              onClick={() => setGoal(g.id)}
              className={`p-3 md:p-4 rounded-xl border-2 transition-all text-left ${
                goal === g.id
                  ? 'bg-gradient-to-br from-[#DC2626] to-[#991B1B] border-[#DC2626] text-white'
                  : 'bg-white border-gray-200 text-gray-700 hover:border-[#DC2626]'
              }`}
            >
              <div className="font-bold text-sm md:text-base">{g.label}</div>
              <div className={`text-xs mt-1 ${goal === g.id ? 'text-white/80' : 'text-gray-500'}`}>
                {g.description}
              </div>
            </button>
          ))}
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
              <Sun size={24} strokeWidth={2.5} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold">Live Recommendation</h3>
          </div>

          {/* Warning for insufficient roof space */}
          {!recommendation.isRoofSufficient && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-yellow-500/20 border border-yellow-300/30 rounded-lg p-4 mb-4"
            >
              <p className="text-sm text-white font-semibold">
                Note: System size adjusted to fit your available roof space ({roofSpace} sq.ft)
              </p>
            </motion.div>
          )}

          {/* System Details */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-5 mb-4 border border-white/20">
            <p className="text-xs md:text-sm font-semibold text-white/80 mb-2">
              Recommended System
            </p>
            <h4 className="text-xl md:text-2xl font-bold mb-3">
              {recommendation.systemSize}kW {recommendation.systemType}
            </h4>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div>
                <p className="text-xs text-white/70">Solar Panels</p>
                <p className="text-base md:text-lg font-bold">{recommendation.panelCount} panels</p>
              </div>
              <div>
                <p className="text-xs text-white/70">Roof Space Needed</p>
                <p className="text-base md:text-lg font-bold">{recommendation.roofSpaceNeeded} sq.ft</p>
              </div>
            </div>
          </div>

          {/* Financial Benefits */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-5 mb-4 border border-white/20">
            <p className="text-xs md:text-sm font-semibold text-white/80 mb-3">
              Financial Benefits
            </p>
            <div className="space-y-2 md:space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs md:text-sm text-white/90">Monthly Savings</span>
                <span className="text-base md:text-xl font-bold">
                  ₹{recommendation.estimatedMonthlySavings.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs md:text-sm text-white/90">Annual Savings</span>
                <span className="text-base md:text-xl font-bold">
                  ₹{recommendation.estimatedAnnualSavings.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex justify-between items-center pt-2 md:pt-3 border-t border-white/20">
                <span className="text-xs md:text-sm text-white/90">Estimated Cost</span>
                <span className="text-base md:text-xl font-bold">
                  ₹{recommendation.estimatedCost.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs md:text-sm text-white/90">Payback Period</span>
                <span className="text-base md:text-xl font-bold">{recommendation.roiYears} years</span>
              </div>
            </div>
          </div>

          {/* Explanation */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-5 mb-4 border border-white/20">
            <p className="text-xs md:text-sm leading-relaxed">{recommendation.explanation}</p>
          </div>

          {/* Request Quote Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              window.location.href = `mailto:rajaagenciesgnt@gmail.com?subject=Solar Installation Quote: ${recommendation.systemSize}kW System&body=I'm interested in a solar installation:%0D%0A%0D%0AType: ${solarType === 'residential' ? 'Residential' : 'Commercial'}%0D%0AMonthly Bill: ₹${monthlyBill.toLocaleString('en-IN')}%0D%0ARoof Space: ${roofSpace} sq.ft%0D%0A%0D%0ARecommended:%0D%0ASystem Size: ${recommendation.systemSize}kW%0D%0APanels: ${recommendation.panelCount} units%0D%0AEstimated Cost: ₹${recommendation.estimatedCost.toLocaleString('en-IN')}`;
            }}
            className="w-full bg-white text-[#DC2626] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg"
          >
            Request Installation Quote
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
