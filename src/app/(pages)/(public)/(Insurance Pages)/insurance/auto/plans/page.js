'use client';
import React from "react";
import Details from "../../../../../../components/plans/Details";
import Accordian from "../../../../../../components/autoplans/AutoAccordian";
import Caraosal from "@/app/components/ui/Caraosal";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Call from "@/app/components/plans/Call";

const Page = () => {
  const searchParams = useSearchParams();
  const [carInsuranceObject, setCarInsuranceObject] = useState(null);

  useEffect(() => {
    const carInsuranceObjectStr = searchParams.get("carInsuranceObject");
    console.log("carInsuranceObjectStr:", carInsuranceObjectStr); // Log the string from query params
    if (carInsuranceObjectStr) {
      try {
        const parsedObject = JSON.parse(carInsuranceObjectStr);
        console.log("Parsed carInsuranceObject:", parsedObject); // Log the parsed object
        setCarInsuranceObject(parsedObject);
      } catch (error) {
        console.error("Failed to parse carInsuranceObject:", error); // Log any errors during parsing
      }
    }
  }, [searchParams]);

  useEffect(() => {
    console.log("carInsuranceObject state:", carInsuranceObject); // Log the state
  }, [carInsuranceObject]);

  return (
    <div className=" p-[30px] bg-customBlue">
      <Details />
      {carInsuranceObject ? (
        carInsuranceObject.map((data, i) => (
          <Accordian
            key={i}
            insuranceCompany={data.insuranceCompany}
            yearlyPlan={data.yearlyPlan}
            logo={data.logo}
            percentage={data.percentage}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
      <Call />
     <Caraosal />
    </div>
  );
};

export default Page;