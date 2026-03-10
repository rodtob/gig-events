export type Event = {
  id: number;
  label: string;
  start: string;

  competition: LabelObject

  category: LabelObject

  sport: {
    label: string;
    icon: string;
  };

  bet?: Record<string, Bet>;
};

type LabelObject = Record<"label", string>;


export type Bet = {
  question: {
    label: string;
  };
  choices: Choice[];
};

export type Choice = {
  id: number;
  odd: number;
  actor: {
    id: number;
    label: string;
  };
};

export type ApiEventResponse = {
  events: Event[];
};

export type BetEntry = Choice & {
  odd: number;
  amount: number;
  competitionId: number;
  competitionLabel: string;
};

export type AmountInputProps = {
  bet: BetEntry;
  handleAmountChange: (bet: BetEntry, value: string) => void;
  incrementAmount: (bet: BetEntry) => void;
  decrementAmount: (bet: BetEntry) => void;
};