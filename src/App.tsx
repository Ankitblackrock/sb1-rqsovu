import React, { useState } from 'react';
import { Droplets } from 'lucide-react';
import { WaterUsage } from './types/water';
import UsageMetrics from './components/UsageMetrics';
import WaterUsageChart from './components/WaterUsageChart';
import WaterSavingTips from './components/WaterSavingTips';
import WaterUsageForm from './components/WaterUsageForm';
import CityWaterChart from './components/CityWaterChart';
import WeatherForecast from './components/WeatherForecast';
import WaterAvailabilityForecast from './components/WaterAvailabilityForecast';
import CitySelector from './components/CitySelector';
import { weatherData, cities } from './data/weatherData';

function App() {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [usages, setUsages] = useState<WaterUsage[]>([
    {
      id: '1',
      date: '2024-03-10',
      amount: 200,
      category: 'household',
      location: 'Kitchen'
    },
    {
      id: '2',
      date: '2024-03-11',
      amount: 150,
      category: 'irrigation',
      location: 'Garden'
    }
  ]);

  const cityData = weatherData.find(data => data.city === selectedCity)!;

  const handleAddUsage = (newUsage: Omit<WaterUsage, 'id'>) => {
    setUsages(prev => [...prev, { ...newUsage, id: crypto.randomUUID() }]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2">
            <Droplets className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Water Management Dashboard</h1>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <CitySelector
            cities={cities}
            selectedCity={selectedCity}
            onCityChange={setSelectedCity}
          />

          <UsageMetrics usages={usages} />
          
          <WeatherForecast forecast={cityData.forecast} />
          
          <WaterAvailabilityForecast data={cityData.waterAvailability} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <WaterUsageForm onSubmit={handleAddUsage} />
            <WaterSavingTips />
          </div>

          <CityWaterChart />

          <WaterUsageChart data={usages} view="bar" />
        </div>
      </main>
    </div>
  );
}

export default App;