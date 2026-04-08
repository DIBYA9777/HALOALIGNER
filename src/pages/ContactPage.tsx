import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted to mishraom2326@gmail.com:', formData);
      setStatus('sent');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#D5E100] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute w-[650px] h-[650px] bg-[rgba(255,255,255,0.55)] rounded-full blur-[70px] -top-[180px] -right-[120px] animate-g1 pointer-events-none" />
      <div className="absolute w-[380px] h-[380px] bg-[rgba(184,201,0,0.45)] rounded-full blur-[70px] -bottom-[80px] left-[80px] animate-g2 pointer-events-none" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,86,219,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(26,86,219,0.07)_1px,transparent_1px)] bg-[length:48px_48px] pointer-events-none" />

      <Navbar />
      
      <main className="relative z-10 pt-32 pb-20 px-6 md:px-15">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[#1A56DB] font-bold text-xs uppercase tracking-wider mb-8 hover:opacity-70 transition-opacity"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-tag bg-[rgba(255,255,255,0.55)] border-[rgba(255,255,255,0.65)]">Contact Us</span>
              <h1 className="section-title text-[clamp(2.4rem,5vw,4.5rem)] mb-6">Let's start your<br/><span className="text-[#3B82F6]">smile journey</span> today.</h1>
              <p className="section-sub mx-auto max-w-2xl text-[#5B6E99]">Our orthodontic team is available 24/7 to guide you through your transformation. Reach out via form, email, or phone.</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -26 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="bg-[rgba(255,255,255,0.85)] border border-[rgba(255,255,255,0.65)] backdrop-blur-xl rounded-[32px] p-10 shadow-[0_24px_48px_rgba(26,86,219,0.1)]">
                <h2 className="font-syne text-2xl font-extrabold text-[#1A56DB] mb-8">Contact Information</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-[#1A56DB] rounded-2xl flex items-center justify-center text-[#D5E100] shrink-0 shadow-[0_8px_20px_rgba(26,86,219,0.2)]">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="text-[0.7rem] font-bold text-[#5B6E99] uppercase tracking-wider mb-1">Call Us Directly</div>
                      <div className="text-xl font-extrabold text-[#1A56DB]">7809385726</div>
                      <div className="text-sm font-medium text-[#8EA0C0] mt-1">Mon-Sun, 24/7 Support</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-[#1A56DB] rounded-2xl flex items-center justify-center text-[#D5E100] shrink-0 shadow-[0_8px_20px_rgba(26,86,219,0.2)]">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="text-[0.7rem] font-bold text-[#5B6E99] uppercase tracking-wider mb-1">Email Support</div>
                      <div className="text-xl font-extrabold text-[#1A56DB]">mishraom2326@gmail.com</div>
                      <div className="text-sm font-medium text-[#8EA0C0] mt-1">Response within 2 hours</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-[#1A56DB] rounded-2xl flex items-center justify-center text-[#D5E100] shrink-0 shadow-[0_8px_20px_rgba(26,86,219,0.2)]">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <div className="text-[0.7rem] font-bold text-[#5B6E99] uppercase tracking-wider mb-1">Our Location</div>
                      <div className="text-xl font-extrabold text-[#1A56DB]">Quite Clear HQ</div>
                      <div className="text-sm font-medium text-[#8EA0C0] mt-1">Mumbai, Maharashtra, India</div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-10 border-t border-[rgba(26,86,219,0.1)]">
                  <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 bg-white border border-[rgba(26,86,219,0.1)] rounded-xl flex items-center justify-center text-[#1A56DB] transition-all hover:bg-[#D5E100] hover:-translate-y-1"><Globe size={20} /></a>
                    <a href="#" className="w-12 h-12 bg-white border border-[rgba(26,86,219,0.1)] rounded-xl flex items-center justify-center text-[#1A56DB] transition-all hover:bg-[#D5E100] hover:-translate-y-1"><MessageCircle size={20} /></a>
                    <a href="#" className="w-12 h-12 bg-white border border-[rgba(26,86,219,0.1)] rounded-xl flex items-center justify-center text-[#1A56DB] transition-all hover:bg-[#D5E100] hover:-translate-y-1"><Clock size={20} /></a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 26 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <div className="bg-[rgba(255,255,255,0.85)] border border-[rgba(255,255,255,0.65)] backdrop-blur-xl rounded-[32px] p-10 shadow-[0_32px_64px_rgba(26,86,219,0.15)]">
                <h2 className="font-syne text-2xl font-extrabold text-[#1A56DB] mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[0.7rem] font-bold text-[#5B6E99] uppercase tracking-wider mb-2 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-[rgba(26,86,219,0.1)] rounded-2xl px-5 py-4 text-[#1A56DB] focus:outline-none focus:border-[#1A56DB] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-[0.7rem] font-bold text-[#5B6E99] uppercase tracking-wider mb-2 ml-1">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-[rgba(26,86,219,0.1)] rounded-2xl px-5 py-4 text-[#1A56DB] focus:outline-none focus:border-[#1A56DB] transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-[0.7rem] font-bold text-[#5B6E99] uppercase tracking-wider mb-2 ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-[rgba(26,86,219,0.1)] rounded-2xl px-5 py-4 text-[#1A56DB] focus:outline-none focus:border-[#1A56DB] transition-colors"
                      placeholder="+91 78093 85726"
                    />
                  </div>

                  <div>
                    <label className="block text-[0.7rem] font-bold text-[#5B6E99] uppercase tracking-wider mb-2 ml-1">Message</label>
                    <textarea 
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-[rgba(26,86,219,0.1)] rounded-2xl px-5 py-4 text-[#1A56DB] focus:outline-none focus:border-[#1A56DB] transition-colors resize-none"
                      placeholder="Tell us about your smile goals..."
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-[#1A56DB] text-[#D5E100] py-5 rounded-2xl font-bold text-lg shadow-[0_12px_24px_rgba(213,225,0,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(213,225,0,0.4)] flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : (
                      <>
                        Send Message <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
