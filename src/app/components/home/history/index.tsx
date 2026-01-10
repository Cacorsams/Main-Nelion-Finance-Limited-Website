import React from "react";
import Image from "next/image";
import { COMPANY_NAME } from "@/constants";
import Counter from "../../shared/counter";

import { useTranslations } from "next-intl";

export default function History() {
  const t = useTranslations('History');
  return (
    <section className="history-bg relative overflow-hidden">
      <div className="container lg:max-w-screen-xl md:max-w-screen-md dark:text-black mx-auto grid grid-cols-1 lg:grid-cols-12 py-32 items-center">
        <div
          className="col-span-1 lg:col-span-7 px-4"
          data-aos="fade-right"
        >
          <p className="text-4xl text-midnight_text dark:text-white mb-6 font-bold uppercase tracking-tight">
            {t('forceForPositiveChange')}
          </p>
          <p className="mb-8 text-lg text-gray dark:text-gray-300 leading-relaxed">
            {t('forceForPositiveChangeDesc')}
          </p>
          <div className="space-y-6 mb-12">
            <div className="p-6 bg-white/50 dark:bg-darklight/50 backdrop-blur-sm rounded-2xl border border-primary/20 shadow-sm">
              <h4 className="text-xl font-bold text-primary mb-3 uppercase tracking-wide">{t('femaleEntrepreneurs')}</h4>
              <p className="text-gray dark:text-gray-300 leading-relaxed">
                {t('femaleEntrepreneursDesc')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10">
              <p className="text-3xl font-bold text-primary mb-1">
                <Counter from={0} to={3} />
              </p>
              <p className="text-xs uppercase font-bold text-gray tracking-tighter">{t('regionalBranches')}</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10">
              <p className="text-3xl font-bold text-primary mb-1">
                <Counter from={0} to={1273} />
              </p>
              <p className="text-xs uppercase font-bold text-gray tracking-tighter">{t('loansDisbursed')}</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10">
              <p className="text-3xl font-bold text-primary mb-1">
                <Counter from={0} to={997} />
              </p>
              <p className="text-xs uppercase font-bold text-gray tracking-tighter">{t('repeatFunding')}</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10">
              <p className="text-3xl font-bold text-primary mb-1">
                <Counter from={0} to={209} />
              </p>
              <p className="text-xs uppercase font-bold text-gray tracking-tighter">{t('newPartnerships')}</p>
            </div>
          </div>
        </div>
        <div
          className="hidden lg:block col-span-1 lg:col-span-5 px-4"
          data-aos="fade-left"
        >
          <div className="bg-white dark:bg-darklight dark:text-white p-8 border-4 border-primary rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Image
                src="/images/contact-page/Career.svg"
                alt="Decorative SVG"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <p className="mb-12 text-2xl text-midnight_text dark:text-white font-black uppercase leading-tight italic">
              {t('premiumIntegrity')}
            </p>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-gray font-medium uppercase text-xs mb-1">
                  {t('yearsExpertise')}
                </p>
                <p className="text-7xl text-midnight_text dark:text-white font-black tracking-tighter">
                  12
                </p>
              </div>
              <Image
                src="/nel.png"
                alt="Nelion Finance Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
