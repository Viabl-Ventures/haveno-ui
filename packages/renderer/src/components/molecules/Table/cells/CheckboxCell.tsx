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

import { Checkbox } from "@mantine/core";
import type { Cell } from "@tanstack/react-table";
import { useState, useEffect } from "react";

export const CheckboxCell = ({
  getValue,
  row: { index },
  column: { id },
  instance,
  checkboxProps,
}: Cell<any>) => {
  const initialValue = getValue();
  const [value, setValue] = useState<boolean>(initialValue);

  const onBlur = () => {
    instance.options.meta?.updateData(index, id, value);
  };
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <Checkbox
      checked={value as boolean}
      onChange={(e) => setValue(e.target.checked)}
      onBlur={onBlur}
      {...checkboxProps}
    />
  );
};
