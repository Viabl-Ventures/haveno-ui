import { useTableContext } from "./use-table-context";

export function TableHeader() {
  const {
    table,
    props: { showHeader },
  } = useTableContext();

  if (!showHeader) {
    return null;
  }

  return (
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th
              key={header.id}
              colSpan={header.colSpan}
              style={{
                width: header.getSize(),
              }}
            >
              {header.isPlaceholder ? null : header.renderHeader()}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
}
