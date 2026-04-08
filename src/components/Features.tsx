import React from 'react';
import { motion } from 'motion/react';

const features = [
  { icon: '✨', title: 'Invisible Fit', desc: 'Clear, custom-molded aligners virtually undetectable in daily life.' },
  { icon: '⏱️', title: 'Fast Results', desc: 'See noticeable changes in as little as 3 months of treatment.' },
  { icon: '🍏', title: 'Removable', desc: 'Eat freely, brush normally. Remove for any special moment.' },
  { icon: '📦', title: 'Home Delivery', desc: 'All aligners shipped directly to your door. No waiting rooms.' },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#F9FAF0] py-28 px-6 md:px-15 relative overflow-hidden">
      <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-[rgba(213,225,0,0.22)] rounded-full blur-[80px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-tag">Why Choose Us?</span>
            <h2 className="section-title">Advanced aligners.<br />Accessible pricing.</h2>
            <p className="section-sub">Everything you need for a perfect smile — without the endless clinic visits or premium price tag.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5 mt-10">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.05 }}
                className="bg-[rgba(255,255,255,0.22)] border border-[rgba(255,255,255,0.55)] backdrop-blur-xl rounded-[20px] p-7 transition-all hover:shadow-[0_20px_40px_rgba(26,86,219,0.10)]"
              >
                <div className="w-11 h-11 bg-[#D5E100] rounded-xl flex items-center justify-center text-xl mb-4 shadow-[0_4px_12px_rgba(213,225,0,0.4)]">
                  {f.icon}
                </div>
                <h3 className="font-syne text-base font-extrabold mb-2 text-[#1A56DB]">{f.title}</h3>
                <p className="text-[#5B6E99] text-[0.86rem] leading-[1.65]">{f.desc}</p>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="col-span-1 sm:col-span-2 bg-[#1A56DB] rounded-[20px] p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5.5"
            >
              <div className="w-11 h-11 bg-[#D5E100] rounded-xl flex items-center justify-center text-xl shrink-0 shadow-[0_4px_12px_rgba(213,225,0,0.4)]">
                👨‍⚕️
              </div>
              <div>
                <h3 className="font-syne text-[1.15rem] font-extrabold text-white mb-2">100% Doctor-Directed Treatment</h3>
                <p className="text-[rgba(255,255,255,0.65)] text-[0.9rem] leading-[1.65]">Every case reviewed and monitored by licensed orthodontists. Your safety and results are always our first priority.</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-[250px] h-[500px] bg-[#1A56DB] rounded-[42px] shadow-[0_40px_80px_rgba(26,86,219,0.30),0_0_0_8px_rgba(26,86,219,0.09)] relative overflow-hidden animate-[tilt_6s_ease-in-out_infinite]"
          >
            <div className="absolute inset-[13px] bg-[#E6F200] rounded-[31px] overflow-hidden">
              <div className="w-[78px] h-[22px] bg-[#1A56DB] rounded-[0_0_13px_13px] mx-auto" />
              <div className="p-4.5 px-3.5">
                <div className="font-syne font-extrabold text-[0.82rem] text-[#1A56DB] mb-3.5">My Smile Progress 📊</div>
                {[
                  { label: 'Upper Alignment', width: '78%' },
                  { label: 'Lower Alignment', width: '65%' },
                  { label: 'Spacing Correction', width: '90%' },
                ].map((row) => (
                  <div key={row.label} className="bg-[rgba(255,255,255,0.65)] rounded-[11px] p-[11px_12px] mb-2.5">
                    <div className="text-[0.68rem] font-bold text-[#1A56DB] mb-1">{row.label}</div>
                    <div className="h-1.5 bg-[rgba(26,86,219,0.15)] rounded-[3px] overflow-hidden">
                      <div className="h-full bg-[#1A56DB] rounded-[3px] animate-[grow_2s_ease_1s_both]" style={{ width: row.width }} />
                    </div>
                  </div>
                ))}
                <div className="bg-[#1A56DB] rounded-[11px] p-[11px_13px] mt-3.5 flex items-center gap-2">
                  <span className="text-[#D5E100] font-bold text-[0.78rem]">🦷 Aligner #8 Active</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Badges around phone */}
          <div className="hidden md:block">
            <div className="absolute bg-white rounded-[13px] p-[9px_13px] shadow-[0_10px_28px_rgba(26,86,219,0.13)] text-[0.72rem] font-bold text-[#1A56DB] whitespace-nowrap flex items-center gap-[7px] left-[-86px] top-[18%] animate-flt">
              <span className="text-base">🏆</span>
              <div>
                <div className="font-extrabold text-[0.72rem]">Top Rated</div>
                <div className="text-[0.66rem] text-[#5B6E99]">4.9 / 5.0 stars</div>
              </div>
            </div>
            <div className="absolute bg-white rounded-[13px] p-[9px_13px] shadow-[0_10px_28px_rgba(26,86,219,0.13)] text-[0.72rem] font-bold text-[#1A56DB] whitespace-nowrap flex items-center gap-[7px] right-[-72px] top-[44%] animate-flt [animation-delay:1.5s]">
              <span className="text-base">✅</span>
              <div>
                <div className="font-extrabold text-[0.72rem]">Smile Guarantee</div>
                <div className="text-[0.66rem] text-[#5B6E99]">or full refund</div>
              </div>
            </div>
            <div className="absolute bg-white rounded-[13px] p-[9px_13px] shadow-[0_10px_28px_rgba(26,86,219,0.13)] text-[0.72rem] font-bold text-[#1A56DB] whitespace-nowrap flex items-center gap-[7px] left-[-66px] bottom-[20%] animate-flt [animation-delay:1s]">
              <span className="text-base">📍</span>
              <div>
                <div className="font-extrabold text-[0.72rem]">Week 8 of 20</div>
                <div className="text-[0.66rem] text-[#5B6E99]">On track!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
