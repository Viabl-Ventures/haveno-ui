import { Currency } from "@atoms/Currency";
import { Text } from "@mantine/core";
import type { TMarketOfferPaymentMethod } from "./_types";

export const MarketOffersSelectPaymentMethodsLimit = ({
  row,
}: {
  row?: TMarketOfferPaymentMethod;
}) => {
  return (
    <Text size="sm" color="gray">
      <Currency value={row?.rateTradeLimit || 0} />{" "}
      {row?.rateTradeLimitCurrency}
    </Text>
  );
};

export const MarketOffersSelectPaymentMethodsInfo = ({
  row,
}: {
  row?: TMarketOfferPaymentMethod;
}) => {
  return (
    <Text size="sm" color="gray">
      {row?.info}
    </Text>
  );
};
