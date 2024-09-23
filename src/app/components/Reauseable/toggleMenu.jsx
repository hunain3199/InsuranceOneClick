"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import DrawerLogo from "@public/assets/Logo/main-logo.svg";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../components/ui/sheet";
import Mail from "@public/assets/mail.svg";
import Phone from "@public/assets/phone.svg";
import DropdownNavbar from "./dropDown";

export function ToggleNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const openSheet = () => {
    setIsOpen(true);
  };

  const closeSheet = () => {
    setIsOpen(false);
  };

  const dropsLink = [
    { href: "/insurance/auto", label: "Auto" },
    { href: "/insurance/bike", label: "Bike" },
    { href: "/insurance/commercial", label: "Commercial" },
    { href: "/insurance/health", label: "Health" },
    { href: "/insurance/family", label: "Family" },
    { href: "/insurance/travel", label: "Travel" },
    { href: "/insurance/life", label: "Life" },
    { href: "/insurance/general", label: "General" },
  ];
  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/faqs", label: "FAQs" },
  ];
  return (
    <div className="grid grid-cols-2 gap-2">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Menu color="white" />
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col justify-between h-screen bg-white border-e">
            <div className="">
              <Image
                onClick={closeSheet}
                src={DrawerLogo}
                alt="Logo"
                width={100}
                className="mx-5"
              />

              <ul className="px-6 mt-6 space-y-4 font-sans font-semibold text-black text-md">
                <li>
                  <Link
                    onClick={closeSheet}
                    href={"/"}
                    className="block hover:text-blue-500"
                  >
                    Home
                  </Link>
                </li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex gap-2 lg:text-white text-black">
                    Takaful & Insurance <ChevronDown />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel></DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    {dropsLink.map((drop, i) => (
                      <>
                        <Link href={drop.href} key={i} onClick={closeSheet}>
                          <DropdownMenuItem>{drop.label}</DropdownMenuItem>
                        </Link>
                      </>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                {navLinks.map((links, i) => (
                  <>
                    <div key={i}>
                      <Link
                        href={links.href}
                        className="block hover:text-blue-500"
                        onClick={closeSheet}
                      >
                        {links.label}
                      </Link>
                    </div>
                  </>
                ))}
              </ul>
              <div className="flex flex-col py-7">
                {true ? (
                  <>
                    <div className="flex flex-col gap-2 justify-center">
                      <Link
                        onClick={closeSheet}
                        href={"/register"}
                        className="inline-block rounded-md text-center text-xs line-clamp-1 lg:text-sm bg-blue px-3 py-1.5 duration-200 lg:px-4 lg:py-2 font-medium  transition   focus:outline-none focus:ring hover:bg-blue/50 text-white hover:text-black hover:outline-1 "
                      >
                        Partner&apos;s Register
                      </Link>
                      <Link
                        onClick={closeSheet}
                        href={"/login"}
                        className="inline-block rounded-md text-center text-xs line-clamp-1 lg:text-sm  bg-blue px-3 py-1.5 duration-200 lg:px-4 lg:py-2 font-medium  transition   focus:outline-none focus:ring hover:bg-lightBlue text-white hover:text-black hover:outline-1 "
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
                    className="inline-block rounded-md text-xs line-clamp-1 lg:text-sm  bg-blue px-3 py-1.5 duration-200 lg:px-4 lg:py-2 font-medium  transition   focus:outline-none focus:ring hover:bg-lightBlue text-white hover:text-black hover:outline-1 "
                  >
                    Logout
                  </button>
                )}
              </div>
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
        </SheetContent>
      </Sheet>
    </div>
  );
}
