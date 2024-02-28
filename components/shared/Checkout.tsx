import { IEvent } from "@/lib/database/models/event.model";
import React from "react";
import { Button } from "../ui/button";

export default function Checkout({
  event,
  userId,
}: {
  event: IEvent;
  userId: string;
}) {
  const onCheckout = async () => {
    console.log("checkout");
  };

  return (
    <form action={onCheckout} method="post">
      <Button className="button sm:w-fit" type="submit" role="link" size="lg">
        {event.isFree ? "Get Ticket" : "Buy Ticket"}
      </Button>
    </form>
  );
}
