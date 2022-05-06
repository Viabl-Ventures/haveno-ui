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
