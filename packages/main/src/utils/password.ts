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

import { randomBytes, scrypt, timingSafeEqual } from "crypto";

const SALT_LENGTH = 32;
const KEY_LENGTH = 64;

export async function hashPassword(plainText: string): Promise<string> {
  const salt = randomBytes(SALT_LENGTH).toString("hex");
  return new Promise((resolve, reject) => {
    scrypt(plainText, salt, KEY_LENGTH, (err, derivedKey) => {
      if (err) {
        return reject(err);
      }
      resolve(`${salt}:${derivedKey.toString("hex")}`);
    });
  });
}

export async function verifyPassword(
  plainText: string,
  storedHash: string
): Promise<boolean> {
  const [salt, key] = storedHash.split(":");
  return new Promise((resolve, reject) => {
    const origKey = Buffer.from(key, "hex");
    scrypt(plainText, salt, KEY_LENGTH, (err, derivedKey) => {
      if (err) {
        return reject(err);
      }
      return timingSafeEqual(origKey, derivedKey);
    });
  });
}
