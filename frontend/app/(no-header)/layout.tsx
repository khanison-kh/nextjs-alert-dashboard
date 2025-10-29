import '../globals.css';

export const metadata = {
  title: 'Alerts Dashboard | Next.js + Auth0 + Express',
  description:
    'Application web full-stack sécurisée pour la visualisation d’alertes. Authentification via Auth0, graphique interactif et backend Express API protégée.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
