import { Divider, Group, Button, createStyles, Tabs } from "@mantine/core";
import { FormattedMessage } from "react-intl";
import { LangKeys } from "@constants/lang";
import {
  useMarketOffersPairModal,
  useMarketOffersPaymentMethods,
} from "./hooks";
import { MarketBuySellSwitch } from "@molecules/MarketBuySellSwitch/MarketBuySellSwitch";
import { useMarketOffersAccountModal } from "./hooks/useMarketOffersAccountModal";
import { useMarketOffersAmountModal } from "./hooks/useMarketOffersAmountModal";

export function MarketOffersFilterBar() {
  const { classes } = useStyles();

  const marketOffersPairModal = useMarketOffersPairModal();
  const marketOffersPaymentMethodsModal = useMarketOffersPaymentMethods();
  const marketOffersAccountModal = useMarketOffersAccountModal();
  const marketOffersAmountModal = useMarketOffersAmountModal();

  const handleParisBtnClick = () => {
    marketOffersPairModal.openModal();
  };
  const handlePaymentMethodsBtnClick = () => {
    marketOffersPaymentMethodsModal.openModal();
  };
  const handleAccountBtnClick = () => {
    marketOffersAccountModal.openModal();
  };
  const handleAmountBtnClick = () => {
    marketOffersAmountModal.openModal();
  };

  return (
    <Group position="apart" className={classes.root}>
      <Group>
        <MarketBuySellSwitch>
          <Tabs.Tab label="Sell XMR" />
          <Tabs.Tab label="Buy XMR" />
        </MarketBuySellSwitch>

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
