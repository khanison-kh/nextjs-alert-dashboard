import { User } from '@auth0/nextjs-auth0/types';
import Image from 'next/image';
import Link from 'next/link';

export default function Header({ user }: { user: User }) {
  return (
    <header className="w-full border-b border-gray-200 bg-white/70 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo & Navigation */}
        <div className="flex items-center gap-10">
          <Link href="/dashboard" className="text-xl font-bold text-blue-600">
            Alert Dashboard
          </Link>

          <nav className="flex items-center gap-6 text-sm font-medium text-gray-700">
            <Link
              href="/dashboard"
              className="hover:text-blue-600 transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/alerts"
              className="hover:text-blue-600 transition-colors"
            >
              Alerts
            </Link>
          </nav>
        </div>

        {/* User info */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex flex-col text-right text-sm">
            <span className="font-semibold text-gray-900">
              {user.name || 'Utilisateur'}
            </span>
            {user.email && <span className="text-gray-500">{user.email}</span>}
          </div>

          {user.picture && (
            <Image
              src={user.picture}
              alt="Photo de profil"
              width={40}
              height={40}
              className="rounded-full border border-gray-300"
            />
          )}

          {/* Logout Button*/}
          <Link
            href="auth/logout"
            className="ml-2 px-3 py-1.5 text-sm text-white bg-red-700 hover:bg-red-500 rounded-lg font-medium"
          >
            Déconnexion
          </Link>
        </div>
      </div>
    </header>
  );
}
