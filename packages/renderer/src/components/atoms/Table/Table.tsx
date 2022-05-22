import {
  useTableInstance,
  getCoreRowModel,
  getExpandedRowModel,
} from "@tanstack/react-table";
import { Table as MTable } from "@mantine/core";
import type { TableProps } from "./_types";
import { TableProvider } from "./use-table-context";
import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";

export function Table(props: TableProps) {
  const { table, columns, data, tableWrap } = props;

  const tableInstance = useTableInstance(table, {
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  return (
    <MTable {...tableWrap}>
      <TableProvider value={{ table: tableInstance, props }}>
        <TableHeader />
        <TableBody />
      </TableProvider>
    </MTable>
  );
}

Table.defaultProps = {
  showHeader: true,
  showFooter: true,
};
