import React from 'react';
import { WaterAvailability } from '../types/weather';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { format } from 'date-fns';
import { Droplets } from 'lucide-react';

interface Props {
  data: WaterAvailability[];
}

export default function WaterAvailabilityForecast({ data }: Props) {
  const transformedData = data.map(day => ({
    date: format(new Date(day.date), 'MMM d'),
    'Household Available': day.household.available,
    'Household Shortage': day.household.shortage,
    'Industrial Available': day.industrial.available,
    'Industrial Shortage': day.industrial.shortage,
    'Irrigation Available': day.irrigation.available,
    'Irrigation Shortage': day.irrigation.shortage,
  }));

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Droplets className="w-6 h-6 text-blue-600" />
        Water Availability Forecast
      </h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={transformedData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis label={{ value: 'Million Liters', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="Household Available"
              stackId="1"
              stroke="#60A5FA"
              fill="#60A5FA"
            />
            <Area
              type="monotone"
              dataKey="Household Shortage"
              stackId="2"
              stroke="#F87171"
              fill="#F87171"
            />
            <Area
              type="monotone"
              dataKey="Industrial Available"
              stackId="1"
              stroke="#34D399"
              fill="#34D399"
            />
            <Area
              type="monotone"
              dataKey="Industrial Shortage"
              stackId="2"
              stroke="#FBBF24"
              fill="#FBBF24"
            />
            <Area
              type="monotone"
              dataKey="Irrigation Available"
              stackId="1"
              stroke="#818CF8"
              fill="#818CF8"
            />
            <Area
              type="monotone"
              dataKey="Irrigation Shortage"
              stackId="2"
              stroke="#F472B6"
              fill="#F472B6"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}