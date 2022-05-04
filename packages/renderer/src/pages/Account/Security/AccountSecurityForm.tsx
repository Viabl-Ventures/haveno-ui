import { Stack, Box, TextInput, Button, Group } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { AccountSecurityFormSchema } from "./_constants";

/**
 * Account secuiry form.
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
            label="Update account password"
            {...form.getInputProps("password")}
          />
          <TextInput
            required
            label="Repeat new password"
            {...form.getInputProps("confirmPassword")}
          />
          <TextInput
            required
            label="Current password"
            {...form.getInputProps("currentPassword")}
          />
          <Group position="right" mt="md">
            <Button size="md">Save</Button>
          </Group>
        </Stack>
      </form>
    </Box>
  );
}
