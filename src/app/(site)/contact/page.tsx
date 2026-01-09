"use client";
import React from 'react';
import Image from 'next/image';
import { PHONE, EMAIL, LOCATION, COMPANY_NAME } from '@/constants';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function ContactPage() {
  return (
    <section className="pt-32 pb-20 dark:bg-darkmode min-h-screen overflow-hidden">
      <div className="container lg:max-w-screen-xl md:max-w-screen-md mx-auto px-4">

        {/* HERO SECTION WITH CUT-OUT IMAGE */}
        <div className="relative mb-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7" data-aos="fade-right">
              <h1 className="text-6xl md:text-8xl font-black text-midnight_text dark:text-white uppercase tracking-tighter leading-none mb-8">
                Contact <span className="text-primary italic">Us</span>
              </h1>
              <p className="text-2xl text-gray dark:text-gray-400 font-medium leading-relaxed max-w-2xl">
                We're here to bridge the gap between your ambition and the capital required to achieve it. Reach out to our Tegeta headquarters.
              </p>
            </div>
            <div className="lg:col-span-5 relative" data-aos="fade-left">
              <div className="relative z-10 scale-110 translate-x-10 translate-y-10 pointer-events-none">
                <Image
                  src="/images/contact-page/contactus.png"
                  alt="Customer Support"
                  width={600}
                  height={600}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] bg-primary/20 blur-[120px] rounded-full -z-10" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 mb-32">

          {/* GLASS CONTACT CARDS */}
          <div className="lg:col-span-5 space-y-6" data-aos="fade-up">
            <div className="p-8 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 size-32 bg-primary/10 blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              <div className="relative flex items-start gap-6">
                <div className="size-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/30">
                  <Icon icon="mdi:map-marker" className="text-3xl" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-black text-primary tracking-widest mb-2">Our Headquarters</h3>
                  <p className="text-xl font-bold text-midnight_text dark:text-white leading-tight uppercase tracking-tight">
                    Tegeta Branch<br />Main Office in Tanzania
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 mt-2 font-medium">{LOCATION}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              <div className="p-8 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-[2.5rem] shadow-xl group">
                <div className="flex items-center gap-6">
                  <div className="size-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                    <Icon icon="mdi:phone" className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-[10px] uppercase font-black text-gray-400 tracking-widest mb-1">Direct Hotline</h3>
                    <p className="text-lg font-bold text-midnight_text dark:text-white">{PHONE}</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-[2.5rem] shadow-xl group">
                <div className="flex items-center gap-6">
                  <div className="size-14 bg-teal-500/10 rounded-2xl flex items-center justify-center text-teal-500 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300">
                    <Icon icon="mdi:email" className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-[10px] uppercase font-black text-gray-400 tracking-widest mb-1">Electronic Mail</h3>
                    <p className="text-lg font-bold text-midnight_text dark:text-white break-all">{EMAIL}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GLASS INQUIRY FORM */}
          <div className="lg:col-span-7" data-aos="fade-up" data-aos-delay="200">
            <div className="h-full bg-midnight_text dark:bg-black p-10 md:p-16 rounded-[4rem] relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-primary/5 blur-[100px] pointer-events-none" />
              <div className="relative z-10 w-full">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic mb-10">Initiate Your Lending Journey</h3>
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase font-black text-white/50 tracking-[0.2em] ml-2">Your Full Identity</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:ring-2 focus:ring-primary/50 outline-none transition-all text-white font-medium" placeholder="E.g. Juma Kapuya" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase font-black text-white/50 tracking-[0.2em] ml-2">Contact Sequence</label>
                      <input type="tel" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:ring-2 focus:ring-primary/50 outline-none transition-all text-white font-medium" placeholder="+255..." />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase font-black text-white/50 tracking-[0.2em] ml-2">Strategic Requirement</label>
                    <select className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:ring-2 focus:ring-primary/50 outline-none transition-all text-white font-medium appearance-none">
                      <option className="bg-midnight_text">Endeleza Growth Fund</option>
                     
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase font-black text-white/50 tracking-[0.2em] ml-2">Narrative of Inquiry</label>
                    <textarea className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:ring-2 focus:ring-primary/50 outline-none transition-all text-white font-medium h-40 resize-none" placeholder="How can we empower your vision?"></textarea>
                  </div>
                  <button className="w-full bg-primary text-white py-6 rounded-3xl font-black uppercase tracking-[0.2em] hover:bg-blue-700 hover:shadow-2xl hover:shadow-primary/40 transition-all shadow-xl shadow-primary/20 text-lg">
                    Transmit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* INTEGRATED MAP SECTION */}
        <div className="relative group" data-aos="zoom-in">
          <div className="absolute -inset-4 bg-primary/5 blur-2xl rounded-[4rem] group-hover:bg-primary/10 transition-all duration-700" />
          <div className="relative h-[500px] w-full bg-white/10 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-[4rem] overflow-hidden shadow-2xl">
            <div className="absolute top-10 left-10 z-20 p-6 bg-white/90 dark:bg-midnight_text/90 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl max-w-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white">
                  <Icon icon="mdi:pin" className="text-xl" />
                </div>
                <h4 className="font-black uppercase tracking-tighter italic text-midnight_text dark:text-white">Tegeta HQ</h4>
              </div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Our flagship branch and primary operations center for East African strategy.</p>
              <p className="text-xs font-bold text-primary uppercase tracking-widest leading-relaxed">{LOCATION}</p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15849.56637172813!2d39.2064!3d-6.6853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4908977c688d%3A0x6331901dc3602114!2sTegeta%2C%20Dar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.2) grayscale(0.2) invert(0.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
