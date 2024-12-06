export interface WeatherForecastInterface {
  city: string;
  date: string;
  temperature: number;
  rainProbability: number;
  rainfall: number;
}

export interface WaterAvailability {
  city: string;
  date: string;
  household: {
    available: number;
    shortage: number;
  };
  industrial: {
    available: number;
    shortage: number;
  };
  irrigation: {
    available: number;
    shortage: number;
  };
}

export interface CityWeatherData {
  city: string;
  forecast: WeatherForecast[];
  waterAvailability: WaterAvailability[];
}