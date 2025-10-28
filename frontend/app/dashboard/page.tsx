import { auth0 } from '@/lib/auth0';
import Link from 'next/link';

export default async function Dashboard() {
  const session = await auth0.getSession();

  return (
    <div>
      <h1>This is the Dashboard page</h1>
      <p>Bonjour {session?.user?.name}. Vous êtes connecté.</p>
      <Link href="/api/auth/logout">Se déconnecter</Link>
    </div>
  );
}
