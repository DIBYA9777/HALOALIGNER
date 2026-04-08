import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#EFF6FF] border-t border-[rgba(26,86,219,0.12)] py-18 px-6 md:px-15 pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-15 mb-15">
        <div className="footer-brand">
          <div className="font-syne font-extrabold text-xl tracking-tighter uppercase text-[#1A56DB]">
            HALO<span className="text-[#3B82F6] font-medium">ALIGNER</span>
          </div>
          <p className="text-[#5B6E99] text-[0.87rem] leading-[1.75] mt-3 max-w-[240px]">
            Making perfect smiles accessible, affordable, and effortless for everyone, everywhere.
          </p>
        </div>
        
        <div className="footer-col">
          <h4 className="font-syne text-[0.8rem] font-extrabold tracking-[1.5px] uppercase text-[#2563EB] mb-4.5">Product</h4>
          <ul className="list-none flex flex-col gap-2.5">
            <li><a href="#how" className="text-[#5B6E99] text-[0.87rem] font-medium transition-colors hover:text-[#1A56DB]">How It Works</a></li>
            <li><a href="#pricing" className="text-[#5B6E99] text-[0.87rem] font-medium transition-colors hover:text-[#1A56DB]">Pricing</a></li>
            <li><a href="#reviews" className="text-[#5B6E99] text-[0.87rem] font-medium transition-colors hover:text-[#1A56DB]">Reviews</a></li>
            <li><a href="#" className="text-[#5B6E99] text-[0.87rem] font-medium transition-colors hover:text-[#1A56DB]">Before & After</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4 className="font-syne text-[0.8rem] font-extrabold tracking-[1.5px] uppercase text-[#2563EB] mb-4.5">Company</h4>
          <ul className="list-none flex flex-col gap-2.5">
            <li><a href="#" className="text-[#5B6E99] text-[0.87rem] font-medium transition-colors hover:text-[#1A56DB]">About Us</a></li>
            <li><a href="#" className="text-[#5B6E99] text-[0.87rem] font-medium transition-colors hover:text-[#1A56DB]">Our Doctors</a></li>
            <li><a href="#" className="text-[#5B6E99] text-[0.87rem] font-medium transition-colors hover:text-[#1A56DB]">Blog</a></li>
            <li><a href="#" className="text-[#5B6E99] text-[0.87rem] font-medium transition-colors hover:text-[#1A56DB]">Careers</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4 className="font-syne text-[0.8rem] font-extrabold tracking-[1.5px] uppercase text-[#2563EB] mb-4.5">Support</h4>
          <ul className="list-none flex flex-col gap-2.5">
            <li><a href="#" className="text-[#5B6E99] text-[0.87rem] font-medium transition-colors hover:text-[#1A56DB]">FAQ</a></li>
            <li><a href="tel:7809385726" className="text-[#5B6E99] text-[0.87rem] font-medium transition-colors hover:text-[#1A56DB]">7809385726</a></li>
            <li><a href="mailto:mishraom2326@gmail.com" className="text-[#5B6E99] text-[0.87rem] font-medium transition-colors hover:text-[#1A56DB]">mishraom2326@gmail.com</a></li>
            <li><a href="#" className="text-[#5B6E99] text-[0.87rem] font-medium transition-colors hover:text-[#1A56DB]">Privacy Policy</a></li>
            <li><a href="#" className="text-[#5B6E99] text-[0.87rem] font-medium transition-colors hover:text-[#1A56DB]">Terms</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-[rgba(26,86,219,0.12)] pt-6.5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-[#8EA0C0] text-[0.82rem]">© 2026 Halo Aligner. All rights reserved.</p>
        <div className="flex gap-2.5">
          {['in', 'tw', 'ig'].map((social) => (
            <a 
              key={social} 
              href="#" 
              className="w-9 h-9 bg-[rgba(26,86,219,0.08)] border border-[rgba(26,86,219,0.15)] rounded-[9px] flex items-center justify-center text-[#1A56DB] font-bold text-[0.78rem] transition-all hover:bg-[#D5E100]"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
