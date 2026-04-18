import React from 'react';
import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section id="cta" className="bg-[#1A56DB] text-center relative overflow-hidden py-28 px-6 md:px-15">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[rgba(213,225,0,0.09)] rounded-full blur-[60px] pointer-events-none" />
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag bg-[rgba(255,255,255,0.08)] border-[rgba(255,255,255,0.18)] text-[rgba(255,255,255,0.65)]">Ready to Start?</span>
          <h2 className="section-title text-white max-w-[640px] mx-auto mb-4">Partnered with 100+<br />happy Dental Clinics</h2>
          <p className="section-sub text-[rgba(255,255,255,0.50)] mx-auto mb-8 text-center text-sm">Experience 100% Ortho Dentist Directed treatment at 40% less cost.</p>
          
          <div className="flex flex-wrap gap-8 justify-center mb-12">
            <div className="text-center">
              <div className="text-[#D5E100] font-syne text-3xl font-extrabold mb-1">100+</div>
              <div className="text-white text-[0.65rem] uppercase font-bold tracking-widest opacity-60">happy Dental Clinics</div>
            </div>
            <div className="text-center">
              <div className="text-[#D5E100] font-syne text-3xl font-extrabold mb-1">40%</div>
              <div className="text-white text-[0.65rem] uppercase font-bold tracking-widest opacity-60">Less cost</div>
            </div>
            <div className="text-center">
              <div className="text-[#D5E100] font-syne text-3xl font-extrabold mb-1">100%</div>
              <div className="text-white text-[0.65rem] uppercase font-bold tracking-widest opacity-60">Ortho Dentist Directed</div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3.5 justify-center">
            <a 
              href="#" 
              className="bg-[#D5E100] text-[#1A56DB] px-9 py-4 rounded-full text-[0.94rem] font-extrabold shadow-[0_12px_30px_rgba(213,225,0,0.30)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(213,225,0,0.42)]"
            >
              Book Free Consultation
            </a>
            <a 
              href="#" 
              className="bg-[rgba(255,255,255,0.08)] text-white px-9 py-4 rounded-full border border-[rgba(255,255,255,0.22)] text-[0.94rem] font-bold transition-colors hover:bg-[rgba(255,255,255,0.15)]"
            >
              Order Impression Kit →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
