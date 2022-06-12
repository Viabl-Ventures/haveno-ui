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

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Tabs } from "@mantine/core";
import { MarketBuySellSwitch } from ".";

describe("molecules::MarketBuySellSwitch", () => {
  it("renders without exploding", () => {
    const { asFragment, unmount } = render(
      <MarketBuySellSwitch>
        <Tabs.Tab label="Sell XMR" />
        <Tabs.Tab label="Buy XMR" />
      </MarketBuySellSwitch>
    );
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });

  it("renders all tabs", () => {
    const { unmount } = render(
      <MarketBuySellSwitch>
        <Tabs.Tab label="Sell XMR" />
        <Tabs.Tab label="Buy XMR" />
      </MarketBuySellSwitch>
    );
    expect(screen.queryByText("Sell XMR")).toBeInTheDocument();
    expect(screen.queryByText("Buy XMR")).toBeInTheDocument();
    unmount();
  });
});
