"use client";
// Tab.js
import React, { useState } from "react";
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";
import ThirdTab from "./ThirdTab";
import FourthTab from "./FourthTab";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "Coverage", content: <FirstTab /> },
    { title: "Depreciation Policy", content: <SecondTab /> },
    { title: "Cancellation Policy", content: <ThirdTab /> },
    { title: "Claim Process", content: <FourthTab /> },
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row  justify-between mb-4 bg-customBlue px-[50px] ">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`mr-4  px-4 w-full font-normal text-[14px] lg:text-[18px]  py-[16px] ${
              activeTab === index
                ? "text-blue-700  border-b-[3px] border-blue-700"
                : " text-gray-500"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="px-[15px] lg:px-[50px] mb-[80px]">
        {tabs.map((tab, index) =>
          activeTab === index ? <div key={index}>{tab.content}</div> : null
        )}
      </div>
    </div>
  );
};

export default Tab;