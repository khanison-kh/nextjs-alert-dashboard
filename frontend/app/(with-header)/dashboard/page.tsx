import { fetchAlerts } from '@/lib/alert/api';
import AlertsChart from './AlertsChart';

export default async function Dashboard() {
  const alerts = await fetchAlerts('http://localhost:8080/alerts');
  return (
    <div className="m-4">
      <AlertsChart alerts={alerts}></AlertsChart>
    </div>
  );
}
