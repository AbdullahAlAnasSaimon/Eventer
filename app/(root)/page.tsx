import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import heroImg from "@/public/images/hero.png";
import Collection from "@/components/shared/Collection";
import { getAllEvents } from "@/lib/actions/event.actions";

export default async function Home() {
  const events = await getAllEvents({
    query: "",
    category: "",
    limit: 6,
    page: 1,
  });

  console.log(events);

  return (
    <>
      {/* hero section */}
      <section className="bg-primary-50 bg-dotted bg-contain py-5 md:py-10">
        <div className="w-11/12 mx-auto">
          <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
            <div className="flex flex-col justify-center gap-8">
              <h1 className="h1-bold">
                <span className="text-blue-500">Host</span>,{" "}
                <span className="text-red-500">connect</span>,{" "}
                <span className="text-blue-700">celebrate</span>: Your Events,
                Our Platform
              </h1>
              <p className="p-regular-20 md:p-regular-24">
                Book and learn helpful tips from 3,168+ mentors in world-class
                companies with our global community.
              </p>
              <Button size="lg" asChild className="button w-full sm:w-fit">
                <Link href="#events">Explore Now</Link>
              </Button>
            </div>

            <Image
              src={heroImg}
              alt="hero-image"
              className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </section>

      {/* events section */}
      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <div className="w-11/12 mx-auto">
          <h2 className="h2-bold">
            Trusted By <br />
            Thousands Events
          </h2>

          <div className="flex w-full flex-col gap5 md:flex-row">
            Search CategoryFilter
          </div>

          <Collection
            data={events?.data}
            emptyTitle="No Events Found"
            emptyStateSubtext="Come back later"
            collectionType="All_Events"
            limit={6}
            page={1}
            totalPages={2}
          />
        </div>
      </section>
    </>
  );
}
