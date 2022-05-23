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

import { useMutation, useQueryClient } from "react-query";
import { QueryKeys } from "@constants/query-keys";
import { saveLocalNode } from "@src/utils/saveLocalNode";
import { saveRemoteNode } from "@src/utils/saveRemoteNode";

interface Variables {
  local?: {
    blockchainPath: string;
    startupFlags: Array<string>;
    address: string;
    port: number;
    daemonPassword: string;
  };
  remote?: {
    address: string;
    port: number;
    login?: string;
    password?: string;
  };
}

export function useSaveMoneroNodeSettings() {
  const queryClient = useQueryClient();

  return useMutation<void, Error, Variables>(
    async (data: Variables) => {
      if (data.local) {
        await saveLocalNode(data.local);
      } else if (data.remote) {
        await saveRemoteNode(data.remote, { apply: true });
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QueryKeys.MoneroNodeSettings);
        queryClient.invalidateQueries(QueryKeys.MoneroNodeIsRunning);
      },
    }
  );
}
