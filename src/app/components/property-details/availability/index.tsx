import React from 'react';
import Link from 'next/link';
import { COMPANY_NAME } from '@/constants';

export default function Availability() {
    return (
        <div className='bg-[#F0F6FA] dark:bg-[#111929] lg:py-24 py-16'>
            <div className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8'>
                <p className='mb-[16px] text-[24px] sm:text-[36px] justify-center flex font-bold uppercase tracking-tighter text-midnight_text dark:text-white'>
                    Structured Lending Tiers
                </p>
                <p className='mb-10 sm:mb-3.75 text-base sm:text-xl text-gray justify-center flex text-center'>
                    Find the optimal credit facility designed to align with your seasonal cash flow and operational cycles.
                </p>

                <div className="overflow-x-auto">
                    <table className="w-full text-center text-sm sm:text-lg text-gray">
                        <thead>
                            <tr className='border-b border-border dark:border-dark_border'>
                                <th className="py-4 px-2 text-center uppercase tracking-widest text-xs font-black">Facility Name</th>
                                <th className="py-4 px-2 text-center uppercase tracking-widest text-xs font-black">Duration (Mo)</th>
                                <th className="py-4 px-2 text-center uppercase tracking-widest text-xs font-black">Yield (%)</th>
                                <th className="py-4 px-2 text-center uppercase tracking-widest text-xs font-black">Processing</th>
                                <th className="py-4 px-2 text-center uppercase tracking-widest text-xs font-black">Grade</th>
                                <th className="py-4 px-2 text-center uppercase tracking-widest text-xs font-black">Guarantor</th>
                                <th className="py-4 px-2 text-center uppercase tracking-widest text-xs font-black">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { name: "Endeleza P1", mo: "1", yield: "3.5", speed: "Instant", grade: "A+", guar: "None" },
                                { name: "Asset Drive", mo: "24", yield: "12", speed: "3 Days", grade: "A", guar: "1" },
                                { name: "SME Shield", mo: "12", yield: "15", speed: "7 Days", grade: "B+", guar: "2" },
                                { name: "Agri Boost", mo: "6", yield: "8", speed: "5 Days", grade: "A-", guar: "1" },
                                { name: "Vendor Choice", mo: "1", yield: "5", speed: "Instant", grade: "A", guar: "None" }
                            ].map((row, i) => (
                                <tr key={i} className='border-b border-border dark:border-dark_border hover:bg-white/5 transition-colors'>
                                    <td className="py-4 px-2 font-bold text-midnight_text dark:text-gray-200">{row.name}</td>
                                    <td className="py-4 px-2">{row.mo}</td>
                                    <td className="py-4 px-2">{row.yield}%</td>
                                    <td className="py-4 px-2">{row.speed}</td>
                                    <td className="py-4 px-2">{row.grade}</td>
                                    <td className="py-4 px-2">{row.guar}</td>
                                    <td className="py-4 px-2">
                                        <Link href="/contact" className='flex items-center justify-center font-bold text-primary hover:text-blue-700 transition-colors uppercase text-xs tracking-widest'>
                                            Consult
                                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                            </svg>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}