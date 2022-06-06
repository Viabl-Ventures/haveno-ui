import type { FC } from "react";
import { MarketOffersTradingPairTable } from "@molecules/MarketOffersTradingPairTable/MarketOffersTradingPairTable";

export function MarketOffersTradingPair() {
  return (
    <MarketOffersTradingPairBoot>
      <MarketOffersTradingPairLoaded />
    </MarketOffersTradingPairBoot>
  );
}

const MarketOffersTradingPairLoaded: FC = () => {
  return <MarketOffersTradingPairTable data={data} />;
};

const MarketOffersTradingPairBoot: FC = ({ children }) => {
  return <>{children}</>;
};

const data = [
  {
    fromPair: "XMR",
    toPair: "USD",
    lastPrice: 246.23,
    lastPriceCurrency: "EUR",
    dayChangeRate: 0.2,
    dayChangeVolume: 0.2,
  },
  {
    fromPair: "XMR",
    toPair: "USD",
    lastPrice: 246.23,
    lastPriceCurrency: "EUR",
    dayChangeRate: 0.2,
    dayChangeVolume: 0.2,
  },
  {
    fromPair: "XMR",
    toPair: "USD",
    lastPrice: 246.23,
    lastPriceCurrency: "EUR",
    dayChangeRate: 0.2,
    dayChangeVolume: 0.2,
  },
  {
    fromPair: "XMR",
    toPair: "USD",
    lastPrice: 246.23,
    lastPriceCurrency: "EUR",
    dayChangeRate: 0.2,
    dayChangeVolume: 0.2,
  },
];
