import type { MouseEventHandler } from "react";
import { FormattedMessage } from "react-intl";
import { Anchor, Box, createStyles, Group } from "@mantine/core";
import { DetailItem } from "@atoms/DetailItem";
import { LangKeys } from "@constants/lang";

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
  address: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  addressBtns: {
    marginLeft: "auto",
  },
}));

export function AddressCard({
  label,
  address,
  primary = false,
  onCopyClick,
  onQRClick,
}: AddressCardProps) {
  const { classes } = useStyles({ primary });

  return (
    <Group className={classes.root}>
      <DetailItem label={label}>
        <Group noWrap>
          <Box className={classes.address}>{address}</Box>
          <Group noWrap className={classes.addressBtns}>
            <Anchor onClick={onCopyClick} underline>
              <FormattedMessage
                id={LangKeys.AccountCardCopyBtn}
                defaultMessage="Copy"
              />
            </Anchor>
            <Anchor onClick={onQRClick} underline>
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
