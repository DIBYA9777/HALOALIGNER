import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

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
    <section id="home" className="relative min-height-[100vh] grid grid-cols-1 lg:grid-cols-2 items-center px-6 md:px-15 pt-30 pb-20 gap-15 overflow-hidden">
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
          Doctor-directed, delivered to your door. Straighten your smile discreetly — up to 60% less than traditional braces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-wrap gap-3.5"
        >
          <a href="#cta" className="btn-solid">Start Your Smile Journey</a>
          <a href="#how" className="btn-glass">See How It Works →</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex gap-0 mt-14 pt-11 border-t border-[rgba(26,86,219,0.15)]"
        >
          <div className="flex-1 text-center relative after:content-[''] after:absolute after:right-0 after:top-[10%] after:bottom-[10%] after:w-[1px] after:bg-[rgba(26,86,219,0.15)]">
            <div className="font-syne text-[2rem] font-extrabold text-[#1A56DB] leading-none">
              <Counter target={50000} suffix="+" />
            </div>
            <div className="text-[0.72rem] font-semibold text-[#5B6E99] mt-1.5">Happy Customers</div>
          </div>
          <div className="flex-1 text-center relative after:content-[''] after:absolute after:right-0 after:top-[10%] after:bottom-[10%] after:w-[1px] after:bg-[rgba(26,86,219,0.15)]">
            <div className="font-syne text-[2rem] font-extrabold text-[#1A56DB] leading-none">4–6M</div>
            <div className="text-[0.72rem] font-semibold text-[#5B6E99] mt-1.5">Avg. Treatment</div>
          </div>
          <div className="flex-1 text-center relative after:content-[''] after:absolute after:right-0 after:top-[10%] after:bottom-[10%] after:w-[1px] after:bg-[rgba(26,86,219,0.15)]">
            <div className="font-syne text-[2rem] font-extrabold text-[#1A56DB] leading-none">
              <Counter target={60} suffix="%" />
            </div>
            <div className="text-[0.72rem] font-semibold text-[#5B6E99] mt-1.5">Less Cost</div>
          </div>
          <div className="flex-1 text-center">
            <div className="font-syne text-[2rem] font-extrabold text-[#1A56DB] leading-none">
              <Counter target={100} suffix="%" />
            </div>
            <div className="text-[0.72rem] font-semibold text-[#5B6E99] mt-1.5">Doctor Directed</div>
          </div>
        </motion.div>
      </div>

      {/* 3D Scene */}
      <div className="relative z-10 flex items-center justify-center">
        <div className="w-[460px] h-[480px] relative [perspective:900px]">
          {/* Floating Badges */}
          <div className="absolute bg-white border border-[rgba(26,86,219,0.12)] rounded-xl p-2.5 px-4 text-[0.75rem] font-bold text-[#1A56DB] whitespace-nowrap flex items-center gap-2 shadow-[0_8px_24px_rgba(26,86,219,0.12)] top-[10%] -left-[5%] animate-flt">
            <span className="text-base">✅</span>
            <div>
              <div className="font-extrabold text-[0.78rem]">Doctor Approved</div>
              <div className="font-medium text-[0.68rem] text-[#5B6E99]">Licensed Orthodontist</div>
            </div>
          </div>
          <div className="absolute bg-white border border-[rgba(26,86,219,0.12)] rounded-xl p-2.5 px-4 text-[0.75rem] font-bold text-[#1A56DB] whitespace-nowrap flex items-center gap-2 shadow-[0_8px_24px_rgba(26,86,219,0.12)] top-[45%] right-0 animate-flt [animation-delay:1.5s]">
            <span className="text-base">🏆</span>
            <div>
              <div className="font-extrabold text-[0.78rem]">4.9 / 5.0 Stars</div>
              <div className="font-medium text-[0.68rem] text-[#5B6E99]">50,000+ reviews</div>
            </div>
          </div>
          <div className="absolute bg-white border border-[rgba(26,86,219,0.12)] rounded-xl p-2.5 px-4 text-[0.75rem] font-bold text-[#1A56DB] whitespace-nowrap flex items-center gap-2 shadow-[0_8px_24px_rgba(26,86,219,0.12)] bottom-[12%] left-[5%] animate-flt [animation-delay:1s]">
            <span className="text-base">🪄</span>
            <div>
              <div className="font-extrabold text-[0.78rem]">Invisible Fit</div>
              <div className="font-medium text-[0.68rem] text-[#5B6E99]">Custom molded</div>
            </div>
          </div>

          {/* Orbit Rings */}
          <div className="absolute rounded-full border-[1.5px] border-dashed border-[rgba(26,86,219,0.12)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-x-[72deg] animate-[spin_16s_linear_infinite] w-[300px] h-[300px]" />
          <div className="absolute rounded-full border-[1.5px] border-dashed border-[rgba(26,86,219,0.12)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-x-[72deg] animate-[spin_22s_linear_infinite_reverse] w-[410px] h-[410px]" />

          {/* Tooth Stage */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d] animate-spin-tooth w-[200px] h-[260px]">
            <div className="w-[150px] h-[175px] bg-white rounded-[75px_75px_50px_50px] absolute top-5 left-1/2 -translate-x-1/2 shadow-[0_24px_60px_rgba(26,86,219,0.18),inset_0_8px_20px_rgba(255,255,255,0.9),inset_0_-8px_20px_rgba(26,86,219,0.06)] animate-tooth-bob">
              <div className="w-[164px] h-[185px] border-[2.5px] border-[rgba(213,225,0,0.75)] rounded-[82px_82px_56px_56px] absolute top-[-6px] left-1/2 -translate-x-1/2 bg-[rgba(213,225,0,0.10)] shadow-[0_0_40px_rgba(213,225,0,0.35),inset_0_0_24px_rgba(213,225,0,0.10)] animate-align-glow" />
            </div>
            <div className="flex gap-[7px] justify-center absolute bottom-0 left-1/2 -translate-x-1/2">
              <div className="w-7 h-[52px] bg-[#DBEAFE] rounded-[0_0_20px_20px]" />
              <div className="w-7 h-[52px] bg-[#DBEAFE] rounded-[0_0_20px_20px]" />
              <div className="w-7 h-[52px] bg-[#DBEAFE] rounded-[0_0_20px_20px]" />
            </div>
          </div>

          {/* Floating Icons */}
          <div className="absolute w-[50px] h-[50px] bg-[rgba(255,255,255,0.22)] border border-[rgba(255,255,255,0.55)] backdrop-blur-md rounded-[13px] flex items-center justify-center text-xl shadow-[0_6px_20px_rgba(26,86,219,0.10)] animate-flt top-[6%] left-[8%]">✨</div>
          <div className="absolute w-[50px] h-[50px] bg-[rgba(255,255,255,0.22)] border border-[rgba(255,255,255,0.55)] backdrop-blur-md rounded-[13px] flex items-center justify-center text-xl shadow-[0_6px_20px_rgba(26,86,219,0.10)] animate-flt top-[10%] right-[6%] [animation-delay:1s]">🦷</div>
          <div className="absolute w-[50px] h-[50px] bg-[rgba(255,255,255,0.22)] border border-[rgba(255,255,255,0.55)] backdrop-blur-md rounded-[13px] flex items-center justify-center text-xl shadow-[0_6px_20px_rgba(26,86,219,0.10)] animate-flt bottom-[28%] left-[3%] [animation-delay:2s]">💎</div>
          <div className="absolute w-[50px] h-[50px] bg-[rgba(255,255,255,0.22)] border border-[rgba(255,255,255,0.55)] backdrop-blur-md rounded-[13px] flex items-center justify-center text-xl shadow-[0_6px_20px_rgba(26,86,219,0.10)] animate-flt bottom-[18%] right-[9%] [animation-delay:1.5s]">⚡</div>
        </div>
      </div>
    </section>
  );
}
