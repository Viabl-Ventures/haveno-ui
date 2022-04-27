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

import { Stack, createStyles, Navbar } from "@mantine/core";

interface SubSidebarProps {
  children: JSX.Element[];
}

/**
 * Sub-sidebar.
 * @param   {SubSidebarProps}
 * @returns {JSX.Element}
 */
export function SubSidebar({ children }: SubSidebarProps) {
  const { classes } = useStyles();

  return (
    <Stack className={classes.container}>
      <Navbar>{children}</Navbar>
    </Stack>
  );
}

const useStyles = createStyles((theme) => ({
  container: {},
}));
