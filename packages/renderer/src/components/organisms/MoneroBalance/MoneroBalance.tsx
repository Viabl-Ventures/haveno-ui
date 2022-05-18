import { Group, createStyles } from "@mantine/core";
import { ReactComponent as MoneroIcon } from "@assets/monero.svg";
import { DetailItem } from "@atoms/DetailItem";

const useStyles = createStyles((theme) => ({
  root: {
    border: `1px solid ${theme.colors.gray[3]}`,
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    borderRadius: theme.radius.md,
  },
  moneroIcon: {
    height: 32,
    width: 32,
    marginLeft: theme.spacing.xs,
    marginRight: theme.spacing.xl,
  },
  content: {
    gap: theme.spacing.xl * 1.5,
  },
}));

interface MoneroBalanceProps {
  children: React.ReactNode;
}
export function MoneroBalance({ children }: MoneroBalanceProps) {
  const { classes } = useStyles();

  return (
    <Group className={classes.root} spacing={0}>
      <MoneroIcon className={classes.moneroIcon} />
      <Group className={classes.content}>{children}</Group>
    </Group>
  );
}

interface MoneroBalanceDetail {
  label: string;
  children: React.ReactNode;
}

MoneroBalance.Detail = MoneroBalanceDetail;

function MoneroBalanceDetail({ ...props }: MoneroBalanceDetail) {
  return <DetailItem {...props} />;
}
