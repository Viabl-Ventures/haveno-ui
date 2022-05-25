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

import type { FC } from "react";
import { useIntl } from "react-intl";
import { LangKeys } from "@constants/lang";
import { useBalances } from "@hooks/haveno/useBalances";
import { MoneroBalance } from "@organisms/MoneroBalance";
import { MyWalletMeneroBalanceSkeleton } from "./MyWalletMeneroBalanceSkeleton";
import { Currency } from "@atoms/Currency";

export function MyWalletMoneroBalanceContent() {
  const { formatMessage } = useIntl();
  const { isLoading: isBalancesLoading, data: balanceInfo } = useBalances();

  if (isBalancesLoading || !balanceInfo) {
    return <>Loading ...</>;
  }
  return (
    <MoneroBalance>
      <MoneroBalance.Detail
        label={formatMessage({
          id: LangKeys.MyWalletMoneroAvaliableBalance,
          defaultMessage: "Avaliable Balance",
        })}
        data-testid="avaliable-balance"
      >
        <Currency value={balanceInfo.balance} />
      </MoneroBalance.Detail>

      <MoneroBalance.Detail
        label={formatMessage({
          id: LangKeys.MyWalletMoneroReserveredFunds,
          defaultMessage: "Reservered Funds",
        })}
        data-testid="reserverd-funds"
      >
        <Currency value={balanceInfo.reservedOfferBalance || 0} />
      </MoneroBalance.Detail>

      <MoneroBalance.Detail
        label={formatMessage({
          id: LangKeys.MyWalletMoneroLockedFunds,
          defaultMessage: "Locked Funds",
        })}
        data-testid="locked-funds"
      >
        <Currency value={balanceInfo.lockedBalance || 0} />
      </MoneroBalance.Detail>
    </MoneroBalance>
  );
}

export function MyWalletMoneroBalance() {
  return (
    <MyWalletMoneroBalanceBoot>
      <MyWalletMoneroBalanceContent />
    </MyWalletMoneroBalanceBoot>
  );
}

export const MyWalletMoneroBalanceBoot: FC = ({ children }): JSX.Element => {
  const { isLoading: isBalancesLoading } = useBalances();

  return isBalancesLoading ? (
    <MyWalletMeneroBalanceSkeleton />
  ) : (
    <>{children}</>
  );
};
