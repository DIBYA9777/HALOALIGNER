import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Mock API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted to mishraom2326@gmail.com:', formData);
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-[#F9FAF0] py-28 px-6 md:px-15">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -26 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">Have questions?<br />We're here to help.</h2>
          <p className="section-sub mb-10">Our orthodontic team is available 24/7 to guide you through your smile transformation.</p>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1A56DB] rounded-xl flex items-center justify-center text-[#D5E100]">
                <Phone size={24} />
              </div>
              <div>
                <div className="text-[0.7rem] font-bold text-[#5B6E99] uppercase tracking-wider">Call Us</div>
                <div className="text-lg font-bold text-[#1A56DB]">7809385726</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1A56DB] rounded-xl flex items-center justify-center text-[#D5E100]">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-[0.7rem] font-bold text-[#5B6E99] uppercase tracking-wider">Email Us</div>
                <div className="text-lg font-bold text-[#1A56DB]">mishraom2326@gmail.com</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 26 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white border border-[rgba(26,86,219,0.10)] rounded-[24px] p-8 shadow-[0_24px_48px_rgba(26,86,219,0.05)]"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-[0.8rem] font-bold text-[#5B6E99] uppercase tracking-wider mb-2">Full Name</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#F9FAF0] border border-[rgba(26,86,219,0.10)] rounded-xl px-4 py-3 text-[#1A56DB] focus:outline-none focus:border-[#1A56DB] transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-[0.8rem] font-bold text-[#5B6E99] uppercase tracking-wider mb-2">Email Address</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#F9FAF0] border border-[rgba(26,86,219,0.10)] rounded-xl px-4 py-3 text-[#1A56DB] focus:outline-none focus:border-[#1A56DB] transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-[0.8rem] font-bold text-[#5B6E99] uppercase tracking-wider mb-2">Message</label>
              <textarea 
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#F9FAF0] border border-[rgba(26,86,219,0.10)] rounded-xl px-4 py-3 text-[#1A56DB] focus:outline-none focus:border-[#1A56DB] transition-colors resize-none"
                placeholder="How can we help you?"
              />
            </div>
            
            <button 
              type="submit"
              disabled={status === 'sending'}
              className="bg-[#1A56DB] text-[#D5E100] py-4 rounded-full font-bold text-lg shadow-[0_8px_20px_rgba(213,225,0,0.3)] transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : (
                <>
                  Send Message <Send size={20} />
                </>
              )}
            </button>
            
            {status === 'error' && (
              <p className="text-red-500 text-sm text-center font-medium">Something went wrong. Please try again.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
