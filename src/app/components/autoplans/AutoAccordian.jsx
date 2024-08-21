"use client";

import React, { useState } from "react";
import { Add } from "@/app/components/Reauseable/Icons";

import Form from "../plans/Accordian/Form";
import Call from "../plans/Call";
import Link from "next/link";
import Image from "next/image";
import Caraosal from "../ui/Caraosal";

const Accordian = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [btnOpen, setBtnOpen] = useState(false);

  const toggleBtn = () => {
    isOpen && setIsOpen(false);
    setBtnOpen(!btnOpen);
  };
  const toggleDiv = () => {
    btnOpen && setBtnOpen(false);
    setIsOpen(!isOpen);
  };
  return (
    <div className="mb-[80px] ">
      <div className="max-w-[900px] bg-white mx-auto shadow-lg  mb-[0px]">
        <div className="">
          <div className="flex flex-col lg:flex-row ">
            <div className="flex flex-col items-center justify-between p-0 bg-white border-r border-gray-300 lg:p-4">
              <div className="w-[100px] h-[90px]">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-8cxBhvKabO7xi7cUweeN70DSBURQsVk-HnCSBOFeRg&s"
                  alt=""
                  width={100}
                  height={90}
                  className="object-contain w-full h-full"
                />
              </div>
              <p className="text-center text-[14px] font-bold text-lightGray">
                Takaful Total <br /> Loss and Theft <br /> Only
              </p>
            </div>
            <div className="relative flex-1 mt-[40px] ">
              <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start  lg:mb-[80px] mb-[60px] md:mb-[80px] border-t lg:border-t-0 border-t-gray-300 pt-[10px] md:pt-[30px] lg:pt-[0px]">
                <div className="flex-1 ml-2 ">
                  <ul className="flex mb-[61px] md:mb-0 flex-col items-start justify-start gap-2 pt-3 lg:items-center lg:justify-start lg:gap-8 lg:flex-row">
                    <li className="text-gray-500 ">
                      <p>
                        Rate
                        <span className="text-[15px] font-semibold text-black ml-2">
                          1.5%
                        </span>
                      </p>
                    </li>
                    <li className="text-gray-500 ">
                      <p>
                        Installment Plan
                        <span className="text-[15px] font-semibold text-black ml-2">
                          Rs. 6250 / month
                        </span>
                      </p>
                    </li>
                    <li className="text-gray-500 ">
                      <p>
                        Total
                        <span className="text-[15px] font-semibold text-black ml-2">
                          Rs 37,500
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="md:mr-0 mr-[4px]  mt-[16px] md:mt-0 md:ml-[0px] absolute bottom-11   lg:right-0 lg:mr-2 ">
                  <div className="mt-3 ">
                    <button
                      className="lg:px-4 lg:py-2 px-[8px] py-[5px] mr-3 lg:mr-5 text-blue-600 border border-blue-600 rounded-md"
                      onClick={toggleBtn}
                    >
                      Enquire Now
                    </button>
                    <Link href="/insurance/auto/plans/buy">
                      <button className="lg:px-4 lg:py-2 px-[8px] py-[5px] text-white bg-blue rounded-md">
                        Buy
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/insurance/auto/plans/policy">
                <div className="absolute bottom-0 w-full p-1 font-semibold text-center text-white cursor-pointer bg-blue">
                  <div className="flex items-center justify-center p-1">
                    <Add />
                    <button className="text-center ">More Details</button>{" "}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <>
          {btnOpen && (
            <p className="ml-4">
              <Form />
            </p>
          )}
          {/* {isOpen && <InsuranceDetails />} */}
        </>
      </div>
      <Call />
     
      
    </div>
  );
};

export default Accordian;
