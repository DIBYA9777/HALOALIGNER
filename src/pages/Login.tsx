import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, ArrowRight, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen bg-[#D5E100] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute w-[650px] h-[650px] bg-[rgba(255,255,255,0.55)] rounded-full blur-[70px] -top-[180px] -right-[120px] animate-g1 pointer-events-none" />
      <div className="absolute w-[380px] h-[380px] bg-[rgba(184,201,0,0.45)] rounded-full blur-[70px] -bottom-[80px] left-[80px] animate-g2 pointer-events-none" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,86,219,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(26,86,219,0.07)_1px,transparent_1px)] bg-[length:48px_48px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-[rgba(255,255,255,0.85)] border border-[rgba(255,255,255,0.65)] backdrop-blur-xl rounded-[32px] p-10 shadow-[0_32px_64px_rgba(26,86,219,0.15)] relative z-10"
      >
        {/* Back Button */}
        <Link 
          to="/" 
          className="absolute top-6 left-6 flex items-center gap-2 text-[#1A56DB] font-bold text-xs uppercase tracking-wider hover:opacity-70 transition-opacity"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <div className="text-center mb-10 mt-4">
          <Link to="/" className="inline-block mb-6">
            <div className="font-syne font-extrabold text-2xl tracking-tighter uppercase text-[#1A56DB]">
              HALO<span className="text-[#3B82F6] font-medium">ALIGNER</span>
            </div>
          </Link>
          <h1 className="font-syne text-2xl font-extrabold text-[#1A56DB] mb-2">Doctor Dashboard</h1>
          <p className="text-[#5B6E99] text-sm font-medium">Welcome back! Please enter your details.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[0.7rem] font-bold text-[#5B6E99] uppercase tracking-wider mb-2 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8EA0C0]" size={18} />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-[rgba(26,86,219,0.1)] rounded-2xl pl-12 pr-4 py-4 text-[#1A56DB] focus:outline-none focus:border-[#1A56DB] transition-colors"
                placeholder="doctor@quiteclear.io"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2 ml-1">
              <label className="block text-[0.7rem] font-bold text-[#5B6E99] uppercase tracking-wider">Password</label>
              <a href="#" className="text-[0.7rem] font-bold text-[#2563EB] hover:underline">Forgot Password?</a>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8EA0C0]" size={18} />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white border border-[rgba(26,86,219,0.1)] rounded-2xl pl-12 pr-12 py-4 text-[#1A56DB] focus:outline-none focus:border-[#1A56DB] transition-colors"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8EA0C0] hover:text-[#1A56DB] transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 ml-1">
            <input type="checkbox" id="remember" className="w-4 h-4 rounded border-[rgba(26,86,219,0.2)] text-[#1A56DB] focus:ring-[#1A56DB]" />
            <label htmlFor="remember" className="text-xs font-semibold text-[#5B6E99]">Remember for 30 days</label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1A56DB] text-[#D5E100] py-4 rounded-2xl font-bold text-lg shadow-[0_12px_24px_rgba(26,86,219,0.2)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(26,86,219,0.3)] flex items-center justify-center gap-2"
          >
            Sign In <ArrowRight size={20} />
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-sm text-[#5B6E99] font-medium">
            Don't have an account? <a href="#" className="text-[#2563EB] font-bold hover:underline">Contact Support</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
