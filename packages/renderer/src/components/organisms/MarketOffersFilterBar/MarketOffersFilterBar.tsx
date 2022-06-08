import { useModals } from "@mantine/modals";
import { Divider, Group, Button, createStyles } from "@mantine/core";
import { FormattedMessage } from "react-intl";
import { LangKeys } from "@constants/lang";
import { MarketOffersFilterAccountsForm } from "@organisms/MarketOffersFilterAccountsForm/MarketOffersFilterAccountsForm";
import { MarketOffersFilterAmountForm } from "@organisms/MarketOffersFilterAmountForm/MarketOffersFilterAmountForm";
import {
  useMarketOffersPairModal,
  useMarketOffersPaymentMethods,
} from "./hooks";

export function MarketOffersFilterBar() {
  const { classes } = useStyles();
  const modals = useModals();

  const marketOffersPairModal = useMarketOffersPairModal();
  const marketOffersPaymentMethodsModal = useMarketOffersPaymentMethods();

  const handleParisBtnClick = () => {
    marketOffersPairModal.openModal();
  };

  const handlePaymentMethodsBtnClick = () => {
    marketOffersPaymentMethodsModal.openModal();
  };

  const handleAccountBtnClick = () => {
    modals.openModal({
      title: "Amount",
      children: <MarketOffersFilterAccountsForm />,
      size: "lg",
      withCloseButton: true,
    });
  };

  const handleAmountBtnClick = () => {
    modals.openModal({
      title: "Amount",
      children: <MarketOffersFilterAmountForm />,
      size: "lg",
      withCloseButton: false,
    });
  };

  return (
    <Group position="apart" className={classes.root}>
      <Group>
        <Button radius="md" size="md">
          XMR/EUR
        </Button>

        <Divider className={classes.divider} orientation="vertical" />
        <Button
          color="gray"
          variant="outline"
          radius="md"
          size="md"
          onClick={handleParisBtnClick}
        >
          XMR/EUR
        </Button>

        <Button
          onClick={handleAmountBtnClick}
          color="gray"
          variant="outline"
          radius="md"
          size="md"
        >
          <FormattedMessage
            id={LangKeys.MarketOffersAmount}
            defaultMessage="Amount"
          />
        </Button>

        <Button
          color="gray"
          variant="outline"
          radius="md"
          size="md"
          onClick={handlePaymentMethodsBtnClick}
        >
          <FormattedMessage
            id={LangKeys.MarketOffersPaymentMethod}
            defaultMessage="Payment method"
          />
        </Button>

        <Button
          onClick={handleAccountBtnClick}
          color="gray"
          variant="outline"
          radius="md"
          size="md"
        >
          <FormattedMessage
            id={LangKeys.MarketOffersAccountDetails}
            defaultMessage="Account details"
          />
        </Button>
      </Group>

      <Group>
        <Button variant="outline" color="dark" radius="md" size="md">
          Show market depth
        </Button>

        <Button radius="md" size="md">
          <FormattedMessage
            id={LangKeys.MarketOffersCreateOffer}
            defaultMessage="Create Offer"
          />
        </Button>
      </Group>
    </Group>
  );
}

const useStyles = createStyles((theme) => ({
  root: {
    minHeight: 84,
    padding: 15,
    borderBottom: `1px solid ${theme.colors.gray[3]}`,
    background: theme.white,
  },
  divider: {
    marginTop: "auto",
    marginBottom: "auto",
    height: 28,
  },
}));
