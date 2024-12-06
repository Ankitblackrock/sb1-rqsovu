import React from 'react';
import { BarChart, LineChart } from 'lucide-react';
import { WaterUsage } from '../types/water';

interface Props {
  data: WaterUsage[];
  view: 'bar' | 'line';
}

export default function WaterUsageChart({ data, view }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Water Usage Trends</h2>
        <div className="flex gap-2">
          {view === 'bar' ? (
            <BarChart className="w-5 h-5 text-blue-600" />
          ) : (
            <LineChart className="w-5 h-5 text-blue-600" />
          )}
        </div>
      </div>
      <div className="h-64 flex items-center justify-center">
        {/* Chart visualization would go here - for now showing placeholder */}
        <div className="text-gray-400">
          Chart visualization coming soon...
        </div>
      </div>
    </div>
  );
}