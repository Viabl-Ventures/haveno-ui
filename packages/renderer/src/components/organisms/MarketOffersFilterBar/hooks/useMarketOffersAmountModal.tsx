import { useModals } from "@mantine/modals";
import { MarketOffersFilterAmountForm } from "@organisms/MarketOffersFilterAmountForm/MarketOffersFilterAmountForm";

export const useMarketOffersAmountModal = () => {
  const modals = useModals();

  return {
    openModal: () =>
      modals.openModal({
        title: "Amount",
        children: <MarketOffersFilterAmountForm />,
        size: "lg",
        withCloseButton: false,
      }),
  };
};
