import { Logo } from '@/components/common/Logo';
import { useTheme } from '@/contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const darkMode = useTheme();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 dark:bg-gray-800/90 dark:border-gray-700">
        <div className="px-4 py-2.5 flex justify-between items-center max-w-7xl mx-auto">
          <Logo size="md" color={darkMode ? 'blueLight' : 'blueDark'} className="font-sans" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              About
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              Testimonials
            </a>
            <a
              href="#faq"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-700 dark:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Desktop auth buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="ghost"
                onClick={() => navigate('/login')}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Log in
              </Button>
              <Button
                onClick={() => navigate('/signup')}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Sign up
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col py-3 px-4 space-y-3">
              <a
                href="#features"
                className="text-gray-700 dark:text-gray-300 py-2 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#about"
                className="text-gray-700 dark:text-gray-300 py-2 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 dark:text-gray-300 py-2 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#faq"
                className="text-gray-700 dark:text-gray-300 py-2 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <hr className="border-gray-200 dark:border-gray-700" />
              <div className="flex gap-3 pt-2">
                <Button
                  variant="ghost"
                  onClick={() => {
                    navigate('/login');
                    setIsMenuOpen(false);
                  }}
                  className="flex-1 justify-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Log in
                </Button>
                <Button
                  onClick={() => {
                    navigate('/signup');
                    setIsMenuOpen(false);
                  }}
                  className="flex-1 justify-center bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Sign up
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}
