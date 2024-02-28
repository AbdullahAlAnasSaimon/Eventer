import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.svg";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="w-11/12 mx-auto">
        <div className="wrapper flex items-center justify-between">
          <Link href="/" className="w-36">
            <Image src={logo} alt="Company-logo" />
          </Link>

          <SignedIn>
            <nav className="md:flex-between hidden w-full max-w-xs">
              <NavItems />
            </nav>
          </SignedIn>

          <div className="flex w-auto justify-end gap-3">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
              <MobileNav />
            </SignedIn>
            <SignedOut>
              <Button asChild className="rounded-sm" size="lg">
                <Link href="/sign-in">Log In</Link>
              </Button>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
}
