import React from "react";
import InsuranceContent from "../../../../../components/Reauseable/InsuranceContent";
import Form from "../../../../../components/insurance/Auto/Form";
import family from "@public/assets/insurance/family.png";

const page = () => {
  return (
    <>
      <div className=" lg:px-[50px] grid grid-cols-1  md:grid-cols-1 lg:grid-cols-3 py-[50px]  lg:gap-[30px] ">
        <div className=" lg:col-span-2 ">
          <InsuranceContent
            src={family}
            title={
              "Comprehensive Travel Insurance: Your Safety Net for Every Journey"
            }
            desc={
              "Protect your trip with comprehensive travel insurance, offering coverage for unexpected events like trip cancellations, medical emergencies, lost luggage, and more. Whether you're traveling domestically or internationally, our insurance gives you peace of mind, ensuring you're safeguarded from unforeseen circumstances. Enjoy your journey knowing you're protected every step of the way."
            }
          />
        </div>
        <Form />
      </div>
    </>
  );
};

export default page;
