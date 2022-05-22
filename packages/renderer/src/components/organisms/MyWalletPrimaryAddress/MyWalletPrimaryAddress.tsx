import {
  AddressCard,
  AddressCardSkeleton,
} from "@molecules/AddressCard/AddressCard";
import { useXmrPrimaryAddress } from "@hooks/haveno/useXmrPrimaryAddress";

export function MyWalletPrimaryAddressContent() {
  const { isLoading, data: xmrAddress } = useXmrPrimaryAddress();

  if (isLoading || !xmrAddress) return <>Loading...</>;

  return (
    <AddressCard label="Primary Address" address={xmrAddress} primary={true} />
  );
}

export function MyWalletPrimaryAddressSkeleton() {
  return <AddressCardSkeleton label="Primary Address" primary={true} />;
}

export function MyWalletPrimaryAddress() {
  const { isLoading } = useXmrPrimaryAddress();

  return isLoading ? (
    <MyWalletPrimaryAddressSkeleton />
  ) : (
    <MyWalletPrimaryAddressContent />
  );
}
