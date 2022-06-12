import { useModals } from "@mantine/modals";
import { MarketOffersFilterAccountsForm } from "@organisms/MarketOffersFilterAccountsForm/MarketOffersFilterAccountsForm";

export const useMarketOffersAccountModal = () => {
  const modals = useModals();

  return {
    openModal: () => {
      const modalId = modals.openModal({
        title: "Amount",
        children: (
          <MarketOffersFilterAccountsForm
            onSubmit={() => {
              modals.closeModal(modalId);
            }}
          />
        ),
        size: "lg",
        withCloseButton: true,
      });
    },
  };
};
