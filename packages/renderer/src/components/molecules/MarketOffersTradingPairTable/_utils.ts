import type { TMarketOffersTradingPair } from "./_types";

export const pairColumnAccessor = (row: TMarketOffersTradingPair): string =>
  `${row.fromPair}/${row.toPair}`;
