"use client";
import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { COMPANY_NAME } from "@/constants";
import { useTranslations } from 'next-intl';

import Counter from "../../shared/counter";

const Hero = () => {
  const t = useTranslations('Hero');
  return (
    <section className="relative pt-44 pb-20 dark:bg-darklight bg-no-repeat bg-gradient-to-b from-white from-10% dark:from-darkmode to-herobg to-90% dark:to-darklight overflow-x-hidden">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md relative z-10">
        <div className="grid lg:grid-cols-12 grid-cols-1">
          <div
            className="flex flex-col col-span-6 justify-center items-start"
            data-aos="fade-right"
          >
            <div className="mb-8 pl-4">
              <h1 className="md:text-[50px] leading-[1.2] text-4xl text-midnight_text dark:text-white font-bold uppercase tracking-tight whitespace-pre-line">
                {t('title')}
              </h1>
              <p className="text-xl md:text-2xl mt-4 text-gray-600 dark:text-gray-300 italic opacity-80">
                {t('quote')}
              </p>
            </div>
            <div className="max-w-xl pl-4 sm:w-full mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white/80 dark:bg-darkmode/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20"
                >
                  <p className="text-4xl font-bold text-primary mb-2">
                    <Counter from={0} to={93} suffix="%" />
                  </p>
                  <p className="text-sm text-gray dark:text-gray-400 font-medium">
                    {t('returnRate')}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white/80 dark:bg-darkmode/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20"
                >
                  <p className="text-4xl font-bold text-primary mb-2">
                    <Counter from={0} to={80} suffix="%" />
                  </p>
                  <p className="text-sm text-gray dark:text-gray-400 font-medium">
                    {t('femaleOwned')}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-white/80 dark:bg-darkmode/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20"
                >
                  <p className="text-4xl font-bold text-primary mb-2">
                    <Counter from={0} to={75} suffix="%" />
                  </p>
                  <p className="text-sm text-gray dark:text-gray-400 font-medium">
                    {t('schoolingGains')}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="lg:block hidden col-span-6 absolute xl:-right-60 right-0 bottom-10 -z-1 opacity-90">
            <Image
              src="/images/hero/hero-image.png"
              alt="Nelion Finance Dashboard"
              width={800}
              height={0}
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
