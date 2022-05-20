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

import { useState } from "react";
import { useForm } from "@mantine/hooks";
import { Group, Space, Stack } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { Button } from "@atoms/Buttons";
import { TextInput } from "@atoms/TextInput";
import { FormattedMessage } from "react-intl";
import { LangKeys } from "@constants/lang";
import { WalletItem } from "./WalletItem";
import { useValidatePassword } from "@hooks/haveno/useValidatePassword";

export function WalletManagement() {
  const [isRevealed, setRevealed] = useState(false);
  const { mutate: login } = useValidatePassword();
  const { getInputProps, onSubmit, values, reset } = useForm<FormValues>({
    initialValues: {
      password: "",
    },
  });
  const ControlLayout = () => {
    if (isRevealed) {
      return (
        <Stack>
          <WalletItem />
          <Group position="left">
            <Button
              type="submit"
              onClick={() => {
                setRevealed(false);
              }}
            >
              Hide Seed Phrase
            </Button>
          </Group>
        </Stack>
      );
    } else {
      const handleSubmit = (values: FormValues) => {
        login(values, {
          onSuccess: () => {
            setRevealed(true);
            reset();
          },
          onError: (err) => {
            showNotification({
              title: "Invalid Password",
              message: err.message,
              color: "red",
            });
          },
        });
      };
      return (
        <form onSubmit={onSubmit(handleSubmit)}>
          <Stack>
            <Space h="sm" />
            <TextInput
              autoFocus
              id="password"
              type="password"
              required
              label={
                <FormattedMessage
                  id={LangKeys.AccountWalletPassword}
                  defaultMessage="Password"
                />
              }
              {...getInputProps("password")}
            />
            <Space h="lg" />
            <Group position="right">
              <Button type="submit" disabled={values.password ? false : true}>
                Reveal Seed Phrase
              </Button>
            </Group>
          </Stack>
        </form>
      );
    }
  };

  return (
    <Stack>
      <ControlLayout />
    </Stack>
  );
}

interface FormValues {
  password: string;
}
