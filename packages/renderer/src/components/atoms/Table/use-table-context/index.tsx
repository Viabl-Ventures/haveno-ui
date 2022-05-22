import { createContext, useContext } from "react";
import type { TableInstance } from "@tanstack/react-table";
import type { TableProps } from "../_types";

interface TableContextValue {
  table: TableInstance<any>;
  props: TableProps;
}
interface TableProviderProps {
  value: TableContextValue;
  children: React.ReactNode;
}

export const TableContext = createContext<TableContextValue>(
  {} as TableContextValue
);

export function TableProvider({ children, value }: TableProviderProps) {
  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
}

export const useTableContext = () =>
  useContext<TableContextValue>(TableContext);
