import React from "react";
import Details from "../../../../../../components/plans/Details";
import Accordian from "../../../../../../components/autoplans/AutoAccordian";

const page = () => {
  return (
    <div className=" p-[30px] bg-customBlue">
      <Details />
      <Accordian />
    </div>
  );
};

export default page;