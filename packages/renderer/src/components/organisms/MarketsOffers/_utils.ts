import { MarketOfferPaymentMethod } from "@molecules/MarketOffersTable";
import type { MarketOfferData } from "@hooks/haveno/useMarketsOffers";
import type { MarketOffer } from "@molecules/MarketOffersTable";

export const transformToMarketsOffers = (
  offers: MarketOfferData[]
): MarketOffer[] => {
  return offers.map((offer) => ({
    price: offer.price,
    priceCurrency: offer.counterCurrencyCode,
    amount: offer.amount,
    amountCurrency: offer.baseCurrencyCode,
    costCurrency: offer.baseCurrencyCode,
    priceComparison: 0.1,
    paymentMethod: MarketOfferPaymentMethod.CashByMail,
    cost: 1,
    accountAge: 1,
    accountTrades: 1,
  }));
};
