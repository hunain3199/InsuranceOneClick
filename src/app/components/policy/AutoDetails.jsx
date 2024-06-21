"use client";
import React, { useState } from "react";
import { PreviousIcon } from "../Reauseable/Icons";
import Link from "next/link";
import Modal from "../Reauseable/Modal";
import Form from "../../components/policy/ModalForm";
import Image from "next/image";

const AutoDetails = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="px-[50px] bg-[#e5f2fc] py-[30px]">
      <div className="mb-[10px]">
        <Link href="/insurance/auto/plans">
          <button className="flex items-center gap-[3px] rounded justify-start p-[4px] border border-[black] text-[12px]">
            <PreviousIcon size={11} color="red" />
            Back to plans
          </button>
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row  gap-[30px]">
        <div className="flex flex-row items-center justify-center lg:flex-col gap-[10px] lg:gap-0">
          <div className="p-4 bg-white border border-gray-300 rounded">
            <div className="w-[120px]">
              <Image
                src="https://d1e6cjojnyo6nm.cloudfront.net/webp_images/product_new/ubl-insurance-logo.png"
                className="object-contain w-full"
                height="40"
                width="120"
                alt=""
              />
            </div>
          </div>
          <div>
            <p className="text-center text-[12px] pt-[6px]">UBL Insurers</p>

            <p className="text-center text-[14px] font-semibold">
              Motor Comprehensive
            </p>
          </div>
        </div>

        <div className="w-full ">
          <ul className="flex justify-between ">
            <li className="text-gray-500 text-[12px] md:text-[14px]">
              <p>
                Rate
                <br />
                <span className="text-[15px] font-semibold text-black ">
                  1.5%
                </span>
              </p>
            </li>
            <li className="text-gray-500 text-[12px] md:text-[14px]">
              <p>
                Installment Plan
                <br />
                <span className="text-[15px] font-semibold text-black ">
                  Rs. 6250 / month
                </span>
              </p>
            </li>
            <li className="text-gray-500 text-[12px] md:text-[14px]">
              <p>
                Total
                <br />
                <span className="text-[15px] font-semibold text-black ">
                  Rs 37,500
                </span>
              </p>
            </li>
          </ul>
        </div>
        <div className="lg:w-[55%] w-full bg-white border border-gray-300  rounded p-4">
          <p className="text-yellow text-[20px] md:text-[25px] lg:text-[30px] font-semibold text-center">
            Rs. 41,250
          </p>
          <p className="text-center text-[13px] md:text-[16px]">Total Amount</p>
          <div className="flex flex-col md:flex-row items-center mt-3   lg:gap-[30px] md:gap-[20px] gap-[10px]">
            <button
              className="text-blue border border-blue rounded-md  px-[8px] py-[5px] w-full"
              onClick={() => setModalOpen(true)}
            >
              Enquire Now
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
              <Form />
            </Modal>
            <Link href="/insurance/auto/plans/buy">
              <button
                className=" px-[8px] py-[5px] text-white bg-blue rounded-md
            w-full"
              >
                Buy
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoDetails;
