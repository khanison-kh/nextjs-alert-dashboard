import { auth0 } from '@/lib/auth0';
import Link from 'next/link';

export default async function Dashboard({
  params,
}: {
  params: Promise<{ alertId: string }>;
}) {
  const session = await auth0.getSession();
  const { alertId } = await params;

  return (
    <div>
      <h1>This is the Alert {alertId} page</h1>
      <p>Bonjour {session?.user?.name}. Vous êtes connecté.</p>
      <Link href="/auth/logout">Se déconnecter</Link>
    </div>
  );
}
