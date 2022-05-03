import { createStyles, Box, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import {
  SecondarySidebar,
  SecondarySidebarItem,
} from "@molecules/SecondarySidebar";
import { ROUTES } from "@constants/routes";
import { useNavLinkActive } from "@src/hooks/useNavLinkActive";
import { LangKeys } from "@constants/lang";

interface AccountSidebarItem {
  label: string;
  route: string;
}
const accountSidebarMenu = [
  {
    label: "Payment Accounts",
    route: ROUTES.AccountPaymentAccounts,
  },
  {
    label: "Node Settings",
    route: ROUTES.AccountNodeSettings,
  },
  {
    label: "Security",
    route: ROUTES.AccountSecurity,
  },
  {
    label: "Wallet",
    route: ROUTES.AccountWallet,
  },
  {
    label: "Backup",
    route: ROUTES.AccountBackup,
  },
] as AccountSidebarItem[];

interface AccountSidebarItemProps {
  label: string;
  route: string;
}

function AccountSidebarItem({ label, route }: AccountSidebarItemProps) {
  const isActive = useNavLinkActive({ to: route });
  const navigate = useNavigate();

  return (
    <SecondarySidebarItem
      key={label}
      label={label}
      isActive={isActive}
      onClick={() => {
        navigate(route);
      }}
    />
  );
}

export function AccountSidebar() {
  const { classes } = useStyles();

  return (
    <Box className={classes.accountSidebar}>
      <Title className={classes.title} order={5}>
        <FormattedMessage id={LangKeys.AccountTitle} defaultMessage="Account" />
      </Title>

      <SecondarySidebar>
        {accountSidebarMenu.map((item: AccountSidebarItem) => (
          <AccountSidebarItem
            key={item.label}
            label={item.label}
            route={item.route}
          />
        ))}
      </SecondarySidebar>
    </Box>
  );
}

const useStyles = createStyles((theme) => ({
  accountSidebar: {
    paddingLeft: theme.spacing.lg,
    paddingRight: theme.spacing.lg,
    paddingTop: theme.spacing.md,
  },
  title: {
    marginBottom: theme.spacing.md,
  },
}));
