// =============================================================================
//  Copyright 2022 Haveno
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
// =============================================================================

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
