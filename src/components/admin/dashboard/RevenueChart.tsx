import React from 'react';
import { useAdminStore } from '@store/adminStore';
import Card from '@components/common/Card';
import { formatCurrency } from '@utils/formatters';
import { TrendingUp, Calendar } from 'lucide-react';

export const RevenueChart: React.FC = () => {
  const { orderStats } = useAdminStore();

  // Mock chart data - in production, this would come from API
  const chartData = [
    { day: 'Mon', revenue: 450 },
    { day: 'Tue', revenue: 680 },
    { day: 'Wed', revenue: 520 },
    { day: 'Thu', revenue: 890 },
    { day: 'Fri', revenue: 1100 },
    { day: 'Sat', revenue: 950 },
    { day: 'Sun', revenue: 780 },
  ];

  const maxRevenue = Math.max(...chartData.map((d) => d.revenue));

  return (
    <Card padding="lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading text-2xl font-bold text-text">
          Weekly Revenue
        </h2>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Calendar size={16} />
          <span>Last 7 Days</span>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">This Week</p>
          <p className="font-heading text-2xl font-bold text-blue-600">
            {formatCurrency(orderStats?.weekly_revenue || 0)}
          </p>
        </div>
        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">This Month</p>
          <p className="font-heading text-2xl font-bold text-green-600">
            {formatCurrency(orderStats?.monthly_revenue || 0)}
          </p>
        </div>
        <div className="bg-purple-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">Growth</p>
          <div className="flex items-center space-x-1">
            <TrendingUp className="text-purple-600" size={20} />
            <p className="font-heading text-2xl font-bold text-purple-600">
              +12%
            </p>
          </div>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="space-y-4">
        {chartData.map((data, index) => {
          const barWidth = (data.revenue / maxRevenue) * 100;

          return (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-12 text-sm font-medium text-gray-700">
                {data.day}
              </div>
              <div className="flex-1">
                <div className="relative h-10 bg-gray-100 rounded-lg overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary-600 rounded-lg transition-all duration-500 flex items-center justify-end px-3"
                    style={{ width: `${barWidth}%` }}
                  >
                    <span className="text-white font-semibold text-sm">
                      {formatCurrency(data.revenue)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
