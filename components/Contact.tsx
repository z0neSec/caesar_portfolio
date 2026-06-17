'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { IconPin, IconPhone, IconMail, IconGlobe } from './Icons3D';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const info = [
    { icon: IconPin, label: 'Location', value: 'Lagos, Nigeria', href: undefined },
    { icon: IconPhone, label: 'Phone', value: '+234 814 843 9086', href: 'tel:+2348148439086' },
    { icon: IconMail, label: 'Email', value: 'anijoshua97@gmail.com', href: 'mailto:anijoshua97@gmail.com' },
    { icon: IconGlobe, label: 'LinkedIn', value: 'linkedin.com/in/joshua-ani', href: 'https://linkedin.com/in/joshua-ani' },
  ];

  const fade = (delay: number) => ({
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' as const } },
  });

  return (
    <section id="contact" className="relative py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-50 rounded-full blur-3xl pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-8 lg:px-12" ref={ref}>
        {/* Header */}
        <motion.div
          variants={fade(0)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-0.5 bg-gradient-to-r from-transparent to-violet-400 rounded-full" />
            <span className="text-violet-600 text-xs font-semibold uppercase tracking-[0.15em]">Get In Touch</span>
            <div className="w-10 h-0.5 bg-gradient-to-l from-transparent to-violet-400 rounded-full" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Let&apos;s{' '}
            <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto">
            Have a project in mind? I&apos;d love to collaborate and create something extraordinary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Info panel */}
          <motion.div
            variants={fade(0.15)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div className="rounded-2xl p-8 bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.06),0_12px_32px_rgba(0,0,0,0.08)]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to collaborate?</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Whether it&apos;s a new product, a redesign, a 3D visualization, or a full brand
                identity - I bring 8+ years of experience and genuine passion for craft.
              </p>

              <div className="space-y-6 py-2">
                {info.map(({ icon: Icon, label, value, href }) => {
                  const inner = (
                    <div className="flex items-center gap-3.5 group py-1">
                      <div className="w-11 h-11 rounded-xl bg-white border border-black/[0.06] shadow-[0_3px_8px_rgba(0,0,0,0.07),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <div className="text-[11px] text-gray-500 font-medium mb-0.5">{label}</div>
                        <div className="text-sm font-semibold text-gray-800 group-hover:text-violet-700 transition-colors">{value}</div>
                      </div>
                    </div>
                  );
                  return href ? (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer">{inner}</a>
                  ) : (
                    <div key={label}>{inner}</div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl p-6 bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-200">
              <div className="text-sm font-semibold mb-1">Available for freelance</div>
              <p className="text-violet-200 text-xs leading-relaxed">
                Open to full-time and freelance opportunities. Response time within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fade(0.25)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="rounded-2xl p-8 bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.06),0_12px_32px_rgba(0,0,0,0.08)] space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name', key: 'name' as const },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com', key: 'email' as const },
                ].map((field) => (
                  <div key={field.id}>
                    <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">{field.label}</label>
                    <input
                      required
                      type={field.type}
                      value={form[field.key]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      placeholder={field.placeholder}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:border-violet-400 focus:bg-white focus:ring-2 focus:ring-violet-100 transition-all duration-200"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Subject</label>
                <input
                  required
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="What's this about?"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:border-violet-400 focus:bg-white focus:ring-2 focus:ring-violet-100 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Message</label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project, timeline, and budget..."
                  rows={6}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:border-violet-400 focus:bg-white focus:ring-2 focus:ring-violet-100 transition-all duration-200 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending || sent}
                whileHover={{ scale: sending || sent ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-semibold text-sm text-white transition-all duration-300 disabled:opacity-80"
                style={{
                  background: sent
                    ? 'linear-gradient(135deg,#10b981,#059669)'
                    : 'linear-gradient(135deg,#7C3AED,#6366F1)',
                  boxShadow: sent
                    ? '0 4px 20px rgba(16,185,129,0.25)'
                    : '0 4px 20px rgba(124,58,237,0.25)',
                }}
              >
                {sent ? (
                  <><CheckCircle size={17} /> Message Sent!</>
                ) : sending ? (
                  <><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }} className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full" /> Sending...</>
                ) : (
                  <><Send size={16} /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
