"use client";
import { Suspense } from 'react';
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Accordian from "@/app/components/plans/Accordian/Accordian";
import Details from "@/app/components/plans/Details";
import Call from "@/app/components/plans/Call";
import Plains from "@/app/components/ui/Plain";
import Caraosal from "@/app/components/ui/Caraosal";

const Page = () => {
  const searchParams = useSearchParams();
  const [bikeInsuranceObject, setBikeInsuranceObject] = useState(null);

  useEffect(() => {
    const bikeInsuranceObjectStr = searchParams.get("bikeInsuranceObject");
    console.log("bikeInsuranceObjectStr:", bikeInsuranceObjectStr); // Log the string from query params
    if (bikeInsuranceObjectStr) {
      try {
        const parsedObject = JSON.parse(bikeInsuranceObjectStr);
        console.log("Parsed bikeInsuranceObject:", parsedObject); // Log the parsed object
        setBikeInsuranceObject(parsedObject);
      } catch (error) {
        console.error("Failed to parse bikeInsuranceObject:", error); // Log any errors during parsing
      }
    }
  }, [searchParams]);

  useEffect(() => {
    console.log("bikeInsuranceObject state:", bikeInsuranceObject); // Log the state
  }, [bikeInsuranceObject]);

  return (
    <Suspense >
    <div className="p-[30px] bg-customBlue">
      <Details />

      {bikeInsuranceObject ? (
        bikeInsuranceObject.map((data, i) => (
          <Accordian
            key={i}
            insuranceCompany={data.insuranceCompany}
            yearlyPlan={data.yearlyPlan}
            logo={data.logo}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
      <Call />
      <Caraosal />
    </div>
    </Suspense >
  );
};

export default Page;
