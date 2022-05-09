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

import { LangKeys } from "@constants/lang";
import Joi from "joi";
import { useIntl } from "react-intl";
import { MIN_PASSWORD_CHARS } from "./_constants";

const getPasswordRegex = () => {
  return RegExp(
    `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{${MIN_PASSWORD_CHARS},})`,
    "i"
  );
};

export const useAccountSecurityFormSchema = () => {
  const { formatMessage } = useIntl();

  return Joi.object({
    password: Joi.string()
      .required()
      .regex(
        getPasswordRegex(),
        formatMessage(
          {
            id: LangKeys.AccountSecurityFieldPasswordFormatMsg,
            defaultMessage: `contain atleast ${MIN_PASSWORD_CHARS} characters, one uppercase, one lowercase and one number`,
          },
          {
            minChars: MIN_PASSWORD_CHARS,
          }
        )
      )
      .label(
        formatMessage({
          id: LangKeys.AccountSecurityFieldPassword,
          defaultMessage: "Password",
        })
      ),
    confirmPassword: Joi.string()
      .valid(Joi.ref("password"))
      .required()
      .options({
        messages: {
          "any.only": formatMessage({
            id: LangKeys.AccountSecurityFieldRepeatPasswordMatchMsg,
            defaultMessage: "Password confirmation doesn't match Password.",
          }),
        },
      }),
    currentPassword: Joi.string()
      .required()
      .label(
        formatMessage({
          id: LangKeys.AccountSecurityFieldCurrentPassword,
          defaultMessage: "Current password",
        })
      ),
  });
};
