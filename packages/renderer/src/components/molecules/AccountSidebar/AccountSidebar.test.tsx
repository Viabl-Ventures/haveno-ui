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
import { render } from "@testing-library/react";
import { Routes, HashRouter, Route } from "react-router-dom";
import { AppProviders } from "@atoms/AppProviders";
import { AccountSidebar } from "./AccountSidebar";

describe("molecules::AccountSidebar", () => {
  it("renders without exploding", () => {
    const { asFragment } = render(
      <AppProviders>
        <HashRouter>
          <Routes>
            <Route path={"/"} element={<AccountSidebar />} />
          </Routes>
        </HashRouter>
      </AppProviders>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
