'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Play, Layers, Globe, Box } from 'lucide-react';

type Cat = 'design' | 'web' | '3d';
type Kind = 'image' | 'video' | 'web';

interface Work {
  id: string;
  title: string;
  subtitle: string;
  cat: Cat;
  kind: Kind;
  src: string;
  poster?: string;
  url?: string;
  desc: string;
}

const works: Work[] = [
  // ── Design ──
  {
    id: 'cupcake', title: 'Sweet Cupcakes App', subtitle: 'Mobile UI · E-commerce',
    cat: 'design', kind: 'image', src: '/works/cupcake-app.jpg',
    desc: 'A playful dessert-ordering mobile experience - category browsing, product detail, and a one-tap checkout flow with package bundles.',
  },
  {
    id: 'recipe', title: 'Recipe & Cooking App', subtitle: 'Mobile UI · Food',
    cat: 'design', kind: 'image', src: '/works/recipe-app.jpg',
    desc: 'Recipe discovery app with smart categories, ratings, ingredient lists, and an immersive product detail with reviews and directions.',
  },
  {
    id: 'asos', title: 'Buy The Look - E-commerce', subtitle: 'Web UI · Retail',
    cat: 'design', kind: 'image', src: '/works/asos-look.jpg',
    desc: 'A shoppable “buy the look” product carousel with variant selection, pricing, discounts, and add-to-bag micro-interactions.',
  },
  {
    id: 'lovehair', title: 'Love Hair - Product Page', subtitle: 'Web UI · Beauty',
    cat: 'design', kind: 'image', src: '/works/love-hair.jpg',
    desc: 'Clean, conversion-focused product page for a premium beauty brand - gallery, expandable detail sections, and refined typography.',
  },

  // ── Web (live) ──
  {
    id: 'swiftverx', title: 'Swift Bank', subtitle: 'Live Website · Fintech',
    cat: 'web', kind: 'web', src: '/works/site-swiftverx.jpg', url: 'https://swiftverx.com',
    desc: 'A full digital-banking marketing site - modern hero, banking features, and a friendly, trustworthy brand experience.',
  },
  {
    id: 'vicbogwin', title: 'Global Markets Trading', subtitle: 'Live Website · Trading',
    cat: 'web', kind: 'web', src: '/works/site-vicbogwin.jpg', url: 'https://vicbogwin.com',
    desc: 'A dark, high-trust trading platform landing page - forex, crypto & commodities, with lightning-fast execution messaging.',
  },
  {
    id: 'trust', title: 'Trust - Digital Wallet', subtitle: 'Live Website · Web3',
    cat: 'web', kind: 'web', src: '/works/site-trustbusiness.jpg', url: 'https://trustbusinessportfolio.com',
    desc: 'A next-generation multi-chain wallet site - quantum-resistant security narrative with a sleek product-led hero.',
  },
  {
    id: 'angelina', title: 'Angelina Garage', subtitle: 'Live Website · Rentals',
    cat: 'web', kind: 'web', src: '/works/angelina-garage.jpg', url: 'https://angelinagarage.simplybook.me',
    desc: 'A booking-driven site for a Miami luxury car-rental garage - map, opening hours, and a frictionless “Book Now” flow.',
  },
  {
    id: 'firstglobal', title: 'First Global Bank', subtitle: 'Web Design · Banking',
    cat: 'web', kind: 'image', src: '/works/first-global-bank.jpg',
    desc: 'Worldwide banking landing concept - “Banking Made Easy” with virtual & physical card offerings and a clear account CTA.',
  },
  {
    id: 'wiver', title: 'Wiver Logistics', subtitle: 'Web Design · Logistics',
    cat: 'web', kind: 'image', src: '/works/wiver-logistics.jpg',
    desc: 'Reliable freight & logistics site - bold hero, service breakdown, and a quote-request conversion path.',
  },
  {
    id: 'truecars', title: 'TrueCars Auto', subtitle: 'Web Design · Automotive',
    cat: 'web', kind: 'image', src: '/works/truecars.jpg',
    desc: 'Vehicle-discovery experience with category cards (Hybrid, EV, Trucks) powered by a ranking-algorithm narrative.',
  },

  // ── 3D & Motion ──
  {
    id: 'reel1', title: '3D Motion Reel - I', subtitle: '3D · Animation',
    cat: '3d', kind: 'video', src: '/videos/project1.mp4',
    desc: 'Product motion sequence - modelled, lit, and animated for a marketing campaign.',
  },
  {
    id: 'reel2', title: '3D Motion Reel - II', subtitle: '3D · Animation',
    cat: '3d', kind: 'video', src: '/videos/project2.mp4',
    desc: 'Photoreal product animation with custom lighting and camera choreography.',
  },
  {
    id: 'reel3', title: '3D Motion Reel - III', subtitle: '3D · Animation',
    cat: '3d', kind: 'video', src: '/videos/project3.mp4',
    desc: 'Storytelling render sequence delivered as part of a full motion-graphics package.',
  },
  {
    id: 'velo-berry', title: 'VELO - Berry Pop Edition', subtitle: '3D Render · Product Viz',
    cat: '3d', kind: 'image', src: '/works/velo-berry.jpg',
    desc: 'Photorealistic headphone concept render - plum Alcantara and bronze anodised aluminium with emissive accents.',
  },
  {
    id: 'velo-chrome', title: 'VELO - Chrome Edition', subtitle: '3D Render · Product Viz',
    cat: '3d', kind: 'image', src: '/works/velo-chrome.jpg',
    desc: 'Minimalist neutral-silver headphone render with an emissive matrix display and premium material study.',
  },
  {
    id: 'blender', title: 'Hard-surface Build', subtitle: '3D · Modeling',
    cat: '3d', kind: 'image', src: '/works/blender-setup.jpg',
    desc: 'Detailed hard-surface PC build modelled in Blender - millions of polys, production-grade detail.',
  },
];

