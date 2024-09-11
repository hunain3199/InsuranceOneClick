"use client";
// import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import "@/app/globals.css";
import {
  Drawer,
  Dropdown,
  Menu,
  MenuButton,
  MenuItem,
  ModalClose,
} from "@mui/joy";
import Navbar from "./Navbar";
import Image from "next/image";
import Logo from "@public/assets/Logo/logo-white.svg";

import { ArrowDropDown } from "@mui/icons-material";
import { ToggleNavbar } from "../Reauseable/toggleMenu";
import DropdownNavbar from "../Reauseable/dropDown";

function Header() {
  const [open, setOpen] = useState(false);
  // const session = useSession();
  // const status = session?.status;
  // console.log(status);
  // const userData = session.data?.user;
  // let userName = userData?.name || userData?.email;
  // if (userName && userName.includes(" ")) {
  //   userName = userName.split(" ")[0];
  // } else if (userName?.includes("@gmail.com")) {
  //   userName = userName.replace("@gmail.com", "");
  // }

  const openDrawer = () => {
    setOpen("success");
  };

  const dropsLink = [
    { href: "/insurance/auto", label: "Auto" },
    { href: "/insurance/bike", label: "Bike" },
    { href: "/insurance/commercial", label: "Commercial" },
    { href: "/health", label: "Health" },
    { href: "/family", label: "Family" },
    { href: "/travel", label: "Travel" },
    { href: "/life", label: "Life" },
    { href: "/general", label: "General" },
  ];
  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/faqs", label: "FAQs" },
  ];
  return (
    <>
      <Navbar />
      <header className=" bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] ">
        <div className="flex items-center justify-between max-w-screen-xl m-h-16  px-4 py-2 mx-auto sm:px-6 lg:px-6">
          {/* <div className="flex items-center justify-between h-16"> */}
          <div className=" md:items-center md:gap-12 md:hidden">
            <Link className="block text-teal-600" href={"/"}>
              <Image src={Logo} alt="logo_icon" width={75} />
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <Link
                  href={"/"}
                  className="text-white transition hover:text-lightGray hover:shadow-xl "
                >
                  Home
                </Link>
                <DropdownNavbar/>

                {/* <Dropdown>
                  <MenuButton
                    variant="plain"
                    size="sm"
                    endDecorator={<ArrowDropDown />}
                    className="font-sans text-sm text-white hover:bg-transparent hover:text-lightGray hover:shadow-xl"
                  >
                    Takaful & Insurance
                  </MenuButton>
                  <Menu size="sm">
                    {dropsLink.map((drop) => (
                      <>
                        <Link href={drop.href} className="px-4 ">
                          <MenuItem>{drop.label}</MenuItem>
                        </Link>
                      </>
                    ))}
                  </Menu>
                </Dropdown> */}

                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-white transition hover:text-lightGray hover:shadow-xl"
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex  items-center gap-4">
            <div className="flex items-center sm:flex sm:gap-4">
              {/* {status === "authenticated" && ( */}
              {/* <> */}
              <div className="hidden lg:flex items-center gap-3">
                <Link
                  href={"/profile"}
                  className="text-white transition hover:text-slate-300 whitespace-nowrap "
                >
                  {/* Hello,{userName} */}
                </Link>
              </div>

              <div className="hidden sm:flex">
                {true ? (
                  <>
                    <div className="flex gap-2">
                      <Link
                        href={"/register"}
                        className="inline-block rounded-md text-xs line-clamp-1 lg:text-sm bg-white px-3 py-1.5 duration-200 lg:px-4 lg:py-2 font-medium  transition   focus:outline-none focus:ring hover:bg-lightBlue hover:text-black hover:outline-1 "
                      >
                        Partner&apos;s Register
                      </Link>
                      <Link
                        href={"/login"}
                        className="inline-block rounded-md text-xs line-clamp-1 lg:text-sm bg-white px-3 py-1.5 duration-200 lg:px-4 lg:py-2 font-medium  transition   focus:outline-none focus:ring hover:bg-lightBlue hover:text-black hover:outline-1 "
                      >
                        Partner&apos;s Signin
                      </Link>
                    </div>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      signOut();
                    }}
                    className="inline-block rounded-md text-xs line-clamp-1 lg:text-sm bg-white px-3 py-1.5 duration-200 lg:px-4 lg:py-2 font-medium  transition   focus:outline-none focus:ring hover:bg-lightBlue hover:text-black hover:outline-1 "
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="block md:hidden">
            <ToggleNavbar />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
