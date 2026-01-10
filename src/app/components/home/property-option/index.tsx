'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function DiscoverProperties() {
    const t = useTranslations('BusinessTypes');
    const products = [
        {
            id: 1,
            title: t("microLending"),
            slug: "micro-lending",
            description: t("microLendingDesc"),
            icon: "/images/property_option/apartment.svg",
            image: "/images/Avenues/ML.png"
        },
        {
            id: 2,
            title: t("assetFinancing"),
            slug: "asset-financing",
            description: t("assetFinancingDesc"),
            icon: "/images/property_option/villa.svg",
            image: "/images/Avenues/ASSET.png"
        },
        {
            id: 3,
            title: t("smeFinancing"),
            slug: "sme",
            description: t("smeFinancingDesc"),
            icon: "/images/property_option/office.svg",
            image: "/images/Avenues/SME.png"
        }
    ];

    return (
        <section className='dark:bg-darkmode py-20'>
            <div className="container lg:max-w-screen-xl md:max-w-screen-md mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-midnight_text dark:text-white text-center" data-aos="fade-left">{t('title')}</h2>
                <div className="space-y-16">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            id={product.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                            data-aos="fade-up"
                            data-aos-delay={`${index * 100}`}
                        >
                            <div className="flex-1">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={500}
                                    height={400}
                                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="mb-4">
                                    <Image
                                        src={product.icon}
                                        alt={product.title}
                                        className='p-4 border-2 rounded-lg border-border dark:border-dark_border'
                                        height={85}
                                        width={85}
                                    />
                                </div>
                                <h3 className="text-[24px] leading-[1.2] font-bold mb-4 text-midnight_text dark:text-white">{product.title}</h3>
                                <p className="text-base text-gray dark:text-gray-300 leading-relaxed">{product.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}