import type { AmountInputProps } from "../types";

export const AmountInput = ({
  bet,
  handleAmountChange,
  incrementAmount,
  decrementAmount,
}: AmountInputProps) => (
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
);
