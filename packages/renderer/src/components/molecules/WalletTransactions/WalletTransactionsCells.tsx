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

import { FormattedDate, FormattedTime, useIntl } from "react-intl";
import { Box, Group, Stack, Text, createStyles, Grid } from "@mantine/core";
import type { Row } from "@tanstack/react-table";
import { ReactComponent as ArrowNorth } from "@assets/arrow-north.svg";
import { ReactComponent as ArrowWest } from "@assets/arrow-west.svg";
import { DetailItem } from "@atoms/DetailItem";
import { LangKeys } from "@constants/lang";
import { Currency } from "@atoms/Currency";
import { CircleIcon } from "@atoms/CircleIcon/CircleIcon";
import { WalletTransactionType } from "./_types";

export function WalletTransactionnSignCell({ row }: { row: Row<any> }) {
  const { formatMessage } = useIntl();

  return (
    <Group>
      <CircleIcon>
        {WalletTransactionType.Sent === row.original.type ? (
          <ArrowNorth color="#0B65DA" width={18} height={18} />
        ) : (
          <ArrowWest color="#75B377" width={18} height={18} />
        )}
      </CircleIcon>

      <Box>
        <Text weight="bold">
          {row.original.type === WalletTransactionType.Sent
            ? formatMessage({
                id: LangKeys.WalletDetailSent,
                defaultMessage: "Sent",
              })
            : formatMessage({
                id: LangKeys.WalletDetailReceived,
                defaultMessage: "Received",
              })}
        </Text>

        <Group spacing="xs">
          <Text size="sm" color="gray">
            <FormattedTime value={row.original.time} />
          </Text>

          <Text size="sm" color="gray">
            <FormattedDate
              value={row.original.date}
              year="numeric"
              month="long"
              day="2-digit"
            />
          </Text>
        </Group>
      </Box>
    </Group>
  );
}

export function WalletTransactionAmountCell({ row }: { row: Row<any> }) {
  return (
    <Stack spacing={0} sx={{ textAlign: "right" }}>
      <Text weight="bold">
        <Currency
          value={row.original.amount}
          currencyCode={row.original.amountCurrency}
        />
      </Text>

      {row.original.foreignAmount && (
        <Text size="sm" color="gray">
          <Currency
            value={row.original.foreignAmount}
            currencyCode={row.original.foreignAmountCurrency}
          />
        </Text>
      )}
    </Stack>
  );
}

const useRowExpanded = createStyles((theme) => ({
  root: {
    paddingLeft: 50,
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
  },
  label: {
    fontSize: 10,
  },
  detailContent: {
    wordBreak: "break-all",
  },
}));

export function WalletTransactionRowExpanded({ row }: { row: Row<any> }) {
  const { formatMessage } = useIntl();
  const { classes } = useRowExpanded();

  return (
    <Box className={classes.root}>
      <Grid>
        <Grid.Col span={9}>
          <DetailItem
            label={formatMessage({
              id: LangKeys.WalletDetailTransactionId,
              defaultMessage: "Transaction ID",
            })}
            classNames={{
              label: classes.label,
              content: classes.detailContent,
            }}
            mb="lg"
          >
            {row.original.transactionId}
          </DetailItem>

          {row.original?.destinationAddresses?.map((address: string) => (
            <DetailItem
              key={address}
              label={formatMessage({
                id: LangKeys.WalletDetailDestinationAddress,
                defaultMessage: "Transaction Key",
              })}
              classNames={{
                label: classes.label,
                content: classes.detailContent,
              }}
              mb="lg"
            >
              {address}
            </DetailItem>
          ))}
          {row.original?.incomingAddresses?.map((address: string) => (
            <DetailItem
              key={address}
              label={formatMessage({
                id: LangKeys.WalletDetailIncomingAddress,
                defaultMessage: "Incoming Address",
              })}
              classNames={{
                label: classes.label,
                content: classes.detailContent,
              }}
              mb="lg"
            >
              {address}
            </DetailItem>
          ))}
        </Grid.Col>

        <Grid.Col span={3}>
          <DetailItem
            label={formatMessage({
              id: LangKeys.WalletDetailFee,
              defaultMessage: "Fee",
            })}
            ml="auto"
            textAlign="right"
            classNames={{
              label: classes.label,
              content: classes.detailContent,
            }}
            mb="lg"
          >
            <Currency value={row.original.fee} />
          </DetailItem>

          <DetailItem
            label={formatMessage({
              id: LangKeys.WalletDetailHeight,
              defaultMessage: "Height",
            })}
            ml="auto"
            textAlign="right"
            classNames={{
              label: classes.label,
              content: classes.detailContent,
            }}
            mb="lg"
          >
            <Currency value={row.original.height} />
          </DetailItem>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
