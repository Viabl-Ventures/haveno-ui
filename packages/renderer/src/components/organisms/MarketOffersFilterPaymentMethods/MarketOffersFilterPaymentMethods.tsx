import { MarketoffersSelectPaymentMethods } from "@molecules/MarketOffersSelectPaymentMethods";

export function MarketOffersFilterPaymentMethods() {
  return <MarketoffersSelectPaymentMethods data={data} />;
}

const data = [
  {
    method: "Celpay",
    rateTradeLimit: 20,
    rateTradeLimitCurrency: "XMR",
    info: "Global",
  },
  {
    method: "Celpay",
    rateTradeLimit: 20,
    rateTradeLimitCurrency: "XMR",
    info: "Global",
  },
  {
    method: "Celpay",
    rateTradeLimit: 20,
    rateTradeLimitCurrency: "XMR",
    info: "Global",
  },
  {
    method: "Celpay",
    rateTradeLimit: 20,
    rateTradeLimitCurrency: "XMR",
    info: "Global",
  },
];
