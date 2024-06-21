import React from "react";

const SecondTab = () => {
  const data = [
    {
      months: "0 - 6 months",
      percentage: "5%",
    },
    {
      months: "7 - 12 months",
      percentage: "10%",
    },
    {
      months: "13 - 24 months",
      percentage: "20%",
    },
    {
      months: "25 - 36 months",
      percentage: "30%",
    },
    {
      months: "37 - 48 months",
      percentage: "40%",
    },
    {
      months: "49 - 60 months",
      percentage: "50%",
    },
    {
      months: "61 - 72 months",
      percentage: "60%",
    },
  ];
  return (
    <div className="bg-customBlue px-[50px] py-[50px] ">
      <div className="max-w-[800px] mx-auto">
        <p className="text-[12px] lg:[16px]">
          Following rates of depreciation shall be applied in the event of claim
          on replacement parts including glass and plastic items. Depreciation
          is from year of manufacture not year of registration.
        </p>
      </div>
      <div className=" border border-gray-300 max-w-[500px] mx-auto mt-[40px] px-[20px] py-[20px]">
        <div
          className="flex text-[15px] items-center justify-between font-semibold text-blue-700 border-b border-gray-300 
        pb-[15px]"
        >
          <p className="pl-0 lg:pl-[60px] text-[13px]">Year / Month</p>
          <p className="pr-0 lg:pr-[60px] text-[13px]">Percentage</p>
        </div>
        {data.map((item) => (
          <>
            <div
              className="flex items-center justify-between text-[15px]  text-lightGray border-b border-gray-300 
         py-[8px]"
            >
              <p className="pl-0 lg:pl-[60px] text-center text-[13px]">
                {item.months}
              </p>
              <p className="pr-0 lg:pr-[60px] text-center text-[13px]">
                {item.percentage}
              </p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default SecondTab;