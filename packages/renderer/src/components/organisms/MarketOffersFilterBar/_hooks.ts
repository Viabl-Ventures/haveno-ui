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
