import { auth0 } from '@/lib/auth0';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await auth0.getSession();

  if (session) {
    redirect('/dashboard');
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-linear-to-br from-gray-950 via-blue-950 to-black text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">
          Bienvenue sur{' '}
          <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Alert Dashboard
          </span>
        </h1>
        <p className="text-gray-300 mb-8">
          Connectez-vous pour accéder aux données.
        </p>
        <a
          href="/api/auth/login"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500
          text-white font-semibold rounded-xl shadow-lg transition duration-300"
        >
          Se connecter
        </a>
      </div>
    </main>
  );
}
