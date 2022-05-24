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

import { useMemo } from "react";
import { useXmrTxs } from "@hooks/haveno/useXmrTxs";
import { Group, Loader } from "@mantine/core";
import { WalletTransactions } from "@molecules/WalletTransactions";
import { transfromXmrTxs } from "./_utils";

interface MyWalletTransactionsBootProps {
  children: React.ReactNode;
}

export function MyWalletTransactionsTable() {
  const { data: xmrTxs } = useXmrTxs();

  if (!xmrTxs) return null;

  const transactions = useMemo(() => transfromXmrTxs(xmrTxs || []), [xmrTxs]);

  return <WalletTransactions data={transactions} />;
}

function MyWalletTransactionsBoot({ children }: MyWalletTransactionsBootProps) {
  const { isLoading: isXmrTxsLoading } = useXmrTxs();

  return isXmrTxsLoading ? (
    <Group position="center" pt="lg" pb="lg">
      <Loader color="gray" size="sm" />
    </Group>
  ) : (
    <>{children}</>
  );
}

export function MyWalletTransactions() {
  return (
    <MyWalletTransactionsBoot>
      <MyWalletTransactionsTable />
    </MyWalletTransactionsBoot>
  );
}
