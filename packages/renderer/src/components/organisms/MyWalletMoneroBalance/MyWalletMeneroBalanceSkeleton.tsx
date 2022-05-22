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

import { LangKeys } from "@constants/lang";
import { Skeleton } from "@mantine/core";
import { MoneroBalance } from "@organisms/MoneroBalance";
import { useIntl } from "react-intl";

export function MyWalletMoneroBalanceSkeleton() {
  const { formatMessage } = useIntl();

  return (
    <MoneroBalance>
      <MoneroBalance.Detail
        label={formatMessage({
          id: LangKeys.MyWalletMoneroAvaliableBalance,
          defaultMessage: "Avaliable Balance",
        })}
      >
        <Skeleton height={8} radius="xl" mt={6} />
      </MoneroBalance.Detail>

      <MoneroBalance.Detail
        label={formatMessage({
          id: LangKeys.MyWalletMoneroReserveredFunds,
          defaultMessage: "Reservered Funds",
        })}
      >
        <Skeleton height={8} radius="xl" mt={6} />
      </MoneroBalance.Detail>

      <MoneroBalance.Detail
        label={formatMessage({
          id: LangKeys.MyWalletMoneroLockedFunds,
          defaultMessage: "Locked Funds",
        })}
      >
        <Skeleton height={8} radius="xl" mt={6} />
      </MoneroBalance.Detail>
    </MoneroBalance>
  );
}
