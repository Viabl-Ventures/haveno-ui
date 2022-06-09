import type { MarketOfferData } from "@hooks/haveno/useMarketsOffers";
import type { MarketTransaction } from "@molecules/MarketTransactionsTable/_types";
import { MarketTransactionPaymentMethod } from "@molecules/MarketTransactionsTable/_types";

export const transformToMarketsTransactions = (
  offers: MarketOfferData[]
): MarketTransaction[] => {
  return offers.map((offer) => ({
    price: offer.price,
    priceCurrency: offer.counterCurrencyCode,
    amount: offer.amount,
    amountCurrency: offer.baseCurrencyCode,
    costCurrency: offer.baseCurrencyCode,
    priceComparison: 0.1,
    paymentMethod: MarketTransactionPaymentMethod.CashByMail,
    cost: 1,
    accountAge: 1,
    accountTrades: 1,
  }));
};
