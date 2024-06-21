import React from "react";

const Details = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-0 text-center lg:flex-row lg:gap-6 mb-[50px]">
      <div className="flex flex-col w-full gap-1 p-0 mx-auto lg:p-4 ">
        <div className="flex items-start text-lightGray">
          <p>Bike Make :</p>
          <p className="ml-4 font-bold">Honda</p>
        </div>
        <div className="flex items-start text-lightGray">
          <p>Bike Cc :</p>
          <p className="ml-4 font-bold">125cc</p>
        </div>{" "}
      </div>
      {/* <div className="w-[1px] h-16 mx-auto bg-lightGray"></div> */}

      {/* Connector */}
      <div className="hidden lg:block bg-lightGray lg:w-[1px] lg:h-16"></div>
      <div className="block lg:hidden bg-gray-200 w-full h-[1px] mx-auto my-4"></div>
      <div className="flex flex-col w-full gap-1 p-0 mx-auto lg:p-4">
        {" "}
        <div class="flex items-center text-lightGray">
          <div class="pr-[16px] ">Modal year :</div>
          <div class="flex-1 h-0 border-t border-lightGray"></div>
          <div class="pl-[16px]">2021</div>{" "}
        </div>
        <div class="flex items-center text-lightGray">
          <div class="pr-[16px] ">Market Price :</div>
          <div class="flex-1 h-0 border-t border-lightGray"></div>
          <div class="pl-[16px]">230,000</div>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default Details;
