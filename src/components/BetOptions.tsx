import type { Bet } from "../types";
import { useBetStore } from "../store/betStore";

export const BetOptions = ({
  bet,
  competitionId,
  competitionLabel,
}: {
  bet: Bet;
  competitionId: number;
  competitionLabel: string;
}) => {
  const { bets, toggleBet } = useBetStore();

  // All selected choice IDs for this competition
  const selectedChoiceIds = bets
    .filter((bet) => bet.competitionId === competitionId)
    .map((bet) => bet.id);

  return (
    <div className="flex gap-3 ml-4">
      {bet.choices.map((choice) => {
        const isSelected = selectedChoiceIds.includes(choice.id);

        return (
          <div key={choice.id} className="flex flex-col items-center">
            <button
              data-testid={`bet-choice-${choice.id}`}
              onClick={() =>
                toggleBet(choice, competitionId, competitionLabel)
              }
              className={`cursor-pointer flex flex-col justify-between w-32 p-3 rounded-lg border shadow-sm transition
                ${isSelected
                  ? "bg-blue-100 border-blue-400"
                  : "bg-white border-gray-200 hover:bg-blue-50 hover:border-blue-400"
                }`}
            >
              <span className="text-sm text-gray-700 text-center">
                {choice.actor.label}
              </span>
              <span className="text-lg font-bold text-blue-600">
                {choice.odd.toFixed(2)}
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
};