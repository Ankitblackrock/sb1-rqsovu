export const calculateDailyAverage = (usages: WaterUsage[]): number => {
  if (usages.length === 0) return 0;
  const total = usages.reduce((sum, usage) => sum + usage.amount, 0);
  return Number((total / usages.length).toFixed(2));
};

export const formatWaterVolume = (liters: number): string => {
  if (liters >= 1000) {
    return `${(liters / 1000).toFixed(1)}m³`;
  }
  return `${liters}L`;
};