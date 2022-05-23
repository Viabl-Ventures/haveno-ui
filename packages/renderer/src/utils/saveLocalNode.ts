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

import { MoneroNodeSettings } from "haveno-ts/dist/protobuf/pb_pb";
import { havenod } from "./havenod";

interface LocalNodeSettings {
  address: string;
  blockchainPath: string;
  daemonPassword: string;
  port: number;
  startupFlags: Array<string>;
}

export async function saveLocalNode(data: LocalNodeSettings) {
  const client = await havenod.getClient();
  let nodeSettings: MoneroNodeSettings | undefined;

  await havenod.resetParams({
    url: `${data.address}:${data.port}`,
    password: data.daemonPassword,
  });

  if (await client.isMoneroNodeRunning()) {
    // read current settings
    nodeSettings = await client.getMoneroNodeSettings();
    console.log("stopping node...");
    // stop the node
    await client.stopMoneroNode();
  }

  if (!nodeSettings) {
    nodeSettings = new MoneroNodeSettings();
  }

  data.blockchainPath && nodeSettings?.setBlockchainPath(data.blockchainPath);
  data.startupFlags && nodeSettings?.setStartupFlagsList(data.startupFlags);

  // start the node with new settings
  console.log("starting node with new settings...");
  await client.startMoneroNode(nodeSettings);

  // save to storage
  await window.electronStore.setLocalNodeSettings({
    blockchainLocation: data.blockchainPath,
    startupFlags: data.startupFlags.join(","),
    address: data.address,
    port: data.port,
    password: data.daemonPassword,
  });
}
