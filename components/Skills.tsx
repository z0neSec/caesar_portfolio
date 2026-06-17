'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { IconLayers, IconAnim, IconCube, IconGear } from './Icons3D';

const categories = [
  {
    title: 'Product Design',
    Icon: IconLayers,
    glow: 'rgba(124,58,237,0.15)',
    bg: 'from-violet-50 to-purple-50/60',
    border: 'border-violet-100',
    pillBg: 'bg-violet-100/70 border-violet-200/60 text-violet-700',
    skills: ['Product Design', 'UI/UX Design', 'User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Interaction Design', 'Responsive Design'],
  },
  {
    title: 'Design & Animation',
    Icon: IconAnim,
    glow: 'rgba(236,72,153,0.12)',
    bg: 'from-pink-50 to-rose-50/60',
    border: 'border-pink-100',
    pillBg: 'bg-pink-100/70 border-pink-200/60 text-pink-700',
    skills: ['Motion Graphics', '2D Animation', '3D Visualization', 'Brand Identity', 'SaaS Design', 'Mobile App Design', 'Web Design'],
  },
  {
    title: 'Development & Platforms',
    Icon: IconCube,
    glow: 'rgba(99,102,241,0.15)',
    bg: 'from-indigo-50 to-blue-50/60',
    border: 'border-indigo-100',
    pillBg: 'bg-indigo-100/70 border-indigo-200/60 text-indigo-700',
    skills: ['HTML5', 'CSS3', 'Webflow', 'Framer', 'WordPress'],
  },
  {
    title: 'Tools & Software',
    Icon: IconGear,
    glow: 'rgba(245,158,11,0.12)',
    bg: 'from-amber-50 to-orange-50/60',
    border: 'border-amber-100',
    pillBg: 'bg-amber-100/70 border-amber-200/60 text-amber-700',
    skills: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'InDesign', 'FigJam', 'Miro', 'Blender', 'Cinema 4D', 'After Effects', 'Autodesk Maya', 'Jira', 'Notion'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="relative py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-violet-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 lg:px-12" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-0.5 bg-gradient-to-r from-transparent to-violet-400 rounded-full" />
            <span className="text-violet-600 text-xs font-semibold uppercase tracking-[0.15em]">Expertise</span>
            <div className="w-10 h-0.5 bg-gradient-to-l from-transparent to-violet-400 rounded-full" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Skills &amp;{' '}
            <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            A versatile toolkit spanning design, animation, and development - built over 8+ years of hands-on work.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, i) => {
            const cardRef = useRef(null);
            const cardInView = useInView(cardRef, { once: true, margin: '-40px' });
            const Icon = cat.Icon;

            return (
              <motion.div
                key={cat.title}
                ref={cardRef}
                initial={{ opacity: 0, y: 36 }}
                animate={cardInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
                whileHover={{ y: -4 }}
                className={`relative rounded-2xl p-8 bg-gradient-to-br ${cat.bg} border ${cat.border} overflow-hidden group transition-all duration-300 hover:shadow-lg`}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 50% 0%, ${cat.glow} 0%, transparent 65%)` }}
                />

                <div className="relative z-10">
                  {/* 3D-style icon */}
                  <div className="flex items-center gap-4 mb-7">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-black/[0.06] shadow-[0_4px_14px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-300">
                      <Icon />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{cat.title}</h3>
                  </div>

                  {/* Skill pills */}
                  <div className="flex flex-wrap gap-2">
                    {cardInView && cat.skills.map((skill, si) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.88 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.04 + si * 0.03, duration: 0.28 }}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border ${cat.pillBg} hover:scale-105 transition-transform duration-150`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
