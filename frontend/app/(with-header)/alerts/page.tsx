import { fetchAlerts } from '@/lib/alert/api';
import { groupAlertsByMonth } from '@/lib/alert/utils';
import { parseISO } from 'date-fns';
import { format } from 'date-fns/format';
import { fr } from 'date-fns/locale';
import Link from 'next/link';

export default async function Alerts({
  searchParams,
}: {
  searchParams: Promise<{ [month: string]: string }>;
}) {
  const month = (await searchParams).month;
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const url = month
    ? `${API_URL}/alerts?month=${encodeURIComponent(month)}`
    : `${API_URL}/alerts`;

  const alerts = await fetchAlerts(url);

  const groupedAlerts = groupAlertsByMonth(alerts);
  return (
    <section className="p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Alertes par mois ({alerts.length})
        </h1>

        {groupedAlerts.length === 0 ? (
          <p className="text-gray-500 italic">Aucune alerte disponible.</p>
        ) : (
          groupedAlerts.map(([month, list]) => (
            <div
              key={month}
              className="mb-8 bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
            >
              <div className="px-6 py-4 bg-gray-100 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800 capitalize">
                  {month} ({list.length})
                </h2>
              </div>

              <ul>
                {list.map((a) => (
                  <li key={a.id}>
                    <Link
                      href={`/alerts/${a.id}`}
                      className="flex justify-between items-center px-6 py-3 border-b border-gray-100 hover:bg-gray-50 transition"
                    >
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-800">
                          {a.title}
                        </span>
                        <span className="text-xs text-gray-500">
                          {format(parseISO(a.timestamp), 'dd MMM yyyy HH:mm', {
                            locale: fr,
                          })}
                        </span>
                      </div>

                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold ${
                          a.severity === 'CRITICAL'
                            ? 'bg-red-100 text-red-700'
                            : a.severity === 'HIGH'
                            ? 'bg-orange-100 text-orange-700'
                            : a.severity === 'MEDIUM'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-green-100 text-green-700'
                        }`}
                      >
                        {a.severity}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
