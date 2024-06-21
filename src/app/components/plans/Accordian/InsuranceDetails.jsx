import React from "react";
import { Check, Cancel } from "@/app/components/Reauseable/Icons";

const InsuranceDetails = () => {
  return (
    <>
      <div className="py-[30px] px-[50px] bg-gray-50">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex items-center justify-center">
            <p className="flex-1 text-gray-500 text-[14px]">Total Loss </p>
            <Check />
          </div>
          <div className="flex items-center justify-center">
            <p className="flex-1 text-gray-500 text-[14px]">
              Third Party Liability{" "}
            </p>
            <Cancel />
          </div>
          <div className="flex items-center justify-center">
            <p className="flex-1 text-gray-500 text-[14px]">Theft Cover </p>
            <Check />
          </div>
          <div className="flex items-center justify-center">
            <p className="flex-1 text-gray-500 text-[14px]">
              Accidental Damage{" "}
            </p>
            <Cancel />
          </div>
          <div className="flex items-center justify-center">
            <p className="flex-1 text-gray-500 text-[14px]">Excess </p>
            <Check />
          </div>
        </div>
      </div>
    </>
  );
};

export default InsuranceDetails;
