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
        size: "xl",
        withCloseButton: false,
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
  body: {
    marginLeft: theme.spacing.sm * -2,
    marginRight: theme.spacing.sm * -2,
    marginBottom: theme.spacing.sm * -2,
  },
}));
