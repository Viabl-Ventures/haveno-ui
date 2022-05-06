import { FormattedMessage } from "react-intl";
import { Stack, Box, Group } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { TextInput } from "@atoms/TextInput";
import { LangKeys } from "@constants/lang";
import { AccountSecurityFormSchema } from "./_constants";
import { Button } from "@atoms/Buttons";

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
            id={"password"}
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
            id={"confirmPassword"}
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
            id={"currentPassword"}
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
            <Button size="md" type={"submit"}>
              <FormattedMessage id={LangKeys.Save} defaultMessage={"Save"} />
            </Button>
          </Group>
        </Stack>
      </form>
    </Box>
  );
}
