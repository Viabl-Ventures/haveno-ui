import { useModals } from "@mantine/modals";
import { MarketOffersFilterAmountForm } from "@organisms/MarketOffersFilterAmountForm";

export const useMarketOffersAmountModal = () => {
  const modals = useModals();

  return {
    openModal: () => {
      const modalId = modals.openModal({
        title: "Amount",
        children: (
          <MarketOffersFilterAmountForm
            onSubmit={() => {
              modals.closeModal(modalId);
            }}
          />
        ),
        size: "lg",
        withCloseButton: false,
      });
    },
  };
};
