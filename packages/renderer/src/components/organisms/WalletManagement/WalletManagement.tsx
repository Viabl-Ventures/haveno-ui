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

import { Group, Space, Stack } from "@mantine/core";
import { Button } from "@atoms/Buttons";
import { TextInput } from "@atoms/TextInput";
import { FormattedMessage } from "react-intl";
import { LangKeys } from "@constants/lang";
import { showNotification } from "@mantine/notifications";
import { useState } from "react";
import { useLogin } from "@hooks/session/useLogin";
import { useForm } from "@mantine/hooks";
import { SheedsItem } from "./SheedsItem";

export function WalletManagement() {
  const [check, setcheck] = useState(false);
  const { mutate: login } = useLogin();
  const [pvalue, setpvalue] = useState(false);
  const { getInputProps, onSubmit } = useForm<FormValues>({
    initialValues: {
      password: "",
    },
  });
  const ControLayout = () => {
    if (check) {
      return (
        <Stack>
          <SheedsItem />
          <Group position="left">
            <Button
              type="submit"
              onClick={() => {
                setcheck(false);
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
            setcheck(true);
            values.password = "";
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
        <form
          onSubmit={onSubmit(handleSubmit)}
          onChange={() => setpvalue(true)}
        >
          <Stack>
            <Space h="sm" />
            <TextInput
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
              <Button type="submit" disabled={pvalue ? false : true}>
                Reveal Seed Phrase
              </Button>
            </Group>
          </Stack>
        </form>
      );
    }
  };
  return <Stack>{ControLayout()}</Stack>;
}
interface FormValues {
  password: string;
}
