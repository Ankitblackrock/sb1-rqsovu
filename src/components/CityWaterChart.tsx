import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { CityWaterData } from '../types/water';
import { cityWaterData } from '../data/indianCities';

const COLORS = {
  household: '#60A5FA',
  industrial: '#F87171',
  irrigation: '#34D399'
};

export default function CityWaterChart() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleLegendClick = (entry: { value: string }) => {
    setActiveCategory(activeCategory === entry.value ? null : entry.value);
  };

  const getOpacity = (dataKey: string) => {
    if (!activeCategory) return 1;
    return activeCategory === dataKey ? 1 : 0.3;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Water Usage Across Major Indian Cities
      </h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={cityWaterData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis
              dataKey="city"
              tick={{ fill: '#4B5563' }}
              tickLine={{ stroke: '#4B5563' }}
            />
            <YAxis
              tick={{ fill: '#4B5563' }}
              tickLine={{ stroke: '#4B5563' }}
              label={{
                value: 'Million Liters per Day',
                angle: -90,
                position: 'insideLeft',
                style: { fill: '#4B5563' }
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '6px',
                border: 'none',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Legend
              onClick={handleLegendClick}
              wrapperStyle={{ paddingTop: '20px' }}
            />
            <Bar
              dataKey="household"
              name="Household"
              fill={COLORS.household}
              opacity={getOpacity('household')}
            />
            <Bar
              dataKey="industrial"
              name="Industrial"
              fill={COLORS.industrial}
              opacity={getOpacity('industrial')}
            />
            <Bar
              dataKey="irrigation"
              name="Irrigation"
              fill={COLORS.irrigation}
              opacity={getOpacity('irrigation')}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-sm text-gray-600 mt-4">
        Click on legend items to focus on specific categories
      </p>
    </div>
  );
}