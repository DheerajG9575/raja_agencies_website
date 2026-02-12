// Appliance database with individual wattages
export interface ApplianceType {
  id: string;
  name: string;
  wattage: number;
  unit: string;
}

export const APPLIANCES: ApplianceType[] = [
  { id: 'lights', name: 'Lights', wattage: 60, unit: 'each' },
  { id: 'fans', name: 'Fans', wattage: 75, unit: 'each' },
  { id: 'tv', name: 'TV', wattage: 150, unit: '' },
  { id: 'fridge', name: 'Refrigerator', wattage: 200, unit: '' },
  { id: 'computer', name: 'Computer', wattage: 200, unit: '' },
  { id: 'ac', name: 'Air Conditioner', wattage: 1500, unit: 'each' },
  { id: 'pump', name: 'Water Pump', wattage: 750, unit: '' },
  { id: 'washing_machine', name: 'Washing Machine', wattage: 500, unit: '' },
];

export interface CustomAppliance {
  name: string;
  wattage: number;
  quantity: number;
}

export interface BatteryRecommendation {
  battery: {
    name: string;
    capacity: string;
    specs: string[];
  };
  inverter: {
    name: string;
    capacity: string;
    specs: string[];
  };
  explanation: string;
  totalLoad: number;
  backupHours: number;
  requiredBatteryAh: number;
  requiredInverterVA: number;
}

export function calculateTotalLoad(
  appliances: Record<string, number>,
  customAppliances: CustomAppliance[] = []
): number {
  let totalLoad = 0;

  // Calculate load from preset appliances
  APPLIANCES.forEach(appliance => {
    const quantity = appliances[appliance.id] || 0;
    totalLoad += appliance.wattage * quantity;
  });

  // Add custom appliances
  customAppliances.forEach(custom => {
    totalLoad += custom.wattage * custom.quantity;
  });

  return totalLoad;
}

export function calculateBatteryCapacity(load: number, hours: number): number {
  // Battery capacity (Ah) = (Load × Hours) / Voltage / Efficiency
  // Voltage = 12V, Efficiency = 0.8
  const capacity = (load * hours) / 12 / 0.8;
  return Math.ceil(capacity);
}

export function calculateInverterSize(load: number): number {
  // Inverter VA = Load × 1.25 (safety factor)
  return Math.ceil(load * 1.25);
}

export function calculateRealTime(
  appliances: Record<string, number>,
  backupHours: number,
  customAppliances: CustomAppliance[] = []
): BatteryRecommendation {
  const totalLoad = calculateTotalLoad(appliances, customAppliances);
  const requiredBatteryAh = calculateBatteryCapacity(totalLoad, backupHours);
  const requiredInverterVA = calculateInverterSize(totalLoad);

  // Match to Exide products
  let battery, inverter, explanation;

  if (totalLoad === 0) {
    // No appliances selected
    battery = {
      name: "No battery needed",
      capacity: "0Ah",
      specs: ["Please select appliances to get recommendation"]
    };
    inverter = {
      name: "No inverter needed",
      capacity: "0VA",
      specs: ["Please select appliances to get recommendation"]
    };
    explanation = "Select appliances from the list above to get your personalized recommendation.";
  } else if (requiredBatteryAh <= 150 && requiredInverterVA <= 1050) {
    battery = {
      name: "Exide Inverter Battery 150Ah",
      capacity: "150Ah",
      specs: [
        "Capacity: 150Ah",
        "Warranty: 48 Months",
        "Type: Tubular",
        "Voltage: 12V"
      ]
    };
    inverter = {
      name: "Exide 1050VA Inverter",
      capacity: "1050VA",
      specs: [
        "Capacity: 1050VA",
        "Pure Sine Wave",
        "Overload Protection",
        "Digital Display"
      ]
    };
    explanation = `Perfect for your ${totalLoad}W load with ${backupHours.toFixed(1)} hours backup. This combo provides reliable power for essential appliances.`;
  } else if (requiredBatteryAh <= 200 && requiredInverterVA <= 1500) {
    battery = {
      name: "Exide Inva Master 200Ah",
      capacity: "200Ah",
      specs: [
        "Capacity: 200Ah",
        "Warranty: 60 Months",
        "Type: Tubular",
        "Voltage: 12V"
      ]
    };
    inverter = {
      name: "Exide 1500VA MPPT",
      capacity: "1500VA MPPT",
      specs: [
        "Capacity: 1500VA",
        "MPPT Technology",
        "Solar Compatible",
        "LCD Display"
      ]
    };
    explanation = `Ideal for your ${totalLoad}W load with ${backupHours.toFixed(1)} hours backup. This premium combo handles high power requirements and is solar-compatible for future expansion.`;
  } else {
    // For very high loads, recommend multiple batteries or consult
    battery = {
      name: "Exide Inva Master 200Ah (Multiple Units)",
      capacity: "200Ah+",
      specs: [
        "Capacity: 200Ah per unit",
        "Multiple batteries recommended",
        "Warranty: 60 Months",
        "Type: Tubular"
      ]
    };
    inverter = {
      name: "Exide Industrial Inverter",
      capacity: "2000VA+",
      specs: [
        "High capacity system",
        "MPPT Technology",
        "Contact for custom solution",
        "Industrial grade"
      ]
    };
    explanation = `Your ${totalLoad}W load with ${backupHours.toFixed(1)} hours backup requires a custom industrial solution. Please contact us for a personalized quote.`;
  }

  return {
    battery,
    inverter,
    explanation,
    totalLoad,
    backupHours,
    requiredBatteryAh,
    requiredInverterVA,
  };
}
