"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Features() {
    const [propertiesData, setPropertiesData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/propertydata');
                if (!res.ok) throw new Error('Failed to fetch properties');
                const properties = await res.json();
                setPropertiesData(properties || []);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const featuredLoan = propertiesData[0]; // Using the first loan as a featured spotlight

    const advantages = [
        {
            title: "Tailored Financial Solutions",
            description: "We recognize that every client's economic circumstances are distinct. Our advisors take the time to evaluate your liquidity, assess current commitments, and propose strategies that ensure you obtain the most beneficial terms.",
            icon: "/images/features/rating.svg"
        },
        {
            title: "Collaborative Synergy",
            description: "Our specialists partner directly with certified distributors and vehicle yards to locate optimal assets at the most advantageous rates for your enterprise.",
            icon: "/images/features/live-chat.svg"
        },
        {
            title: "Commitment to Your Growth",
            description: "We are deeply invested in supporting local visionaries, entrepreneurs, and established businesses across Tanzania in achieving their operational milestones. With Nelion, you gain a dedicated ally in your long-term success.",
            icon: "/images/features/Give-Women's-Rights.svg"
        }
    ];

    return (
        <section className='dark:bg-darkmode py-20 overflow-hidden'>
            <div className="container px-4 lg:max-w-screen-xl md:max-w-screen-md mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Visual Feature Section */}
                    <div className='lg:w-1/2 w-full'>
                        <div className='relative' data-aos="fade-right">
                            <div className="rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/features/features_iimage.jpg"
                                    alt='Nelion Finance Impact'
                                    width={640}
                                    height={615}
                                    className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Floating Spotlight Card */}
                            {featuredLoan && (
                                <div className="absolute -bottom-10 -right-4 md:right-10 max-w-sm bg-white dark:bg-darklight p-4 rounded-2xl shadow-2xl border border-primary/10" data-aos="fade-up" data-aos-delay="300">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="bg-primary/10 p-2 rounded-lg text-primary font-bold text-xs uppercase tracking-widest">
                                            Spotlight
                                        </div>
                                        <h4 className="font-bold text-midnight_text dark:text-white uppercase text-sm tracking-tight">{featuredLoan.property_title}</h4>
                                    </div>
                                    <div className="flex justify-between items-end border-t border-border dark:border-dark_border pt-3">
                                        <div>
                                            <p className="text-[10px] text-gray uppercase font-bold mb-1">Max Limit</p>
                                            <p className="text-xl font-bold text-primary">{featuredLoan.property_price.split('-')[1] || featuredLoan.property_price}</p>
                                        </div>
                                        <div className="bg-primary text-white text-[10px] font-bold py-1 px-3 rounded-full uppercase">
                                            Apply Now
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className='lg:w-1/2 w-full flex flex-col justify-center' data-aos="fade-left">
                        <h2 className='mb-6 text-4xl font-bold text-midnight_text dark:text-white uppercase tracking-tighter'>Why Partner with Nelion?</h2>
                        <p className="text-gray dark:text-gray-300 text-lg mb-10 leading-relaxed uppercase tracking-wide opacity-80">Empowering Tanzanian visionaries with precision credit and strategic support.</p>

                        <div className="space-y-10">
                            {advantages.map((item, index) => (
                                <div key={index} className='flex items-start gap-6 group' data-aos="fade-left" data-aos-delay={index * 150}>
                                    <div className="flex-shrink-0 size-16 bg-primary/10 dark:bg-primary/20 p-4 rounded-2xl flex justify-center items-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                        <Image
                                            src={item.icon}
                                            alt={item.title}
                                            height={32}
                                            width={32}
                                            className="group-hover:brightness-0 group-hover:invert transition-all"
                                        />
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-bold text-midnight_text dark:text-white mb-2 uppercase tracking-tight'>{item.title}</h3>
                                        <p className='text-gray text-base dark:text-gray-400 leading-relaxed'>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
