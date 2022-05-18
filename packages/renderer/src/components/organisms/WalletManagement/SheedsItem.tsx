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

import {
  Box,
  createStyles,
  Group,
  List,
  ListItem,
  Space,
  Stack,
} from "@mantine/core";
import { BodyText } from "@atoms/Typography";
import { useXmrSeed } from "@hooks/haveno/useXmrSeed";

export function SheedsItem() {
  const { classes } = useStyles();
  const { data: xmrSeeds, isLoading } = useXmrSeed();
  const Seeds = xmrSeeds?.split(" ");

  return (
    <Stack>
      <Space h="lg" />
      {isLoading && <BodyText>Loading Wallet Seeds...</BodyText>}
      <List type="ordered">
        {Seeds?.map((label, index) => (
          <Group
            key={index.toPrecision()}
            className={classes.container}
            spacing="sm"
          >
            <ListItem>{label}</ListItem>
          </Group>
        ))}
      </List>
    </Stack>
  );
}

const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.gray[3],
    borderRadius: "0.5rem",
    padding: "0.75rem 1rem",
    width: "15rem",
    marginBottom: "1rem",
    marginRight: "1rem",
    display: "inline-block",
    li: {
      color: theme.colors.gray[6],
    },
    span: {
      color: theme.colors.gray[9],
    },
  },
}));
