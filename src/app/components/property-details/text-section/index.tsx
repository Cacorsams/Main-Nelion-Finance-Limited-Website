import React from 'react';
import { COMPANY_NAME } from '@/constants';

export default function TextSection() {
    return (
        <section className='py-20 dark:bg-darkmode'>
            <div className='max-w-4xl mx-auto text-center' data-aos='fade-up'>
                <h3 className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-8">Strategic Intelligence</h3>
                <p className='text-xl sm:text-2xl md:text-3xl text-midnight_text dark:text-white px-4 font-medium leading-tight italic'>
                    "We are dedicated to bridging the financial divide by providing precision capital and strategic mentorship to Tanzanian entrepreneurs, ensuring that every ambition finds its path to prosperity."
                </p>
                <div className="w-20 h-1 bg-primary mx-auto mt-10 rounded-full" />
            </div>
        </section>
    );
}
