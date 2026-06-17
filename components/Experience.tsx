'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';

const jobs = [
  {
    role: 'Senior Product Designer',
    company: 'NovaPay Technologies',
    location: 'Lagos, Nigeria',
    period: '2022 – Present',
    dot: '#7C3AED',
    dotShadow: 'rgba(124,58,237,0.4)',
    tagColor: 'bg-violet-50 text-violet-700 border-violet-100',
    achievements: [
      'Led design strategy for fintech and SaaS products serving over 100,000 users.',
      'Increased onboarding completion rates by 35% through UX improvements and usability testing.',
      'Built scalable design systems that reduced design-to-development handoff time by 40%.',
      'Collaborated with developers, product managers, and stakeholders to ship web and mobile products.',
    ],
    tags: ['Fintech', 'SaaS', 'Design Systems', 'Mobile', 'Web'],
  },
  {
    role: 'UI/UX & Web Designer',
    company: 'DigitalCraft Solutions',
    location: 'Remote',
    period: '2020 – 2022',
    dot: '#6366F1',
    dotShadow: 'rgba(99,102,241,0.4)',
    tagColor: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    achievements: [
      'Designed responsive websites and web applications for finance, healthcare, and retail clients.',
      'Improved conversion rates by up to 28% through redesigned user journeys and checkout flows.',
      'Created high-fidelity prototypes and interactive design presentations for clients.',
    ],
    tags: ['Web Design', 'Prototyping', 'E-Commerce', 'Healthcare'],
  },
  {
    role: '2D/3D Animation Specialist',
    company: 'PixelForge Creative Studio',
    location: 'Lagos, Nigeria',
    period: '2018 – 2020',
    dot: '#A78BFA',
    dotShadow: 'rgba(167,139,250,0.4)',
    tagColor: 'bg-purple-50 text-purple-700 border-purple-100',
    achievements: [
      'Produced product visualizations, marketing animations, and motion graphics campaigns.',
      'Created photorealistic 3D renders and animations using Blender, Cinema 4D, and After Effects.',
      'Delivered visual storytelling assets that increased engagement across digital campaigns.',
    ],
    tags: ['3D Animation', 'Motion Graphics', 'Blender', 'After Effects'],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="relative py-32 overflow-hidden section-surface">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent" />
      <div className="absolute left-8 top-1/3 w-72 h-72 bg-indigo-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-8 lg:px-12" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-0.5 bg-gradient-to-r from-violet-500 to-transparent rounded-full" />
            <span className="text-violet-600 text-xs font-semibold uppercase tracking-[0.15em]">Career Journey</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Professional{' '}
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-lg">
            8+ years of designing products that matter, across industries and disciplines.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-[7px] top-3 bottom-0 w-px timeline-line" />

          {jobs.map((job, i) => {
            const cardRef = useRef(null);
            const cardInView = useInView(cardRef, { once: true, margin: '-60px' });

            return (
              <motion.div
                key={job.company}
                ref={cardRef}
                initial={{ opacity: 0, x: -36 }}
                animate={cardInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
                className="relative pl-10 pb-12 last:pb-0"
              >
                {/* Dot */}
                <div
                  className="absolute left-0 top-2 w-4 h-4 rounded-full border-[3px] border-white"
                  style={{ backgroundColor: job.dot, boxShadow: `0 0 0 3px ${job.dotShadow}, 0 4px 12px ${job.dotShadow}` }}
                />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="card rounded-2xl p-7 bg-white"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1.5">{job.role}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="font-semibold text-gray-700">{job.company}</span>
                        <span className="text-gray-300">·</span>
                        <MapPin size={12} className="text-violet-500" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100">
                      <Calendar size={12} className="text-violet-500" />
                      <span className="text-xs font-semibold text-gray-500">{job.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-6">
                    {job.achievements.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-gray-500 leading-relaxed">
                        <ChevronRight size={14} className="text-violet-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span key={tag} className={`px-3 py-1 rounded-full text-xs font-semibold border ${job.tagColor}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
