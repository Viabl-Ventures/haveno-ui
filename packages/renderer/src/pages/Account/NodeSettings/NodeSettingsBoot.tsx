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

import type { ReactNode } from "react";
import { useMoneroNodeSettings } from "@hooks/haveno/useMoneroNodeSettings";
import { BodyText } from "@atoms/Typography";
import { useIsMoneroNodeRunning } from "@hooks/haveno/useIsMoneroNodeRunning";

interface NodeSettingsBootProps {
  children: ReactNode;
}

export function LocalNodeSettingsBoot({ children }: NodeSettingsBootProps) {
  const { isLoading: isNodeSettingsLoading } = useMoneroNodeSettings();
  const { isLoading: isMoneroNodeIsLoading } = useIsMoneroNodeRunning();

  return isNodeSettingsLoading || isMoneroNodeIsLoading ? (
    <BodyText>Loading settings...</BodyText>
  ) : (
    <>{children}</>
  );
}
