// =============================================================================
//  Copyright 2022 Haveno
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
// =============================================================================

import { Divider, Group, createStyles, Tabs, Text, Box } from "@mantine/core";
import { FormattedMessage } from "react-intl";
import { isEmpty } from "lodash";
import { LangKeys } from "@constants/lang";
import {
  useMarketOffersPairModal,
  useMarketOffersPaymentMethods,
  useMarketOffersAmountModal,
  useMarketOffersAccountModal,
} from "./hooks";
import { MarketBuySellSwitch } from "@molecules/MarketBuySellSwitch";
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

          <Text color="gray">
            <FormattedMessage
              id={LangKeys.MarketOffersWith}
              defaultMessage="with"
            />
          </Text>
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
              <FormattedMessage
                id={LangKeys.MarketOffersCurrency}
                defaultMessage="Currency"
              />
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
        <MarketOffersFilterButton>
          <FormattedMessage
            id={LangKeys.MarketOffersShowMarketDepth}
            defaultMessage="Show market depth"
          />
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
