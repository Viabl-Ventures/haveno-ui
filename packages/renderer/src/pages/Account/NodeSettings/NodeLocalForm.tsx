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
import { useForm } from "@mantine/form";
import { Button } from "@atoms/Buttons";
import { FormattedMessage } from "react-intl";
import { LangKeys } from "@constants/lang";
import { TextInput } from "@atoms/TextInput";
import { useMoneroNodeSettings } from "@hooks/haveno/useMoneroNodeSettings";
import { useSetMoneroNodeSettings } from "@hooks/haveno/useSetMoneroNodeSettings";
import { showNotification } from "@mantine/notifications";
import { NodeLocalStopDeamon } from "./NodeLocalStopDeamon";

interface NodeLocalFormValues {
  blockchainLocation: string;
  startupFlags: string;
  deamonAddress: string;
  port: string;
}

export function NodeLocalForm() {
  const { data: nodeSettings } = useMoneroNodeSettings();
  const { mutateAsync: updateNodeSettings } = useSetMoneroNodeSettings();

  const form = useForm<NodeLocalFormValues>({
    initialValues: {
      blockchainLocation: nodeSettings?.getBlockchainPath() || "",
      startupFlags: nodeSettings?.getStartupFlagsList().join(", ") || "",
      deamonAddress: "",
      port: "",
    },
  });

  const handleFormSubmit = (values: NodeLocalFormValues) => {
    updateNodeSettings({
      blockchainPath: values.blockchainLocation,
      startupFlags: values.startupFlags.split(", "),
    })
      .then(() => {
        showNotification({
          color: "green",
          message: "Local node settings updated successfully",
        });
      })
      .catch((err) => {
        console.dir(err);
        showNotification({
          color: "red",
          message: err.message,
          title: "Something went wrong",
        });
      });
  };

  return (
    <Box>
      <NodeLocalStopDeamon />

      <form onSubmit={form.onSubmit(handleFormSubmit)}>
        <Stack spacing="lg">
          <TextInput
            id="blockchainLocation"
            label={
              <FormattedMessage
                id={LangKeys.AccountNodeFieldBlockchainLocation}
                defaultMessage="Blockchain location"
              />
            }
            {...form.getInputProps("blockchainLocation")}
          />
          <TextInput
            id="startupFlags"
            label={
              <FormattedMessage
                id={LangKeys.AccountNodeFieldDeamonFlags}
                defaultMessage="Deamon startup flags"
              />
            }
            {...form.getInputProps("startupFlags")}
          />
          <Grid>
            <Grid.Col span={9}>
              <TextInput
                id="deamonAddress"
                label={
                  <FormattedMessage
                    id={LangKeys.AccountNodeFieldDeamonAddress}
                    defaultMessage="Deamon Address"
                  />
                }
                {...form.getInputProps("deamonAddress")}
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
                {...form.getInputProps("port")}
              />
            </Grid.Col>
          </Grid>

          <Group position="right" mt="md">
            <Button size="md" type="submit">
              <FormattedMessage id={LangKeys.Save} defaultMessage="Save" />
            </Button>
          </Group>
        </Stack>
      </form>
    </Box>
  );
}
