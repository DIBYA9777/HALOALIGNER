import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#features' },
    { name: 'White-label Manufacturing', href: '/#showcase' },
    { name: 'FAQs', href: '/#how' },
    { name: 'Blogs', href: '/#reviews' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-300 bg-[rgba(213,225,0,0.92)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.45)]",
          isScrolled ? "py-3 px-6 md:px-15" : "py-4.5 px-6 md:px-15"
        )}
      >
        <Link to="/" className="font-syne font-extrabold text-xl tracking-tighter uppercase text-[#1A56DB]">
          HALO<span className="text-[#3B82F6] font-medium">ALIGNER</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-9 list-none">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.href.includes('#') ? (
                <HashLink
                  smooth
                  to={link.href}
                  className="relative text-[#1A56DB] text-[0.92rem] font-bold transition-colors hover:text-blue-700 group uppercase tracking-tight"
                >
                  {link.name}
                  <span className="absolute bottom-[-3px] left-0 right-0 h-[2px] bg-[#1A56DB] scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left duration-300" />
                </HashLink>
              ) : (
                <Link
                  to={link.href}
                  className="relative text-[#1A56DB] text-[0.92rem] font-bold transition-colors hover:text-blue-700 group uppercase tracking-tight"
                >
                  {link.name}
                  <span className="absolute bottom-[-3px] left-0 right-0 h-[2px] bg-[#1A56DB] scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left duration-300" />
                </Link>
              )}
            </li>
          ))}
          <li>
            <Link
              to="/login"
              className="bg-[#1A56DB] text-[#D5E100] px-5.5 py-2.5 rounded-full font-bold text-[0.88rem] shadow-[0_4px_18px_rgba(26,86,219,0.30)] transition-all hover:bg-[#2563EB] hover:-translate-y-0.5"
            >
              Dashboard
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-1 text-[#1A56DB]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[999] bg-[rgba(213,225,0,0.98)] backdrop-blur-xl pt-20 px-6 pb-10 flex flex-col lg:hidden"
          >
            {navLinks.map((link) => (
              link.href.includes('#') ? (
                <HashLink
                  key={link.name}
                  smooth
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-4 border-b border-[rgba(26,86,219,0.10)] text-[#1A56DB] font-bold text-lg hover:text-[#2563EB]"
                >
                  {link.name}
                </HashLink>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-4 border-b border-[rgba(26,86,219,0.10)] text-[#1A56DB] font-bold text-lg hover:text-[#2563EB]"
                >
                  {link.name}
                </Link>
              )
            ))}
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-6 bg-[#1A56DB] text-[#D5E100] text-center rounded-full py-4 font-bold text-lg shadow-lg"
            >
              Dashboard
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
