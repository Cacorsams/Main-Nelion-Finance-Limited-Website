"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const values = [
    { title: "Definitive Impact", desc: "Your efforts directly empower Tanzanian visionaries to thrive." },
    { title: "Unbounded Growth", desc: "Access specialized mentorship and resources to accelerate your path." },
    { title: "Inclusive Spirit", desc: "We celebrate diverse perspectives and foster a true sense of belonging." },
    { title: "Strategic Benefits", desc: "Enjoy adaptable work arrangements and comprehensive health wellness." }
];

export default function CareersPage() {
    return (
        <section className="pt-32 pb-20 dark:bg-darkmode">
            <div className="container lg:max-w-screen-xl md:max-w-screen-md mx-auto px-4">
                <div className="text-center mb-24" data-aos="fade-up">
                    <h1 className="text-6xl font-black text-midnight_text dark:text-white uppercase tracking-tighter mb-6">
                        Build the Future of<br /><span className="text-primary italic">Financial Inclusion</span>
                    </h1>
                    <p className="text-xl text-gray dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        We're seeking courageous, mission-focused talent to pioneer the next stage of African fintech. Join a team dedicated to real progress.
                    </p>
                    <button className="mt-10 bg-primary text-white py-5 px-12 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-xl shadow-primary/25">
                        Explore Open Positions
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
                    {values.map((value, index) => (
                        <div key={index} className="p-8 rounded-3xl bg-white dark:bg-darklight border border-border dark:border-dark_border shadow-sm hover:shadow-xl transition-all group" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="size-12 bg-primary/10 rounded-xl mb-6 flex items-center justify-center group-hover:bg-primary transition-colors">
                                <div className="size-4 bg-primary group-hover:bg-white rounded-full" />
                            </div>
                            <h3 className="text-xl font-bold text-midnight_text dark:text-white uppercase tracking-tight mb-4">{value.title}</h3>
                            <p className="text-gray dark:text-gray-400 leading-relaxed">{value.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-midnight_text dark:bg-black rounded-[3rem] p-12 md:p-20 relative overflow-hidden" data-aos="zoom-in">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2" />
                    <div className="max-w-2xl relative z-10">
                        <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-8 italic italic">Perspectives from the Field</h2>
                        <div className="flex gap-6 items-start">
                            <div className="space-y-6">
                                <p className="text-2xl font-medium text-white/90 leading-relaxed">
                                    "From my start as a customer assistant to leading regional operations—Nelion has supported my professional journey at every milestone."
                                </p>
                                <div>
                                    <p className="font-bold text-white text-xl uppercase tracking-widest">Mariam Salum</p>
                                    <p className="text-primary font-bold uppercase text-sm">Operations Lead, Tegeta</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
