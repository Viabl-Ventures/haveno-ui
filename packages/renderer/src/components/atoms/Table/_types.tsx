import type { ColumnDef, Row } from "@tanstack/react-table";
import type { TableProps as MTableProps } from "@mantine/core";

export interface TableProps {
  columns: ColumnDef<any>[];
  table: any;
  data: any[];

  showHeader?: boolean;
  showFooter?: boolean;

  rowSubComponent?: ({ row }: { row: Row<any> }) => React.ReactNode;

  tableWrap?: MTableProps;
}
