export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Alert Dashboard</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a
            href="https://github.com/khanison-kh/nextjs-alert-dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
