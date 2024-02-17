import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import menuIcon from "@/public/icons/menu.svg";

export default function MobileNav() {
  return (
    <nav>
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image className="cursor-pointer" src={menuIcon} alt="menu icon" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          {/* <Image /> */}
        </SheetContent>
      </Sheet>
    </nav>
  );
}
