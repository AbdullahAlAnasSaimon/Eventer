"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import search from "@/public/icons/search.svg";
import { Input } from "../ui/input";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

export default function Search() {
  const [query, setQuery] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = "";
      if (query) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: query,
        });
      } else {
        newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: ["query"],
        });
      }

      router.push(newUrl, { scroll: false });
    }, 300);
  }, [query]);

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
