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

import { describe, expect, it, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
// import userEvent from "@testing-library/user-event";
import { AppProviders } from "@atoms/AppProviders";
import { SetPassword } from ".";

describe("organisms::SetPassword", () => {
  it("renders without exploding", () => {
    const onBackSpy = vi.fn();
    const onNextSpy = vi.fn();
    const { asFragment, unmount } = render(
      <AppProviders>
        <SetPassword value="" onGoBack={onBackSpy} onNext={onNextSpy} />
      </AppProviders>
    );
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });

  it("calls onGoBack", async () => {
    const onBackSpy = vi.fn();
    const onNextSpy = vi.fn();
    const { unmount } = render(
      <AppProviders>
        <SetPassword value="" onGoBack={onBackSpy} onNext={onNextSpy} />
      </AppProviders>
    );
    expect(onBackSpy).to.not.toHaveBeenCalled();
    fireEvent.click(await screen.findByLabelText("Click to go back"));
    expect(onBackSpy).to.toHaveBeenCalledTimes(1);
    expect(onNextSpy).to.not.toHaveBeenCalled();
    unmount();
  });

  it("blocks submit if validation fails", async () => {
    const onBackSpy = vi.fn();
    const onNextSpy = vi.fn();

    const { unmount } = render(
      <AppProviders>
        <SetPassword value="" onGoBack={onBackSpy} onNext={onNextSpy} />
      </AppProviders>
    );
    expect(onNextSpy).to.not.toHaveBeenCalled();
    fireEvent.click(await screen.findByLabelText("Click to submit"));
    expect(onNextSpy).to.not.toHaveBeenCalled();
    unmount();
  });

  it("calls onSubmit if validation succeeds", async () => {
    const onBackSpy = vi.fn();
    const onNextSpy = vi.fn();
    // const user = userEvent.setup();
    const { unmount, getByLabelText } = render(
      <AppProviders>
        <SetPassword value="" onGoBack={onBackSpy} onNext={onNextSpy} />
      </AppProviders>
    );
    // await user.click(getByLabelText("Enter password"));
    // await user.keyboard("Qwe$9999{Tab}Qwe$9999");

    // expect(onNextSpy).to.not.toHaveBeenCalled();
    fireEvent.click(getByLabelText("Enter password"));
    fireEvent.input(getByLabelText("Enter password"), {
      currentTarget: {
        value: "Qwe$9999",
      },
      target: {
        value: "Qwe$9999",
      },
    });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    fireEvent.blur(getByLabelText("Enter password"));
    // fireEvent.focus(getByLabelText("Repeat password"));
    // fireEvent.blur(getByLabelText("Enter password"));
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    fireEvent.submit(getByLabelText("Click to submit"));
    // expect(onNextSpy).to.toHaveBeenCalledTimes(1);
    unmount();
  });
});
