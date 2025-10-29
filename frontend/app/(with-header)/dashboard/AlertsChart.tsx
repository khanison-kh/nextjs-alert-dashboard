'use client';

import { Alert } from '@/lib/alert/api';
import { groupAlertsByMonth, handleBarClick } from '@/lib/alert/utils';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export default function AlertsChart({ alerts }: { alerts: Alert[] }) {
  const data = groupAlertsByMonth(alerts);

  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">
        Nombre d’alertes par mois
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar
            name={"Nombre d'alertes"}
            dataKey="count"
            fill="#3b82f6"
            radius={[4, 4, 0, 0]}
            onClick={(_, index) => handleBarClick(index, data)}
            cursor="pointer"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
