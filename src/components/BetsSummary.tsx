import { useBetStore } from "../store/betStore";

export const BetsSummary = () => {
  const { bets } = useBetStore();

  const totalStake = bets.reduce((sum, bet) => sum + bet.amount, 0);

  const gainByCompetition: Record<number, number> = {};

  bets.forEach((bet) => {
    const potential = bet.amount * bet.odd;
    if (!gainByCompetition[bet.competitionId] || gainByCompetition[bet.competitionId] < potential) {
      gainByCompetition[bet.competitionId] = potential;
    }
  });

  const potentialGain = Object.values(gainByCompetition).reduce(
    (sum, gain) => sum + gain,
    0
  );

  return (
    <div className="w-full max-w-md">
      <div className="flex justify-between pt-2 border-t mt-2">
        <p className="font-semibold">Total:</p>
        <p data-testid="total-amount" className="font-semibold">
          ${totalStake.toFixed(2)}
        </p>
      </div>

      <div className="flex justify-between pt-1">
        <p className="font-semibold text-green-500">Potential Gain:</p>
        <p data-testid="potential-gain" className="font-semibold text-green-500">
          ${potentialGain.toFixed(2)}
        </p>
      </div>
    </div>
  );
};