import React from 'react';
import { motion } from 'motion/react';

const cards = [
  { icon: '🔬', title: '3D Precision Modelling', desc: 'Advanced 3D imaging technology to create highly accurate dental models for perfectly fitted aligners.' },
  { icon: '🦷', title: 'Bio-Compatible Materials', desc: 'Crafted from medical-grade, BPA-free materials that ensure comfort and safe, effective tooth alignment.' },
  { icon: '🎁', title: 'Free Retainers Included', desc: 'Protect your new smile forever. We include high-quality custom retainers with every treatment plan.' },
  { icon: '💬', title: 'Expert Support', desc: 'Access to a dedicated team of clinical professionals to guide you and answer your questions anytime.' },
  { icon: '✨', title: 'Enhance Your Smile', desc: 'Achieve the radiant, confident smile you deserve with professional-grade clear aligner technology.' },
];

export default function Showcase() {
  return (
    <section id="showcase" className="bg-[#1A56DB] py-28 px-6 md:px-15 relative overflow-hidden">
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:40px_40px]" />

      <div className="relative z-10 text-center max-w-[580px] mx-auto mb-15">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag bg-[rgba(255,255,255,0.08)] border-[rgba(255,255,255,0.18)] text-[rgba(255,255,255,0.7)]">What Makes Us Different</span>
          <h2 className="section-title text-white">Built for results,<br />designed for life</h2>
          <p className="section-sub text-[rgba(255,255,255,0.5)] mx-auto">Every feature crafted to make your transformation seamless.</p>
        </motion.div>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5.5">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.11)] rounded-[20px] p-[34px_28px] transition-all hover:bg-[rgba(255,255,255,0.09)] hover:shadow-[0_24px_48px_rgba(0,0,50,0.25)] relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-[rgba(255,255,255,0.25)]" />
            <div className="font-syne text-[3.5rem] font-extrabold text-[rgba(255,255,255,0.05)] leading-none mb-[-8px]">{`0${i + 1}`}</div>
            <div className="w-[52px] h-[52px] bg-[#D5E100] rounded-[13px] flex items-center justify-center text-[1.4rem] mb-4.5 shadow-[0_6px_20px_rgba(213,225,0,0.3)]">
              {card.icon}
            </div>
            <h3 className="font-syne text-[1.2rem] font-extrabold text-white mb-2.5">{card.title}</h3>
            <p className="text-[rgba(255,255,255,0.50)] text-[0.90rem] leading-[1.72]">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
