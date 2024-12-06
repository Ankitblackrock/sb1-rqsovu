import { Cloud, Droplets, Sun, CloudRain } from 'lucide-react';

import { format } from 'date-fns';
import { WeatherForecastInterface } from '../types/weather';

interface Props {
  forecast: WeatherForecastInterface[];
}

export default function WeatherForecast({ forecast }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Cloud className="w-6 h-6 text-blue-600" />
        Weather Forecast
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        {forecast.map((day) => (
          <div key={day.date} className="bg-gray-50 rounded-lg p-4 text-center">
            <p className="text-sm font-medium text-gray-600">
              {format(new Date(day.date), 'EEE, MMM d')}
            </p>
            <div className="my-2">
              {day.rainProbability > 60 ? (
                <CloudRain className="w-8 h-8 mx-auto text-blue-600" />
              ) : day.rainProbability > 30 ? (
                <Cloud className="w-8 h-8 mx-auto text-gray-600" />
              ) : (
                <Sun className="w-8 h-8 mx-auto text-yellow-500" />
              )}
            </div>
            <p className="text-lg font-semibold text-gray-800">
              {day.temperature}°C
            </p>
            <div className="flex items-center justify-center gap-1 mt-1">
              <Droplets className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-gray-600">
                {day.rainProbability}%
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1">{day.rainfall}mm rain</p>
          </div>
        ))}
      </div>
    </div>
  );
}
