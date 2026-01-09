"use client";
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';

type TabContent = {
    title: string;
    description: string;
    features: string[];
    image: string;
};

type TabLabel = 'Micro-Lending' | 'Asset Financing' | 'SME Credit' | 'Agri-Business';

const content: Record<TabLabel, TabContent> = {
    'Micro-Lending': {
        title: 'Empowering Daily Traders with Precision Capital',
        description: 'Our micro-finance facilities are designed for high-velocity MSMEs needing rapid inventory cycles without the burden of traditional collateral.',
        features: [
            '24h Decisioning',
            'Mobile Money Payout',
            'No Assets Required',
            'Flexible Repayment',
            'SME Mentorship',
            'Vendor Network'
        ],
        image: 'https://placehold.co/600x400?text=Micro-Lending+Solutions'
    },
    'Asset Financing': {
        title: 'Strategic Vehicle Procurement for Enterprises',
        description: 'Acquire high-quality motor vehicles through our specialized logbook and asset-backed credit structures.',
        features: ['Up to 80% Finance', 'Flexible 24m Tenure', 'Dealer Partner Perks'],
        image: 'https://placehold.co/600x400?text=Asset+Financing+Plans'
    },
    'SME Credit': {
        title: 'Scaling Established Regional Enterprises',
        description: 'Customized credit lines for businesses looking to expand operations, open new branches, or diversify product lines.',
        features: ['Priority Hub Access', 'Higher Credit Limits'],
        image: 'https://placehold.co/600x400?text=SME+Credit+Lines'
    },
    'Agri-Business': {
        title: 'Seasonal Growth Funds for Rural Markets',
        description: 'Specialized lending for agricultural value chains, accommodating harvest-based cash flow patterns.',
        features: ['Grace Periods', 'Input Financing', 'Market Linkage Support'],
        image: 'https://placehold.co/600x400?text=Agri-Business+Loans'
    }
};

const tabs: { label: TabLabel, icon: string }[] = [
    { label: 'Micro-Lending', icon: 'mdi:account-cash' },
    { label: 'Asset Financing', icon: 'mdi:car' },
    { label: 'SME Credit', icon: 'mdi:office-building' },
    { label: 'Agri-Business', icon: 'mdi:sprout' }
];

const chunkArray = <T,>(array: T[], chunkSize: number): T[][] => {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
};

export default function Tabbar() {
    const [activeTab, setActiveTab] = useState<TabLabel>('Micro-Lending');

    return (
        <section className='dark:bg-darkmode py-20'>
            <div className='max-w-screen-xl mx-auto px-4'>
                <div className="flex flex-wrap justify-center gap-4 mb-16" role="tablist">
                    {tabs.map((tab) => (
                        <button
                            key={tab.label}
                            className={`px-8 py-4 text-sm font-black uppercase tracking-widest rounded-2xl focus:outline-none flex items-center gap-3 transition-all
                            ${activeTab === tab.label ? 'bg-primary text-white shadow-xl shadow-primary/30 scale-105' : 'bg-gray/5 text-gray hover:bg-gray/10'
                                }`}
                            onClick={() => setActiveTab(tab.label)}
                            role="tab"
                        >
                            <Icon icon={tab.icon} className="text-xl" />
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </div>

                <div className="bg-white dark:bg-darklight rounded-[2.5rem] p-1 shadow-2xl overflow-hidden">
                    <div className="p-8 md:p-16">
                        <div className="flex flex-col lg:flex-row gap-16 items-center" data-aos='fade-up'>
                            <div className="lg:w-1/2 flex flex-col justify-center">
                                <h2 className='md:text-4xl text-[28px] leading-tight text-midnight_text dark:text-white font-black uppercase tracking-tighter italic'>
                                    {content[activeTab]?.title}
                                </h2>
                                <p className='my-8 text-gray dark:text-gray-400 text-xl leading-relaxed'>
                                    {content[activeTab]?.description}
                                </p>
                                <div className="grid grid-cols-2 gap-y-4">
                                    {content[activeTab]?.features.map((feature, i) => (
                                        <div key={i} className='flex items-center gap-3 text-midnight_text dark:text-white font-bold uppercase text-xs tracking-widest'>
                                            <div className="size-2 bg-primary rounded-full shadow-[0_0_8px_rgba(47,115,242,0.8)]" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src={content[activeTab]?.image || '/images/blog/blog-1.jpg'}
                                    alt={activeTab}
                                    width={570}
                                    height={367}
                                    className='w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
