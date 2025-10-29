'use client';

import { Alert } from '@/lib/alert/api';
import {
  countAlertsByMonth,
  countAlertsBySubject,
  handleBarClick,
} from '@/lib/alert/utils';
import { useMemo, useState } from 'react';
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
  const [xAxisFilter, setXAxisFilter] = useState<'month' | 'subject'>('month');
  const data = useMemo(() => {
    if (xAxisFilter === 'month') {
      return countAlertsByMonth(alerts);
    } else {
      return countAlertsBySubject(alerts);
    }
  }, [alerts, xAxisFilter]);

  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-3 sm:mb-0">
          Nombre d’alertes par {xAxisFilter === 'month' ? 'mois' : 'sujet'}
        </h2>

        <select
          value={xAxisFilter}
          onChange={(e) =>
            setXAxisFilter(e.target.value as 'month' | 'subject')
          }
          className="px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="month">Par mois</option>
          <option value="subject">Par sujet</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid />
          <XAxis dataKey={xAxisFilter} />
          <YAxis />
          <Tooltip />
          {xAxisFilter === 'month' ? (
            <Bar
              name={"Nombre d'alertes"}
              dataKey="count"
              fill="#3b82f6"
              radius={[4, 4, 0, 0]}
              onClick={(_, index) => handleBarClick(index, data)}
              cursor="pointer"
            />
          ) : (
            <Bar
              name={"Nombre d'alertes"}
              dataKey="count"
              fill="#3b82f6"
              radius={[4, 4, 0, 0]}
            />
          )}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
