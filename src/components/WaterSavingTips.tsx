import React from 'react';
import { Droplet, Info } from 'lucide-react';
import { WaterSavingTip } from '../types/water';

const tips: WaterSavingTip[] = [
  {
    id: '1',
    title: 'Fix Leaking Faucets',
    description: 'A dripping faucet can waste up to 20 gallons of water per day.',
    potentialSaving: 20,
    difficulty: 'easy'
  },
  {
    id: '2',
    title: 'Install Water-Efficient Fixtures',
    description: 'Low-flow showerheads and faucet aerators can reduce water usage by 30%.',
    potentialSaving: 30,
    difficulty: 'medium'
  },
  {
    id: '3',
    title: 'Rainwater Harvesting',
    description: 'Collect and store rainwater for garden irrigation.',
    potentialSaving: 50,
    difficulty: 'hard'
  }
];

export default function WaterSavingTips() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-4">
        <Droplet className="w-5 h-5 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-800">Water Saving Tips</h2>
      </div>
      <div className="space-y-4">
        {tips.map((tip) => (
          <div key={tip.id} className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="font-medium text-gray-800">{tip.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{tip.description}</p>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-sm text-blue-600">
                Save up to {tip.potentialSaving}L/day
              </span>
              <span className={`text-sm px-2 py-1 rounded ${
                tip.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                tip.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {tip.difficulty.charAt(0).toUpperCase() + tip.difficulty.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}