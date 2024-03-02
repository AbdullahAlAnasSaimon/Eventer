"use client";

import Image from "next/image";
import React, { useState } from "react";
import search from "@/public/icons/search.svg";
import { Input } from "../ui/input";

export default function Search() {
  const [query, setQuery] = useState("");

  return (
    <div className="flex-center min-h-[54px] w-full overflow-hidden rounded-lg bg-grey-50 px-4 py-2">
      <Image src={search} alt="search" width={24} height={24} />
      <Input
        type="text"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
        className="p-regular-16 border-0 bg-grey-50 outline-offset-0 placeholder:text-grey-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  );
}
