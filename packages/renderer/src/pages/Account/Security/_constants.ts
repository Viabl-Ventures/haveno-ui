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

// The minimum characters that should password field contain.
const MIN_PASSWORD_CHARS = 8;

const getPasswordRegex = () => {
  return RegExp(
    `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{${MIN_PASSWORD_CHARS},})`,
    "g"
  );
};

export const AccountSecurityFormSchema = Yup.object().shape({
  password: Yup.string()
    .required("Please enter your password")
    .matches(
      getPasswordRegex(),
      `Must Contain ${MIN_PASSWORD_CHARS} Characters, One Uppercase, One Lowercase, One Number`
    ),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match."
  ),
  currentPassword: Yup.string().required("Current password is required"),
});
