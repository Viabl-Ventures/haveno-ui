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
  WalletTransactionnSignCell,
  WalletTransactionAmountCell,
  WalletTransactionRowExpanded,
} from "./WalletTransactionsCells";
import type { TWalletTransaction } from "./_types";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    "tbody tr td:first-child": {
      paddingLeft: 0,
    },
    "tbody tr td:last-child": {
      paddingRight: 0,
    },
    "tbody tr": {
      cursor: "pointer",
    },
  },
}));

const table = createTable().setRowType<TWalletTransaction>();

const columns = [
  table.createDataColumn("type", {
    id: "type",
    header: "Type",
    cell: WalletTransactionnSignCell,
  }),
  table.createDataColumn("amount", {
    id: "transaction",
    header: "Amount",
    cell: WalletTransactionAmountCell,
    size: 400,
  }),
];

interface WalletTransactionsProps {
  data: Array<TWalletTransaction>;
}

export function WalletTransactions({ data }: WalletTransactionsProps) {
  const { classes } = useStyles();

  return (
    <Table
      table={table}
      columns={columns}
      data={data}
      showHeader={false}
      tableWrap={{
        verticalSpacing: "md",
        className: classes.root,
      }}
      rowSubComponent={WalletTransactionRowExpanded}
    />
  );
}
