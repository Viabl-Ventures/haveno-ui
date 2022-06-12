import type { FC } from "react";
import { MarketOffersTradingPairTable } from "@molecules/MarketOffersTradingPairTable/MarketOffersTradingPairTable";
import { useOffersFilterState } from "@src/state/offersFilter";

export function MarketOffersTradingPair({ onSubmit }) {
  return (
    <MarketOffersTradingPairBoot>
      <MarketOffersTradingPairLoaded onSubmit={onSubmit} />
    </MarketOffersTradingPairBoot>
  );
}

interface MarketOffersTradingPairLoadedProps {
  onSubmit?: (row: any) => void;
}

const MarketOffersTradingPairLoaded = ({
  onSubmit,
}: MarketOffersTradingPairLoadedProps) => {
  const [, setOffersState] = useOffersFilterState();

  const handleRowClick = (row) => {
    setOffersState((oldFilter) => ({
      ...oldFilter,
      assetCode: row.original.fromPair,
    }));
    onSubmit && onSubmit(row.original);
  };
  return (
    <MarketOffersTradingPairTable data={data} onRowClick={handleRowClick} />
  );
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
