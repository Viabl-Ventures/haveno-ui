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

import type { DefaultProps } from "@mantine/core";
import { Stack, createStyles, Text } from "@mantine/core";

interface DetailProps extends DefaultProps {
  label?: string;
  children: React.ReactNode | string;
}

export function DetailItem({
  label,
  children,
  classNames,
  className,
  ...other
}: DetailProps) {
  const { classes, cx } = useStyles({}, { name: "DetailItem", classNames });

  return (
    <Stack spacing={0} className={cx(classes.root, className)} {...other}>
      {label && <Text className={classes.label}>{label}</Text>}
      <Text className={classes.content}>{children}</Text>
    </Stack>
  );
}

const useStyles = createStyles((theme) => ({
  root: {},
  label: {
    textTransform: "uppercase",
    fontSize: theme.fontSizes.sm,
    letterSpacing: "0.075rem",
    fontWeight: 600,
    color: theme.colors.gray[6],
  },
  content: {
    fontWeight: 500,
  },
}));
