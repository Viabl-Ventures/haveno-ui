// =============================================================================
//  Copyright 2022 Haveno
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
// =============================================================================

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
