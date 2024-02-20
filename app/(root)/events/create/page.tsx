import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs";

export default function CreateEvent() {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="w-11/12 mx-auto">
          <h3 className="wrapper h3-bold md:text-center sm:text-left">
            Create Event
          </h3>
        </div>
      </section>

      <div className="wrapper my-8">
        <div className="w-11/12 mx-auto">
          <EventForm userId={userId} type="Create" />
        </div>
      </div>
    </>
  );
}
