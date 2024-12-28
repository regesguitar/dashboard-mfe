import React, { useEffect, useState } from 'react';
import { DashboardCard } from './DashboardCard';
import { fetchDashboardData } from '../api/dashboardApi';
import { DashboardData } from '../types';

const Dashboard: React.FC = () => {
  const [data, setData] = useState<DashboardData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const dashboardData = await fetchDashboardData();
        setData(dashboardData);
      } catch (error) {
        console.error('Error loading dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <DashboardCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;