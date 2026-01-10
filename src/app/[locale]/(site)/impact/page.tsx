"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import Counter from '@/app/components/shared/counter';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function ImpactPage() {
    const t = useTranslations('Impact');

    const impactStats = [
        { label: t("womensLed"), value: 72, suffix: "%" },
        { label: t("regionalMarkets"), value: 81, suffix: "%" },
        { label: t("businessSkill"), value: 94, suffix: "%" },
        { label: t("nps"), value: 51, suffix: "%" },
        { label: t("indirectEmployment"), value: 1300000, suffix: "" },
    ];

    return (
        <section className="pt-32 pb-20 dark:bg-darkmode">
            <div className="container lg:max-w-screen-xl md:max-w-screen-md mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div data-aos="fade-right">
                        <h1 className="text-5xl font-black text-midnight_text dark:text-white uppercase tracking-tighter mb-8 italic">
                            {t('title')}
                        </h1>
                        <p className="text-xl text-gray dark:text-gray-300 leading-relaxed mb-8">
                            {t('description')}
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12">
                            {[
                                { title: t("inclusion"), desc: t("inclusionDesc"), icon: "mdi:account-group" },
                                { title: t("transparency"), desc: t("transparencyDesc"), icon: "mdi:eye-check" },
                                { title: t("resilience"), desc: t("resilienceDesc"), icon: "mdi:shield-cross" }
                            ].map((pillar, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 p-6 rounded-2xl shadow-xl transition-all group"
                                >
                                    <div className="size-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                                        <Icon icon={pillar.icon} className="text-xl" />
                                    </div>
                                    <h4 className="font-bold text-midnight_text dark:text-white uppercase tracking-widest text-[10px] mb-1">{pillar.title}</h4>
                                    <p className="text-[10px] text-gray dark:text-gray-400 font-medium leading-tight">{pillar.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="relative" data-aos="fade-left">
                        <div className="bg-gradient-to-br from-primary/20 to-cyan/20 rounded-3xl p-1 overflow-hidden shadow-2xl">
                            <div className="bg-white dark:bg-darklight rounded-[1.4rem] p-8">
                                <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest text-primary">{t('strategicProgress')}</h3>
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

                <div className="grid lg:grid-cols-12 gap-16 mb-24" data-aos="fade-up">
                    <div className="lg:col-span-8 lg:col-start-3">
                        <h2 className="text-4xl font-black text-midnight_text dark:text-white uppercase tracking-tighter mb-12 italic border-l-4 border-primary pl-6">
                            {t('subTitle')}
                        </h2>

                        <div className="space-y-8 text-lg text-gray dark:text-gray-300 leading-relaxed">
                            <p>
                                {t('p1')}
                            </p>

                            <p className="p-8 bg-primary/5 rounded-3xl border border-primary/10 italic font-medium">
                                {t('quote')}
                            </p>

                            <p>
                                {t('p2')}
                            </p>

                            <p>
                                {t('p3')}
                            </p>

                            <p className="text-2xl font-bold text-midnight_text dark:text-white pt-8">
                                {t('p4')}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-midnight_text dark:text-white uppercase tracking-widest mb-4">{t('standardsTitle')}</h2>
                    <p className="text-gray dark:text-gray-400 max-w-2xl mx-auto">{t('standardsDesc')}</p>
                </div>
            </div>
        </section>
    );
}
