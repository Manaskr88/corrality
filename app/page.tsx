"use client";

import HomeNavbar from "@/components/home/HomeNavbar";
import HeroPage from "@/components/home/HeroPage";


export default function Page() {

  return (
    <>
      <HomeNavbar />
      <div className="relative">
        <HeroPage />
      </div>
    </>
  );
}