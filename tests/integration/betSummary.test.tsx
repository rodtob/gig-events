import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { BetsSummary } from "../../src/components/BetsSummary";
import { useBetStore } from "../../src/store/betStore";

const betsFixture = [
  {
    id: 1,
    amount: 5,
    odd: 2.5,
    competitionId: 10,
    competitionLabel: "Competition 10",
    label: "Match A vs B",
    actor: {
      id: 100,
      label: "Team A",
    },
  },
  {
    id: 2,
    amount: 3,
    odd: 3,
    competitionId: 11,
    competitionLabel: "Competition 11",
    label: "Match B vs C",
    actor: {
      id: 101,
      label: "Team B",
    },
  },
];

const expectedTotal = betsFixture.reduce((sum, bet) => sum + bet.amount, 0);

const expectedPotential = betsFixture.reduce(
  (sum, bet) => sum + bet.amount * bet.odd,
  0
);

describe("BetSummary", () => {
  beforeEach(() => {
    useBetStore.setState({ bets: betsFixture });
  });

  it("renders correct total stake and potential gain", () => {
    render(<BetsSummary />);

    expect(screen.getByTestId("total-amount")).toHaveTextContent(
      `$${expectedTotal}`
    );

    expect(screen.getByTestId("potential-gain")).toHaveTextContent(
      `$${expectedPotential}`
    );
  });
});