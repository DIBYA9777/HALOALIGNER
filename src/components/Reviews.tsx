import React from 'react';
import { motion } from 'motion/react';

const reviews = [
  {
    initials: 'SJ',
    name: 'Sarah Johnson',
    location: 'Mumbai',
    text: '"I can\'t believe how much my smile improved in just 4 months! The process was incredibly easy. Every friend has asked what I did — I look and feel amazing!"',
  },
  {
    initials: 'MC',
    name: 'Michael Chen',
    location: 'Singapore',
    text: '"Best decision I ever made. The aligners are so comfortable and I love doing it all from home. My confidence has completely transformed — I smile for photos now!"',
  },
  {
    initials: 'EP',
    name: 'Emily Parker',
    location: 'London',
    text: '"Worth every penny. The support was phenomenal and the progress app kept me so motivated. Six months later — the smile I always dreamed of!"',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-[#D5E100] py-28 px-6 md:px-15">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-tag">Real Results</span>
        <h2 className="section-title">Thousands of smiles transformed</h2>
        <p className="section-sub">Don't just take our word for it — hear from our customers.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-18">
        {reviews.map((rv, i) => (
          <motion.div
            key={rv.name}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="bg-[rgba(255,255,255,0.55)] border border-[rgba(255,255,255,0.75)] backdrop-blur-2xl rounded-[20px] p-7.5 transition-all hover:shadow-[0_20px_40px_rgba(26,86,219,0.10)]"
          >
            <div className="text-[#1A56DB] text-[0.88rem] tracking-[2px] mb-3.5">★★★★★</div>
            <blockquote className="text-[0.93rem] text-[#2563EB] italic font-medium leading-[1.75] mb-5">
              {rv.text}
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-[#1A56DB] rounded-full flex items-center justify-center font-syne font-extrabold text-[0.82rem] text-[#D5E100] shrink-0">
                {rv.initials}
              </div>
              <div>
                <div className="font-bold text-[0.88rem] text-[#1A56DB]">{rv.name}</div>
                <div className="text-[0.78rem] text-[#5B6E99] font-medium">Verified Customer · {rv.location}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
