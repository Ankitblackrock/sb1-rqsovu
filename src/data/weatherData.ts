import { addDays, format } from 'date-fns';
import { CityWeatherData } from '../types/weather';

const generateForecastData = (city: string): CityWeatherData => {
  const today = new Date();
  const forecast = Array.from({ length: 7 }, (_, i) => ({
    city,
    date: format(addDays(today, i), 'yyyy-MM-dd'),
    temperature: Math.round(25 + Math.random() * 10),
    rainProbability: Math.round(Math.random() * 100),
    rainfall: Math.round(Math.random() * 50),
  }));

  const waterAvailability = Array.from({ length: 7 }, (_, i) => ({
    city,
    date: format(addDays(today, i), 'yyyy-MM-dd'),
    household: {
      available: Math.round(200 + Math.random() * 100),
      shortage: Math.round(Math.random() * 50),
    },
    industrial: {
      available: Math.round(150 + Math.random() * 80),
      shortage: Math.round(Math.random() * 40),
    },
    irrigation: {
      available: Math.round(100 + Math.random() * 60),
      shortage: Math.round(Math.random() * 30),
    },
  }));

  return {
    city,
    forecast,
    waterAvailability,
  };
};

export const cities = [
  'Mumbai',
  'Delhi',
  'Bangalore',
  'Chennai',
  'Hyderabad',
  'Kolkata',
];

export const weatherData: CityWeatherData[] = cities.map(city => 
  generateForecastData(city)
);