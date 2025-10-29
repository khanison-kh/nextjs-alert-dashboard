import { fetchAlert } from '@/lib/alert/api';

import { format, parseISO } from 'date-fns';

import { fr } from 'date-fns/locale';

import Link from 'next/link';

export default async function AlertDetail({
  params,
}: {
  params: Promise<{ alertId: string }>;
}) {
  const { alertId } = await params;

  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const alert = await fetchAlert(`${API_URL}/alerts/${alertId}`);

  if (!alert) {
    return (
      <section className="p-8 flex justify-center items-center grow">
        <div className="text-center text-red-600 font-semibold text-lg">
          Alerte non trouvée.
        </div>
      </section>
    );
  }

  return (
    <section className="p-8 flex justify-center">
      <div className="bg-white rounded-2xl shadow-lg max-w-2xl w-full p-8 border border-gray-100">
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-2xl font-bold text-gray-800 leading-tight">
            {alert.title}
          </h1>

          <span
            className={`px-3 py-1 rounded text-sm font-semibold ${
              alert.severity === 'CRITICAL'
                ? 'bg-red-100 text-red-700'
                : alert.severity === 'HIGH'
                ? 'bg-orange-100 text-orange-700'
                : alert.severity === 'MEDIUM'
                ? 'bg-yellow-100 text-yellow-700'
                : 'bg-green-100 text-green-700'
            }`}
          >
            {alert.severity}
          </span>
        </div>

        <div className="flex flex-wrap gap-3 text-gray-500 text-sm mb-6">
          <p>
            <strong>Date : </strong>
            {format(parseISO(alert.timestamp), 'dd MMMM yyyy HH:mm', {
              locale: fr,
            })}
          </p>
          <p>
            <strong>Sujet : </strong>
            {alert.subject}
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Message</h2>
          <p className="text-gray-700 leading-relaxed">{alert.message}</p>
        </div>

        <div className="border-t border-gray-200 pt-4 text-gray-700 text-sm space-y-2">
          <h3 className="text-base font-semibold text-gray-800 mb-1">
            Métadonnées
          </h3>
          <p>
            <strong>Device ID :</strong> {alert.metadata.deviceId}
          </p>
          <p>
            <strong>Localisation :</strong> {alert.metadata.location}
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/alerts"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded-lg transition"
          >
            Retour
          </Link>
        </div>
      </div>
    </section>
  );
}
