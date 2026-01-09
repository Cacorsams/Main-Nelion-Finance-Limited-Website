import React from 'react';
import Image from 'next/image';
import { COMPANY_NAME } from '@/constants';

export default function Testimonials() {

    return (
        <section className="px-4 md:px-0 dark:bg-darkmode py-20">
            <div className="container lg:max-w-screen-xl md:max-w-screen-md px-8 mx-auto py-12 flex flex-col-reverse md:flex-row items-center justify-between">
                <div className="flex justify-between">
                    <div className="flex-1 lg:block hidden" data-aos="fade-right">
                        <Image
                            src="/images/testimonial/vector-smart.png"
                            alt="testimonial"
                            width={451}
                            height={470}
                            quality={100}
                            style={{ width: "auto", height: "auto" }}
                        />
                    </div>
                    <div className="flex-1" data-aos="fade-left">
                        <Image
                            src="/images/testimonial/quote.svg"
                            alt="quote"
                            className="mb-4 md:mb-6"
                            height={135}
                            width={135}
                        />
                        <p className="text-lg md:text-2xl text-gray dark:text-gray-300 mb-6 md:mb-12 leading-relaxed">
                            "Partnering with {COMPANY_NAME} was a definitive pivot for my enterprise. Their adaptable lending structures and professional team empowered us to scale during high-opportunity seasons. I advocate for their services to any local visionary seeking genuine growth."
                        </p>
                        <p className="text-lg md:text-2xl font-semibold text-midnight_text dark:text-white">Fatuma Hassan</p>
                        <p className="text-gray dark:text-gray-400 text-lg md:text-xl font-medium">Retail Sector Entrepreneur</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
