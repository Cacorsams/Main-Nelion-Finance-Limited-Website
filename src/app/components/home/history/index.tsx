import React from "react";
import Image from "next/image";
import { COMPANY_NAME } from "@/constants";
import Counter from "../../shared/counter";

export default function History() {
  return (
    <section className="history-bg relative overflow-hidden">
      <div className="container lg:max-w-screen-xl md:max-w-screen-md dark:text-black mx-auto grid grid-cols-1 lg:grid-cols-12 py-32 items-center">
        <div
          className="col-span-1 lg:col-span-7 px-4"
          data-aos="fade-right"
        >
          <p className="text-4xl text-midnight_text dark:text-white mb-6 font-bold uppercase tracking-tight">
            Force for Positive Change
          </p>
          <p className="mb-8 text-lg text-gray dark:text-gray-300 leading-relaxed">
            Our commitment at {COMPANY_NAME} goes beyond financial services. We are dedicated to creating sustainable pathways for economic inclusion across Tanzania.
          </p>
          <div className="space-y-6 mb-12">
            <div className="p-6 bg-white/50 dark:bg-darklight/50 backdrop-blur-sm rounded-2xl border border-primary/20 shadow-sm">
              <h4 className="text-xl font-bold text-primary mb-3 uppercase tracking-wide">Elevating Female Entrepreneurs</h4>
              <p className="text-gray dark:text-gray-300 leading-relaxed">
                We actively identify and support women-led initiatives, providing them with the necessary tools, capital, and mentorship to navigate the competitive market landscape. Our focus is on fostering independence and long-term business resilience.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10">
              <p className="text-3xl font-bold text-primary mb-1">
                <Counter from={0} to={3} />
              </p>
              <p className="text-xs uppercase font-bold text-gray tracking-tighter">Regional Branches</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10">
              <p className="text-3xl font-bold text-primary mb-1">
                <Counter from={0} to={1273} />
              </p>
              <p className="text-xs uppercase font-bold text-gray tracking-tighter">Loans Disbursed</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10">
              <p className="text-3xl font-bold text-primary mb-1">
                <Counter from={0} to={997} />
              </p>
              <p className="text-xs uppercase font-bold text-gray tracking-tighter">Repeat Funding</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10">
              <p className="text-3xl font-bold text-primary mb-1">
                <Counter from={0} to={209} />
              </p>
              <p className="text-xs uppercase font-bold text-gray tracking-tighter">New Partnerships</p>
            </div>
          </div>
        </div>
        <div
          className="hidden lg:block col-span-1 lg:col-span-5 px-4"
          data-aos="fade-left"
        >
          <div className="bg-white dark:bg-darklight dark:text-white p-8 border-4 border-primary rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <svg width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="currentColor" /></svg>
            </div>
            <p className="mb-12 text-2xl text-midnight_text dark:text-white font-black uppercase leading-tight italic">
              Premium Financial<br />Integrity
            </p>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-gray font-medium uppercase text-xs mb-1">
                  Years of Expertise
                </p>
                <p className="text-7xl text-midnight_text dark:text-white font-black tracking-tighter">
                  12
                </p>
              </div>
              <div className="size-16 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-3xl">
                N
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
