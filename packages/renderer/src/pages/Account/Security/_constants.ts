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

import * as Yup from "yup";

export const WIDTH = 475;
const MIN_PASSWORD_CHARS = 8;

export const AccountSecurityFormSchema = Yup.object().shape({
  password: Yup.string()
    .required("No password provided.")
    .min(
      MIN_PASSWORD_CHARS,
      `Password is too short - should be ${MIN_PASSWORD_CHARS} chars minimum.`
    )
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  currentPassword: Yup.string().required("Current password is required"),
});
