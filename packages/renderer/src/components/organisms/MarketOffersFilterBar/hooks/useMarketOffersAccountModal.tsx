import { useModals } from "@mantine/modals";
import { MarketOffersFilterAccountsForm } from "@organisms/MarketOffersFilterAccountsForm/MarketOffersFilterAccountsForm";

export const useMarketOffersAccountModal = () => {
  const modals = useModals();

  return {
    openModal: () => {
      return modals.openModal({
        title: "Amount",
        children: <MarketOffersFilterAccountsForm />,
        size: "lg",
        withCloseButton: true,
      });
    },
  };
};
