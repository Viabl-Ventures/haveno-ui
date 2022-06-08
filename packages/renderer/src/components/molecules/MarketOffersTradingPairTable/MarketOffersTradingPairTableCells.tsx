import { AmountChange } from "@atoms/AmountChange/AmountChange";
import { Currency } from "@atoms/Currency";
import { Box, Group } from "@mantine/core";
import type { TMarketOffersTradingPair } from "./_types";

export function MarketOfferPairCell({
  row,
}: {
  row?: TMarketOffersTradingPair;
}) {
  return (
    <>
      {row?.fromPair}/{row?.toPair}
    </>
  );
}

export function MarketOfferPairLastPriceCell({
  row,
}: {
  row?: TMarketOffersTradingPair;
}) {
  return (
    <Group spacing="md">
      <Box>{row?.lastPriceCurrency} </Box>
      <Box>
        <Currency value={row?.lastPrice || 0} minimumFractionDigits={0} />
      </Box>
    </Group>
  );
}

export function MarketOfferPair24thChange({
  row,
}: {
  row?: TMarketOffersTradingPair;
}) {
  return <AmountChange positive={true}>+3,5%</AmountChange>;
}

export function MarketOfferPair24thChangeVolume({
  row,
}: {
  row?: TMarketOffersTradingPair;
}) {
  return <Currency value={12312} minimumFractionDigits={0} />;
}
