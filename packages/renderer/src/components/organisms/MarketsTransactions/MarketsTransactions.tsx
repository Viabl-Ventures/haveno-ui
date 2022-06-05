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

import { Loader } from "@mantine/core";
import { useMarketsOffers } from "@hooks/haveno/useMarketsOffers";
import { MarketTransactionsTable } from "@molecules/MarketTransactionsTable";
import type { FC } from "react";

export function MarketsTransactionsLoaded() {
  useMarketsOffers({
    assetCode: "eth",
    direction: "buy",
  });
  return <MarketTransactionsTable data={[]} />;
}

const MarketsTransactionsBoot: FC = ({ children }) => {
  const { isLoading: isOffersLoading } = useMarketsOffers({
    assetCode: "eth",
    direction: "buy",
  });
  return isOffersLoading ? <Loader color="gray" /> : <>{children}</>;
};

export function MarketsTransactions() {
  return (
    <MarketsTransactionsBoot>
      <MarketsTransactionsLoaded />
    </MarketsTransactionsBoot>
  );
}
