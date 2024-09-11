"use client";
import Image from "next/image";
import DrawerLogo from "@public/assets/Logo/main-logo.svg";
import Link from "next/link";
import {Menu} from "lucide-react"
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
    <div className="grid grid-cols-2 gap-2">
      <Sheet open={isOpen} onOpenChange={setIsOpen} >
        <SheetTrigger><Menu color="white" /></SheetTrigger>
        <SheetContent>
          <div className="flex flex-col justify-between h-screen bg-white border-e">
            <div className="">
              <Image onClick={closeSheet}  src={DrawerLogo} alt="Logo" width={100} className="mx-5" />

              <ul className="px-6 mt-6 space-y-4 font-sans font-semibold text-black text-md">
                <li>
                  <Link onClick={closeSheet} href={"/"} className="block hover:text-blue-500">
                    Home
                  </Link>
                </li>
                <DropdownNavbar/>

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
