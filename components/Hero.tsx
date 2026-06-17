'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';

const HeroScene = dynamic(() => import('./HeroScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-40 h-40 rounded-full bg-violet-100 animate-pulse" />
    </div>
  ),
});

const roles = ['Product Designer', 'UI/UX Designer', 'Web Designer', '3D Animation Specialist'];

function Typewriter() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = roles[idx];
    if (!deleting && text === target) {
      const t = setTimeout(() => setDeleting(true), 2400);
      return () => clearTimeout(t);
    }
    if (deleting && text === '') {
      setDeleting(false);
      setIdx((i) => (i + 1) % roles.length);
      return;
    }
    const speed = deleting ? 40 : 85;
    const t = setTimeout(() => {
      setText(deleting ? target.slice(0, text.length - 1) : target.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return (
    <span>
      <span className="gradient-text">{text}</span>
      <span className="typewriter-cursor" />
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(124,58,237,0.07) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Soft gradient blobs */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-violet-50/80 via-indigo-50/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-50 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 xl:px-16 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-160px)]">

          {/* Left */}
          <div className="flex flex-col justify-center">
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4"
            >
              <h1 className="font-brand text-[clamp(3.5rem,8vw,6rem)] font-extrabold leading-[0.92] text-gray-900">
                Joshua
              </h1>
              <h1 className="font-brand text-[clamp(3.5rem,8vw,6rem)] font-extrabold leading-[0.92] gradient-text mt-0.5">
                Ani
              </h1>
            </motion.div>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-xl sm:text-2xl font-semibold text-gray-400 mb-7 h-9 flex items-center"
            >
              <Typewriter />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="text-base sm:text-[17px] text-gray-500 leading-[1.75] mb-10 max-w-[420px]"
            >
              8+ years crafting digital products and immersive visual experiences.
              From fintech platforms to 3D visualizations -{' '}
              <span className="text-violet-600 font-semibold">precision meets creativity.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-bold shadow-lg shadow-violet-200 hover:shadow-violet-300 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                View Projects <ArrowRight size={15} />
              </button>

              <button
                onClick={() => {
                  const a = document.createElement('a');
                  a.href = '/cv/Joshua_Ani_CV.pdf';
                  a.download = 'Joshua_Ani_CV.pdf';
                  a.click();
                }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-700 text-sm font-bold shadow-sm hover:border-violet-300 hover:text-violet-700 hover:bg-violet-50/50 hover:shadow-md active:scale-[0.98] transition-all duration-200"
              >
                <Download size={15} /> Download CV
              </button>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-700 text-sm font-bold shadow-sm hover:border-violet-300 hover:text-violet-700 hover:bg-violet-50/50 hover:shadow-md active:scale-[0.98] transition-all duration-200"
              >
                <Mail size={15} /> Contact Me
              </button>
            </motion.div>

            {/* Years badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05 }}
              className="flex items-center gap-5 mt-12 pt-10 border-t border-gray-100"
            >
              <div>
                <div className="text-3xl font-extrabold gradient-text">8+</div>
                <div className="text-xs text-gray-400 mt-0.5 font-medium tracking-wide">Years Experience</div>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <p className="text-sm text-gray-400 leading-relaxed max-w-[180px]">
                Senior Product Designer · Lagos, Nigeria
              </p>
            </motion.div>
          </div>

          {/* Right - 3D scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[520px] lg:h-[640px] w-full"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 rounded-full bg-violet-100/60 blur-3xl animate-pulse-glow" />
            </div>
            <HeroScene />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-gray-300 uppercase tracking-[0.25em] font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={13} className="text-gray-300" />
        </motion.div>
      </motion.div>
    </section>
  );
}
