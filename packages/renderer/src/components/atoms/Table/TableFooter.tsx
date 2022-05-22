import { useTableContext } from "./use-table-context";

export function TableFooter() {
  const { table } = useTableContext();

  return (
    <tfoot>
      {table.getFooterGroups().map((footerGroup) => (
        <tr key={footerGroup.id}>
          {footerGroup.headers.map((header) => (
            <th key={header.id} colSpan={header.colSpan}>
              {header.isPlaceholder ? null : header.renderFooter()}
            </th>
          ))}
        </tr>
      ))}
    </tfoot>
  );
}
