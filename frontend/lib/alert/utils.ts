import { format, parse, parseISO } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { fr } from 'date-fns/locale/fr';
import { redirect } from 'next/navigation';
import { Alert } from './api';

type graphData =
  | { month: string; count: number }
  | { subject: string; count: number };

export function countAlertsByMonth(alerts: Alert[]) {
  const counts: Record<string, number> = {};
  alerts.forEach((a) => {
    const month = format(parseISO(a.timestamp), 'MMMM yyyy', { locale: fr });
    counts[month] = (counts[month] || 0) + 1;
  });

  return Object.entries(counts)
    .map(([month, count]) => ({ month, count }))
    .sort((a, b) => {
      const dateA = parseISO(`01 ${a.month}`);
      const dateB = parseISO(`01 ${b.month}`);
      return dateA.getTime() - dateB.getTime();
    });
}

export function countAlertsBySubject(alerts: Alert[]) {
  const counts: Record<string, number> = {};

  alerts.forEach((a) => {
    counts[a.subject] = (counts[a.subject] || 0) + 1;
  });

  return Object.entries(counts).map(([subject, count]) => ({
    subject,
    count,
  }));
}

export const handleBarClick = (index: number, alerts: graphData[]) => {
  const dataItem = alerts[index];
  if ('month' in dataItem) {
    const rawMonth = dataItem.month;
    const date = parse(rawMonth, 'MMMM yyyy', new Date(), { locale: fr });
    const month = format(date, 'MMMM', { locale: enUS }).toLowerCase();
    redirect(`/alerts?month=${encodeURIComponent(month)}`);
  }
};

export function groupAlertsByMonth(alerts: Alert[]) {
  const groups: Record<string, Alert[]> = {};

  for (const alert of alerts) {
    const month = format(parseISO(alert.timestamp), 'MMMM', { locale: fr });
    if (!groups[month]) groups[month] = [];
    groups[month].push(alert);
  }

  const order = [
    'janvier',
    'février',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'août',
    'septembre',
    'octobre',
    'novembre',
    'décembre',
  ];

  return Object.entries(groups).sort(
    ([a], [b]) => order.indexOf(a) - order.indexOf(b),
  );
}
