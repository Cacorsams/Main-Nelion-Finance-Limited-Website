"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Counter from '@/app/components/shared/counter';
import Image from 'next/image';

const impactStats = [
    { label: "Womens Led Ventures", value: 72, suffix: "%" },
    { label: "Regional Markets Impacted", value: 81, suffix: "%" },
    { label: "Business Skill Improvement", value: 94, suffix: "%" },
    { label: "Net Promoter Score", value: 51, suffix: "%" },
    { label: "Indirect Employment Generated", value: 1300000, suffix: "" },
];

export default function ImpactPage() {
    return (
        <section className="pt-32 pb-20 dark:bg-darkmode">
            <div className="container lg:max-w-screen-xl md:max-w-screen-md mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div data-aos="fade-right">
                        <h1 className="text-5xl font-black text-midnight_text dark:text-white uppercase tracking-tighter mb-8 italic">
                            Driving Prosperity Through Purpose
                        </h1>
                        <p className="text-xl text-gray dark:text-gray-300 leading-relaxed mb-8">
                            At Nelion Finance, we believe in using business as a catalyst for social evolution. As we strive for excellence in fintech, we maintain a focus on balancing community impact with sustainable growth.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-primary text-white py-4 px-8 rounded-2xl font-bold hover:bg-blue-700 transition-all uppercase tracking-wide">
                                Sustainability Report
                            </button>
                            <button className="border border-primary text-primary py-4 px-8 rounded-2xl font-bold hover:bg-primary hover:text-white transition-all uppercase tracking-wide">
                                B Corp Insights
                            </button>
                        </div>
                    </div>
                    <div className="relative" data-aos="fade-left">
                        <div className="bg-gradient-to-br from-primary/20 to-cyan/20 rounded-3xl p-1 overflow-hidden shadow-2xl">
                            <div className="bg-white dark:bg-darklight rounded-[1.4rem] p-8">
                                <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest text-primary">Strategic Progress</h3>
                                <div className="space-y-8">
                                    {impactStats.map((stat, index) => (
                                        <div key={index}>
                                            <div className="flex justify-between items-end mb-2">
                                                <p className="font-bold text-midnight_text dark:text-white uppercase text-xs">{stat.label}</p>
                                                <p className="text-2xl font-black text-primary"><Counter from={0} to={stat.value} suffix={stat.suffix} /></p>
                                            </div>
                                            <div className="h-1.5 w-full bg-gray/10 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: "100%" }}
                                                    transition={{ duration: 4 }}
                                                    className="h-full bg-primary"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-midnight_text dark:text-white uppercase tracking-widest mb-4">Global Standards Alignment</h2>
                    <p className="text-gray dark:text-gray-400 max-w-2xl mx-auto">We utilize the Sustainable Development Goals as our primary benchmark to ensure every shilling disbursed contributes to a better world.</p>
                </div>
            </div>
        </section>
    );
}
