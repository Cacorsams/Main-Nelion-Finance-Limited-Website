"use client";
import React, { useState } from "react";
import "../../../../app/style/index.css";
import Link from "next/link";
import { CURRENCY, LOCATION, PHONE } from "@/constants";

export default function Calculator() {
  const [activeTab, setActiveTab] = useState("loan");
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(15);
  const [loanTerm, setLoanTerm] = useState(12);

  const handleTabChange = (tab: any) => {
    setActiveTab(tab);
  };

  const handleLoanAmountChange = (event: any) => {
    setLoanAmount(Number(event.target.value));
  };

  const calculateMonthlyPayment = () => {
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm;
    if (monthlyRate === 0) {
      return loanAmount / numPayments;
    }
    return (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);
  };

  const monthlyPayment = calculateMonthlyPayment();
  const totalPayment = monthlyPayment * loanTerm;

  return (
    <section className="dark:bg-darkmode">
      <div
        className="container px-4 lg:max-w-screen-xl md:max-w-screen-md mx-auto flex flex-col lg:flex-row gap-16 justify-between items-center"
        data-aos="fade-left"
      >
        <div className="max-w-37.5 px-0 mb-8 md:mb-0" data-aos="fade-right">
          <h2
            className="text-4xl mb-4 font-bold text-midnight_text dark:text-white uppercase tracking-tighter"
            data-aos="fade-left"
          >
            Loan Forecast Tool
          </h2>
          <p className="text-xl text-gray mb-12 dark:text-gray-300 leading-relaxed" data-aos="fade-left">
            Anticipate your monthly obligations and total borrowing visibility with our precision financial estimator.
          </p>
          <div className="relative-container">
            <div className="main-div mb-16 pt-8">
              <div className="child-container flex w-full justify-between">
                <div
                  className="money-dot relative"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <p className="text-3xl text-midnight_text dark:text-white">
                    3%
                  </p>
                  <p className="text-gray text-base dark:text-gray-300">Interest Rate</p>
                </div>
                <div
                  className="money-dot relative"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <p className="text-3xl text-midnight_text dark:text-white">
                    5%
                  </p>
                  <p className="text-gray text-base dark:text-gray-300">Processing Fee</p>
                </div>
                <div
                  className="money-dot relative"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  <p className="text-3xl text-midnight_text dark:text-white">
                    12+
                  </p>
                  <p className="text-gray text-base dark:text-gray-300">Months Terms</p>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up">
            <Link
              href="/properties/properties-list"
              className="text-xl bg-primary py-3 px-8 text-white rounded-lg me-3 mb-2 border border-primary hover:bg-blue-700"
            >
              Apply Now
            </Link>
            <Link
              href="/properties/properties-list"
              className="text-xl hover:bg-primary hover:text-white py-3 px-8 text-primary border border-primary rounded-lg me-3 mb-2"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="lg:w-auto w-full" data-aos="fade-right">
          <div className="bg-primary rounded-t-lg p-16 w-full">
            <p className="text-4xl text-white mb-6 font-bold flex items-center justify-center">
              Loan Calculator
            </p>
            <div className="flex justify-center">
              <div className="flex p-3 border-4 rounded-full bg-transparent border-cyan items-center justify-center">
                <button
                  className={`px-6 py-2 text-base focus:outline-none ${activeTab === "loan"
                    ? "text-white bg-cyan rounded-full"
                    : "text-white transition duration-300 rounded-full"
                    }`}
                  onClick={() => handleTabChange("loan")}
                >
                  Loan
                </button>
              </div>
            </div>
            <div className="items-center justify-center mt-12">
              <p className="text-white flex items-center justify-center font-bold mb-4">
                LOAN AMOUNT
              </p>
              <p className="mb-6 text-white flex items-center justify-center font-bold text-[50px] leading-[1.2]">
                {CURRENCY} {loanAmount.toLocaleString()}
              </p>
              <input
                type="range"
                min="100000"
                max="10000000"
                step="50000"
                value={loanAmount}
                onChange={handleLoanAmountChange}
                className="w-full h-2 bg-blue-800 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div className="flex justify-between text-sm text-white mt-2 font-bold mb-6">
              <p>{CURRENCY} 100K</p>
              <p>{CURRENCY} 10M</p>
            </div>
            <div className="bg-blue-800 rounded-lg p-4 mb-4">
              <div className="flex justify-between mb-2">
                <p className="text-white text-sm opacity-80">Monthly Payment:</p>
                <p className="text-white font-bold">{CURRENCY} {Math.round(monthlyPayment).toLocaleString()}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-white text-sm opacity-80">Total Payment:</p>
                <p className="text-white font-bold">{CURRENCY} {Math.round(totalPayment).toLocaleString()}</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-blue-700 text-white text-xl rounded-b-lg">
            <p className="text-center mb-1 opacity-70 italic font-medium">Seeking Professional Guidance?</p>
            <Link
              href={`tel:${PHONE.replace(/\s/g, '')}`}
              className="text-center font-bold inline-block w-full py-2 hover:translate-x-1 transition-transform"
            >
              <span className="opacity-70 !font-normal">Connect via Hotline: </span>{PHONE}
            </Link>
            <p className="text-center mt-3 text-xs opacity-60 uppercase tracking-widest">{LOCATION}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
