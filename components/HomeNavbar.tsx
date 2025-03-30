"use client"

import { Button } from "@/components/ui/button";
import {
  Sheet, SheetClose,
  SheetContent, SheetHeader,
  SheetTrigger
} from "@/components/ui/sheet";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem, NavigationMenuLink, NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { DialogTitle } from "@radix-ui/react-dialog";

type menuItem = {
  title: string;
  href: string;
  description: string;
}

const brandName = "Corrality";

const mobileNavMenuItems: menuItem[] = [
  {
    title: "Home",
    href: "/",
    description: "Home page"
  },
  {
    title: "Services",
    href: "/services",
    description: "Services"
  },
  {
    title: "Portfolio",
    href: "/portfolio",
    description: "Portfolio"
  },
  {
    title: "Team",
    href: "/team",
    description: "Team"
  }
]


export default function HomeNavbar() {
  
  return (
    <div>
      <div id={"mobile-nav"} className={"lg:hidden"}>{MobileNav}</div>
      <div id={"desktop-nav"} className={"hidden lg:block"}>{DesktopNav}</div>
    </div>
  )
}

const menuClosedIcon =  (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
)


const MobileNav = (
  <>
  <div className={"grid grid-cols-12 w-full h-12"}>
    <div className={"col-span-2 justify-center py-2 flex"}>
      <Link href={"/"} prefetch={true}>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {brandName}
      </h3>
      </Link>
    </div>
    <div className={"col-span-4"}></div>
    <div className={"col-span-4"}></div>
    <div className={"col-span-2 justify-end flex pr-4 py-2"}>
      <Sheet>
        <SheetTrigger>
          {menuClosedIcon}
        </SheetTrigger>
        
        <SheetContent>
          <DialogTitle hidden={true}>Corrality</DialogTitle>
          <SheetHeader>Corrality <SheetClose></SheetClose></SheetHeader>
          {
            mobileNavMenuItems.map((item) => (
              <Link key={item.title} href={item.href} prefetch={true}>{item.title}</Link>
            ))
          }
          
        </SheetContent>
        
      </Sheet>
      
    </div>
  </div>
    </>
)

const DesktopNav = (
  <>
    <div className={"grid grid-cols-12"}>
      <div className={"col-span-1 justify-center py-2 flex"}>
        <Link href={"/"} prefetch={true}>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {brandName}
          </h3>
        </Link>
      </div>
      <div className={"col-span-10  flex justify-end items-center py-2"}>
        <NavigationMenu>
          <NavigationMenuList>
            {
              mobileNavMenuItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <Link href={item.href} legacyBehavior passHref prefetch={true}>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {item.title}
                      </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))
            }
          </NavigationMenuList>
        </NavigationMenu>
        
      </div>
      <div className={"col-span-1 flex w-full h-full items-center justify-center py-2"}>
        <Button asChild variant={"outline"} size={"default"}>
          <Link href={"/contact"} prefetch={true}>Contact us</Link>
        </Button>
      </div>
    </div>
  </>
)