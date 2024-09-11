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
    { href: "/health", label: "Health" },
    { href: "/family", label: "Family" },
    { href: "/travel", label: "Travel" },
    { href: "/life", label: "Life" },
    { href: "/general", label: "General" },
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
