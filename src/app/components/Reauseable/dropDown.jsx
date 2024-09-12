import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import{
    ChevronDown 
}from 'lucide-react'
import React from "react";
import Link from "next/link";

const DropdownNavbar = () => {
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
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-2 lg:text-white text-black">Takaful & Insurance <ChevronDown /></DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel></DropdownMenuLabel>
        <DropdownMenuSeparator />

        {dropsLink.map((drop,i) => (
          <>
            <Link href={drop.href}  key={i} >
              <DropdownMenuItem>{drop.label}</DropdownMenuItem>
            </Link>
          </>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownNavbar;
