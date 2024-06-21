import React from "react";
import { PreviousIcon } from "../../Reauseable/Icons";
import Link from "next/link";
import Image from "next/image";
const Details = () => {
  return (
    <>
      <div className="bg-gray-800 lg:h-screen">
        <div className="flex items-center justify-between text-white  bg-gray-800 gap-[40px] px-[20px] pt-[30px]">
          <div>
            <p className="text-[22px] font-semibold">Alto X</p>
            <p>2020 PKR 2,500,000</p>
          </div>
          <div>
            <Link href="/insurance/auto/plans">
              <button className="flex items-center gap-[3px] rounded justify-start p-[4px] border border-gray-400 text-[12px]">
                <PreviousIcon size={11} color="#fff" />
                Back to plans
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-[10px] p-[12px]  bg-white m-4">
          <div className="flex items-center justify-center mb-[20px]">
            <div className="w-[100px] h-[50px]  ">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5c87d94634c4e231019d9da7/5de82b94-4415-4fc8-b20d-6a43c9a90617/logo-premierinsurancegroup-color.png"
                className="w-full h-full"
                width={100}
                height={50}
                alt=""
              />
            </div>
          </div>
          <div className="text-center text-[14px] font-semibold mb-[20px]">
            Private Vehicle Comprehensive
          </div>
          <div className="flex items-center justify-between text-lightGray">
            <div>Rate</div>
            <div className="font-semibold">1.7%</div>
          </div>
          <div className="flex items-center justify-between text-lightGray">
            <div>Amount</div>
            <div className="font-semibold">Rs. 42,500</div>
          </div>{" "}
          <div className="flex items-center justify-between text-lightGray">
            <div>Total</div>
            <div className="font-semibold">Rs 42,500</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;