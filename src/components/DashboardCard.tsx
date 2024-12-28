import React from 'react';
import { DashboardCardProps } from '../types';
import { TrendingUp, TrendingDown } from 'lucide-react';

export const DashboardCard: React.FC<DashboardCardProps> = ({ data }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-800">{data.title}</h3>
      <div className="mt-2 flex items-baseline">
        <span className="text-3xl font-bold text-gray-900">
          {data.value.toLocaleString()}
        </span>
      </div>
      <div className="mt-4 flex items-center">
        {data.trend === 'up' ? (
          <TrendingUp className="w-4 h-4 text-green-500" />
        ) : (
          <TrendingDown className="w-4 h-4 text-red-500" />
        )}
        <span className={`ml-2 ${
          data.trend === 'up' ? 'text-green-500' : 'text-red-500'
        }`}>
          {data.percentage}%
        </span>
      </div>
    </div>
  );
};