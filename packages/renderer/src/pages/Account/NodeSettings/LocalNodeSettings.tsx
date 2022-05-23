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

import { Box, Stack, Grid, Group } from "@mantine/core";
import { joiResolver, useForm } from "@mantine/form";
import { FormattedMessage, useIntl } from "react-intl";
import { showNotification } from "@mantine/notifications";
import { Button } from "@atoms/Buttons";
import { LangKeys } from "@constants/lang";
import { TextInput } from "@atoms/TextInput";
import { useMoneroNodeSettings } from "@hooks/haveno/useMoneroNodeSettings";
import { useSaveMoneroNodeSettings } from "@hooks/haveno/useSaveMoneroNodeSettings";
import { StartStopDaemon } from "./StartStopDaemon";
import type { LocalSettingsFormValues } from "./_hooks";
import { useLocalSettingsValidation } from "./_hooks";
import { transformSettingsRequestToForm } from "./_utils";
import { useEffect } from "react";
import { PasswordInput } from "@atoms/PasswordInput";

export function LocalNodeSettings() {
  const { data: nodeSettings } = useMoneroNodeSettings();
  const { mutate: saveNodeSettings, isLoading: isSaving } =
    useSaveMoneroNodeSettings();
  const intl = useIntl();

  const validation = useLocalSettingsValidation();

  const { getInputProps, onSubmit, setValues } =
    useForm<LocalSettingsFormValues>({
      initialValues: {
        blockchainLocation: "",
        startupFlags: "",
        daemonAddress: "",
        port: "",
        daemonPassword: "",
      },
      validate: joiResolver(validation),
    });

  const handleFormSubmit = (values: LocalSettingsFormValues) => {
    saveNodeSettings(
      {
        local: {
          blockchainPath: values.blockchainLocation,
          startupFlags: values.startupFlags.split(/\s|=/),
          address: values.daemonAddress,
          port: Number(values.port),
          daemonPassword: values.daemonPassword,
        },
      },
      {
        onSuccess: () => {
          showNotification({
            color: "green",
            message: intl.formatMessage({
              id: LangKeys.AccountNodeLocalSaveNotification,
              defaultMessage: "Local node settings updated successfully",
            }),
          });
        },
        onError: (err: Error) => {
          console.dir(err);
          showNotification({
            color: "red",
            message: err.message,
            title: "Something went wrong",
          });
        },
      }
    );
  };

  useEffect(() => {
    if (nodeSettings) {
      setValues(transformSettingsRequestToForm(nodeSettings.toObject()));
    }
  }, [nodeSettings]);

  return (
    <Box>
      <StartStopDaemon />

      <form onSubmit={onSubmit(handleFormSubmit)}>
        <Stack spacing="lg">
          <TextInput
            id="blockchainLocation"
            label={
              <FormattedMessage
                id={LangKeys.AccountNodeFieldBlockchainLocation}
                defaultMessage="Blockchain location"
              />
            }
            {...getInputProps("blockchainLocation")}
          />
          <TextInput
            id="startupFlags"
            label={
              <FormattedMessage
                id={LangKeys.AccountNodeFieldDaemonFlags}
                defaultMessage="Daemon startup flags"
              />
            }
            {...getInputProps("startupFlags")}
          />
          <Grid>
            <Grid.Col span={9}>
              <TextInput
                id="daemonAddress"
                label={
                  <FormattedMessage
                    id={LangKeys.AccountNodeFieldDaemonAddress}
                    defaultMessage="Daemon Address"
                  />
                }
                required
                {...getInputProps("daemonAddress")}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <TextInput
                id="port"
                label={
                  <FormattedMessage
                    id={LangKeys.AccountNodeFieldPort}
                    defaultMessage="Port"
                  />
                }
                required
                {...getInputProps("port")}
              />
            </Grid.Col>
          </Grid>
          <PasswordInput
            id="daemonPassword"
            label="Daemon password"
            required
            {...getInputProps("daemonPassword")}
          />

          <Group position="right" mt="md">
            <Button
              loaderPosition="right"
              loading={isSaving}
              size="md"
              type="submit"
            >
              <FormattedMessage id={LangKeys.Save} defaultMessage="Save" />
            </Button>
          </Group>
        </Stack>
      </form>
    </Box>
  );
}
