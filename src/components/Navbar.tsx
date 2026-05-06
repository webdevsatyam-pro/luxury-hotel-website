import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '../utils/cn';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Rooms', path: '/rooms' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6',
          isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link 
            to="/" 
            className={cn(
              'font-serif text-2xl tracking-widest uppercase transition-colors duration-300',
              isScrolled ? 'text-obsidian' : 'text-white'
            )}
          >
            Lumina <span className="font-light">Grand</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'relative text-sm uppercase tracking-widest font-display font-medium transition-colors hover:text-gold',
                  isScrolled ? 'text-obsidian' : 'text-white',
                  location.pathname === link.path && 'text-gold'
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 w-full h-px bg-gold"
                  />
                )}
              </Link>
            ))}
            <Link
              to="/booking"
              className={cn(
                'px-8 py-3 text-xs uppercase tracking-widest transition-all duration-300 border',
                isScrolled 
                  ? 'bg-obsidian text-white border-obsidian hover:bg-gold hover:border-gold' 
                  : 'bg-white text-obsidian border-white hover:bg-transparent hover:text-white'
              )}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn(
              'lg:hidden p-2 transition-colors',
              isScrolled ? 'text-obsidian' : 'text-white'
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-obsidian text-white lg:hidden"
          >
            <div className="flex flex-col h-full justify-center px-12 space-y-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-4xl font-serif hover:text-gold transition-colors flex items-center justify-between group"
                  >
                    {link.name}
                    <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity text-gold" />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-8"
              >
                <Link
                  to="/booking"
                  className="block w-full py-5 border border-gold text-center text-gold uppercase tracking-widest hover:bg-gold hover:text-white transition-all"
                >
                  Reserve Your Stay
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
