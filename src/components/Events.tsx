import type { Event } from "../types";
import { EventCard } from "./EventCard";

export const Events = ({ events }: { events: Event[] }) => {
  return (
    <>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </>
  );
};
