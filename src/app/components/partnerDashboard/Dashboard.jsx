'use client'
import { useState } from "react";
import Modal from "../Reauseable/Modal";
import Image from "next/image";
import Logo from "@public/assets/Logo/logo-white.svg";

import DashboardCard from "../Reauseable/DashboardCard";
import Link from "next/link";

const Dashboard = () => {
  const [open, setIsOpen] = useState(false);
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
            {/* <ul className="px-[10px]">
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
            </ul> */}
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
        <div className="h-screen p-6 bg-gray">
          <div className="grid grid-cols-3 gap-3">
            main
          </div>

          
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
