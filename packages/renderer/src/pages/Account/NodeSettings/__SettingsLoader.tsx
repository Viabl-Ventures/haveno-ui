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

import type { FC } from "react";
import { BodyText } from "@atoms/Typography";
import { useMoneroNodeSettings } from "@hooks/haveno/useMoneroNodeSettings";
import { useIsMoneroNodeRunning } from "@hooks/haveno/useIsMoneroNodeRunning";
import { useMoneroRemoteNodes } from "@hooks/haveno/useMoneroRemoteNodes";

export const LocalNodeSettingsBoot: FC = ({ children }) => {
  const { isLoading: isNodeSettingsLoading } = useMoneroNodeSettings();
  const { isLoading: isMoneroNodeIsLoading } = useIsMoneroNodeRunning();

  return isNodeSettingsLoading || isMoneroNodeIsLoading ? (
    <BodyText>Loading settings...</BodyText>
  ) : (
    <>{children}</>
  );
};

export const RemoteNodeSettingsBoot: FC = ({ children }) => {
  const { isLoading: isMoneroRemoteLoading } = useMoneroRemoteNodes();

  return isMoneroRemoteLoading ? (
    <BodyText>Loading settings...</BodyText>
  ) : (
    <>{children}</>
  );
};
