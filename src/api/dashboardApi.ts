import { DashboardData } from '../types';

export const fetchDashboardData = async (): Promise<DashboardData[]> => {
  // Simulating API call
  return [
    {
      id: '1',
      title: 'Total Revenue',
      value: 150000,
      trend: 'up',
      percentage: 12.5
    },
    {
      id: '2',
      title: 'Total Users',
      value: 2500,
      trend: 'up',
      percentage: 8.2
    },
    {
      id: '3',
      title: 'Active Sessions',
      value: 1200,
      trend: 'down',
      percentage: 3.1
    }
  ];
};