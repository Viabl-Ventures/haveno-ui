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

import { ipcMain, safeStorage } from "electron";
import Store from "electron-store";
import type { AccountInfoDto, IPreferences, IStoreSchema } from "@src/types";
import { StorageKeys } from "@src/types";
import { IpcChannels, StoreSchema } from "@src/types";
import {
  createAuthToken,
  hashPassword,
  verifyAuthAuthToken,
  verifyPassword,
} from "@src/utils/password";

const store = new Store<IStoreSchema>({ schema: StoreSchema });

export function registerStoreHandlers() {
  ipcMain.handle(IpcChannels.SetPassword, async (_, value: string) => {
    const hash = await hashPassword(value);
    if (!hash) {
      throw new Error("Unable to save password");
    }
    store.set(
      StorageKeys.AccountInfo_Password,
      safeStorage.encryptString(hash)
    );
  });

  ipcMain.handle(IpcChannels.SetPrimaryFiat, (_, value: string) => {
    store.set(StorageKeys.AccountInfo_PrimaryFiat, value);
  });

  ipcMain.handle(IpcChannels.GetAccountInfo, (): AccountInfoDto | null => {
    const encryptedPassword = store.get(StorageKeys.AccountInfo_Password);
    if (!encryptedPassword) {
      return null;
    }
    return {
      passwordHash: safeStorage.decryptString(Buffer.from(encryptedPassword)),
      primaryFiat: store.get(StorageKeys.AccountInfo_PrimaryFiat),
    };
  });

  // returns null if password is incorrect. returns jwt if password is correct
  ipcMain.handle(
    IpcChannels.VerifyPassword,
    async (_, plainText: string): Promise<string | null> => {
      const encryptedPassword = store.get(StorageKeys.AccountInfo_Password);
      if (!encryptedPassword) {
        return null;
      }
      const hash = safeStorage.decryptString(Buffer.from(encryptedPassword));
      if (!(await verifyPassword(plainText, hash))) {
        return null;
      }
      return createAuthToken(hash);
    }
  );

  ipcMain.handle(
    IpcChannels.VerifyAuthToken,
    async (_, token: string): Promise<boolean> => {
      const encryptedPassword = store.get(StorageKeys.AccountInfo_Password);
      if (!encryptedPassword) {
        return false;
      }
      const hash = safeStorage.decryptString(Buffer.from(encryptedPassword));
      return verifyAuthAuthToken(token, hash);
    }
  );

  ipcMain.handle(IpcChannels.SetMoneroNode, async (_, value: string) => {
    store.set(StorageKeys.Preferences_MoneroNode, value);
  });

  ipcMain.handle(
    IpcChannels.GetPreferences,
    async (): Promise<IPreferences> => {
      return {
        moneroNode: store.get(StorageKeys.Preferences_MoneroNode),
      };
    }
  );
}
