import { createTable } from "@tanstack/react-table";
import { createStyles } from "@mantine/core";
import { Table } from "@molecules/Table";
import type { TMarketOffersTradingPair } from "./_types";
import type { TableProps } from "@molecules/Table";
import {
  MarketOfferPair24thChange,
  MarketOfferPairCell,
  MarketOfferPairLastPriceCell,
  MarketOfferPair24thChangeVolume,
} from "./MarketOffersTradingPairTableCells";

const table = createTable().setRowType<TMarketOffersTradingPair>();

export interface MarketOffersTradingPairTableProps extends Partial<TableProps> {
  data: TMarketOffersTradingPair[];
}

export function MarketOffersTradingPairTable({
  data,
  ...props
}: MarketOffersTradingPairTableProps) {
  const { classes } = useStyles();

  return (
    <Table
      {...props}
      table={table}
      columns={columns}
      data={data}
      tableWrap={{
        verticalSpacing: "md",
        highlightOnHover: true,
        className: classes.root,
      }}
    />
  );
}

const columns = [
  table.createDataColumn("fromPair", {
    id: "pair",
    header: "Pair",
    cell: ({ row }) => <MarketOfferPairCell row={row?.original} />,
    size: 400,
  }),
  table.createDataColumn("lastPrice", {
    id: "lastPrice",
    header: "Last Price",
    size: 400,
    cell: ({ row }) => <MarketOfferPairLastPriceCell row={row?.original} />,
  }),
  table.createDataColumn("dayChangeRate", {
    id: "dayChangeRate",
    header: "24th Change",
    size: 400,
    cell: ({ row }) => <MarketOfferPair24thChange row={row?.original} />,
    meta: { textAlign: "right" },
  }),
  table.createDataColumn("dayChangeVolume", {
    id: "dayChangeVolume",
    header: "24h Vol",
    size: 400,
    cell: ({ row }) => <MarketOfferPair24thChangeVolume row={row?.original} />,
    meta: { textAlign: "right" },
  }),
];

const useStyles = createStyles(() => ({
  root: {
    paddingTop: 20,
    paddingBottom: 0,

    thead: {
      tr: {
        th: {
          textTransform: "uppercase",
          color: "#111",
          fontSize: 10,
          paddingTop: 8,
          paddingBottom: 8,

          "&:first-of-type": {
            paddingLeft: 25,
          },
          "&:last-of-type": {
            paddingRight: 25,
          },
        },
      },
    },
    tbody: {
      tr: {
        td: {
          fontSize: 14,
          fontWeight: 600,
          borderBottomColor: "transparent",

          "&:first-of-type": {
            paddingLeft: 25,
          },
          "&:last-of-type": {
            paddingRight: 25,
          },
        },
      },
    },
  },
}));
