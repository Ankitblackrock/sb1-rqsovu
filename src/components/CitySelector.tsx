import React from 'react';
import { MapPin } from 'lucide-react';

interface Props {
  cities: string[];
  selectedCity: string;
  onCityChange: (city: string) => void;
}

export default function CitySelector({ cities, selectedCity, onCityChange }: Props) {
  return (
    <div className="flex items-center gap-2 bg-white rounded-lg shadow-md p-4">
      <MapPin className="w-5 h-5 text-blue-600" />
      <select
        value={selectedCity}
        onChange={(e) => onCityChange(e.target.value)}
        className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}