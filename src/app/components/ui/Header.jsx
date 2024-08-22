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
import DrawerLogo from "@public/assets/Logo/main-logo.svg";
import Mail from "@public/assets/mail.svg";
import Phone from "@public/assets/phone.svg";
import { ArrowDropDown } from "@mui/icons-material";

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
      <header className=" bg-gradient-to-r from-[#06b6d4] to-[#3b82f6]">
        <div className="max-w-screen-xl px-4 py-[10px] m-auto sm:px-6 lg:px-6">
          <div className="flex items-center justify-between h-16">
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
                    className="text-white transition hover:text-slate-300 "
                  >
                    Home
                  </Link>

                  <Dropdown>
                    <MenuButton
                      variant="plain"
                      size="sm"
                      endDecorator={<ArrowDropDown />}
                      className="font-sans text-sm text-white hover:bg-transparent hover:text-slate-300"
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
                  </Dropdown>

                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="text-white transition hover:text-slate-300 "
                    >
                      {link.label}
                    </Link>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center sm:flex sm:gap-4">
                {/* {status === "authenticated" && ( */}
                {/* <> */}
                <div className="flex items-center gap-3">
                  <Link
                    href={"/profile"}
                    className="text-white transition hover:text-slate-300 whitespace-nowrap "
                  >
                    {/* Hello,{userName} */}
                  </Link>
                  <button
                    onClick={() => {
                      signOut();
                    }}
                    className="inline-block rounded-md text-sm bg-white px-5 py-2.5 font-medium  transition  hover:shadow-xl focus:outline-none focus:ring hover:bg-blue hover:text-blue "
                  >
                    Logout
                  </button>
                </div>
                {/* </> */}
                {/* )} */}

                {/* {status === "unauthenticated" && (
                  <> */}
                <Link
                  href={"/login"}
                  className="inline-block rounded-md text-sm bg-white px-5 py-2.5 font-medium  transition  hover:shadow-xl focus:outline-none focus:ring hover:bg-blue hover:text-blue "
                >
                  Partner&apos;s Signin
                </Link>

                <div className="hidden sm:flex">
                  <Link
                    href={"/register"}
                    className="inline-block rounded-md text-sm bg-white px-5 py-2.5 font-medium  transition  hover:shadow-xl focus:outline-none focus:ring hover:bg-blue hover:text-blue "
                  >
                    Partner&apos;s Register
                  </Link>
                </div>
                {/* </>
                )} */}
              </div>

              {/* Toggle-Btn  */}
              <div className="block md:hidden">
                <button
                  onClick={openDrawer}
                  type="button"
                  className="p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75 "
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
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
                    <Drawer open={open} onClose={() => setOpen(false)}>
                      <ModalClose />
                      <div className="flex flex-col justify-between h-screen bg-white border-e">
                        <div className="">
                          <Image
                            src={DrawerLogo}
                            alt="Logo"
                            width={100}
                            className="mx-5"
                          />

                          <ul className="px-6 mt-6 space-y-4 font-sans font-semibold text-black text-md">
                            <li>
                              <Link
                                href={"/"}
                                className="block hover:text-blue-500"
                              >
                                Home
                              </Link>
                            </li>

                            <li>
                              <details className="group [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex items-center cursor-pointer hover:text-blue-500">
                                  Takaful & Insurance <ArrowDropDown />
                                </summary>

                                {dropsLink.map((drop, index) => (
                                  <Link
                                    key={index}
                                    href={drop.href}
                                    className="px-4 "
                                  >
                                    <MenuItem>{drop.label}</MenuItem>
                                  </Link>
                                ))}
                              </details>
                            </li>

                            {navLinks.map((links,i) => (
                              <>
                              <div key={i}>
                                <Link
                                  
                                  href={links.href}
                                  
                                  className="block hover:text-blue-500"
                                >
                                  {links.label}
                                </Link>
                                </div>
                              </>
                            ))}
                          </ul>
                        </div>

                        <div className="sticky inset-x-0 bottom-0 mb-5 border-t border-gray-100">
                          {/* Email  */}
                          <div className="flex items-center ">
                            <Image
                              alt="mail_icon"
                              src={Mail}
                              className="text-blue-600 w-14"
                            />

                            <p className="font-sans text-xs font-semibold text-black">
                              Email Us <br />
                              Info@theoneclickdigital.com
                            </p>
                          </div>

                          {/* COntact  */}
                          <div className="flex items-center">
                            <Image
                              alt="phone_icon"
                              src={Phone}
                              className="text-blue-600 w-14 "
                            />

                            <p className="block font-sans text-xs font-semibold text-black">
                              Contact Us
                              <span className="block">+92 333 242 5588</span>
                              <span>+92 333 828 7111</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Drawer>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
