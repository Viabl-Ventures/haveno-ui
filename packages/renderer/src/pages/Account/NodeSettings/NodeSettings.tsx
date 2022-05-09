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

import { Text, Title, Stack, Box, createStyles } from "@mantine/core";
import { FormattedMessage } from "react-intl";
import { AccountLayout } from "@templates/AccountLayout";
import { LangKeys } from "@constants/lang";
import { NodeSettingsSwitch } from "./NodeSettingsSwitch";
import { WIDTH } from "./_constants";

export function AccountNodeSettings() {
  const { classes } = useStyles();

  return (
    <AccountLayout>
      <Box className={classes.content}>
        <Stack spacing="sm">
          <Title order={3}>
            <FormattedMessage
              id={LangKeys.AccountNodeSettingsTitle}
              defaultMessage={"Your node settings"}
            />
          </Title>
          <Text size={"md"} className={classes.paragraph}>
            <FormattedMessage
              id={LangKeys.AccountNodeSettingsDesc}
              defaultMessage={
                "Using a local node is recommended, but does require loading the entire blockchain. Choose ‘remote node’ if you prefer a faster but less secure experience."
              }
            />
          </Text>
          <NodeSettingsSwitch />
        </Stack>
      </Box>
    </AccountLayout>
  );
}

const useStyles = createStyles((theme) => ({
  content: {
    maxWidth: WIDTH,
  },
  paragraph: {
    marginBottom: theme.spacing.xl,
  },
}));
