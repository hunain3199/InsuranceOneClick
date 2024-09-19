'use client'
import React from "react";
import InsuranceContent from "../../../../../components/Reauseable/InsuranceContent";
import travel from "@public/assets/insurance/travel2.png";
import TravelForm from "../../../../../components/Reauseable/TravelForm";
import TravelForm2 from "../../../../../components/Reauseable/travelform2nd";
const page = () => {
  return (
    <>
      {" "}
      <div className=" mx-auto  md:px-[50px] w-full grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 md:py-[50px]  ">
        <div className=" md:col-span-2">
          <InsuranceContent
            src={travel}
            title={
              "Comprehensive Travel Insurance: Your Safety Net for Every Journey"
            }
            desc={
              "Protect your trip with comprehensive travel insurance, offering coverage for unexpected events like trip cancellations, medical emergencies, lost luggage, and more. Whether you're traveling domestically or internationally, our insurance gives you peace of mind, ensuring you're safeguarded from unforeseen circumstances. Enjoy your journey knowing you're protected every step of the way."
            }
          />
        </div>
        <div className=" ">
          {/* <TravelForm /> */}
          <TravelForm2/>
        </div>
      </div>
    </>
  );
};

export default page;
