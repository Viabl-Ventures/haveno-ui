import { Divider, Group, createStyles, Tabs, Text, Box } from "@mantine/core";
import { FormattedMessage } from "react-intl";
import { LangKeys } from "@constants/lang";
import {
  useMarketOffersPairModal,
  useMarketOffersPaymentMethods,
} from "./hooks";
import { MarketBuySellSwitch } from "@molecules/MarketBuySellSwitch";
import {
  useMarketOffersAccountModal,
  useMarketOffersAmountModal,
} from "./hooks";
import { MarketOffersFilterButton } from "./MarketOffersFilterButton";
import { ReactComponent as BtcIcon } from "@assets/btc.svg";

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
        <Group spacing="sm">
          <MarketBuySellSwitch>
            <Tabs.Tab label="Sell XMR" />
            <Tabs.Tab label="Buy XMR" />
          </MarketBuySellSwitch>

          <Text color="gray">with</Text>
          <MarketOffersFilterButton active={true} onClick={handleParisBtnClick}>
            <Box mr="md">
              <BtcIcon height={17} width={17} />
            </Box>
            BTC
          </MarketOffersFilterButton>
        </Group>
        <Divider className={classes.divider} orientation="vertical" />

        <MarketOffersFilterButton onClick={handleAmountBtnClick}>
          <FormattedMessage
            id={LangKeys.MarketOffersAmount}
            defaultMessage="Amount"
          />
        </MarketOffersFilterButton>

        <MarketOffersFilterButton
          active={true}
          bubbleText="7"
          onClick={handlePaymentMethodsBtnClick}
        >
          <FormattedMessage
            id={LangKeys.MarketOffersPaymentMethod}
            defaultMessage="Payment method"
          />
        </MarketOffersFilterButton>

        <MarketOffersFilterButton onClick={handleAccountBtnClick}>
          <FormattedMessage
            id={LangKeys.MarketOffersAccountDetails}
            defaultMessage="Account details"
          />
        </MarketOffersFilterButton>
      </Group>

      <Group>
        <Divider className={classes.divider} orientation="vertical" />

        <MarketOffersFilterButton
          variant="outline"
          color="dark"
          radius="md"
          size="md"
        >
          Show market depth
        </MarketOffersFilterButton>

        <MarketOffersFilterButton variant="filled" color="blue" size="md">
          <FormattedMessage
            id={LangKeys.MarketOffersCreateOffer}
            defaultMessage="Create Offer"
          />
        </MarketOffersFilterButton>
      </Group>
    </Group>
  );
}

const useStyles = createStyles((theme) => ({
  root: {
    minHeight: 84,
    padding: "18px 22px",
    borderBottom: `1px solid ${theme.colors.gray[3]}`,
    background: theme.white,
  },
  divider: {
    marginTop: "auto",
    marginBottom: "auto",
    height: 28,
  },
}));
