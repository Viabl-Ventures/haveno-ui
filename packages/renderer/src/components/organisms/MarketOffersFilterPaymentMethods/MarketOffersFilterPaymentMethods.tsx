import { includes } from "lodash";
import { useMemo } from "react";
import type { TMarketOfferPaymentMethod } from "@molecules/MarketOffersSelectPaymentMethods";
import { MarketoffersSelectPaymentMethods } from "@molecules/MarketOffersSelectPaymentMethods";
import { useOffersFilterState } from "@src/state/offersFilter";

export function MarketOffersFilterPaymentMethods() {
  const [filterQuery, setFilterQuery] = useOffersFilterState();

  const handleEditableDataChange = (newData: TMarketOfferPaymentMethod[]) => {
    setFilterQuery((oldQuery) => ({
      ...oldQuery,
      paymentMethods: newData
        .filter((payment) => payment.methodChecked)
        .map((payment) => payment.methodKey),
    }));
  };

  const tableData = useMemo(
    () =>
      data.map((item) => ({
        ...item,
        methodChecked: includes(filterQuery.paymentMethods, item.methodKey),
      })),
    [filterQuery]
  );

  return (
    <MarketoffersSelectPaymentMethods
      data={tableData}
      onEditableDataChange={handleEditableDataChange}
    />
  );
}

const data = [
  {
    methodName: "Celpay",
    methodChecked: true,
    methodKey: "celpay",
    rateTradeLimit: 20,
    rateTradeLimitCurrency: "XMR",
    info: "Global",
  },
  {
    methodName: "Celpay",
    methodChecked: false,
    methodKey: "celpay2",
    rateTradeLimit: 20,
    rateTradeLimitCurrency: "XMR",
    info: "Global",
  },
  {
    methodName: "Celpay",
    methodChecked: false,
    methodKey: "celpay3",
    rateTradeLimit: 20,
    rateTradeLimitCurrency: "XMR",
    info: "Global",
  },
  {
    methodName: "Celpay",
    methodChecked: false,
    methodKey: "celpay4",
    rateTradeLimit: 20,
    rateTradeLimitCurrency: "XMR",
    info: "Global",
  },
] as TMarketOfferPaymentMethod[];
