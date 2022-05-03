import { Group, createStyles, Box } from "@mantine/core";
import { NavbarLayout } from "@templates/NavbarLayout";
import { AccountSidebar } from "@molecules/AccountSidebar";

interface AccountContentProps {
  children: JSX.Element | JSX.Element[];
}

function AccountContent({ children }: AccountContentProps) {
  const { classes } = useStyles();

  return (
    <Group className={classes.container} spacing={0}>
      <AccountSidebar />
      <Box className={classes.contentArea}>{children}</Box>
    </Group>
  );
}

interface AccountLayoutProps {
  children: JSX.Element | JSX.Element[];
}

export function AccountLayout({ children }: AccountLayoutProps) {
  return (
    <NavbarLayout>
      <AccountContent>{children}</AccountContent>
    </NavbarLayout>
  );
}

const useStyles = createStyles((theme) => ({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  contentArea: {
    display: "flex",
    flex: 1,
    padding: theme.spacing.sm,
  },
}));
