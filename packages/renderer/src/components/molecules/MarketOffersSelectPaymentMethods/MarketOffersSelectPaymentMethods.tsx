import { createTable } from "@tanstack/react-table";
import { createStyles } from "@mantine/core";
import { CheckboxCell, Table } from "@molecules/Table";
import {
  MarketOffersSelectPaymentMethodsInfo,
  MarketOffersSelectPaymentMethodsLimit,
} from "./MarketOffersSelectPaymentMethodsCells";

const table = createTable().setRowType<TMarketOfferPaymentMethod>();

interface MarketoffersSelectPaymentMethods {
  data: TMarketOfferPaymentMethod[];
}

export function MarketoffersSelectPaymentMethods({
  data,
}: MarketoffersSelectPaymentMethods) {
  const { classes } = useStyles();

  return (
    <Table
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
  table.createDataColumn("method", {
    id: "method",
    header: " ",
    cell: ({ ...props }) => (
      <CheckboxCell
        {...props}
        checkboxProps={{
          radius: "xs",
          size: "sm",
        }}
      />
    ),
    size: 30,
  }),
  table.createDataColumn("method", {
    id: "methodName",
    header: "Method",
  }),
  table.createDataColumn("rateTradeLimit", {
    id: "rateTradeLimit",
    header: "Per Trade Limit",
    size: 400,
    cell: ({ row }) => (
      <MarketOffersSelectPaymentMethodsLimit row={row.original} />
    ),
  }),
  table.createDataColumn("info", {
    id: "info",
    header: "Info",
    size: 400,
    cell: ({ row }) => (
      <MarketOffersSelectPaymentMethodsInfo row={row.original} />
    ),
  }),
];

export interface TMarketOfferPaymentMethod {
  method: string;
  rateTradeLimit: number;
  rateTradeLimitCurrency: string;
  info: string;
}

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
          fontWeight: 600,
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
