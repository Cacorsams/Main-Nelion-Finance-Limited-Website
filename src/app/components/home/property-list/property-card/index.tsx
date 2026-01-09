import Image from "next/image";
import React from "react";
import Link from "next/link";
import "../../../../style/index.css";
import { FacilityData } from "@/app/types/property/propertyData";

interface PropertyCardProps {
  property: FacilityData;
  viewMode?: string;
}

const FacilityCard: React.FC<PropertyCardProps> = ({ property, viewMode }) => {

  return (
    <div
      key={property.id}
      className={`bg-white shadow-md dark:bg-darklight rounded-lg overflow-hidden`}
      data-aos="fade-up"
    >
      <Link href={`/properties/properties-list/${property.slug}`} className={`group ${viewMode == "list" && 'flex'}`}>
        <div className={`relative ${viewMode == "list" && 'w-[30%]'}`}>
          <div className={`imageContainer h-[250px] w-full ${viewMode == "list" && 'h-full md:h-52'}`}>
            <Image
              src={property?.property_img}
              alt={`Image of ${property.property_title}`}
              width={400}
              height={250}
              className="w-full h-full object-cover group-hover:scale-125 duration-500"
            />
          </div>
          <p className="absolute top-[10px] left-[10px] py-1 px-4 bg-white rounded-md text-primary items-center text-xs font-bold uppercase">
            {property.tag}
          </p>
        </div>
        <div className={`p-5 sm:p-8 dark:text-white text-opacity-50 ${viewMode == "list" && 'w-[70%] flex flex-col justify-center'}`}>

          <div className="flex flex-col gap-1 border-b border-border dark:border-dark_border mb-6">

            <div>
              <p className="text-base text-gray font-medium uppercase tracking-wider">
                {property.property_title}
              </p>
            </div>

            <div className="flex justify-between items-center pb-4">
              <div className="font-bold text-2xl group-hover:text-primary text-midnight_text dark:text-white">
                {property.property_price}
              </div>
              <div className="text-xs bg-[#DAE7FF] dark:bg-white text-midnight_text dark:text-primary py-1 px-2 rounded-lg font-bold uppercase tracking-widest">
                {property.location}
              </div>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap justify-between">
            <div className="flex flex-col">
              <p className="md:text-xl text-lg font-bold flex gap-2">
                <Image
                  src="/images/svgs/calendar.svg"
                  alt="Tenure Icon"
                  height={18}
                  width={18}
                  style={{ width: "auto", height: "auto" }}
                />
                {property.beds} {property.category === 'micro' ? 'Days' : 'Months'}
              </p>
              <p className="text-xs uppercase font-bold text-gray tracking-widest">
                Tenure
              </p>
            </div>
            <div className="flex flex-col">
              <p className="md:text-xl text-lg font-bold flex gap-2">
                <Image
                  src="/images/svgs/percent.svg"
                  alt="Interest Icon"
                  height={18}
                  width={18}
                  style={{ width: "auto", height: "auto" }}
                />
                {property.bathrooms}%
              </p>
              <p className="text-xs uppercase font-bold text-gray tracking-widest">
                Interest
              </p>
            </div>
            <div className="flex flex-col">
              <p className="md:text-xl text-lg font-bold flex gap-2">
                <Image
                  src="/images/svgs/clock.svg"
                  alt="Speed Icon"
                  height={18}
                  width={18}
                  style={{ width: "auto", height: "auto" }}
                />
                {property.livingArea}
              </p>
              <p className="text-xs uppercase font-bold text-gray tracking-widest">
                Approval
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FacilityCard;
