'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Mail } from 'lucide-react';

const links = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-white border-t border-black/[0.06] py-12">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Left - brand */}
          <div>
            <div className="font-brand text-xl font-extrabold text-gray-900">
              Joshua <span className="gradient-text">Ani</span>
            </div>
            <p className="text-xs text-gray-400 italic mt-1">
              &quot;Designing experiences that people remember.&quot;
            </p>
          </div>

          {/* Center - nav links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                className="text-xs text-gray-400 hover:text-violet-600 transition-colors duration-200 font-medium"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Right - actions */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:anijoshua97@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-black/[0.08] text-xs font-medium text-gray-500 hover:text-violet-700 hover:border-violet-300 hover:bg-violet-50 transition-all duration-200"
            >
              <Mail size={13} />
              Email Me
            </a>
            <motion.button
              onClick={scrollTop}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-semibold shadow-md shadow-violet-200 hover:shadow-violet-300 transition-all duration-200"
            >
              <ArrowUp size={13} />
              Back to top
            </motion.button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-black/[0.04] text-center text-xs text-gray-300">
          © {new Date().getFullYear()} Joshua Ani. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
