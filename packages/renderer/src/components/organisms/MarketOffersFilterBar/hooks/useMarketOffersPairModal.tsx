import { createStyles } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { MarketOffersTradingPair } from "@organisms/MarketOffersTradingPair";

export const useMarketOffersPairModal = () => {
  const modals = useModals();
  const { classes } = useStyles();

  return {
    openModal: () => {
      const modalId = modals.openModal({
        title: "Select trading pair",
        children: (
          <MarketOffersTradingPair
            onSubmit={() => {
              modals.closeModal(modalId);
            }}
          />
        ),
        withCloseButton: true,
        size: 570,
        classNames: classes,
      });
    },
  };
};

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: theme.fontSizes.md,
    fontWeight: 600,
  },
  header: {
    marginBottom: 10,
    marginTop: -10,
  },
  body: {
    marginLeft: theme.spacing.sm * -2,
    marginRight: theme.spacing.sm * -2,
    marginBottom: theme.spacing.sm * -2,
  },
}));
