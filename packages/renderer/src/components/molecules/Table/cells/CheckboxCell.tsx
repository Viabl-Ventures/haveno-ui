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
