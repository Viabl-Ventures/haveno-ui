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

import { includes } from "lodash";
import { useMemo } from "react";
import type { TMarketOfferPaymentMethod } from "@molecules/MarketOffersSelectPaymentMethods";
import { MarketoffersSelectPaymentMethods } from "@molecules/MarketOffersSelectPaymentMethods";
import { useOffersFilterState } from "@src/state/offersFilter";

export function MarketOffersFilterPaymentMethods() {
  const [filter, setFilter] = useOffersFilterState();

  const tableData = useMemo(
    () =>
      data.map((item) => ({
        ...item,
        methodChecked: includes(filter.paymentMethods, item.methodKey),
      })),
    [filter]
  );

  const handleEditableDataChange = (newData: TMarketOfferPaymentMethod[]) => {
    setFilter((oldQuery) => ({
      ...oldQuery,
      paymentMethods: newData
        .filter((payment) => payment.methodChecked)
        .map((payment) => payment.methodKey),
    }));
  };

  return (
    <MarketoffersSelectPaymentMethods
      data={tableData}
      onEditableDataChange={handleEditableDataChange}
    />
  );
}

const data = [
  {
    methodName: "Celpay",
    methodChecked: true,
    methodKey: "celpay",
    rateTradeLimit: 20,
    rateTradeLimitCurrency: "XMR",
    info: "Global",
  },
  {
    methodName: "Celpay",
    methodChecked: false,
    methodKey: "celpay2",
    rateTradeLimit: 20,
    rateTradeLimitCurrency: "XMR",
    info: "Global",
  },
  {
    methodName: "Celpay",
    methodChecked: false,
    methodKey: "celpay3",
    rateTradeLimit: 20,
    rateTradeLimitCurrency: "XMR",
    info: "Global",
  },
  {
    methodName: "Celpay",
    methodChecked: false,
    methodKey: "celpay4",
    rateTradeLimit: 20,
    rateTradeLimitCurrency: "XMR",
    info: "Global",
  },
] as TMarketOfferPaymentMethod[];
