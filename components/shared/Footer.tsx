import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.svg";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="flex flex-center wrapper flex-between flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image src={logo} alt="company-logo" width={128} height={38} />
        </Link>

        <p>&copy; 2024 Eventer. All rights reserved</p>
      </div>
    </footer>
  );
}
