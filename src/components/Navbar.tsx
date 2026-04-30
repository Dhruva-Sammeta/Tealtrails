"use client"
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "About Us", href: "#mission" },
    { label: "Campaign One", href: "#campaign-one" },
    { label: "Gallery", href: "#gallery" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -14, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="sticky top-0 w-full z-50 border-b border-white/60 bg-white/45 backdrop-blur-2xl shadow-[0_8px_30px_rgba(109,91,72,0.08)]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/25 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 sm:h-24 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-teal-600/50 bg-white/80 shadow-sm float-soft transition-transform duration-300 group-hover:scale-105">
                 <Image src="/logo.jpg" fill sizes="48px" alt="Teal Trails Logo" className="object-contain p-1" />
              </div>
              <span className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-teal-800 tracking-tight hidden sm:block">
                TEAL TRAILS
              </span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center bg-white/55 px-7 py-3 rounded-full border border-white/70 shadow-[0_8px_24px_rgba(109,91,72,0.08)] backdrop-blur-xl">
            {links.map((link) => (
              <Link key={link.label} href={link.href} className="text-charcoal-800 hover:text-teal-600 transition-colors font-medium text-sm tracking-wide">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center">
            <Link href="#contact" className="bg-white/70 text-charcoal-900 border border-white/70 px-6 py-2.5 hover:bg-white hover:text-charcoal-950 hover:-translate-y-0.5 transition-all rounded-full shadow-[0_10px_25px_rgba(109,91,72,0.08)] font-semibold text-sm backdrop-blur-xl">
              Contact
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-charcoal-800 p-2 rounded-full bg-white/50 border border-white/70 backdrop-blur-md shadow-sm">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white/70 border-b border-white/70 backdrop-blur-2xl animate-in slide-in-from-top-4 duration-300 shadow-[0_12px_30px_rgba(109,91,72,0.08)]">
          <div className="px-4 pt-2 pb-6 space-y-2 sm:px-6">
            {links.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-bold text-charcoal-800 hover:text-teal-600 hover:bg-cream-200 rounded-lg">
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link href="#contact" onClick={() => setIsOpen(false)} className="block w-full text-center bg-white/80 px-3 py-3 text-base font-bold text-charcoal-900 border border-white/70 rounded-lg shadow-sm backdrop-blur-md">
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
