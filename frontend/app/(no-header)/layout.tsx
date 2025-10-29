import '../globals.css';

export const metadata = {
  title: 'Alert Dashboard',
  description: 'Tableau de bord de supervision des alertes',
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
