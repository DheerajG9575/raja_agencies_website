export type SolarType = 'residential' | 'commercial';
export type SolarGoal = 'reduce_bills' | 'independence' | 'backup' | 'environmental';

interface SolarRecommendation {
  systemSize: number; // in kW
  systemType: string;
  panelCount: number;
  estimatedMonthlySavings: number;
  estimatedAnnualSavings: number;
  estimatedCost: number;
  roiYears: number;
  explanation: string;
  roofSpaceNeeded: number;
  isRoofSufficient: boolean;
}

// Average electricity rate (₹ per unit) - can be adjusted
const AVG_RATE_PER_UNIT = 6;

// Solar generation: 1kW generates ~4 units/day = ~120 units/month
const UNITS_PER_KW_PER_MONTH = 120;

// Roof space: ~100 sq.ft per kW
const SQFT_PER_KW = 100;

// System cost: ~₹60,000 per kW (approximate)
const COST_PER_KW = 60000;

// Panels: ~3 panels per kW (330W panels)
const PANELS_PER_KW = 3;

export function estimateMonthlyUnits(monthlyBill: number): number {
  return Math.ceil(monthlyBill / AVG_RATE_PER_UNIT);
}

export function calculateSystemSize(
  monthlyUnits: number,
  goal: SolarGoal,
  solarType: SolarType
): number {
  // Base calculation: units needed / units per kW
  let systemKW = monthlyUnits / UNITS_PER_KW_PER_MONTH;

  // Adjust based on goal
  switch (goal) {
    case 'reduce_bills':
      // Offset 70-80% of consumption
      systemKW = systemKW * 0.75;
      break;
    case 'independence':
      // Offset 100%+ of consumption
      systemKW = systemKW * 1.2;
      break;
    case 'backup':
      // Smaller system with battery backup focus
      systemKW = systemKW * 0.6;
      break;
    case 'environmental':
      // Balance of offset and cost
      systemKW = systemKW * 0.8;
      break;
  }

  // Round to nearest 0.5 kW
  systemKW = Math.round(systemKW * 2) / 2;

  // Minimum 3kW, maximum based on type
  systemKW = Math.max(3, systemKW);
  
  if (solarType === 'residential') {
    systemKW = Math.min(10, systemKW);
  } else {
    systemKW = Math.min(50, systemKW);
  }

  return systemKW;
}

export function checkRoofSpace(systemKW: number, availableSpace: number): boolean {
  const requiredSpace = systemKW * SQFT_PER_KW;
  return availableSpace >= requiredSpace;
}

export function calculateSavings(systemKW: number, monthlyBill: number): { monthly: number; annual: number } {
  const unitsGenerated = systemKW * UNITS_PER_KW_PER_MONTH;
  const monthlySavings = Math.min(unitsGenerated * AVG_RATE_PER_UNIT, monthlyBill * 0.8);
  
  return {
    monthly: Math.round(monthlySavings),
    annual: Math.round(monthlySavings * 12),
  };
}

export function calculateROI(systemKW: number, annualSavings: number): number {
  const systemCost = systemKW * COST_PER_KW;
  const roiYears = systemCost / annualSavings;
  return Math.round(roiYears * 10) / 10; // Round to 1 decimal
}

export function roundToStandardSize(systemKW: number, solarType: SolarType): number {
  const standardSizes = solarType === 'residential' 
    ? [3, 5, 7, 10]
    : [3, 5, 10, 15, 20, 25, 30];
  
  // Find closest standard size
  return standardSizes.reduce((prev, curr) => 
    Math.abs(curr - systemKW) < Math.abs(prev - systemKW) ? curr : prev
  );
}

export function getSolarRecommendation(
  solarType: SolarType,
  monthlyBill: number,
  roofSpace: number,
  goal: SolarGoal
): SolarRecommendation {
  const monthlyUnits = estimateMonthlyUnits(monthlyBill);
  let systemKW = calculateSystemSize(monthlyUnits, goal, solarType);
  
  // Check roof space constraint
  const requiredSpace = systemKW * SQFT_PER_KW;
  const isRoofSufficient = roofSpace >= requiredSpace;
  
  if (!isRoofSufficient) {
    // Adjust to fit available space
    systemKW = Math.floor(roofSpace / SQFT_PER_KW);
    systemKW = Math.max(3, systemKW); // Minimum 3kW
  }
  
  // Round to standard size
  const recommendedSystemKW = roundToStandardSize(systemKW, solarType);
  
  // Calculate financials
  const savings = calculateSavings(recommendedSystemKW, monthlyBill);
  const estimatedCost = recommendedSystemKW * COST_PER_KW;
  const roiYears = calculateROI(recommendedSystemKW, savings.annual);
  const panelCount = recommendedSystemKW * PANELS_PER_KW;
  
  // System type description
  const systemTypeDesc = solarType === 'residential' 
    ? 'Off-Grid Solar System with Battery Backup'
    : 'On-Grid Solar System';
  
  // Generate explanation
  let explanation = `Based on your monthly bill of ₹${monthlyBill.toLocaleString('en-IN')} (approx. ${monthlyUnits} units), `;
  
  if (!isRoofSufficient) {
    explanation += `we recommend a ${recommendedSystemKW}kW system optimized for your ${roofSpace} sq.ft roof space. `;
  } else {
    explanation += `we recommend a ${recommendedSystemKW}kW system. `;
  }
  
  explanation += `This system will reduce your electricity bills by approximately ${Math.round((savings.monthly / monthlyBill) * 100)}% and pay for itself in about ${roiYears} years.`;

  return {
    systemSize: recommendedSystemKW,
    systemType: systemTypeDesc,
    panelCount,
    estimatedMonthlySavings: savings.monthly,
    estimatedAnnualSavings: savings.annual,
    estimatedCost,
    roiYears,
    explanation,
    roofSpaceNeeded: requiredSpace,
    isRoofSufficient,
  };
}
