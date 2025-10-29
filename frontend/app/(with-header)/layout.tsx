import { auth0 } from '@/lib/auth0';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../globals.css';

export const metadata = {
  title: 'Alerts Dashboard | Next.js + Auth0 + Express',
  description:
    'Application web full-stack sécurisée pour la visualisation d’alertes. Authentification via Auth0, graphique interactif et backend Express API protégée.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth0.getSession();
  const user = session?.user || null;

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen ">
        {user && <Header user={user}></Header>}
        <main className="grow bg-gray-100">{children}</main>
        {<Footer />}
      </body>
    </html>
  );
}
