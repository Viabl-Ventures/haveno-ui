import { useTableContext } from "./use-table-context";

export function TableBody() {
  const {
    table,
    props: { rowSubComponent },
  } = useTableContext();

  return (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <>
          <tr
            key={row.id}
            onClick={() => {
              row.toggleExpanded();
            }}
          >
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                style={{
                  width: cell.column.getSize(),
                }}
              >
                {cell.renderCell()}
              </td>
            ))}
          </tr>
          {row.getIsExpanded() && rowSubComponent ? (
            <tr>
              <td colSpan={row.getVisibleCells()?.length}>
                {rowSubComponent({ row })}
              </td>
            </tr>
          ) : null}
        </>
      ))}
    </tbody>
  );
}
