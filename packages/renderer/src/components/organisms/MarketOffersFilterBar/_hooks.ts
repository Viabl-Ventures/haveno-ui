import { useOffersFilterState } from "@src/state/offersFilter";

export function useAccountDetailsLabel() {
  const [offersFilterState] = useOffersFilterState();

  return [
    ["Signed", offersFilterState.signedAccounts],
    [
      `>${offersFilterState.minimumTradesAmount} trades`,
      offersFilterState.minimumTradesAmount,
    ],
    [
      `>${offersFilterState.minimumAccountAge} days`,
      offersFilterState.minimumAccountAge,
    ],
  ]
    .filter((option) => option[1])
    .map((option) => option[0])
    .join(", ");
}

export function useMarketOffersFilterAmountLabel() {
  const [offersFilterState] = useOffersFilterState();

  if (
    !offersFilterState.minimumBaseCurrencyAmount &&
    !offersFilterState.maximumBaseCurrencyAmount
  ) {
    return "";
  }
  const fromAmount = offersFilterState.minimumBaseCurrencyAmount || "~";
  const toAmount = offersFilterState.maximumBaseCurrencyAmount || "~";

  return `${fromAmount} - ${toAmount} XMR`;
}
