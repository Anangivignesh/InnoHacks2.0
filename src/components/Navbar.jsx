import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { Button } from './ui/button';
import Terminal from './Terminal';
import { useTerminal } from '../context/TerminalContext';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Schedule', path: '/schedule' },
  { name: 'Tracks', path: '/tracks' },
  { name: 'Sponsors', path: '/sponsors' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isOpen, isMinimized, openTerminal, closeTerminal, minimizeTerminal, maximizeTerminal } = useTerminal();
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-background-dark/80 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center group-hover:bg-primary-dark transition-colors">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <span className="font-bold text-2xl tracking-tight text-white group-hover:text-gray-200 transition-colors">
                INNOHACKS <span className="text-primary">2.0</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-medium transition-colors ${isActive(link.path)
                    ? 'text-primary'
                    : 'text-gray-300 hover:text-primary'
                    }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* Terminal Button (Desktop) */}
              <button
                onClick={openTerminal}
                className="hidden sm:block text-sm font-medium text-gray-300 hover:text-white transition-colors"
                title="Open Terminal"
              >
                Terminal
              </button>

              {isAuthenticated ? (
                <Link to="/portal">
                  <Button className="hidden sm:flex items-center gap-2 bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/20 transition-all">
                    <User className="w-4 h-4" />
                    Portal
                  </Button>
                </Link>
              ) : (
                <div className="hidden sm:flex items-center gap-4">
                  <Link to="/login" className="text-sm font-medium text-white hover:text-primary transition-colors">
                    Login
                  </Link>
                  <Link to="/register">
                    <Button className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded text-sm font-bold transition-all shadow-lg shadow-primary/20">
                      Register Now
                    </Button>
                  </Link>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background-dark/95 backdrop-blur-xl border-t border-white/10"
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive(link.path)
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    openTerminal();
                    maximizeTerminal();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-2"
                >
                  <Code2 className="w-4 h-4" />
                  Open Terminal
                </button>
                <div className="pt-4 border-t border-white/10 space-y-4 px-4">
                  {isAuthenticated ? (
                    <Link to="/portal" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full bg-primary hover:bg-primary-dark">
                        <User className="w-4 h-4 mr-2" />
                        Portal
                      </Button>
                    </Link>
                  ) : (
                    <>
                      <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                          Login
                        </Button>
                      </Link>
                      <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button className="w-full bg-primary hover:bg-primary-dark">
                          Register Now
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Terminal Modal or Minimized Widget */}
      <AnimatePresence mode="wait">
        {isOpen && (
          isMinimized ? (
            <motion.div
              key="minimized-terminal"
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed bottom-4 right-4 z-[100] w-80 shadow-2xl"
            >
              <Terminal
                onClose={closeTerminal}
                onMaximize={maximizeTerminal}
                isMinimized={true}
              />
            </motion.div>
          ) : (
            <motion.div
              key="modal-terminal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
              onClick={closeTerminal}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="w-full max-w-3xl relative focus:outline-none"
                onClick={e => e.stopPropagation()}
              >
                <Terminal
                  onClose={closeTerminal}
                  onMinimize={minimizeTerminal}
                />
              </motion.div>
            </motion.div>
          )
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
