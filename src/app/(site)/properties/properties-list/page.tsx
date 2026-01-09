import React from 'react';
import { Metadata } from "next";
import AdvanceSearch from '@/app/components/property-list/search';
import { COMPANY_NAME } from '@/constants';

export const metadata: Metadata = {
  title: `Loan Products - ${COMPANY_NAME}`,
  description: `Explore our range of loan products including Micro-Lending, Asset Financing, and SME loans at ${COMPANY_NAME}.`,
};

const Page = ({ searchParams }: any) => {
  const category = searchParams?.category || ''; 

  return (
    <>
      <AdvanceSearch category={category} />
    </>
  );
};

export default Page;
