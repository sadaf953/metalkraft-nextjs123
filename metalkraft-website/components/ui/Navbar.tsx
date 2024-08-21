'use client';   
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";


function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
        <Menu setActive={setActive}>

            <MenuItem setActive={setActive} active={active} item="Services">
                <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/cnc-turning">CNC Turning</HoveredLink>
                    <HoveredLink href="/cnc-milling">CNC milling</HoveredLink>
                    <HoveredLink href="/finishing">Surface Finishing</HoveredLink>
                </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Resources">
                <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                    <ProductItem
                    title="What is CNC machining?"
                    href="https://algochurn.com"
                    src=""
                    description="How do CNC machines make complex and precise parts?"
                    />
                    <ProductItem
                    title="Design for CNC machining"
                    href="https://tailwindmasterkit.com"
                    src=""
                    description="How do you design parts for better CNC precision?"
                    />
                    <ProductItem
                    title="Materials for manufacturing"
                    href="https://gomoonbeam.com"
                    src=""
                    description="What are the custom parts made of?"
                    />
                    <ProductItem
                    title="Surafce fininishing"
                    href="https://userogue.com"
                    src=""
                    description="How to get the most out of manufacturing process?"
                    />
                    <button>More resources </button>     
                </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Company">
                <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/about-us">About us</HoveredLink>
                    <HoveredLink href="/contact-us">Contact us</HoveredLink>
                    <HoveredLink href="/partnership">Become a partner</HoveredLink>     
                </div>
            </MenuItem>
        </Menu>
        </div>
  )
}

export default Navbar