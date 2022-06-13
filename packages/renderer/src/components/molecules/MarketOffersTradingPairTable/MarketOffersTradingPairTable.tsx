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
import { useIntl } from "react-intl";
import { createStyles } from "@mantine/core";
import type { TMarketOffersTradingPair } from "./_types";
import {
  MarketOfferPair24thChange,
  MarketOfferPairCell,
  MarketOfferPairLastPriceCell,
  MarketOfferPair24thChangeVolume,
} from "./MarketOffersTradingPairTableCells";
import type { TableProps } from "@molecules/Table";
import { Table } from "@molecules/Table";
import { LangKeys } from "@constants/lang";

const table = createTable().setRowType<TMarketOffersTradingPair>();

export interface MarketOffersTradingPairTableProps extends Partial<TableProps> {
  data: Array<TMarketOffersTradingPair>;
}

export function MarketOffersTradingPairTable({
  data,
  ...props
}: MarketOffersTradingPairTableProps) {
  const { classes } = useStyles();
  const columns = useMarketTradingPairsColumns();

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

const useMarketTradingPairsColumns = () => {
  const { formatMessage } = useIntl();

  return [
    table.createDataColumn("fromPair", {
      id: "pair",
      header: formatMessage({
        id: LangKeys.MarketTradingPairColPair,
        defaultMessage: "Pair",
      }),
      cell: ({ row }) => <MarketOfferPairCell row={row?.original} />,
      size: 400,
    }),
    table.createDataColumn("lastPrice", {
      id: "lastPrice",
      header: formatMessage({
        id: LangKeys.MarketTradingPairColLastPrice,
        defaultMessage: "Last Price",
      }),
      size: 400,
      cell: ({ row }) => <MarketOfferPairLastPriceCell row={row?.original} />,
    }),
    table.createDataColumn("dayChangeRate", {
      id: "dayChangeRate",
      header: formatMessage({
        id: LangKeys.MarketTradingPairColDayChange,
        defaultMessage: "24th Change",
      }),
      size: 400,
      cell: () => <MarketOfferPair24thChange />,
      meta: { textAlign: "right" },
    }),
    table.createDataColumn("dayChangeVolume", {
      id: "dayChangeVolume",
      header: formatMessage({
        id: LangKeys.MarketTradingPairColDayChangeVolume,
        defaultMessage: "24h Vol",
      }),
      size: 400,
      cell: ({ row }) => (
        <MarketOfferPair24thChangeVolume row={row?.original} />
      ),
      meta: { textAlign: "right" },
    }),
  ];
};

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 20,
    paddingBottom: 0,

    thead: {
      tr: {
        th: {
          color: theme.colors.gray[9],
          fontSize: theme.fontSizes.xs,
          paddingTop: 8,
          paddingBottom: 8,
          textTransform: "uppercase",

          "&:first-of-type": {
            paddingLeft: theme.spacing.xl,
          },
          "&:last-of-type": {
            paddingRight: theme.spacing.xl,
          },
        },
      },
    },
    tbody: {
      tr: {
        td: {
          borderBottomColor: "transparent",
          fontSize: theme.spacing.sm * 1.168,
          fontWeight: 600,

          "&:first-of-type": {
            paddingLeft: theme.spacing.xl,
          },
          "&:last-of-type": {
            paddingRight: theme.spacing.xl,
          },
        },
      },
    },
  },
}));
