import { createTable } from "@tanstack/react-table";
import { Table } from "@atoms/Table";
import {
  MyWalletTransactionnSignCell,
  MyWalletTransactionDescCell,
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
  table.createDataColumn("date", {
    id: "transaction",
    header: "Date",
    cell: MyWalletTransactionDescCell,
    size: 600,
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
