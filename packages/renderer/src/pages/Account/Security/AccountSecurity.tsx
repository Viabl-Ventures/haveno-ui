import { LangKeys } from "@constants/lang";
import { Title, Text, Stack, Box, createStyles, Group } from "@mantine/core";
import { AccountLayout } from "@templates/AccountLayout";
import { FormattedMessage } from "react-intl";
import { AccountSecurityForm } from "./AccountSecurityForm";
import { WIDTH } from "./_constants";

function AccountSecurityHeader() {
  return (
    <Group spacing={"sm"}>
      <Title order={3}>
        <FormattedMessage
          id={LangKeys.AccountSecurityTitle}
          defaultMessage={"Account Security"}
        />
      </Title>
      <Text size={"md"}>
        <FormattedMessage
          id={LangKeys.AccountSecurityDesc}
          defaultMessage={
            "Haveno does not store any of your data, this happens solely locally on your device. It’s not possible to restore your password when lost. Please make sure you store a copy of it on a safe place."
          }
        />
      </Text>
    </Group>
  );
}

export function AccountSecurity() {
  const { classes } = useStyles();

  return (
    <AccountLayout>
      <Box className={classes.content}>
        <Stack spacing="lg">
          <AccountSecurityHeader />
          <AccountSecurityForm />
        </Stack>
      </Box>
    </AccountLayout>
  );
}

const useStyles = createStyles(() => ({
  content: {
    maxWidth: WIDTH,
  },
}));
