import { format, parse, parseISO } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { fr } from 'date-fns/locale/fr';
import { redirect } from 'next/navigation';
import { Alert } from './api';

type groupAlertsByMonth = { month: string; count: number };

export function groupAlertsByMonth(alerts: Alert[]) {
  const grouped = alerts.reduce<Record<string, number>>((acc, alert) => {
    const date = parseISO(alert.timestamp);
    const monthLabel = format(date, 'MMMM yyyy', { locale: fr });
    acc[monthLabel] = (acc[monthLabel] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(grouped)
    .map(([month, count]) => ({ month, count }))
    .sort((a, b) => {
      const dateA = parseISO(`01 ${a.month}`);
      const dateB = parseISO(`01 ${b.month}`);
      return dateA.getTime() - dateB.getTime();
    });
}

export const handleBarClick = (index: number, alerts: groupAlertsByMonth[]) => {
  const rawMonth = alerts[index].month;
  const date = parse(rawMonth, 'MMMM yyyy', new Date(), { locale: fr });
  const month = format(date, 'MMMM', { locale: enUS }).toLowerCase();

  redirect(`/alerts?month=${encodeURIComponent(month)}`);
};
