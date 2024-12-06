export interface WaterUsage {
  id: string;
  date: string;
  amount: number;
  category: 'household' | 'irrigation' | 'industrial';
  location: string;
}

export interface WaterSavingTip {
  id: string;
  title: string;
  description: string;
  potentialSaving: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface CityWaterData {
  city: string;
  household: number;
  industrial: number;
  irrigation: number;
  total: number;
}