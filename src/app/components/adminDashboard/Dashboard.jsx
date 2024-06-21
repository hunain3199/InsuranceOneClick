import { useContext, useEffect, useState } from "react";
import Modal from "../Reauseable/Modal";
import SalesForm from "./SalesForm";
import Image from "next/image";
import Logo from "@public/assets/Logo/logo-white.svg";
import axios from "axios";

import DashboardCard from "../Reauseable/DashboardCard";
import Link from "next/link";
import { AuthContext } from "@/app/store/Context";

const Dashboard = () => {
  const { token } = useContext(AuthContext);
  const [partnerData,setPartnerData] = useState([])



  const [open, setIsOpen] = useState(false);
  useEffect(()=>{
    const fetchpartner = async (e) => {
      
      try {
        const response = await axios.get(
          "https://oneclick-server.onrender.com/api/v1/admin/partnersData",
          {
            headers:{
              Authorization:`Bearer ${token}`
            }
          }
          
        );
      setPartnerData(response.data.partners)
        console.log("this is my register response", response.data);
        if (!response.data.success) {
         
          console.log("User registration error:", response.data.message);
          return;
        }
  
        
  
       
        // localStorage.setItem("token", response.data.token);
        
      } catch (error) {
        console.error("Error in registering the user:", error);
       
      }
    };
    fetchpartner()
  })
  return (
    <div className="flex h-screen ">
      <aside className="flex-shrink-0 w-64 border-r bg-blue border-gray">
        <div className="flex flex-col justify-between h-full">
          <div>
            <Link className="block text-teal-600" href={"/"}>
              <div className="w-[100px] h-[100px] ">
                <Image src={Logo} alt="logo_icon" width={100} />
              </div>
            </Link>
            <ul className="px-[10px]">
              <li>
                <a
                  href="#"
                  className="block mb-[8px] px-4 py-2 text-blue font-medium hover:bg-gray-700 bg-[#f0f9ff] rounded"
                >
                  Admins
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mb-[8px] block px-4 py-2 text-blue font-medium hover:bg-gray-700 bg-[#f0f9ff] rounded"
                >
                  Partners Portal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mb-[8px] block px-4 py-2 text-blue font-medium hover:bg-gray-700 bg-[#f0f9ff] rounded"
                >
                  Customer Data
                </a>
              </li>
            </ul>
          </div>
          {/* Sidebar Footer */}
          {/* <footer className="p-4 text-sm text-center text-gray-400 bg-gray-700">
            Dashboard Footer
          </footer> */}
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto ">
        <header className="px-6 py-4 ">
          <div>
            <div className="flex items-center justify-end">
              <button
                onClick={() => setIsOpen(!open)}
                className="text-white rounded bg-blue px-[20px] py-[10px]"
              >
                Create Sale Invoice
              </button>
            </div>
          </div>
        </header>
        <div className="p-6 bg-gray ">
        <div className="grid grid-cols-3 gap-3">
            {partnerData.map((data, i) => (
              <DashboardCard
                key={data._id}
                partnerCnicName={data.partner_cnic_name}
                partnerFatherName={data.partner_father_name}
                partnerMobile={data.partner_mobile}
                partnerEmail={data.partner_email}
                partnerDob={data.partner_dob}
                partnerStatus={data.partner_status}
                partnerCity={data.partner_city}
                partnerCnicNumber={data.partner_cnic_number}
                partnerCnicExpiryDate={data.partner_cnic_expiry_date}
                partnerHomeAddress={data.partner_home_address}
                partnerBloodCnicName={data.partner_blood_cnic_name}
                partnerBloodCnicNumber={data.partner_blood_cnic_number}
                partnerBloodRelation={data.partner_blood_relation}
                partnerBankAccount={data.partner_bank_account}
              />
            ))}
          </div>

          <Modal isOpen={open} onClose={() => setIsOpen(false)}>
            <SalesForm token={token} />
          </Modal>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
