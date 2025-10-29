import AlertCard from '@/app/(with-header)/alerts/AlertCard';
import { fetchAlerts } from '@/lib/alert/api';

export default async function Alerts({
  searchParams,
}: {
  searchParams: Promise<{ [month: string]: string }>;
}) {
  const month = (await searchParams).month;
  const baseUrl = 'http://localhost:8080/alerts';
  const url = month ? `${baseUrl}?month=${encodeURIComponent(month)}` : baseUrl;

  const alerts = await fetchAlerts(url);
  return (
    <div className="grid grid-cols-7 gap-4 m-4">
      {alerts.map((a) => AlertCard({ a }))}
    </div>
  );
}
