import { createStyles } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { MarketOffersFilterPaymentMethods } from "@organisms/MarketOffersFilterPaymentMethods/MarketOffersFilterPaymentMethods";

export const useMarketOffersPaymentMethods = () => {
  const modals = useModals();
  const { classes } = useStyles();

  return {
    openModal: () => {
      modals.openModal({
        title: "Filter on payment methods",
        children: <MarketOffersFilterPaymentMethods />,
        size: 970,
        withCloseButton: true,
        classNames: classes,
      });
    },
  };
};

const useStyles = createStyles((theme) => ({
  root: {
    padding: "0 !important",
  },
  modal: {
    padding: "0 !important",
  },
  title: {
    fontSize: theme.fontSizes.md,
    fontWeight: 600,
  },
  header: {
    padding: "12px 20px",
    margin: 0,
  },
}));
