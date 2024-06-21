import React from "react";

const ThirdTab = () => {
  return (
    <div className="bg-customBlue px-[50px] py-[50px] ">
      <div className="max-w-[800px] mx-auto">
        <p className="text-[12px] lg:[16px]">
          If no claim is raised before cancellation request, the refund of
          premium is to be calculated after charging premium in accordance with
          following
        </p>
      </div>
      <div className=" border border-gray-300 max-w-[500px] mx-auto mt-[40px] lg:px-[20px] lg:py-[20px]">
        <div
          className="flex text-[15px] items-center justify-center flex-col md:flex-row md:justify-between font-semibold text-blue-700 border-b border-gray-300 
        md:py-[15px] md:px-[15px] p-2 lg:px-0"
        >
          <p className="p-0 lg:pl-[60px] text-[13px]">Months </p>
          <p className="p-0 lg:pr-[60px] text-[13px]">
            Refund Percentage of Premium
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThirdTab;