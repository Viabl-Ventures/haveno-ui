import type { MouseEventHandler } from "react";
import { useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import QRCode from "react-qr-code";
import { useModals } from "@mantine/modals";
import { Anchor, Box, createStyles, Group, Skeleton } from "@mantine/core";
import { DetailItem } from "@atoms/DetailItem";
import { LangKeys } from "@constants/lang";
import { copyTextToClipboard } from "@utils/copy-to-clipboard";

interface AddressCardProps {
  label?: string;
  address: string;
  primary?: boolean;
  onCopyClick?: MouseEventHandler;
  onQRClick?: MouseEventHandler;
}

interface AddressCardStyleProps {
  primary: boolean;
}
type AddressCardSkeletonProps = Pick<AddressCardProps, "label" | "primary">;

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
  detailItemRoot: {
    width: "100%",
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
}));

const COPY_TEXT_TIMEOUT = 500;

export function AddressCard({
  label,
  address,
  primary = false,
}: AddressCardProps) {
  const modals = useModals();
  const { classes } = useStyles({ primary });
  const [isCopied, setIsCopied] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCopyClick = () => {
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

  const handleQRClick = () => {
    modals.openConfirmModal({
      children: (
        <Box>
          <DetailItem label="Primary Address">{address}</DetailItem>
          <Box className={classes.qrRoot}>
            <QRCode value={address} size={370} />
          </Box>
        </Box>
      ),
      labels: { confirm: "Confirm", cancel: "Cancel" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => console.log("Confirmed"),
      size: 690,
      withCloseButton: false,
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
