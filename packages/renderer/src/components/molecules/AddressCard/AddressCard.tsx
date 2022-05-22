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

import type { MouseEventHandler } from "react";
import { useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import type { OpenConfirmModal } from "@mantine/modals/lib/context";
import QRCode from "react-qr-code";
import { useModals } from "@mantine/modals";
import {
  Anchor,
  Box,
  createStyles,
  Group,
  SimpleGrid,
  Skeleton,
} from "@mantine/core";
import { DetailItem } from "@atoms/DetailItem";
import { Button } from "@atoms/Buttons";
import { LangKeys } from "@constants/lang";
import { copyTextToClipboard } from "@utils/copy-to-clipboard";

interface AddressCardProps {
  label?: string;
  address: string;
  primary?: boolean;

  onCopyClick?: MouseEventHandler;
  onQRClick?: MouseEventHandler;
  onReturnClick?: MouseEventHandler;
  onQRDownloadClick?: MouseEventHandler;
  qrModalProps?: OpenConfirmModal;
}

interface AddressCardStyleProps {
  primary?: boolean;
}
type AddressCardSkeletonProps = Pick<AddressCardProps, "label" | "primary">;

const COPY_TEXT_TIMEOUT = 500;

const useStyles = createStyles((theme, { primary }: AddressCardStyleProps) => ({
  root: {
    background: primary ? theme.colors.gray[2] : theme.white,
    border: `1px solid ${
      primary ? theme.colors.gray[2] : theme.colors.gray[3]
    }`,
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    borderRadius: theme.radius.md,
  },
  contentGroup: {
    minWidth: "100%",
  },
  address: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    width: "100%",
  },
  addressBtns: {
    marginLeft: "auto",
  },
  qrRoot: {
    marginTop: theme.spacing.xl,
    textAlign: "center",
  },
  qrModalAddress: {
    fontSize: theme.fontSizes.lg,
  },
}));

export function AddressCard({
  label,
  address,
  primary = false,
  onCopyClick,
  onQRClick,
  onReturnClick,
  onQRDownloadClick,
  qrModalProps,
}: AddressCardProps) {
  const modals = useModals();
  const { classes } = useStyles({ primary });
  const [isCopied, setIsCopied] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCopyClick =
    onCopyClick &&
    function () {
      copyTextToClipboard(address).then(() => {
        setIsCopied(true);

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
          setIsCopied(false);
        }, COPY_TEXT_TIMEOUT);
      });
    };

  const handleQRClick =
    onQRClick &&
    function () {
      modals.openModal({
        children: (
          <Box>
            <DetailItem
              classNames={{ content: classes.qrModalAddress }}
              label="Primary Address"
            >
              {address}
            </DetailItem>
            <Box className={classes.qrRoot}>
              <QRCode value={address} size={370} />
            </Box>

            <SimpleGrid cols={2} mt="xl">
              <Button flavor="neutral" onClick={onReturnClick}>
                Return
              </Button>
              <Button onClick={onQRDownloadClick}>Download QR</Button>
            </SimpleGrid>
          </Box>
        ),
        labels: { confirm: "Confirm", cancel: "Cancel" },
        onCancel: () => console.log("Cancel"),
        onConfirm: () => console.log("Confirmed"),
        size: 690,
        withCloseButton: false,
        ...qrModalProps,
      });
    };

  return (
    <Group className={classes.root}>
      <DetailItem label={label} sx={{ width: "100%" }}>
        <Group noWrap className={classes.contentGroup}>
          <Box className={classes.address}>{address}</Box>
          <Group noWrap className={classes.addressBtns}>
            <Anchor onClick={handleCopyClick} underline>
              {!isCopied ? (
                <FormattedMessage
                  id={LangKeys.AccountCardCopyBtn}
                  defaultMessage="Copy"
                />
              ) : (
                <FormattedMessage
                  id={LangKeys.AccountCardCopiedBtn}
                  defaultMessage="Copied"
                />
              )}
            </Anchor>
            <Anchor onClick={handleQRClick} underline>
              <FormattedMessage
                id={LangKeys.AccountCardQRBtn}
                defaultMessage="QR"
              />
            </Anchor>
          </Group>
        </Group>
      </DetailItem>
    </Group>
  );
}

export function AddressCardSkeleton({
  label,
  primary,
}: AddressCardSkeletonProps) {
  const { classes } = useStyles({ primary });

  return (
    <Group className={classes.root}>
      <DetailItem label={label}>
        <Group noWrap className={classes.contentGroup}>
          <Box className={classes.address}>
            <Skeleton width="60%" height={8} mt="xs" />
          </Box>
        </Group>
      </DetailItem>
    </Group>
  );
}
