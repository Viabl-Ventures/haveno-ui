import { QueryKeys } from "@constants/query-keys";
import { useQuery } from "react-query";
import { useHavenoClient } from "./useHavenoClient";

export const useXmrPrimaryAddress = () => {
  const client = useHavenoClient();

  return useQuery<string>(QueryKeys.XmrPrimaryAddress, async () =>
    client.getXmrPrimaryAddress()
  );
};
