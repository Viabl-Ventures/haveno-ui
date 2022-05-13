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

import { showNotification } from "@mantine/notifications";
import { useMutation } from "react-query";
import { useHavenoClient } from "./useHavenoClient";

export function useRestoreBackup() {
  const client = useHavenoClient();
  return useMutation(
    async () => {
      const bytes = await window.haveno.getBackupData();
      if (!bytes.length) {
        return;
      }
      await client.restoreAccount(bytes);
      // TODO @ahmed: restart daemon?
    },
    {
      onError: (err: Error) => {
        showNotification({
          color: "red",
          message: err?.message ?? "Unable to restore backup",
          title: "Something went wrong",
        });
      },
    }
  );
}
