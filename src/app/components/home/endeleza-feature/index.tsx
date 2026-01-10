"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import { useTranslations } from "next-intl";

const EndelezaFeature = () => {
    const t = useTranslations('Endeleza');
    const usages = [
        { icon: "mdi:store", title: t("businessExpansion"), desc: t("businessExpansionDesc") },
        { icon: "mdi:cart-plus", title: t("stockEquipment"), desc: t("stockEquipmentDesc") },
        { icon: "mdi:school", title: t("schoolFees"), desc: t("schoolFeesDesc") },
        { icon: "mdi:medical-bag", title: t("medicalExpenses"), desc: t("medicalExpensesDesc") },
    ];

    return (
        <section id="lets-grow" className="relative py-24 overflow-hidden dark:bg-darkmode">
            {/* BACKGROUND DECORATIONS */}
            <div className="absolute top-0 right-0 size-[600px] bg-primary/10 blur-[150px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 size-[400px] bg-teal-500/10 blur-[120px] rounded-full -z-10 -translate-x-1/2 translate-y-1/2" />

            <div className="container lg:max-w-screen-xl md:max-w-screen-md mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-16 items-center">

                    {/* LEFT AREA - HERO VISUAL */}
                    <div className="lg:col-span-6 relative" data-aos="fade-right">
                        <div className="relative z-10">
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Image
                                    src="/images/testimonial/endeleza.png"
                                    alt="Endeleza Loan"
                                    width={600}
                                    height={600}
                                    className="object-contain drop-shadow-[0_20px_50px_rgba(30,58,138,0.3)]"
                                    priority
                                />
                            </motion.div>
                        </div>

                        {/* FLOATING GLASS INDICATORS */}
                        <div className="absolute top-10 right-0 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl animate-pulse hidden md:block">
                            <div className="flex items-center gap-3">
                                <Icon icon="mdi:check-decagram" className="text-primary text-2xl" />
                                <span className="text-sm font-black uppercase tracking-widest text-midnight_text dark:text-white">{t('fastAccess')}</span>
                            </div>
                        </div>
                        <div className="absolute bottom-10 -left-10 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl hidden md:block">
                            <div className="flex items-center gap-3">
                                <Icon icon="mdi:account-group" className="text-teal-500 text-2xl" />
                                <span className="text-sm font-black uppercase tracking-widest text-midnight_text dark:text-white">{t('communityImpact')}</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT AREA - CONTENT & CARDS */}
                    <div className="lg:col-span-6 space-y-10" data-aos="fade-left">
                        <div className="space-y-6">
                            <h2 className="text-xs uppercase font-black text-primary tracking-[0.3em] ml-2">{t('flagshipProduct')}</h2>
                            <h3 className="text-6xl md:text-7xl font-black text-midnight_text dark:text-white uppercase tracking-tighter leading-none italic">
                                {t('title')} <span className="text-primary">{t('loan')}</span>
                            </h3>
                            <p className="text-xl text-gray dark:text-gray-400 font-medium leading-relaxed">
                                {t('meaning')}
                            </p>
                        </div>

                        {/* USAGE GRID */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {usages.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all group"
                                >
                                    <div className="size-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Icon icon={item.icon} className="text-2xl" />
                                    </div>
                                    <h4 className="text-lg font-black text-midnight_text dark:text-white uppercase tracking-tighter italic mb-1">{item.title}</h4>
                                    <p className="text-sm text-gray/70 dark:text-gray-400 font-medium">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA & TRUST */}
                        <div className="pt-6 flex flex-col sm:flex-row items-center gap-8">
                            <Link href="/contact">
                                <button className="w-full sm:w-auto px-10 py-5 bg-primary text-white font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-primary/30 hover:bg-blue-700 hover:-translate-y-1 transition-all">
                                    {t('letsGrow')}
                                </button>
                            </Link>
                            <div className="flex items-center gap-2">
                                <div className="size-2 bg-teal-500 rounded-full animate-ping" />
                                <span className="text-xs font-black uppercase tracking-widest text-gray-500">{t('responsibleLending')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EndelezaFeature;
