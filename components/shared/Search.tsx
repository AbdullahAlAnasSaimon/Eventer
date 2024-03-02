"use client";

import Image from "next/image";
import React, { useState } from "react";
import search from "@/public/icons/search.svg";

export default function Search() {
  const [query, setQuery] = useState("");

  return (
    <div className="flex-center min-h-[54px] w-full overflow-hidden rounded-lg bg-grey-50 px-4 py-2">
      <Image src={search} alt="search" width={24} height={24} />
    </div>
  );
}
