import { LangKeys } from "@constants/lang";
import { Title, Text, Stack, Box, createStyles } from "@mantine/core";
import { AccountLayout } from "@templates/AccountLayout";
import { FormattedMessage } from "react-intl";
import { AccountSecurityForm } from "./AccountSecurityForm";

export function AccountSecurity() {
  const { classes } = useStyles();

  return (
    <AccountLayout>
      <Box className={classes.content}>
        <Stack spacing="lg">
          <Title order={4}>
            <FormattedMessage
              id={LangKeys.AccountSecurityTitle}
              defaultMessage={"Account Security"}
            />
          </Title>
          <Text>
            <FormattedMessage
              id={LangKeys.AccountSecurityDesc}
              defaultMessage={
                "Haveno does not store any of your data, this happens solely locally on your device. It’s not possible to restore your password when lost. Please make sure you store a copy of it on a safe place."
              }
            />
          </Text>
          <AccountSecurityForm />
        </Stack>
      </Box>
    </AccountLayout>
  );
}

const useStyles = createStyles(() => ({
  content: {
    maxWidth: "525px",
  },
}));
