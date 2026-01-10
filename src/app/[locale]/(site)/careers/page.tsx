"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

import { useTranslations } from 'next-intl';

export default function CareersPage() {
    const t = useTranslations('Careers');
    return (
        <section className="pt-32 pb-20 dark:bg-darkmode overflow-hidden">
            <div className="container lg:max-w-screen-xl md:max-w-screen-md mx-auto px-4">

                {/* HERO SECTION WITH GLASSMORPHISM */}
                <div className="relative h-[600px] md:h-[700px] rounded-[3rem] overflow-hidden mb-24 shadow-2xl" data-aos="zoom-out">
                    <Image
                        src="/images/features/features_iimage.jpg"
                        alt="Join the Nelion Team"
                        fill
                        className="object-cover scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight_text/80 via-transparent to-transparent flex items-end">
                        <div className="p-8 md:p-16 w-full">
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-[2.5rem] max-w-4xl"
                            >
                                <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter italic leading-none mb-6">
                                    {t('heroTitle')} <span className="text-primary">{t('progress')}</span>
                                </h1>
                                <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed max-w-2xl">
                                    {t('heroDesc')}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* THE CORE NARRATIVE - CREATIVE LAYOUT */}
                <div className="grid lg:grid-cols-12 gap-16 items-start mb-32">

                    <div className="lg:col-span-12" data-aos="fade-up">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="flex-1 space-y-8">
                                <p className="text-2xl font-bold text-midnight_text dark:text-white leading-tight uppercase tracking-tighter italic text-primary">
                                    {t('reshapingTitle')}
                                </p>
                                <p className="text-xl text-gray dark:text-gray-300 leading-relaxed">
                                    {t('reshapingDesc')}
                                </p>
                            </div>
                            <div className="w-full md:w-1/3 bg-primary/5 rounded-3xl p-8 border border-primary/10">
                                <Image src="/images/features/rating.svg" alt="Rating" width={100} height={100} className="mb-6 opacity-80" />
                                <p className="text-sm font-black uppercase text-midnight_text dark:text-white tracking-widest">{t('builtOnTrust')}</p>
                                <p className="text-xs text-gray mt-2">{t('ownershipAccountability')}</p>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 2: HUMAN & AFRICAN */}
                    <div className="lg:col-span-12 pt-16 border-t border-border dark:border-dark_border" data-aos="fade-right">
                        <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
                            <div className="flex-1 space-y-8">
                                <h2 className="text-4xl font-black text-midnight_text dark:text-white uppercase tracking-tighter italic">{t('humanAfricanTitle')}</h2>
                                <p className="text-xl text-gray dark:text-gray-300 leading-relaxed">
                                    {t('humanAfricanDesc')}
                                </p>
                            </div>
                            <div className="flex-1">
                                <div className="bg-white dark:bg-darklight p-1 rounded-[2.5rem] shadow-2xl relative">
                                    <div className="absolute -top-10 -left-10 size-40 bg-primary/20 blur-3xl rounded-full" />
                                    <div className="p-12 text-center">
                                        <Image src="/images/features/Give-Women's-Rights.svg" alt="Women Rights" width={180} height={180} className="mx-auto mb-8" />
                                        <h3 className="text-xl font-bold uppercase tracking-widest text-primary">{t('empoweringInclusion')}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 3: MUTUAL GROWTH & CULTURE (GLASS TILES) */}
                    <div className="lg:col-span-12 py-24 bg-primary/5 rounded-[4rem] px-8 md:px-16" data-aos="fade-up">
                        <div className="grid md:grid-cols-2 gap-16">
                            <div className="space-y-8">
                                <h2 className="text-4xl font-black text-midnight_text dark:text-white uppercase tracking-tighter italic">{t('mutualGrowthTitle')} <span className="text-primary italic">{t('mutual')}</span></h2>
                                <p className="text-lg text-gray dark:text-gray-300 leading-relaxed">
                                    {t('mutualGrowthDesc')}
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { title: t("trust"), color: "bg-blue-500", icon: "mdi:handshake" },
                                    { title: t("collaboration"), color: "bg-indigo-500", icon: "mdi:account-group" },
                                    { title: t("accountability"), color: "bg-cyan-500", icon: "mdi:check-decagram" },
                                    { title: t("boldIdeas"), color: "bg-primary", icon: "mdi:lightbulb-on" }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white dark:bg-darkmode p-6 rounded-3xl shadow-lg border border-border dark:border-dark_border hover:scale-105 transition-transform group">
                                        <div className={`size-12 ${item.color} rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg group-hover:rotate-12 transition-transform`}>
                                            <Icon icon={item.icon} className="text-2xl" />
                                        </div>
                                        <h4 className="font-bold text-midnight_text dark:text-white uppercase text-xs tracking-widest mb-1">{item.title}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-24 pt-16 border-t border-primary/20">
                            <div className="flex flex-col md:flex-row gap-12 items-start">
                                <div className="flex-1">
                                    <p className="text-xl text-gray dark:text-gray-300 leading-relaxed">
                                        {t('cultureDesc')}
                                    </p>
                                </div>
                                <div className="flex-1 flex gap-4">
                                    <Image src="/images/features/live-chat.svg" alt="Chat" width={60} height={60} className="invert dark:invert-0 opacity-50" />
                                    <p className="text-gray italic font-medium">{t('togetherQuote')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CALL TO ACTION */}
                    <div className="lg:col-span-12 text-center" data-aos="zoom-in">
                        <div className="max-w-4xl mx-auto bg-midnight_text dark:bg-black p-12 md:p-24 rounded-[4rem] relative overflow-hidden">
                            <div className="absolute inset-0 bg-primary/10 blur-[100px]" />
                            <div className="relative z-10">
                                <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-12">{t('shapingReality')} <span className="text-primary">{t('reality')}</span></h2>
                                <p className="text-xl text-white/70 mb-12 leading-relaxed">
                                    {t('shapingRealityDesc')}
                                </p>
                                <a href="/contact" className="inline-block bg-primary text-white py-6 px-12 rounded-[2rem] font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-2xl shadow-primary/30 text-xl">
                                    {t('joinNelion')}
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
