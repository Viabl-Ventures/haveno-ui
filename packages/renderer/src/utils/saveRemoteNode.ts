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

import { UrlConnection } from "haveno-ts";
import shortId from "shortid";
import { havenod } from "./havenod";

interface RemoteNodeSettings {
  address: string;
  port: number;
  user?: string;
  password?: string;
}

interface Options {
  apply?: boolean;
}

export async function saveRemoteNode(
  data: RemoteNodeSettings,
  options: Options = {}
) {
  const id = shortId.generate();
  // save to storage
  await window.electronStore.saveRemoteNode({
    id,
    address: data.address,
    port: data.port,
    password: data.password,
  });
  if (options?.apply) {
    // connect to the newly added remote node
    const client = await havenod.getClient();
    const url = new URL(data.address);
    if (data.port) {
      url.port = data.port + "";
    }
    const conn = new UrlConnection().setUrl(url.toString()).setPriority(1);
    if (data.user) {
      conn.setUsername(data.user);
    }
    if (data.password) {
      conn.setPassword(data.password);
    }
    await client.setMoneroConnection(conn);
    await window.electronStore.setRemoteNode(id);
  }
}
