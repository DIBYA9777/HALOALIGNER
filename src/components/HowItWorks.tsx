import React from 'react';
import { motion } from 'motion/react';

const steps = [
  { 
    num: '01', 
    title: 'Start your Dental practice', 
    desc: 'Pre-treatment records: Intra-oral scan, Photography, Radiography.' 
  },
  { 
    num: '02', 
    title: 'Upload Records', 
    desc: 'Upload your pre-treatment records on doctor dashboard.' 
  },
  { 
    num: '03', 
    title: 'Get your plan', 
    desc: 'Receive your plan and Approve your plan.' 
  },
  { 
    num: '04', 
    title: 'Start your Aligner practice', 
    desc: 'Commence aligner treatment with professional supervision.' 
  },
  { 
    num: '05', 
    title: 'Post treatment records', 
    desc: 'Upload your post treatment plan & get retainers free.' 
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-[#D5E100] py-28 px-6 md:px-15">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">The Process</span>
          <h2 className="section-title">Your professional practice in<br />five simple steps</h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-12 lg:gap-0 mt-20 relative">
        {/* Connector Line */}
        <div className="hidden lg:block absolute top-[36px] left-[10%] right-[10%] h-[2px] bg-[rgba(26,86,219,0.15)]" />

        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="text-center px-5 flex flex-col items-center"
          >
            <div className="w-[72px] h-[72px] bg-[#1A56DB] rounded-full flex items-center justify-center mb-6 relative z-10 shadow-[0_8px_24px_rgba(26,86,219,0.28)] transition-all hover:-translate-y-1.5 hover:scale-105 hover:shadow-[0_18px_38px_rgba(26,86,219,0.36)]">
              <span className="font-syne font-extrabold text-2xl text-[#D5E100]">{step.num}</span>
            </div>
            <h3 className="font-syne text-[1.05rem] font-extrabold text-[#1A56DB] mb-2.5">{step.title}</h3>
            <p className="text-[#5B6E99] text-[0.88rem] leading-[1.65] font-medium">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
