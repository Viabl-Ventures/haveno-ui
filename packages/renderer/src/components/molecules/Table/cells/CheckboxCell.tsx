import { Checkbox } from "@mantine/core";
import { useState, useEffect } from "react";

// Give our default column cell renderer editing superpowers!
export const CheckboxCell = ({
  getValue,
  row: { index },
  column: { id },
  instance,
  checkboxProps,
}) => {
  const initialValue = getValue();
  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState(initialValue);

  // When the input is blurred, we'll call our table meta's updateData function
  const onBlur = () => {
    instance.options.meta?.updateData(index, id, value);
  };

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <Checkbox
      value={value as string}
      onChange={(e) => setValue(e.target.checked)}
      onBlur={onBlur}
      {...checkboxProps}
    />
  );
};
