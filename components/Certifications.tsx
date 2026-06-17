'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* ── Brand SVG logos ── */
function GoogleG() {
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/>
      <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.32-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/>
      <path fill="#FBBC05" d="M11.68 28.18A13.93 13.93 0 0111 24c0-1.45.25-2.86.69-4.18v-5.7H4.34A22 22 0 002 24c0 3.55.85 6.91 2.34 9.88l7.34-5.7z"/>
      <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.34 5.7c1.74-5.2 6.59-9.07 12.32-9.07z"/>
      <path fill="none" d="M2 2h44v44H2z"/>
    </svg>
  );
}

/* Cleaner Figma logo */
function FigmaLogo() {
  return (
    <svg viewBox="0 0 70 57" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 28.5A9.5 9.5 0 0 1 28.5 19H38v19H28.5A9.5 9.5 0 0 1 19 28.5z" fill="#1ABCFE"/>
      <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5A9.5 9.5 0 1 1 0 47.5z" fill="#0ACF83"/>
      <path d="M19 0h9.5A9.5 9.5 0 1 1 19 19V0z" fill="#FF7262"/>
      <path d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5z" fill="#F24E1E"/>
      <path d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5z" fill="#A259FF"/>
    </svg>
  );
}

/* Official Adobe "A" mark on the brand red tile */
function AdobeCC() {
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="11" fill="#EB1000" />
      <g transform="translate(9.5 11) scale(1.13)">
        <path fill="#fff" d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425z" />
        <path fill="#fff" d="M8.884 1.376H0v21.248z" />
        <path fill="#fff" d="M15.116 1.376H24v21.248z" />
      </g>
    </svg>
  );
}

/* Blender - brand-orange tile with the iconic "eye" mark */
function BlenderB() {
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="blndr" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F4790D" />
          <stop offset="1" stopColor="#E0670B" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="11" fill="url(#blndr)" />
      {/* eye ring */}
      <circle cx="27" cy="25" r="8.5" fill="#fff" />
      <circle cx="27" cy="25" r="4.6" fill="#265787" />
      {/* swoosh tail */}
      <path
        d="M11 30c2.2-4.4 7.4-7.6 13-7.6 2.1 0 4.1.45 5.8 1.25-2-3-5.6-5-9.7-5-3.5 0-6.6 1.45-8.7 3.8-1.2 1.35-1.2 3.2-.4 4.55z"
        fill="#fff"
      />
    </svg>
  );
}

const certs = [
  {
    title: 'Google UX Design Professional Certificate',
    issuer: 'Google',
    description: 'A 7-course program covering user research, wireframing, prototyping, and usability testing across web and mobile.',
    Logo: GoogleG,
    bg: '#F8FBFF',
    border: '#DBEAFE',
    badgeBg: '#EFF6FF',
    badgeText: '#1D4ED8',
  },
  {
    title: 'Figma UI/UX Design Certification',
    issuer: 'Figma',
    description: 'Advanced proficiency in Figma - auto-layout, component libraries, design tokens, variables, and prototyping.',
    Logo: FigmaLogo,
    bg: '#FDF8FF',
    border: '#E9D5FF',
    badgeBg: '#F5F3FF',
    badgeText: '#6D28D9',
  },
  {
    title: 'Adobe Certified Professional',
    issuer: 'Adobe',
    description: 'Professional certification covering Adobe Creative Suite - Photoshop, Illustrator, InDesign, and After Effects.',
    Logo: AdobeCC,
    bg: '#FFF8F8',
    border: '#FECACA',
    badgeBg: '#FEF2F2',
    badgeText: '#B91C1C',
  },
  {
    title: 'Blender 3D Design & Animation',
    issuer: 'Blender Foundation',
    description: 'Expert-level 3D modeling, sculpting, rigging, animation, and rendering for product visualization and VFX.',
    Logo: BlenderB,
    bg: '#FFFBF5',
    border: '#FED7AA',
    badgeBg: '#FFF7ED',
    badgeText: '#C2410C',
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certifications" className="relative py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 xl:px-16" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-0.5 bg-gradient-to-r from-violet-500 to-transparent rounded-full" />
            <span className="text-violet-600 text-xs font-bold uppercase tracking-[0.18em]">Credentials</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            Certifications &amp;{' '}
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl">
            Professional certifications validating expertise across design, tooling, and visual storytelling.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {certs.map((cert, i) => {
            const Logo = cert.Logo;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 36 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
                className="rounded-2xl p-6 border flex flex-col gap-0 transition-all duration-300 hover:shadow-lg"
                style={{ background: cert.bg, borderColor: cert.border }}
              >
                {/* Logo container - no extra white box, just the SVG */}
                <div className="w-12 h-12 mb-5 rounded-xl overflow-hidden shrink-0">
                  <Logo />
                </div>

                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">{cert.issuer}</div>
                <h3 className="text-sm font-bold text-gray-900 leading-snug mb-3">{cert.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed flex-1 mb-5">{cert.description}</p>

                <div
                  className="inline-flex items-center gap-1.5 self-start px-3 py-1.5 rounded-full text-xs font-bold border"
                  style={{ background: cert.badgeBg, borderColor: cert.border, color: cert.badgeText }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  Certified
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlights strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-14 p-8 rounded-2xl border border-violet-100 text-center"
          style={{ background: 'linear-gradient(135deg, #F5F3FF 0%, #EEF2FF 100%)' }}
        >
          <p className="text-xs font-bold text-violet-600 uppercase tracking-widest mb-5">Portfolio Highlights</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Product Design Case Studies', 'Mobile App Design', 'Web Design Projects', 'Interactive Prototypes', '3D Product Visualizations', 'Motion Graphics', 'Branding & Visual Identity'].map((item) => (
              <span key={item} className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-violet-100 text-gray-600 hover:border-violet-300 hover:text-violet-700 transition-all duration-200 shadow-sm">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
