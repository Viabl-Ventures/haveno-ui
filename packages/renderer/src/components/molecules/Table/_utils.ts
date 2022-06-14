export const updateTableCell = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Array<any>,
  rowIndex: number,
  columnId: string,
  value: unknown
) => {
  return data.map((row, index) => {
    if (index === rowIndex) {
      return {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        ...data[rowIndex]!,
        [columnId]: value,
      };
    }
    return row;
  });
};
