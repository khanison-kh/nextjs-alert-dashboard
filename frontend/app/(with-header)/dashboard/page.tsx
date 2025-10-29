import { fetchAlerts } from '@/lib/alert/api';
import AlertsChart from './AlertsChart';

export default async function Dashboard() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const alerts = await fetchAlerts(`${API_URL}/alerts`);
  return (
    <div className="p-8 grow">
      <AlertsChart alerts={alerts}></AlertsChart>
    </div>
  );
}
