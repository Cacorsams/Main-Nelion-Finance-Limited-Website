"use client";
import React from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';

const LanguageSwitcher = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLanguage = (newLocale: 'en' | 'sw') => {
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <div className="flex items-center space-x-1 bg-gray-100 dark:bg-semidark p-1 rounded-full border border-gray-200 dark:border-gray-700">
            <button
                onClick={() => switchLanguage('en')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${locale === 'en' ? 'bg-primary text-white shadow-md' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-darkmode'}`}
            >
                EN
            </button>
            <button
                onClick={() => switchLanguage('sw')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${locale === 'sw' ? 'bg-primary text-white shadow-md' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-darkmode'}`}
            >
                SW
            </button>
        </div>
    );
};

export default LanguageSwitcher;
