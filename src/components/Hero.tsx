import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import SpinnerWheel from './SpinnerWheel';

const Counter = ({ target, suffix = '', duration = 1800 }: { target: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-6 md:px-15 pt-36 pb-20 gap-15 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute w-[650px] h-[650px] bg-[rgba(255,255,255,0.55)] rounded-full blur-[70px] -top-[180px] -right-[120px] animate-g1 pointer-events-none" />
      <div className="absolute w-[380px] h-[380px] bg-[rgba(184,201,0,0.45)] rounded-full blur-[70px] -bottom-[80px] left-[80px] animate-g2 pointer-events-none" />
      <div className="absolute w-[220px] h-[220px] bg-[rgba(255,255,255,0.70)] rounded-full blur-[70px] top-[45%] left-[42%] animate-g3 pointer-events-none" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,86,219,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(26,86,219,0.07)_1px,transparent_1px)] bg-[length:48px_48px] pointer-events-none" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.22)] border border-[rgba(255,255,255,0.55)] backdrop-blur-md text-[#1A56DB] px-4.5 py-1.5 rounded-full text-[0.78rem] font-bold tracking-[1.5px] uppercase mb-7"
        >
          <span className="w-2 h-2 bg-[#1A56DB] rounded-full animate-blink" />
          2026 · Faster Treatment
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-syne text-[clamp(2.4rem,5.5vw,5rem)] font-extrabold leading-[1.03] tracking-[-2px] mb-6 text-[#1A56DB]"
        >
          The future of<br />
          <span className="text-white">clear aligner</span><br />
          <span className="text-[#3B82F6]">treatment.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[1.05rem] text-[#5B6E99] leading-[1.75] max-w-[460px] mb-10 font-medium"
        >
          Doctor-directed, delivered to your clinic. Straighten your smile discreetly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-wrap gap-3.5"
        >
          <a href="#cta" className="btn-solid">Start Your Aligner Practice </a>
          <a href="#how" className="btn-glass">See How It Works →</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 sm:gap-0 mt-14 pt-11 border-t border-[rgba(26,86,219,0.15)]"
        >
          <div className="text-center relative after:content-[''] after:absolute after:right-0 after:top-[10%] after:bottom-[10%] after:w-[1px] after:bg-[rgba(26,86,219,0.15)] sm:after:block after:hidden">
            <div className="font-syne text-[clamp(1.2rem,4vw,2.1rem)] font-extrabold text-[#1A56DB] leading-none">
              <Counter target={100} suffix="+" />
            </div>
            <div className="text-[clamp(0.5rem,1.4vw,0.65rem)] font-bold text-[#5B6E99] mt-2 uppercase tracking-tight whitespace-normal px-1">happy Dental Clinics</div>
          </div>
          <div className="text-center relative sm:after:content-[''] after:absolute after:right-0 after:top-[10%] after:bottom-[10%] after:w-[1px] after:bg-[rgba(26,86,219,0.15)]">
            <div className="font-syne text-[clamp(1.2rem,4vw,2.1rem)] font-extrabold text-[#1A56DB] leading-none">
              <Counter target={40} suffix="%" />
            </div>
            <div className="text-[clamp(0.5rem,1.4vw,0.65rem)] font-bold text-[#5B6E99] mt-2 uppercase tracking-tight whitespace-normal px-1">Less cost</div>
          </div>
          <div className="text-center col-span-2 sm:col-span-1 mt-4 sm:mt-0">
            <div className="font-syne text-[clamp(1.2rem,4vw,2.1rem)] font-extrabold text-[#1A56DB] leading-none">
              <Counter target={100} suffix="%" />
            </div>
            <div className="text-[clamp(0.5rem,1.4vw,0.65rem)] font-bold text-[#5B6E99] mt-2 uppercase tracking-tight text-center whitespace-normal px-1">Ortho Dentist Directed</div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 flex items-center justify-center mt-12 lg:mt-0 px-4">
        <SpinnerWheel />
      </div>
    </section>
  );
}