const filters: { key: Cat | 'all'; label: string; Icon: typeof Layers }[] = [
  { key: 'all', label: 'All Work', Icon: Layers },
  { key: 'design', label: 'Design', Icon: Layers },
  { key: 'web', label: 'Websites', Icon: Globe },
  { key: '3d', label: '3D & Motion', Icon: Box },
];

function Lightbox({ work, onClose }: { work: Work; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    // Pause smooth-scroll so the modal scrolls natively and the page stays put
    window.__lenis?.stop();
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      window.__lenis?.start();
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
    >
      <div className="absolute inset-0 bg-gray-950/60 backdrop-blur-md" onClick={onClose} />
      <motion.div
        data-lenis-prevent
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 24 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-3xl max-h-[88vh] overflow-y-auto overscroll-contain bg-white rounded-2xl shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-gray-600 hover:text-gray-900 shadow-md transition-colors"
        >
          <X size={16} />
        </button>

        <div className="bg-gray-50 flex items-center justify-center">
          {work.kind === 'video' ? (
            <video src={work.src} className="w-full max-h-[60vh] object-contain bg-black" controls autoPlay loop muted playsInline />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={work.src} alt={work.title} className="w-full max-h-[60vh] object-contain" />
          )}
        </div>

        <div className="p-6 sm:p-8">
          <div className="text-xs font-bold uppercase tracking-widest text-violet-600 mb-2">{work.subtitle}</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{work.title}</h3>
          <p className="text-gray-500 leading-relaxed text-[15px]">{work.desc}</p>
          {work.url && (
            <a
              href={work.url} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-bold shadow-md shadow-violet-200 hover:shadow-violet-300 hover:scale-[1.02] transition-all"
            >
              Visit Live Site <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function WorkCard({ work, onOpen }: { work: Work; onOpen: () => void }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onClick={onOpen}
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => videoRef.current?.pause()}
      className="group relative rounded-2xl overflow-hidden bg-gray-100 border border-black/[0.06] shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
    >
      {/* Media */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        {work.kind === 'video' ? (
          <video
            ref={videoRef}
            src={work.src}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loop muted playsInline preload="metadata"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={work.src}
            alt={work.title}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        )}

        {/* Top badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          {work.kind === 'video' && (
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/55 backdrop-blur text-white text-[11px] font-semibold">
              <Play size={10} /> Motion
            </span>
          )}
          {work.kind === 'web' && (
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/55 backdrop-blur text-white text-[11px] font-semibold">
              <Globe size={10} /> Live
            </span>
          )}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex items-end justify-between gap-3">
            <div>
              <div className="text-[11px] font-semibold text-violet-300 uppercase tracking-wide mb-0.5">{work.subtitle}</div>
              <div className="text-white font-bold leading-tight">{work.title}</div>
            </div>
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
              <ArrowUpRight size={16} className="text-gray-900" />
            </div>
          </div>
        </div>
      </div>

      {/* Always-visible caption (mobile-friendly) */}
      <div className="p-4 group-hover:opacity-0 transition-opacity duration-200">
        <div className="text-[11px] font-semibold text-violet-600 uppercase tracking-wide mb-1">{work.subtitle}</div>
        <div className="text-gray-900 font-bold text-sm leading-tight">{work.title}</div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState<Cat | 'all'>('all');
  const [selected, setSelected] = useState<Work | null>(null);

  const visible = active === 'all' ? works : works.filter((w) => w.cat === active);

  return (
    <section id="projects" className="relative py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-violet-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 lg:px-12" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-0.5 bg-gradient-to-r from-violet-500 to-transparent rounded-full" />
            <span className="text-violet-600 text-xs font-bold uppercase tracking-[0.18em]">Selected Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl">
            A mix of product & UI design, live websites, and 3D / motion work - real projects shipped for real clients.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {filters.map((f) => {
            const Icon = f.Icon;
            const isActive = active === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                  isActive ? 'text-white' : 'text-gray-500 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 border border-black/[0.05]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="works-filter"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 shadow-md shadow-violet-200"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon size={14} /> {f.label}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((work) => (
              <WorkCard key={work.id} work={work} onOpen={() => setSelected(work)} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <Lightbox work={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
