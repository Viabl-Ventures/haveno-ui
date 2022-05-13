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

import { Button } from "@atoms/Buttons";
import { BodyText, Heading } from "@atoms/Typography";
import { LangKeys } from "@constants/lang";
import { Box, createStyles, Stack } from "@mantine/core";
import { AccountLayout } from "@templates/AccountLayout";
import { FormattedMessage } from "react-intl";

const useStyles = createStyles((theme) => ({
  title: {
    marginBottom: theme.spacing.md,
  },
  desc: {
    marginBottom: theme.spacing.lg,
  },
}));

export function AccountBackup() {
  const { classes } = useStyles();

  return (
    <AccountLayout>
      <Stack spacing={40}>
        <Box>
          <Heading
            className={classes.title}
            order={3}
            stringId={LangKeys.AccountBackupDownloadTitle}
          >
            Download your backup file
          </Heading>

          <BodyText
            stringId={LangKeys.AccountBackupDownloadDesc}
            className={classes.desc}
          >
            To be able to restore your Haveno account you need to create a
            backup file of your account. Keep it somewhere safe.
          </BodyText>

          <Button>
            <FormattedMessage
              id={LangKeys.AccountBackupDownloadBtn}
              defaultMessage="Download backup file"
            />
          </Button>
        </Box>

        <Box>
          <Heading
            order={3}
            stringId={LangKeys.AccountBackupRestoreTitle}
            className={classes.title}
          >
            Restore an existing backup file
          </Heading>

          <BodyText
            stringId={LangKeys.AccountBackupRestoreBtn}
            className={classes.desc}
          >
            When you restore an existing backup file of your Haveno account, you
            will lose the account you’re using currently. Please use with
            caution.
          </BodyText>

          <Button flavor="neutral">
            <FormattedMessage
              id={LangKeys.AccountBackupRestoreBtn}
              defaultMessage="Restore backup"
            />
          </Button>
        </Box>
      </Stack>
    </AccountLayout>
  );
}
