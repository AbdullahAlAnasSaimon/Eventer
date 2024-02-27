import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Profile() {
  return (
    <>
      {/* my tickets */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-8">
        <div className="wrapper flex items-center justify-center md:justify-between">
          <h3 className="h3-bold text-center">My Tickets</h3>

          <Button asChild className="button hidden sm:flex">
            <Link href="/#events">Explore More Events</Link>
          </Button>
        </div>
      </section>

      {/* events organized */}
    </>
  );
}
