import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.svg";
import { Button } from "../ui/button";
import { SignedOut } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image src={logo} alt="Company-logo" />
        </Link>

        <div className="flex w-32 justify-end gap-3">
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Log In</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}
