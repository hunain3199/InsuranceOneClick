import React from "react";
import Details from "../../../../../../components/plans/Details";
import Accordian from "../../../../../../components/autoplans/AutoAccordian";
import Caraosal from "@/app/components/ui/Caraosal";

const page = () => {
  return (
    <div className=" p-[30px] bg-customBlue">
      <Details />
      <Accordian />
      <Caraosal />
    </div>
  );
};

export default page;