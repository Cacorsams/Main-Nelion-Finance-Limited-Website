"use client";
import React from 'react';
import Image from 'next/image';
import { PHONE, EMAIL, LOCATION, COMPANY_NAME } from '@/constants';

export default function ContactPage() {
  return (
    <section className="pt-32 pb-20 dark:bg-darkmode min-h-screen">
      <div className="container lg:max-w-screen-xl md:max-w-screen-md mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 item-start">
          <div data-aos="fade-right">
            <h1 className="text-5xl font-black text-midnight_text dark:text-white uppercase tracking-tighter mb-8">
              Reach Our<br /><span className="text-primary italic">Support Team</span>
            </h1>
            <p className="text-xl text-gray dark:text-gray-400 mb-12 leading-relaxed">
              Whether you're seeking a new credit line or need assistance with an existing account, our professional advisors are ready to help you navigate your journey.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="size-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-gray tracking-widest mb-1">Our Headquarters</p>
                  <p className="text-lg font-bold text-midnight_text dark:text-white">{LOCATION}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="size-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-gray tracking-widest mb-1">Direct Hotline</p>
                  <p className="text-lg font-bold text-midnight_text dark:text-white">{PHONE}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="size-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-gray tracking-widest mb-1">Electronic Mail</p>
                  <p className="text-lg font-bold text-midnight_text dark:text-white">{EMAIL}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-darklight p-10 rounded-[2.5rem] shadow-2xl border border-border dark:border-dark_border" data-aos="fade-left">
            <h3 className="text-2xl font-bold text-midnight_text dark:text-white mb-8 uppercase tracking-tighter italic">Inquire About Our Solutions</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-gray tracking-widest">Full Name</label>
                  <input type="text" className="w-full bg-light dark:bg-darkmode border border-border dark:border-dark_border p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white" placeholder="Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-gray tracking-widest">Mobile Number</label>
                  <input type="tel" className="w-full bg-light dark:bg-darkmode border border-border dark:border-dark_border p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white" placeholder="+255..." />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-gray tracking-widest">Preferred Product</label>
                <select className="w-full bg-light dark:bg-darkmode border border-border dark:border-dark_border p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white appearance-none">
                  <option>Endeleza Loan Product</option>
                  <option>Asset Financing</option>
                  <option>SME Credit Line</option>
                  <option>Agri-Boost seasonal</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-gray tracking-widest">Your Message</label>
                <textarea className="w-full bg-light dark:bg-darkmode border border-border dark:border-dark_border p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white h-32 resize-none" placeholder="Describe your requirement..."></textarea>
              </div>
              <button className="w-full bg-primary text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-primary/20">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
