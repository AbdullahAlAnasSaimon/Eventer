"use client";

import { IEvent } from "@/lib/database/models/event.model";
import React from "react";

export default function CheckoutButton({ event }: { event: IEvent }) {
  const hasEventFinished = new Date(event.endDateTime) < new Date();

  return <div>CheckoutButton</div>;
}
