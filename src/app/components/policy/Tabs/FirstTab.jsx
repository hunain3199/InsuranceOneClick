import React from "react";
import { Cancel, Check } from "../../Reauseable/Icons";

const FirstTab = () => {
  return (
    <div className="bg-customBlue p-[31px] lg:px-[50px] lg:py-[50px]">
      <div className="flex flex-col lg:flex-row justify-between gap-[30px] pb-[20px] border-b border-b-gray-300">
        <div className="w-full">
          <p className="text-blue-700">Main Coverage</p>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between  text-lightGray mb-[20px]">
            <p className="text-[14px]">Accident Damages</p>
            <Check />
          </div>
          <div className="flex items-center justify-between  text-lightGray mb-[20px]">
            <p className="text-[14px]">Theft/Snatch</p>
            <Check />
          </div>
          <div className="flex items-center justify-between  text-lightGray mb-[20px]">
            <p className="text-[14px]">Terrorism</p>
            <Check />
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between  text-lightGray mb-[20px]">
            <p className="text-[14px]">Fire</p>
            <Check />
          </div>
          <div className="flex items-center justify-between  text-lightGray mb-[20px]">
            <p className="text-[14px]">Natural Calamities</p>
            <Check />
          </div>
          <div className="flex items-center justify-between  text-lightGray mb-[20px]">
            <p className="text-[14px]">Deductible</p>
            <Check />
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between  text-lightGray mb-[20px]">
            <p className="text-[14px]">Total Loss</p>
            <Check />
          </div>
          <div className="flex items-center justify-between  text-lightGray mb-[20px]">
            <p className="text-[14px]">Riots & Strike</p>
            <Check />
          </div>
          <div className="flex items-center justify-between  text-lightGray mb-[20px]">
            <p className="text-[14px]">No Claim Discount</p>
            <Check />
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-col lg:flex-row gap-[30px] py-[20px] border-b border-b-gray-300">
        <div className="w-full">
          <p className="text-blue-700">Third Party Coverage</p>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between  text-lightGray mb-[20px]">
            <p className="text-[14px]">Death Bodily Injury</p>
            <Check />
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between  text-lightGray mb-[20px]">
            <p className="text-[14px]">Property damages</p>
            <Check />
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between  text-lightGray mb-[20px]">
            <p className="text-[14px]">Emergency Medical Expenses</p>
            <Cancel size={16} color="red" />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-[30px] py-[20px] border-b border-b-gray-300">
        <div className="w-full">
          <p className="text-blue-700">Value Added Features</p>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between  text-lightGray mb-[20px]">
            <p className="text-[14px]">Tracker</p>
            <Check />
          </div>
          <div className="flex items-center justify-between  text-lightGray mb-[20px]">
            <p className="text-[14px]">Replacement at Door steps</p>
            <Cancel size={16} color="red" />
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between  text-lightGray mb-[20px]">
            <p className="text-[14px]">Fire</p>
            <Check />
          </div>
          <div className="flex items-center justify-between  text-lightGray mb-[20px]">
            <p className="text-[14px]">Natural Calamities</p>
            <Check />
          </div>
          <div className="flex items-center justify-between  text-lightGray mb-[20px]">
            <p className="text-[14px]">Deductible</p>
            <Check />
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between  text-lightGray mb-[20px]">
            <p className="text-[14px]">Total Loss</p>
            <Check />
          </div>
          <div className="flex items-center justify-between  text-lightGray mb-[20px]">
            <p className="text-[14px]">Riots & Strike</p>
            <Check />
          </div>
          <div className="flex items-center justify-between  text-lightGray mb-[20px]">
            <p className="text-[14px]">No Claim Discount</p>
            <Check />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstTab;