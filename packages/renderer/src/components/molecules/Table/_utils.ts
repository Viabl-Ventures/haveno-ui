

export const updateTableCell = (
  data: any[],
  rowIndex: number,
  columnId: string,
  value: unknown
) => {
  return data.map((row, index) => {
    if (index === rowIndex) {
      return {
        ...data[rowIndex]!,
        [columnId]: value,
      };
    }
    return row;
  });
};
