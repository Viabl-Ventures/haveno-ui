import type { DefaultProps } from "@mantine/core";
import { Stack, createStyles, Text } from "@mantine/core";

interface DetailProps extends DefaultProps {
  label?: string;
  children: React.ReactNode | string;
}

export function DetailItem({
  label,
  children,
  classNames,
  className,
  ...other
}: DetailProps) {
  const { classes, cx } = useStyles({}, { name: "DetailItem", classNames });

  return (
    <Stack spacing={0} className={cx(classes.root, className)} {...other}>
      {label && <Text className={classes.label}>{label}</Text>}
      <Text className={classes.content}>{children}</Text>
    </Stack>
  );
}

const useStyles = createStyles((theme) => ({
  root: {},
  label: {
    textTransform: "uppercase",
    fontSize: theme.fontSizes.sm,
    letterSpacing: "0.075rem",
    fontWeight: 600,
    color: theme.colors.gray[6],
  },
  content: {
    fontWeight: 500,
  },
}));
