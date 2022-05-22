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

import { createTable } from "@tanstack/react-table";
import { Table } from "@atoms/Table";
import {
  MyWalletTransactionnSignCell,
  MyWalletTransactionAmountCell,
  MyWalletTransactionRowExpanded,
} from "./MyWalletTransactionsCells";
import type { TMyWalletTransaction } from "./_types";

const table = createTable().setRowType<TMyWalletTransaction>();

const columns = [
  table.createDataColumn("type", {
    id: "type",
    header: "Type",
    cell: MyWalletTransactionnSignCell,
  }),
  table.createDataColumn("amount", {
    id: "transaction",
    header: "Amount",
    cell: MyWalletTransactionAmountCell,
    size: 400,
  }),
];

interface MyWalletTransactionsProps {
  data: Array<TMyWalletTransaction>;
}

export function MyWalletTransactions({ data }: MyWalletTransactionsProps) {
  return (
    <Table
      table={table}
      columns={columns}
      data={data}
      showHeader={false}
      tableWrap={{
        verticalSpacing: "xs",
      }}
      rowSubComponent={MyWalletTransactionRowExpanded}
    />
  );
}
