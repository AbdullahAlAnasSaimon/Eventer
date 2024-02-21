import { getEventById } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import React from "react";

export default async function EventDetails({
  params: { id },
}: SearchParamProps) {
  const event = await getEventById(id);

  return (
    <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
      <div className="grid grid-cols-1 md:grid-cols-2 2xl-max-w-7xl">
        <Image
          src={event.imageUrl}
          alt="event image"
          width={1000}
          height={1000}
          className="h-full min-h-[300px] object-cover object-center"
        />

        <div className="flex w-full flex-col gap-8 p-5 md:p-10">
          <div className="flex flex-col gap-">
            <h2 className="h2-bold mb-3">{event.title}</h2>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex gap-3">
                <p className="p-bold-20 rounded-lg bg-green-500/10 px-5 py-2 text-green-700">
                  {event.isFree ? "FREE" : `$${event.price}`}
                </p>
                <p className="p-medium-16 rounded-lg bg-grey-500/10 px-4 py-2.5 text-grey-500">
                  {event.category.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
