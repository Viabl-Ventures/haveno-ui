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
import { Box, createStyles, Stack } from "@mantine/core";
import { BodyText } from "@atoms/Typography";
import { SyncStatusOptions } from "./_constants";

export function SyncStatus() {
  const { classes, cx } = useStyles();
  const [syncStatus] = useState<SyncStatusOptions>(SyncStatusOptions.Full);
  return (
    <Stack>
      <Box
        component="span"
        className={cx({
          [classes.syncedot]: syncStatus === SyncStatusOptions.Full,
          [classes.notSyncedot]: syncStatus === SyncStatusOptions.NotSynced,
        })}
      />
      <BodyText
        heavy
        className={cx({
          [classes.synced]: syncStatus === SyncStatusOptions.Full,
          [classes.notSynced]: syncStatus === SyncStatusOptions.NotSynced,
        })}
      >
        {syncStatus}
      </BodyText>
    </Stack>
  );
}

const useStyles = createStyles((theme) => ({
  synced: {
    bottom: 5,
    display: "block",
    fontSize: "0.725rem",
    fontWeight: 600,
    marginBottom: 5,
    marginLeft: 40,
    position: "absolute",
  },
  notSynced: {
    bottom: 5,
    color: theme.colors.gray[9],
    display: "block",
    fontSize: "0.725rem",
    fontWeight: 600,
    marginBottom: 5,
    marginLeft: 40,
    position: "absolute",
  },
  syncedot: {
    backgroundColor: theme.colors.green[4],
    borderRadius: 50,
    bottom: 16,
    height: 8,
    marginLeft: 20,
    position: "absolute",
    width: 8,
  },
  notSyncedot: {
    backgroundColor: theme.colors.red[4],
    borderRadius: 50,
    bottom: 16,
    height: 8,
    marginLeft: 20,
    position: "absolute",
    width: 8,
  },
}));
