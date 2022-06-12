import { Divider, Group, createStyles, Tabs, Text, Box } from "@mantine/core";
import { FormattedMessage } from "react-intl";
import { isEmpty } from "lodash";
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
import {
  useOffersFilterState,
  useSetOffersFilterState,
} from "@src/state/offersFilter";
import {
  useAccountDetailsLabel,
  useMarketOffersFilterAmountLabel,
} from "./_hooks";

export function MarketOffersFilterBar() {
  const { classes } = useStyles();
  const [offersFilterState] = useOffersFilterState();
  const setOfferesFilterState = useSetOffersFilterState();

  const marketOffersPairModal = useMarketOffersPairModal();
  const marketOffersPaymentMethodsModal = useMarketOffersPaymentMethods();
  const marketOffersAccountModal = useMarketOffersAccountModal();
  const marketOffersAmountModal = useMarketOffersAmountModal();

  const accountDetailsLabel = useAccountDetailsLabel();
  const filterAmountLabel = useMarketOffersFilterAmountLabel();

  const handleBuySellSwitch = (tabIndex: number, tabKey: string) => {
    setOfferesFilterState((filter) => ({
      ...filter,
      direction: tabKey,
    }));
  };
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
          <MarketBuySellSwitch onTabChange={handleBuySellSwitch}>
            <Tabs.Tab tabKey="sell" label="Sell XMR" />
            <Tabs.Tab tabKey="buy" label="Buy XMR" />
          </MarketBuySellSwitch>

          <Text color="gray">with</Text>
          <MarketOffersFilterButton
            active={!isEmpty(offersFilterState.assetCode)}
            onClick={handleParisBtnClick}
          >
            <Box mr="sm">
              <BtcIcon height={17} width={17} />
            </Box>
            {!isEmpty(offersFilterState.assetCode) ? (
              offersFilterState.assetCode?.toUpperCase()
            ) : (
              <>Currency</>
            )}
          </MarketOffersFilterButton>
        </Group>
        <Divider className={classes.divider} orientation="vertical" />

        <MarketOffersFilterButton
          active={!!filterAmountLabel}
          onClick={handleAmountBtnClick}
        >
          {filterAmountLabel || (
            <FormattedMessage
              id={LangKeys.MarketOffersAmount}
              defaultMessage="Amount"
            />
          )}
        </MarketOffersFilterButton>

        <MarketOffersFilterButton
          active={!isEmpty(offersFilterState.paymentMethods)}
          bubbleText={
            isEmpty(offersFilterState.paymentMethods)
              ? ""
              : offersFilterState?.paymentMethods?.length + ""
          }
          onClick={handlePaymentMethodsBtnClick}
        >
          <FormattedMessage
            id={LangKeys.MarketOffersPaymentMethod}
            defaultMessage="Payment method"
          />
        </MarketOffersFilterButton>

        <MarketOffersFilterButton
          active={!!accountDetailsLabel}
          onClick={handleAccountBtnClick}
        >
          {accountDetailsLabel || (
            <FormattedMessage
              id={LangKeys.MarketOffersAccountDetails}
              defaultMessage="Account details"
            />
          )}
        </MarketOffersFilterButton>
      </Group>

      <Group>
        <Divider className={classes.divider} orientation="vertical" />
        <MarketOffersFilterButton>Show market depth</MarketOffersFilterButton>

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
