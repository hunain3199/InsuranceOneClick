import React from "react";

const DashboardCard = ({ partnerCnicName,
  partnerFatherName,
  partnerMobile,
  partnerEmail,
  partnerDob,
  partnerStatus,
  partnerCity,
  partnerCnicNumber,
  partnerCnicExpiryDate,
  partnerHomeAddress,
  partnerBloodCnicName,
  partnerBloodCnicNumber,
  partnerBloodRelation,
  partnerBankAccount }) => {
  return (
    <div className="bg-white py-[10px] px-[10px] shadow-md rounded my-[15px] ">
      <div className="grid grid-cols-1 gap-[4px] p-2 ">
        <div className="flex items-center text-[14px] mb-[10px] justify-center border-b-2 border-gray pb-[10px]">
          <p>
            <span className="font-bold"> Name: </span> {partnerCnicName}
          </p>
        </div>
        <div className="bg-[#f3f4f6] text-[14px] p-[10px] rounded-md">
          <p>
            <span className="font-bold"> Father Name: </span>{partnerFatherName}
          </p>
        </div>
        <div className="bg-[#f3f4f6] text-[14px] p-[10px] rounded-md">
          <p>
            <span className="font-bold"> Mobile: </span>{partnerMobile}
          </p>
        </div>
        <div className="bg-[#f3f4f6] text-[14px] p-[10px] rounded-md">
          <p>
            <span className="font-bold"> Email: </span>{partnerEmail}
          </p>
        </div>
        <div className="bg-[#f3f4f6] text-[14px] p-[10px] rounded-md">
          <p>
            <span className="font-bold"> Dob: </span>{partnerDob}
          </p>
        </div>
        <div className="bg-[#f3f4f6] text-[14px] p-[10px] rounded-md">
          <p>
            <span className="font-bold"> Status: </span>{partnerStatus}
          </p>
        </div>
        <div className="bg-[#f3f4f6] text-[14px] p-[10px] rounded-md">
          <p>
            <span className="font-bold"> City: </span>{partnerCity}
          </p>
        </div>
        <div className="bg-[#f3f4f6] text-[14px] p-[10px] rounded-md">
          <p>
            <span className="font-bold"> Cnic Number: </span>{partnerCnicNumber}
          </p>
        </div>
        <div className="bg-[#f3f4f6] text-[14px] p-[10px] rounded-md">
          <p>
            <span className="font-bold"> Cnic Expiry Date: </span>{partnerCnicExpiryDate}
          </p>
        </div>
        <div className="bg-[#f3f4f6] text-[14px] p-[10px] rounded-md">
          <p>
            <span className="font-bold"> Home Address: </span>{partnerHomeAddress}
          </p>
        </div>
        <div className="bg-[#f3f4f6] text-[14px] p-[10px] rounded-md">
          <p>
            <span className="font-bold"> Blood Cnic Name: </span>{partnerBloodCnicName}
          </p>
        </div>
        <div className="bg-[#f3f4f6] text-[14px] p-[10px] rounded-md">
          <p>
            <span className="font-bold"> Blood Cnic Number: </span>{partnerBloodCnicNumber}
          </p>
        </div>
        <div className="bg-[#f3f4f6] text-[14px] p-[10px] rounded-md">
          <p>
            <span className="font-bold"> Blood Relation: </span>{partnerBloodRelation}
          </p>
        </div>
        <div className="bg-[#f3f4f6] text-[14px] p-[10px] rounded-md">
          <p>
            <span className="font-bold"> Bank Account: </span>{partnerBankAccount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
