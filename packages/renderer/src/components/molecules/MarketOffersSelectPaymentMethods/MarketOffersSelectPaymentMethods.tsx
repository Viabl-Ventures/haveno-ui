import { createTable } from "@tanstack/react-table";
import { createStyles } from "@mantine/core";
import type { TableProps } from "@molecules/Table";
import { CheckboxCell, Table } from "@molecules/Table";
import {
  MarketOffersSelectPaymentMethodsInfo,
  MarketOffersSelectPaymentMethodsLimit,
} from "./MarketOffersSelectPaymentMethodsCells";
import type { TMarketOfferPaymentMethod } from "./_types";

const table = createTable().setRowType<TMarketOfferPaymentMethod>();

interface MarketoffersSelectPaymentMethods extends Partial<TableProps> {
  data: TMarketOfferPaymentMethod[];
}

export function MarketoffersSelectPaymentMethods({
  data,
  ...rest
}: MarketoffersSelectPaymentMethods) {
  const { classes } = useStyles();

  return (
    <Table
      {...rest}
      table={table}
      columns={columns}
      data={data}
      tableWrap={{
        verticalSpacing: "xs",
        striped: true,
        className: classes.root,
      }}
    />
  );
}

const columns = [
  table.createDataColumn("methodChecked", {
    id: "methodChecked",
    header: " ",
    cell: ({ ...props }) => (
      <CheckboxCell {...props} checkboxProps={{ radius: "xs", size: "sm" }} />
    ),
    size: 30,
  }),
  table.createDataColumn("methodName", {
    id: "methodName",
    header: "Method",
    size: 300,
  }),
  table.createDataColumn("rateTradeLimit", {
    id: "rateTradeLimit",
    header: "Per Trade Limit",
    size: 400,
    cell: ({ row }) => (
      <MarketOffersSelectPaymentMethodsLimit row={row?.original} />
    ),
  }),
  table.createDataColumn("info", {
    id: "info",
    header: "Info",
    size: 400,
    cell: ({ row }) => (
      <MarketOffersSelectPaymentMethodsInfo row={row?.original} />
    ),
    meta: { textAlign: "right" },
  }),
];

const useStyles = createStyles((theme) => ({
  root: {
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
          borderBottom: 0,

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
