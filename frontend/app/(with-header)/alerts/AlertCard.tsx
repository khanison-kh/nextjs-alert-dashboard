import { Alert } from '@/lib/alert/api';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

export default function AlertCard({ a }: { a: Alert }) {
  return (
    <div
      key={a.id}
      className="max-w-sm p-6 bg-gray-300 rounded-lg shadow-md hover:bg-gray-100"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {a.title}
      </h5>
      <p className="font-normal">{a.message}</p>
      <p>Severity: {a.severity}</p>
      <p>Timestamp default: {a.timestamp}</p>
      <p>
        Formatted timestamp:
        {format(parseISO(a.timestamp), 'dd MMM yyyy', { locale: fr })}
      </p>
    </div>
  );
}
