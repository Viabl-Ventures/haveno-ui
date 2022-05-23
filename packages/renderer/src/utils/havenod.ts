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

import { HavenoClient } from "haveno-ts";
import {
  HAVENO_DAEMON_PASSWORD,
  HAVENO_DAEMON_URL,
} from "@constants/haveno-daemon";

interface ConnectionParams {
  url: string;
  password: string;
}

class Havenod {
  private _params: ConnectionParams | undefined;
  private _client: HavenoClient | undefined;

  constructor() {
    this._params = {
      url: HAVENO_DAEMON_URL,
      password: HAVENO_DAEMON_PASSWORD,
    };
  }

  async resetParams(params: ConnectionParams) {
    if (this._client) {
      console.log("disconnecting");
      await this._client.disconnect();
    }
    this._params = {
      ...params,
    };
    this._client = new HavenoClient(this._params.url, this._params.password);
  }

  async getClient(): Promise<HavenoClient> {
    if (this._client) {
      return this._client;
    }
    if (!this._params) {
      console.log("Connection params not set");
      const preferences = await window.electronStore.getPreferences();
      if (
        !preferences?.localNodeSettings?.address ||
        !preferences?.localNodeSettings?.port
      ) {
        throw new Error("Connection params not set");
      }
      this._params = {
        url: `${preferences.localNodeSettings.address}:${preferences.localNodeSettings.port}`,
        password: preferences.localNodeSettings.password ?? "",
      };
    }
    this._client = new HavenoClient(this._params.url, this._params.password);
    return this._client;
  }
}

export const havenod = new Havenod();
