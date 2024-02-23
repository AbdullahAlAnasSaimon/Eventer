import { IEvent } from "@/lib/database/models/event.model";
import Link from "next/link";
import React from "react";

type CardProps = {
  event: IEvent;
  hasOrderLink?: boolean;
  hidePrice?: boolean;
};

export default function Card({ event, hasOrderLink, hidePrice }: CardProps) {
  return (
    <div className="group relative flex main-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
      <Link
        href={`/events/${event._id}`}
        style={{ backgroundImage: `url:(${event.imageUrl})` }}
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
      />

      <Link
        href={`/events/${event._id}`}
        className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4"
      >
        <div className="flex gap-2">
          <span className="p-semibold-14 w-min rounded-lg bg-green-100 px-4 py-1 text-green-60">
            {event.isFree ? "Free" : `${event.price}`}
          </span>
        </div>
      </Link>
    </div>
  );
}
