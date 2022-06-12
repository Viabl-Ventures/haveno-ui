export interface TMarketOfferPaymentMethod {
  methodChecked?: boolean;
  methodName: string;
  methodKey: string;
  rateTradeLimit: number;
  rateTradeLimitCurrency: string;
  info: string;
}

export interface MarketOfferEditableData {
  methodChecked: boolean;
  methodKey: string;
}
