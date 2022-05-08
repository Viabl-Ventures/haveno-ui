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
import type { PaymentMethodIds } from "@constants/payment-methods";

interface Currency {
  code: string; // BCH, etc
  cryptoCurrency?: {
    isAsset: boolean;
  };
  fiatCurrency?: {
    currency: {
      currencyCode: string;
    };
  };
  name: string;
}

export interface PaymentAccount {
  accountName: string;
  id: string;
  paymentAccountPayload: {
    advancedCashAccountPayload: any | undefined;
    aliPayAccountPayload: any | undefined;
    amazonGiftCardAccountPayload: any | undefined;
    australiaPayidPayload: any | undefined;
    cashAppAccountPayload: any | undefined;
    cashByMailAccountPayload: any | undefined;
    chaseQuickPayAccountPayload: any | undefined;
    clearXchangeAccountPayload: any | undefined;
    countryBasedPaymentAccountPayload: any | undefined;
    cryptoCurrencyAccountPayload: {
      address: string;
    };
    fasterPaymentsAccountPayload: any | undefined;
    halCashAccountPayload: any | undefined;
    id: string;
    instantCryptoCurrencyAccountPayload: any | undefined;
    interacETransferAccountPayload: any | undefined;
    japanBankAccountPayload: any | undefined;
    maxTradePeriod: number;
    moneyBeamAccountPayload: any | undefined;
    moneyGramAccountPayload: any | undefined;
    oKPayAccountPayload: any | undefined;
    paymentMethodId: PaymentMethodIds; // "BLOCK_CHAINS" | "REVOLUT", ...;
    perfectMoneyAccountPayload: any | undefined;
    popmoneyAccountPayload: any | undefined;
    promptPayAccountPayload: any | undefined;
    revolutAccountPayload:
      | {
          accountId: string;
          userName: string;
        }
      | undefined;
    swishAccountPayload: any | undefined;
    transferwiseAccountPayload: any | undefined;
    uSPostalMoneyOrderAccountPayload: any | undefined;
    upholdAccountPayload: any | undefined;
    venmoAccountPayload: any | undefined;
    weChatPayAccountPayload: any | undefined;
  };
  paymentMethod: {
    id: PaymentMethodIds;
    maxTradeLimit: string; // "10000000000"
    maxTradePeriod: string; //"60000"
  };
  selectedTradeCurrency?: Currency;
  tradeCurrenciesList: Array<Currency>;
}
