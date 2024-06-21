import React from "react";
import { Telephone } from "../Reauseable/Icons";

const Call = () => {
  return (
    <div className="max-w-[400px] py-[16px] rounded-md border border-gray-500 mx-auto shadow-lg  mt-[80px] ">
      <div className="flex items-center justify-center">
        <Telephone />
        <span className="ml-[15px] mr-[5px]">Need Help?</span>
        <span className="text-blue-600">Call (+92 333 242 5588)</span>
      </div>
    </div>
  );
};

export default Call;
