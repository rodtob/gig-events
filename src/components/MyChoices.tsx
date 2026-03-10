import { useBetStore } from "../store/betStore";
import type { BetEntry } from "../types";
import { BetsSummary } from "./BetsSummary";

export const MyChoices = () => {
  const { bets, updateBetAmount, toggleBet, clearBets } = useBetStore();

  const handleAmountChange = (bet: BetEntry, value: string) => {
    const num = parseFloat(value);
    if (isNaN(num) || num < 0) return;

    updateBetAmount(bet.id, bet.competitionId, num);
  };

  const incrementAmount = (bet: BetEntry) =>
    updateBetAmount(bet.id, bet.competitionId, bet.amount + 1);

  const decrementAmount = (bet: BetEntry) =>
    updateBetAmount(bet.id, bet.competitionId, Math.max(1, bet.amount - 1));

  if (bets.length === 0) {
    return (
      <div className="p-6 border rounded-xl shadow-md w-full max-w-md text-center">
        <p className="text-white-500 text-lg">No bets chosen yet.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">My Choices</h2>

      <div className="flex flex-col gap-5">
        {bets.map((bet) => (
          <div
            key={bet.id}
            className="flex flex-col gap-3 p-4 rounded-lg border shadow-sm"
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg">{bet.competitionLabel}</p>
              <button
                onClick={() =>
                  toggleBet(bet, bet.competitionId, bet.competitionLabel)
                }
                className="text-red-500 hover:text-red-700 font-bold text-2xl cursor-pointer"
                title="Remove bet"
              >
                ×
              </button>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-sm text-white-600">Qui va gagner le match?</p>
              <span className="font-semibold white text-lg">
                {bet.actor.label} ($
                {(bet.amount * bet.odd).toFixed(2)})
              </span>
            </div>

            <div className="flex items-center justify-between">
              <label htmlFor={`bet-amount-${bet.id}`} className="text-sm font-medium">
                Amount:
              </label>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => decrementAmount(bet)}
                  className="px-2 py-1 rounded hover:bg-white-200"
                >
                  -
                </button>
                <input
                  type="number"
                  min={1}
                  value={bet.amount}
                  onChange={(e) => handleAmountChange(bet, e.target.value)}
                  className="w-16 p-1 text-center border rounded-md"
                  data-testid={`amount-input-${bet.id}`}
                />
                <button
                  onClick={() => incrementAmount(bet)}
                  className="px-2 py-1 rounded hover:bg-white-200"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={clearBets}
          className="w-full px-5 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
          data-testid="clear-bets-button"
        >
          Submit Bets
        </button>
        <BetsSummary />
      </div>
    </div>
  );
};