import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import App from "../../src/App";
import { useBetStore } from "../../src/store/betStore";

describe("Betting flow", () => {
  beforeEach(() => {
    useBetStore.setState({ bets: [] });
    render(<App />);
  });

  it("allows selecting bets and updates totals", () => {
    const betChoices = screen.getAllByTestId(/bet-choice-/);

    const amounts = [5, 2];

    betChoices.forEach((choice) => {
      fireEvent.click(choice);
    });

    const inputs = screen.getAllByTestId(/amount-input-/);

    inputs.forEach((input, index) => {
      fireEvent.change(input, { target: { value: amounts[index] } });
    });

    const totalAmount = screen.getByTestId("total-amount");
    const potentialGain = screen.getByTestId("potential-gain");

    expect(totalAmount).toBeInTheDocument();
    expect(potentialGain).toBeInTheDocument();
  });

  it("removes bet when clicking same choice twice", () => {
    const betChoices = screen.getAllByTestId(/bet-choice-/);

    fireEvent.click(betChoices[0]);
    fireEvent.click(betChoices[0]);

    expect(screen.queryByTestId("total-amount")).not.toBeInTheDocument();
  });
});
