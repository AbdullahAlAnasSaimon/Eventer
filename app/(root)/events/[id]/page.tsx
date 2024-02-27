import { getEventById } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import { formatDateTime } from "@/lib/utils";
import Image from "next/image";

import calender from "@/public/icons/calendar.svg";
import location from "@/public/icons/location.svg";
import Collection from "@/components/shared/Collection";

export default async function EventDetails({
  params: { id },
}: SearchParamProps) {
  const event = await getEventById(id);

  return (
    <>
      {/* event details */}
      <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl-max-w-7xl">
          <Image
            className="h-full min-h-[300px] object-cover object-center"
            src={event.imageUrl}
            alt="event image"
            width={1000}
            height={1000}
          />

          <div className="flex w-full flex-col gap-8 p-5 md:p-10">
            <div className="flex flex-col gap-">
              <h2 className="h2-bold mb-3">{event.title}</h2>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center flex-wrap">
                <div className="flex gap-3">
                  <p className="p-bold-20 rounded-lg bg-green-500/10 px-5 py-2 text-green-700">
                    {event.isFree ? "FREE" : `$${event.price}`}
                  </p>
                  <p className="p-medium-16 rounded-lg bg-grey-500/10 px-4 py-2.5 text-grey-500">
                    {event.category.name}
                  </p>
                </div>

                <p className="p-medium-18 ml-2 mt-2 sm:mt-0">
                  by{" "}
                  <span className="text-blue-500">
                    {event.organizer.firstName} {event.organizer.lastName}
                  </span>
                </p>
              </div>
            </div>
            {/* checkout button */}

            <div className="flex flex-col gap-5">
              <div className="flex gap-2 md:gap-3">
                <Image
                  src={calender}
                  alt="calender-icon"
                  width={32}
                  height={32}
                />
                <div className="p-medium-16 flex flex-wrap items-center">
                  <p>
                    {formatDateTime(event.startDateTime).dateOnly}
                    {" - "}
                    {formatDateTime(event.startDateTime).timeOnly}
                  </p>
                  <p className="ml-1 text-blue-700 font-bold">{"/"}</p>
                  <p className="ml-1">
                    {formatDateTime(event.endDateTime).dateOnly}
                    {" - "}
                    {formatDateTime(event.endDateTime).timeOnly}
                  </p>
                </div>
              </div>

              <div className="p-regular-20 flex items-center gap-3">
                <Image
                  src={location}
                  alt="location-icon"
                  width={32}
                  height={32}
                />
                <p className="p-medium-16">{event.location}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="p-bold-20 text-grey-600">What you'll learn</p>
              <p className="p-medium-16">{event.description}</p>
              <p className="p-medium-16 truncate text-primary-500 underline">
                {event.url}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* related events (events from the same organizer) */}
      <section className="wrapper flex flex-col gap-8 my-8 md:gap-12">
        <h2 className="h2-bold">Related Events</h2>

        <Collection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={1}
          totalPages={2}
        />
      </section>
    </>
  );
}
