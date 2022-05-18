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

import { Stack } from "@mantine/core";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { DetailItem } from "./DetailItem";

export default {
  title: "atoms/DetailItem",
  component: DetailItem,
} as ComponentMeta<typeof DetailItem>;

const Template: ComponentStory<typeof DetailItem> = () => {
  return (
    <Stack spacing="xl">
      <DetailItem label="Transaction ID">
        a1b848fdf7fb77f1dae266331d23c522db267ced63566a6e35800421c988d9f1
      </DetailItem>

      <DetailItem label="Transaction KEY">
        a1b848fdf7fb77f1dae266331d23c522db267ced63566a6e35800421c988d9f1
      </DetailItem>

      <DetailItem label="RECEIPIENT ADDRESS">
        a1b848fdf7fb77f1dae266331d23c522db267ced63566a6e35800421c988d9f1
      </DetailItem>
    </Stack>
  );
};

export const Default = Template.bind({});

Default.args = {};
