import { auth0 } from '../auth0';

export interface Alert {
  id: string;
  subject: string;
  timestamp: string;
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  title: string;
  message: string;
  metadata: Record<string, string>;
}

export async function fetchAlerts(url: string): Promise<Alert[]> {
  const accessToken = await auth0.getAccessToken();
  const token = accessToken.token;

  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Erreur HTTP ${res.status}`);
  }

  return res.json();
}
