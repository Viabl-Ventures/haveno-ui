// =============================================================================
//  Copyright 2022 Haveno
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
// =============================================================================

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
