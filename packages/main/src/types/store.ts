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

import type { Schema } from "electron-store";

export enum StorageKeys {
  AccountInfo_Password = "accounInfo.password",
  AccountInfo_PrimaryFiat = "accounInfo.primaryFiat",
  Preferences_SelectedNode = "preferences.selectedNode",
  Preferences_RemoteNodes = "preferences.remoteNodes",
  Preferences_LocalNodeSettings = "preferences.localNodeSettings",
}

// TS types for StoreSchema
export interface IStoreSchema {
  [StorageKeys.AccountInfo_Password]: IAccountInfo["password"];
  [StorageKeys.AccountInfo_PrimaryFiat]: IAccountInfo["primaryFiat"];
  [StorageKeys.Preferences_SelectedNode]: IPreferences["selectedNode"];
  [StorageKeys.Preferences_RemoteNodes]: IPreferences["remoteNodes"];
  [StorageKeys.Preferences_LocalNodeSettings]: IPreferences["localNodeSettings"];
}

export interface IAccountInfo {
  password: Buffer;
  primaryFiat: string;
}

export interface AccountInfoDto extends Omit<IAccountInfo, "password"> {
  passwordHash: string;
}

export interface IPreferences {
  selectedNode?: string; // empty for local; id for remote
  remoteNodes: Array<{
    id: string;
    address: string;
    port: number;
    login?: string;
    password?: string;
  }>;
  localNodeSettings: {
    blockchainLocation: string;
    startupFlags: string;
    address: string;
    port: number;
    password: string;
  };
}

// this schema is used by electron-store
// must mirror IStoreSchema
export const StoreSchema: Schema<IStoreSchema> = {
  [StorageKeys.AccountInfo_Password]: {
    type: "string",
  },
  [StorageKeys.AccountInfo_PrimaryFiat]: {
    type: "string",
  },
  [StorageKeys.Preferences_SelectedNode]: {
    type: "string",
  },
  [StorageKeys.Preferences_RemoteNodes]: {
    type: "object",
    items: {
      properties: {
        address: {
          type: "string",
          default: "",
        },
        port: {
          type: "number",
        },
        user: {
          type: "string",
          default: "",
        },
        password: {
          type: "string",
          default: "",
        },
      },
      required: ["isSelected", "address", "port"],
    },
  },
  [StorageKeys.Preferences_LocalNodeSettings]: {
    type: "string",
    properties: {
      blockchainLocation: {
        type: "string",
        default: "",
      },
      startupFlags: {
        type: "string",
        default: "",
      },
      address: {
        type: "string",
        default: "",
      },
      port: {
        type: "number",
      },
      password: {
        type: "string",
        default: "",
      },
    },
    required: ["address", "port", "password"],
  },
};

export interface SetPasswordInput {
  newPassword: string;
}

export interface ChangePasswordInput {
  currentPassword: string;
  newPassword: string;
}
