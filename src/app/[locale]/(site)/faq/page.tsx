"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function FAQ() {
    const t = useTranslations('FAQ');
    const faqs = [
        {
            question: t("q1"),
            answer: t("a1")
        },
        {
            question: t("q2"),
            answer: t("a2")
        },
        {
            question: t("q3"),
            answer: t("a3")
        },
        {
            question: t("q4"),
            answer: t("a4")
        },
        {
            question: t("q5"),
            answer: t("a5")
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="pt-32 pb-20 dark:bg-darkmode min-h-screen">
            <div className="container lg:max-w-screen-xl md:max-w-screen-md mx-auto px-4">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h1 className="text-5xl font-extrabold text-midnight_text dark:text-white uppercase tracking-tighter mb-4">{t('title')}</h1>
                    <p className="text-xl text-gray dark:text-gray-400">{t('subtitle')}</p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-border dark:border-dark_border rounded-2xl overflow-hidden bg-white dark:bg-darklight shadow-sm" data-aos="fade-up" data-aos-delay={index * 100}>
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-primary/5 transition-colors"
                            >
                                <span className={`text-xl font-bold ${openIndex === index ? 'text-primary' : 'text-midnight_text dark:text-white'}`}>
                                    {faq.question}
                                </span>
                                <svg
                                    className={`w-6 h-6 transform transition-transform ${openIndex === index ? 'rotate-180 text-primary' : 'text-gray'}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-gray dark:text-gray-300 text-lg leading-relaxed border-t border-border dark:border-dark_border mt-0">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
