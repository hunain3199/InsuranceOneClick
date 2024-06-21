"use client";
import React, { useEffect } from "react";
import DrawerLogo from "@public/assets/Logo/main-logo.svg";
import { Drawer, ModalClose } from "@mui/joy";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonIcon from "@mui/icons-material/Person";

import axios from "axios";

function SideBar() {
  const [isAdmin, setIsAdmin] = useState(false);
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  const openDrawer = () => {
    setOpen("success");
  };

  // Fetching-Data
  useEffect(() => {
    axios.get("/api/profile").then((res) => {
      setIsAdmin(res.data.admin);
      console.log("Data Fetch Format check:", res.data.admin);
    });
  }, []);

  const tabs = [
    { href: "/dashboard/partners", label: "Partners", icon: PeopleAltIcon },
    { href: "/dashboard/profile", label: "Profile", icon: PersonIcon },
    { href: "/", label: "Home", icon: PeopleAltIcon },
  ];

  const adminTabs = [
  
    { href: "/dashboard/profile", label: "Profile", icon: PersonIcon },
    { href: "/dashboard/policy", label: "Policy", icon: PersonIcon },
    { href: "/", label: "Home", icon: PeopleAltIcon },
  ];

  return (
    <>
   
 
      <div className="py-6 hidden md:flex flex-col justify-between px-10 h-screen bg-gradient-to-b from-blue-600 via-blue-500 to-cyan-400">
        <div className="flex-grow">
          <Image src={DrawerLogo} alt="logo_icon" className="w-20" />

          {isAdmin && (
            <ul className="mt-6 space-y-1">
              {tabs.map((tab) => (
                <li
                  key={tab.href}
                  className={`block px-3 py-2 text-sm font-medium font-sans ${
                    pathName === tab.href
                      ? "active text-sky-600 shrink-0 rounded-md bg-sky-100 "
                      : "text-white"
                  }`}
                >
                  <Link href={tab.href} className="items-center flex gap-1">
                    {/* Render the icon component directly */}
                    <tab.icon /> {tab.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {!isAdmin && <Link href={"/"}>Admin not</Link>}
        </div>

        <button>LogOut</button>
      </div>
  

      {/* Toggle-btn  */}
      <div className="block md:hidden">
        <button
          onClick={openDrawer}
          type="button"
          className="rounded bg-blue-400 p-2 text-white transition hover:text-gray-600/75 mx-5 mt-4"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Drawer  */}
        {open === "success" && (
          <>
            <Drawer open={open} onClose={() => setOpen(false)} size="sm">
              <ModalClose />
              <div className="flex h-screen flex-col justify-between border-e bg-blue-400 ">
                <div className="">
                  <Image
                    src={DrawerLogo}
                    alt="Logo"
                    width={100}
                    className="mx-2"
                  />

                  <ul className="mt-6 space-y-1 ">
                    <li>
                      <Link
                        href={"/"}
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 "
                      >
                        Home
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Drawer>
          </>
        )}
      </div>
    </>
  );
}

export default SideBar;

{
  /* Desktop View (Hidden on Mobile) */
}
{
  /* <ul className="mt-6 space-y-1">
          {tabs.map((tab) => (
            <li
              key={tab.href}
              className={`block px-3 py-2 text-sm font-medium font-sans ${
                pathName === tab.href
                  ? "active text-sky-600 shrink-0 rounded-md bg-sky-100 "
                  : "text-white"
              }`}
            >
              <Link href={tab.href} className="items-center flex gap-1">
                Render the icon component directly
                <tab.icon /> {tab.label}
              </Link>
            </li>
          ))}
        </ul> */
}
