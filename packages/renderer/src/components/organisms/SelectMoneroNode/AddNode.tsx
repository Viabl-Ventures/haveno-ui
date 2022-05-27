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

import { Group, Space, Stack } from "@mantine/core";
import Joi from "joi";
import { joiResolver, useForm } from "@mantine/form";
import { Heading } from "@atoms/Typography";
import { TextInput } from "@atoms/TextInput";
import { PasswordInput } from "@atoms/PasswordInput";
import { Button, TextButton } from "@atoms/Buttons";

interface AddNodeProps {
  isLoading?: boolean;
  onSubmit: (values: AddNodeFormValues) => void;
  setChange: (values: false) => void;
}

export function AddNode(props: AddNodeProps) {
  const { isLoading = false, onSubmit, setChange } = props;
  const { getInputProps, onSubmit: onFormSubmit } = useForm<AddNodeFormValues>({
    initialValues: {
      address: "",
      port: "",
      user: "",
      password: "",
    },
    validate: joiResolver(validation),
  });

  const handleSubmit = (values: AddNodeFormValues) => {
    onSubmit(values);
  };

  return (
    <Stack>
      <form onSubmit={onFormSubmit(handleSubmit)}>
        <Heading order={3}>Add a new node</Heading>
        <Stack>
          <TextInput
            aria-label="Node address"
            id="address"
            label="Node address"
            required
            {...getInputProps("address")}
          />
          <TextInput
            aria-label="Port"
            id="port"
            label="Port"
            required
            {...getInputProps("port")}
          />
          <TextInput
            id="user"
            label="Login (optional)"
            {...getInputProps("user")}
          />
          <PasswordInput
            id="password"
            label="Password (optional)"
            {...getInputProps("password")}
          />
          <Space h="md" />
          <Group position="right">
            <TextButton onClick={() => setChange(false)}>Go Back</TextButton>
            <Button loaderPosition="right" loading={isLoading} type="submit">
              Test Node
            </Button>
          </Group>
        </Stack>
      </form>
    </Stack>
  );
}

export interface AddNodeFormValues {
  address: string;
  port: string;
  user?: string;
  password?: string;
}

const validation = Joi.object<AddNodeFormValues>({
  address: Joi.string().uri({ allowRelative: false }),
  port: Joi.number().port(),
  user: Joi.string().allow("").optional(),
  password: Joi.string().allow("").optional(),
});
