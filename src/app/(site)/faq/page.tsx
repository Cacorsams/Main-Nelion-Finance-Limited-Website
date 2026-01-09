"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_NAME } from '@/constants';

const faqs = [
    {
        question: `What is ${COMPANY_NAME}'s primary financial offering?`,
        answer: "Our 'Endeleza Growth Fund' is our premier 30-day liquidity solution tailored for rapid inventory turnover and business scaling."
    },
    {
        question: "How do I start the application process?",
        answer: "Simply visit our Tegeta headquarters or use our digital portal to submit your request. Our team evaluates applications within 24 hours."
    },
    {
        question: "Who are your ideal customers?",
        answer: "We specifically support small-scale entrepreneurs and traders who manage short-cycle inventory and distribution networks."
    },
    {
        question: "What are the core requirements for a business credit line?",
        answer: "Criteria include: 1. Minimum 6 months of active business operations; 2. Valid National ID; 3. Established physical business location; 4. Documentation of ownership; 5. Registration with local mobile or banking networks."
    },
    {
        question: `Why should I partner with ${COMPANY_NAME}?`,
        answer: "We focus on outcomes. We succeed only when your business thrives, providing the most competitive terms and dedicated relationship management in Tanzania."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="pt-32 pb-20 dark:bg-darkmode min-h-screen">
            <div className="container lg:max-w-screen-xl md:max-w-screen-md mx-auto px-4">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h1 className="text-5xl font-extrabold text-midnight_text dark:text-white uppercase tracking-tighter mb-4">Support & FAQ</h1>
                    <p className="text-xl text-gray dark:text-gray-400">Everything you need to know about our lending solutions.</p>
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
