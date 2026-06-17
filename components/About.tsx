'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { IconMedal, IconTrend, IconBolt, IconTarget } from './Icons3D';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const dur = 1600;
    const start = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - start) / dur, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * value));
      if (p < 1) requestAnimationFrame(tick);
      else setCount(value);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const statCards = [
  {
    value: 8, suffix: '+', label: 'Years Experience',
    Icon: IconMedal,
    bg: 'bg-violet-50', border: 'border-violet-100', accent: 'text-violet-700',
  },
  {
    value: 35, suffix: '%', label: 'Onboarding Improvement',
    Icon: IconTrend,
    bg: 'bg-indigo-50', border: 'border-indigo-100', accent: 'text-indigo-700',
  },
  {
    value: 40, suffix: '%', label: 'Faster Dev Handoff',
    Icon: IconBolt,
    bg: 'bg-purple-50', border: 'border-purple-100', accent: 'text-purple-700',
  },
  {
    value: 28, suffix: '%', label: 'Conversion Uplift',
    Icon: IconTarget,
    bg: 'bg-blue-50', border: 'border-blue-100', accent: 'text-blue-700',
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const fade = (delay: number) => ({
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' as const } },
  });

  return (
    <section id="about" className="relative py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent" />
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-gradient-to-bl from-violet-50 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 lg:px-12" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-start">

          {/* Left */}
          <div>
            <motion.div variants={fade(0)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              className="flex items-center gap-3 mb-7">
              <div className="w-10 h-0.5 bg-gradient-to-r from-violet-500 to-transparent rounded-full" />
              <span className="text-violet-600 text-xs font-semibold uppercase tracking-[0.15em]">About Me</span>
            </motion.div>

            <motion.h2 variants={fade(0.1)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-tight mb-7">
              Crafting experiences{' '}
              <span className="gradient-text">people remember</span>
            </motion.h2>

            <motion.div variants={fade(0.2)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              className="space-y-5 text-gray-500 text-[15px] leading-relaxed">
              <p>
                I&apos;m a creative and results-driven Product Designer with expertise spanning product
                design, UX strategy, web experiences, motion graphics, and 3D visualization.
              </p>
              <p>
                Over 8+ years, I&apos;ve partnered with startups and established companies across
                fintech, e-commerce, healthcare, and SaaS - translating complex problems into
                intuitive, beautiful, and performant products that users love.
              </p>
              <p>
                Beyond the screen, I&apos;m equally at home in Blender, Cinema 4D, and After Effects -
                bringing brands to life through immersive 3D visualizations and motion storytelling.
              </p>
            </motion.div>

            {/* Trait pills */}
            <motion.div variants={fade(0.35)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              className="flex flex-wrap gap-2.5 mt-9">
              {['User-Centered', 'Data-Driven', 'Detail-Obsessed', 'Collaborative', 'Creative'].map((t) => (
                <span key={t} className="px-4 py-2 rounded-full text-sm font-medium bg-gray-50 border border-gray-100 text-gray-600 hover:bg-violet-50 hover:border-violet-200 hover:text-violet-700 transition-all duration-200">
                  {t}
                </span>
              ))}
            </motion.div>

            {/* Tools */}
            <motion.div variants={fade(0.45)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              className="mt-10 pt-8 border-t border-gray-100">
              <p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-4">Core Tools</p>
              <div className="flex flex-wrap gap-2">
                {['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Blender', 'Cinema 4D', 'After Effects', 'Webflow', 'Framer'].map((t) => (
                  <span key={t} className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-gray-50 border border-gray-100 text-gray-500 hover:border-violet-200 hover:text-violet-600 transition-all duration-200">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - stat cards */}
          <div className="grid grid-cols-2 gap-5">
            {statCards.map((stat, i) => {
              const Icon = stat.Icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 36 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: 'easeOut' }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`rounded-2xl p-6 border ${stat.bg} ${stat.border} hover:shadow-lg transition-all duration-300`}
                >
                  {/* 3D icon */}
                  <div className="w-12 h-12 rounded-xl bg-white border border-black/[0.05] shadow-[0_3px_10px_rgba(0,0,0,0.07),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center mb-5">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className={`text-4xl font-bold ${stat.accent} mb-2 tabular-nums`}>
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs font-semibold text-gray-500 leading-snug">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
