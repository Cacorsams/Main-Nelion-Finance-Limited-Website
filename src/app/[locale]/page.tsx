import React from 'react';
import { Metadata } from "next";
import Hero from '../components/home/hero';
import Calculator from '../components/home/calculator';
import History from '../components/home/history';
import Features from '../components/shared/features';
import CompanyInfo from '../components/home/info';
import BlogSmall from '../components/shared/blog';
import DiscoverProperties from '../components/home/property-option';
import EndelezaFeature from '../components/home/endeleza-feature';
import Testimonials from '../components/home/testimonial';
import { COMPANY_NAME } from '@/constants';

export const metadata: Metadata = {
  title: `${COMPANY_NAME} - Financing Made Simple`,
  description: `${COMPANY_NAME} provides micro-lending, asset financing, and SME loans to empower small businesses and individuals in Tanzania.`,
};

export default function Home() {
  return (
    <main>
      <Hero />
      <EndelezaFeature />
      <DiscoverProperties />
      <Calculator />
      <Features />
      <History />
      <Testimonials />
      <CompanyInfo />
      <BlogSmall />
    </main>
  )
}
