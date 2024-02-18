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
import logo from "@/public/images/logo.svg";
import { Separator } from "../ui/separator";
import NavItems from "./NavItems";

export default function MobileNav() {
  return (
    <nav className="lg:hidden md:visible">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            className="cursor-pointer"
            src={menuIcon}
            alt="menu icon"
            width={24}
            height={24}
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <Image src={logo} alt="company-logo" width={128} height={38} />
          <Separator className="border border-gray-50" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
}
