import { createStyles, Box, Title } from "@mantine/core";
import { FormattedMessage } from "react-intl";
import { SecondarySidebar } from "@molecules/SecondarySidebar";
import { LangKeys } from "@constants/lang";
import { accountSidebarMenu } from "./_constants";
import { AccountSidebarItem } from "./AccountSidebarItem";

export function AccountSidebar() {
  const { classes } = useStyles();

  return (
    <Box className={classes.accountSidebar}>
      <Title className={classes.title} order={5}>
        <FormattedMessage id={LangKeys.AccountTitle} defaultMessage="Account" />
      </Title>

      <SecondarySidebar>
        {accountSidebarMenu.map((item) => (
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
