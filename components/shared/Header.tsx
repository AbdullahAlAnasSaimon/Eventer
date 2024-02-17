import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.svg";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image src={logo} alt="Company-logo" />
        </Link>

        <div className="flex w-32 justify-end gap-3"></div>
      </div>
    </header>
  );
}
