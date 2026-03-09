import { create } from "zustand";
import type { Choice } from "../types";
import type { BetEntry } from "../types";

type BetStore = {
  bets: BetEntry[];
  toggleBet: (choice: Choice, competitionId: number, competitionLabel: string) => void;
  updateBetAmount: (choiceId: number, competitionId: number, amount: number) => void;
  clearBets: () => void;
};

export const useBetStore = create<BetStore>((set) => ({
  bets: [],

  toggleBet: (choice, competitionId, competitionLabel) =>
    set((state) => {
      const exists = state.bets.find(
        (bet) => bet.id === choice.id && bet.competitionId === competitionId
      );

      if (exists) {
        return {
          bets: state.bets.filter(
            (bet) => !(bet.id === choice.id && bet.competitionId === competitionId)
          ),
        };
      } else {
        const newBet: BetEntry = {
          ...choice,
          competitionId,
          amount: 1,
          competitionLabel,
        };
        return { bets: [...state.bets, newBet] };
      }
    }),

  updateBetAmount: (choiceId, competitionId, amount) =>
    set((state) => ({
      bets: state.bets.map((bet) =>
        bet.id === choiceId && bet.competitionId === competitionId
          ? { ...bet, amount }
          : bet
      ),
    })),
  clearBets: () => set({ bets: [] }),
}));