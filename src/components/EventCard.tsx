import type { Event } from "../types";
import { BetOptions } from "./BetOptions";
import { IconMap } from "../utils/iconMap";

export const EventCard = ({ event }: { event: Event }) => {
  const iconSrc = IconMap[event.sport.icon] || "";

  return (
    <div key={event.id} className="w-full border-b-2 p-4">
      <h2 className="text-xl font-bold mb-2">
        {event.sport.label} / {event.category.label} / {event.competition.label}
      </h2>
      <div className="flex mt-2 justify-between">
        <div className="flex flex-col justify-between">
          <div className="flex">
            <img
              src={iconSrc}
              alt={event.sport.label}
              className="w-6 h-6 mr-2"
            />
            <span>{event.label}</span>
          </div>
          <p className="mb-1">
            {new Date(event.start).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
        {Object.values(event.bet ?? {}).map((bet) => (
          <BetOptions
            key={`${event.id}-bet`}
            bet={bet}
            competitionLabel={event.label}
            competitionId={event.id}
          />
        ))}
      </div>
    </div>
  );
};
