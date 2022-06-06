import type { ReactNode } from "react";
import { Box, BoxProps, createStyles } from "@mantine/core";

interface AmountChangeProps {
  children: ReactNode;
  positive?: boolean;
  negative?: boolean;
}

interface AmountChangeStyleProps {
  positive?: boolean;
  negative?: boolean;
}

export function AmountChange({
  children,
  positive,
  negative,
}: AmountChangeProps) {
  const { classes } = useStyles({
    positive,
    negative,
  });

  return <Box className={classes.root}>{children}</Box>;
}

const useStyles = createStyles(
  (theme, { position, negative }: AmountChangeStyleProps) => ({
    root: {
      color: theme.colors.red,
    },
  })
);
