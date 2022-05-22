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

import { useIntl } from "react-intl";
import { Box, Group, Stack, Text, createStyles } from "@mantine/core";
import type { Row } from "@tanstack/react-table";
import { ReactComponent as ArrowNorth } from "@assets/arrow-north.svg";
import { ReactComponent as ArrowWest } from "@assets/arrow-west.svg";
import { DetailItem } from "@atoms/DetailItem";
import { LangKeys } from "@constants/lang";
import { Currency } from "@atoms/Currency";
import { CircleIcon } from "@atoms/CircleIcon/CircleIcon";
import { MyWalletTransactionType } from "./_types";

export function MyWalletTransactionnSignCell({ row }: { row: Row<any> }) {
  return (
    <CircleIcon>
      {MyWalletTransactionType === row.original.type ? (
        <ArrowNorth />
      ) : (
        <ArrowWest />
      )}
    </CircleIcon>
  );
}

export function MyWalletTransactionDescCell({ row }: { row: Row<any> }) {
  const { formatMessage } = useIntl();

  return (
    <Box>
      <Text weight="bold">
        {row.original.type === MyWalletTransactionType.Sent
          ? formatMessage({
              id: LangKeys.MyWalletDetailSent,
              defaultMessage: "Sent",
            })
          : formatMessage({
              id: LangKeys.MyWalletDetailReceived,
              defaultMessage: "Received",
            })}
      </Text>
      <Group>
        <Text size="sm" color="gray">
          {row.original.time}
        </Text>
        <Text size="sm" color="gray">
          {row.original.date}
        </Text>
      </Group>
    </Box>
  );
}

export function MyWalletTransactionAmountCell({ row }: { row: Row<any> }) {
  return (
    <Stack spacing={0} sx={{ textAlign: "right" }}>
      <Text weight="bold">
        <Currency
          value={row.original.amount}
          currencyCode={row.original.amountCurrency}
        />
      </Text>
      <Text size="sm" color="gray">
        <Currency
          value={row.original.foreignAmount}
          currencyCode={row.original.foreignAmountCurrency}
        />
      </Text>
    </Stack>
  );
}

const useRowExpanded = createStyles(() => ({
  root: {},
  label: {
    fontSize: 10,
  },
}));

export function MyWalletTransactionRowExpanded({ row }: { row: Row<any> }) {
  const { formatMessage } = useIntl();
  const { classes } = useRowExpanded();

  return (
    <Stack pt="sm" pb="sm" spacing="xl">
      <Group>
        <DetailItem
          label={formatMessage({
            id: LangKeys.MyWalletDetailTransactionId,
            defaultMessage: "Transaction ID",
          })}
          classNames={classes}
        >
          {row.original.transactionId}
        </DetailItem>

        <DetailItem
          label={formatMessage({
            id: LangKeys.MyWalletDetailFee,
            defaultMessage: "Fee",
          })}
          ml="auto"
          classNames={classes}
        >
          <Currency value={row.original.fee} />
        </DetailItem>
      </Group>

      <Group>
        <DetailItem
          label={formatMessage({
            id: LangKeys.MyWalletDetailTransactionKey,
            defaultMessage: "Transaction Key",
          })}
          classNames={classes}
        >
          {row.original.transactionKey}
        </DetailItem>

        <DetailItem
          label={formatMessage({
            id: LangKeys.MyWalletDetailHeight,
            defaultMessage: "Height",
          })}
          ml="auto"
          classNames={classes}
        >
          <Currency value={row.original.height} />
        </DetailItem>
      </Group>

      <Group>
        <DetailItem
          label={formatMessage({
            id: LangKeys.MyWalletDetailReceiptAddress,
            defaultMessage: "Receipt Address",
          })}
          classNames={classes}
        >
          {row.original.receiptAddress}
        </DetailItem>
      </Group>
    </Stack>
  );
}
