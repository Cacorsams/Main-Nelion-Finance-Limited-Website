"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ value, suffix = '', duration = 4 }: { value: number; suffix?: string; duration?: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, threshold: 0.5 });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            let startTime: number | null = null;
            const animate = (currentTime: number) => {
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
                setCount(Math.floor(progress * value));
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);
        }
    }, [isInView, value, duration]);

    return (
        <motion.span
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {count}{suffix}
        </motion.span>
    );
};

export default function CompanyInfo() {
    const stats = [
        { id: 1, value: 3, label: "Branches In Tanzania", suffix: "", dataAos: "fade-right" },
        { id: 2, value: 1273, label: "Total Loans Disbursed", suffix: "", dataAos: "fade-up" },
        { id: 3, value: 997, label: "Total Repeat Loans", suffix: "", dataAos: "fade-up" },
        { id: 4, value: 209, label: "New Client Loans", suffix: "", dataAos: "fade-left" },
    ];

    return (
        <div className='dark:bg-darkmode pt-20'>
            <div className='estate-summary-bg md:bg-transparent bg-primary'>
                <div className='bg-primary container lg:max-w-screen-xl md:max-w-screen-md mx-auto px-8 rounded-lg'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {stats.map((stat) => (
                            <div 
                                key={stat.id} 
                                className='flex lg:flex-col flex-row justify-center items-center md:border-r border-border py-10 px-4 md:px-4 last:border-r-0' 
                                data-aos={stat.dataAos}
                            >
                                <p className='text-[60px] leading-[1.2] mr-4 lg:mr-0 lg:mb-2 text-white font-bold'>
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={4} />
                                </p>
                                <p className='text-xl lg:text-2xl text-white text-center'>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}