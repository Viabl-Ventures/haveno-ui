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

/* eslint-disable  @typescript-eslint/no-explicit-any */
import type { FC } from "react";
import { CurrencyLogos } from "@molecules/PaymentMethodCard/_constants";
import type { SupportedCurrencies } from "@molecules/PaymentMethodCard/_types";
import { ReactComponent as UnknownLogo } from "@assets/unknown.svg";
import type { PaymentAccount } from "@src/types";

export function getPaymentAccountName(account: PaymentAccount): string {
  if (account?.selectedTradeCurrency?.name) {
    return account.selectedTradeCurrency.name;
  }
  try {
    return account.accountName.split(" ")[0];
  } catch (_ex) {
    return account.accountName;
  }
}

export function getPaymentAccountCode(account: PaymentAccount): string {
  if (account?.selectedTradeCurrency?.code) {
    return account.selectedTradeCurrency.code;
  }
  return account.paymentMethod.id;
}

export function getPaymentAccountNumber(account: PaymentAccount): string {
  if (account?.paymentAccountPayload?.cryptoCurrencyAccountPayload?.address) {
    return account.paymentAccountPayload.cryptoCurrencyAccountPayload.address;
  }
  // TODO
  return "";
}

export function getPaymentAccountLogo(account: PaymentAccount): FC<any> {
  return (
    CurrencyLogos[
      getPaymentAccountCode(account) as unknown as SupportedCurrencies
    ]?.Logo ?? UnknownLogo
  );
}
