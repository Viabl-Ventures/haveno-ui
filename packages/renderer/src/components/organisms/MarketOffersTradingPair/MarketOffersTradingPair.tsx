import { useCallback } from "react";
import type { FC } from "react";
import type { Row } from "@tanstack/react-table";
import { MarketOffersTradingPairTable } from "@molecules/MarketOffersTradingPairTable";
import { useOffersFilterState } from "@src/state/offersFilter";

interface MarketOffersTradingPairProps {
  onSubmit?: (row: any) => void;
}

export function MarketOffersTradingPair({
  onSubmit,
}: MarketOffersTradingPairProps) {
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

  const handleRowClick = useCallback(
    (row: Row<any>) => {
      setOffersState((oldFilter) => ({
        ...oldFilter,
        assetCode: row.original.fromPair,
      }));
      onSubmit && onSubmit(row.original);
    },
    [onSubmit]
  );

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
