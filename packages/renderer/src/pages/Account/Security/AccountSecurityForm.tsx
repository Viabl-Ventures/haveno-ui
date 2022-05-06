import { LangKeys } from "@constants/lang";
import { Stack, Box, TextInput, Button, Group } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { FormattedMessage } from "react-intl";
import { AccountSecurityFormSchema } from "./_constants";

/**
 * Account security form.
 */
export function AccountSecurityForm() {
  const form = useForm({
    initialValues: {
      currentPassword: "",
      password: "",
      confirmPassword: "",
    },
    schema: yupResolver(AccountSecurityFormSchema),
  });

  return (
    <Box>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Stack spacing="lg">
          <TextInput
            required
            label={
              <FormattedMessage
                id={LangKeys.AccountSecurityFieldPassword}
                defaultMessage={"Password"}
              />
            }
            {...form.getInputProps("password")}
          />
          <TextInput
            required
            label={
              <FormattedMessage
                id={LangKeys.AccountSecurityFieldRepeatPassword}
                defaultMessage={"Repeat new password"}
              />
            }
            {...form.getInputProps("confirmPassword")}
          />
          <TextInput
            required
            label={
              <FormattedMessage
                id={LangKeys.AccountSecurityFieldCurrentPassword}
                defaultMessage={"Current password"}
              />
            }
            {...form.getInputProps("currentPassword")}
          />
          <Group position="right" mt="md">
            <Button size="md">
              <FormattedMessage id={LangKeys.Save} defaultMessage={"Save"} />
            </Button>
          </Group>
        </Stack>
      </form>
    </Box>
  );
}
