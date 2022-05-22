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

import type { TabsProps as MTabsProps } from "@mantine/core";
import { Tabs as MTabs, Tab as MTab, createStyles } from "@mantine/core";

export function Tabs({ ...props }: MTabsProps) {
  const style = useStyles();

  return <MTabs classNames={style.classes} variant="unstyled" {...props} />;
}

Tabs.Tab = MTab;

const useStyles = createStyles((theme, _undefined, getRef) => {
  const tabActiveRef = getRef("tabActive");

  return {
    tabsList: {
      borderBottom: `2px solid ${theme.colors.gray[3]}`,
    },
    tabControl: {
      height: 32,
      textTransform: "uppercase",
      fontWeight: 700,
      letterSpacing: 0.8,
      color: theme.colors.gray[6],
      borderBottom: "2px solid transparent",
      marginBottom: -2,

      "&:not(:first-child)": {
        marginLeft: 6,
      },
      [`&.${tabActiveRef}`]: {
        color: theme.colors.dark[9],
        borderBottomColor: theme.primaryColor,
      },
    },
  };
});
