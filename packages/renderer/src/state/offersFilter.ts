import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

export type OfferFilter = {
  direction: string;
  assetCode: string;
  minimumCryptoAmount?: number | null;
  maximumCryptoAmount?: number | null;
  minimumBaseCurrencyAmount?: number | null;
  maximumBaseCurrencyAmount?: number | null;
  paymentMethods?: string[];
  signedAccounts?: boolean;
  minimumAccountAge?: number | null;
  minimumTradesAmount?: number | null;
};
const defaultValue = {
  direction: "sell",
  assetCode: "BTC",
};
export const offersFilterAtom = atom<OfferFilter>({
  key: "offersFilter",
  default: defaultValue,
});

export const useGetOffersFilterState = () =>
  useRecoilValue<OfferFilter>(offersFilterAtom);

export const useSetOffersFilterState = () =>
  useSetRecoilState<OfferFilter>(offersFilterAtom);

export const useOffersFilterState = () =>
  useRecoilState<OfferFilter>(offersFilterAtom);
