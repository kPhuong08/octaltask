export function Footer() {
  return (
    <footer className="py-6 px-8 text-center text-xs text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-center gap-4">
        <p>© 2025 OctalTask · Built with 💖 by Team OctalTask</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
            Help
          </a>
        </div>
      </div>
    </footer>
  );
}
