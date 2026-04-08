import React from 'react';
import { motion } from 'motion/react';

const plans = [
  {
    title: 'Impression Kit',
    price: '$49',
    period: 'One-time · credited if you proceed',
    features: ['At-home impression kit', 'Free return shipping', '3D treatment preview', 'Orthodontist review'],
    btnText: 'Order Kit',
    featured: false,
  },
  {
    title: 'Full Treatment',
    price: '$1,895',
    period: 'One-time · all-inclusive',
    features: ['Complete aligner set', 'Doctor monitoring', 'Free retainers included', 'Smile guarantee', 'App + 24/7 support'],
    btnText: 'Get Started Today',
    featured: true,
  },
  {
    title: 'Payment Plan',
    price: '$79',
    suffix: '/mo',
    period: '0% APR · 24 monthly payments',
    features: ['0% APR financing', '24 flexible payments', 'Everything in Full Treatment', 'Cancel anytime'],
    btnText: 'Choose Plan',
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#F9FAF0] py-28 px-6 md:px-15">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">Pricing</span>
          <h2 className="section-title">Simple, honest pricing</h2>
          <p className="section-sub mx-auto">No surprise fees. No fine print. Just straight teeth at fair prices.</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5.5 mt-18 items-center max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className={cn(
              "bg-white border border-[rgba(26,86,219,0.10)] rounded-[24px] p-[40px_30px] text-center relative transition-all hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(26,86,219,0.10)]",
              plan.featured && "bg-[#1A56DB] border-[#1A56DB] lg:scale-[1.06] shadow-[0_24px_60px_rgba(26,86,219,0.32)] z-10"
            )}
          >
            {plan.featured && (
              <div className="absolute top-[-13px] left-1/2 -translate-x-1/2 bg-[#D5E100] text-[#1A56DB] text-[0.70rem] font-extrabold tracking-[1px] uppercase px-4 py-1.5 rounded-full shadow-[0_4px_12px_rgba(213,225,0,0.4)] whitespace-nowrap">
                Most Popular
              </div>
            )}
            <h3 className={cn("font-syne text-[1.25rem] font-extrabold mb-3.5", plan.featured ? "text-white" : "text-[#1A56DB]")}>
              {plan.title}
            </h3>
            <div className={cn("font-syne text-[3rem] font-extrabold leading-none mb-1.5", plan.featured ? "text-[#D5E100]" : "text-[#1A56DB]")}>
              {plan.price}
              {plan.suffix && <span className="text-[1.1rem] text-[#5B6E99]">{plan.suffix}</span>}
            </div>
            <div className={cn("text-[0.83rem] mb-6.5", plan.featured ? "text-[rgba(255,255,255,0.45)]" : "text-[#5B6E99]")}>
              {plan.period}
            </div>
            <ul className="list-none text-left mb-7.5 flex flex-col gap-2.5">
              {plan.features.map((f) => (
                <li key={f} className={cn("flex items-start gap-2.5 text-[0.90rem]", plan.featured ? "text-[rgba(255,255,255,0.65)]" : "text-[#5B6E99]")}>
                  <span className={cn("w-5 h-5 shrink-0 rounded-full flex items-center justify-center text-[0.60rem] font-black mt-0.5", plan.featured ? "bg-[rgba(213,225,0,0.2)] text-[#D5E100]" : "bg-[#DBEAFE] text-[#1A56DB]")}>
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#cta"
              className={cn(
                "block w-full py-3.5 rounded-full text-[0.90rem] font-bold transition-all",
                plan.featured
                  ? "bg-[#D5E100] text-[#1A56DB] shadow-[0_8px_20px_rgba(213,225,0,0.4)] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(213,225,0,0.5)]"
                  : "bg-transparent text-[#1A56DB] border-2 border-[rgba(26,86,219,0.22)] hover:border-[#1A56DB]"
              )}
            >
              {plan.btnText}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { cn } from '@/src/lib/utils';
