import React from 'react';
import { Droplet, TrendingDown, TrendingUp, Waves } from 'lucide-react';
import { WaterUsage } from '../types/water';
import { calculateDailyAverage, formatWaterVolume } from '../utils/waterCalculations';

interface Props {
  usages: WaterUsage[];
}

export default function UsageMetrics({ usages }: Props) {
  const dailyAverage = calculateDailyAverage(usages);
  const trend = dailyAverage > 250 ? 'increase' : 'decrease';

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-2 mb-3">
          <Droplet className="w-5 h-5 text-blue-600" />
          <h3 className="text-gray-700 font-medium">Daily Average</h3>
        </div>
        <p className="text-2xl font-bold text-gray-900">{formatWaterVolume(dailyAverage)}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-2 mb-3">
          <Waves className="w-5 h-5 text-blue-600" />
          <h3 className="text-gray-700 font-medium">Total Usage</h3>
        </div>
        <p className="text-2xl font-bold text-gray-900">
          {formatWaterVolume(usages.reduce((sum, usage) => sum + usage.amount, 0))}
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-2 mb-3">
          {trend === 'increase' ? (
            <TrendingUp className="w-5 h-5 text-red-500" />
          ) : (
            <TrendingDown className="w-5 h-5 text-green-500" />
          )}
          <h3 className="text-gray-700 font-medium">Usage Trend</h3>
        </div>
        <p className={`text-lg font-semibold ${
          trend === 'increase' ? 'text-red-500' : 'text-green-500'
        }`}>
          {trend === 'increase' ? 'Above Target' : 'Below Target'}
        </p>
      </div>
    </div>
  );
}