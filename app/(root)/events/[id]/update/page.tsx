import EventForm from "@/components/shared/EventForm";
import { getEventById } from "@/lib/actions/event.actions";
import { auth } from "@clerk/nextjs";

type UpdateEventProps = {
  params: {
    id: string;
  };
};

export default async function UpdateEvent({
  params: { id },
}: UpdateEventProps) {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const event = await getEventById(id);

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="w-11/12 mx-auto">
          <h3 className="wrapper h3-bold text-center">Update Event</h3>
        </div>
      </section>

      <div className="wrapper my-8">
        <div className="w-11/12 mx-auto">
          <EventForm
            userId={userId}
            type="Update"
            event={event}
            eventId={event._id}
          />
        </div>
      </div>
    </>
  );
}
