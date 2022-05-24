import { isEmpty } from "lodash";

const LCOAL_STORAGE_KEY = "mywallet-received-addressees";

export const getActiveReceiveAddresses = (): Array<string> => {
  const storedAddressesString = sessionStorage.getItem(LCOAL_STORAGE_KEY);
  const storedAddresses = JSON.parse(storedAddressesString || "[]");

  return !isEmpty(storedAddresses) ? storedAddresses : [];
};

export const saveReceiveAddresss = (address: string) => {
  const activeAddress = getActiveReceiveAddresses();

  sessionStorage.setItem(
    LCOAL_STORAGE_KEY,
    JSON.stringify([...activeAddress, address])
  );
};
