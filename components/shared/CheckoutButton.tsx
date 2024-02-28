"use client";

import { IEvent } from "@/lib/database/models/event.model";
import { useUser } from "@clerk/nextjs";
import React from "react";
import { Button } from "../ui/button";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Link from "next/link";
import Checkout from "./Checkout";

export default function CheckoutButton({ event }: { event: IEvent }) {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;
  const hasEventFinished = new Date(event.endDateTime) < new Date();

  return (
    <div className="flex items-center gap-3">
      {hasEventFinished ? (
        <p className="p-2 text-red-400">
          Sorry, tickets are no longer available
        </p>
      ) : (
        <>
          <SignedOut>
            <Link href="/sign-in">
              <Button>Get Tickets</Button>
            </Link>
          </SignedOut>

          <SignedIn>
            <Checkout event={event} userId={userId} />
          </SignedIn>
        </>
      )}
    </div>
  );
}
