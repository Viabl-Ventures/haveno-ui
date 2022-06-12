import { useForm } from "@mantine/hooks";
import { createStyles, Grid, Group, Text } from "@mantine/core";
import { NumberInput } from "@atoms/TextInput";
import { Button, TextButton } from "@atoms/Buttons";
import { useOffersFilterState } from "@src/state/offersFilter";
import { transformToForm } from "@utils/misc";

interface MarketOffersFilterAmountFormProps {
  onSubmit?: (values: MarketOffersFilterAmountFormValues) => void;
}

export function MarketOffersFilterAmountForm({
  onSubmit,
}: MarketOffersFilterAmountFormProps) {
  const { classes } = useStyles();
  const [offersState, setOffersState] = useOffersFilterState();

  const form = useForm<MarketOffersFilterAmountFormValues>({
    initialValues: {
      ...initialValues,
      ...transformToForm(offersState, initialValues),
    },
  });

  const handleCreateFilter = () => {
    form.setValues({ ...initialValues });
  };

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        setOffersState((oldFilter) => ({
          ...oldFilter,
          ...values,
        }));
        onSubmit && onSubmit(values);
      })}
    >
      <Grid>
        <Grid.Col span={8}>
          <Text weight={500}>Minimum amount</Text>
          <Text color="gray">Set the minimum amount you want to buy.</Text>
        </Grid.Col>

        <Grid.Col span={4}>
          <NumberInput
            id="minAmountFrom"
            rightSection={
              <Text color="gray" pr="sm">
                EUR
              </Text>
            }
            rightSectionWidth={45}
            mb="lg"
            {...form.getInputProps("minimumBaseCurrencyAmount")}
          />
          <NumberInput
            id="minAmountTo"
            rightSection={
              <Text pr="sm" color="gray">
                XMR
              </Text>
            }
            rightSectionWidth={45}
            {...form.getInputProps("minimumCryptoAmount")}
          />
        </Grid.Col>
      </Grid>

      <Grid mt="xl">
        <Grid.Col span={8}>
          <Text weight={500}>Maximum amount</Text>
          <Text color="gray">Set the maximum amount you want to buy.</Text>
        </Grid.Col>

        <Grid.Col span={4}>
          <NumberInput
            id="maxAmountFrom"
            {...form.getInputProps("maximumCryptoAmount")}
            rightSection={
              <Text pr="sm" color="gray">
                XMR
              </Text>
            }
            rightSectionWidth={45}
            mb="lg"
            type="number"
          />
          <NumberInput
            id="maxAmountTo"
            {...form.getInputProps("maximumBaseCurrencyAmount")}
            rightSection={
              <Text pr="sm" color="gray">
                EUR
              </Text>
            }
            rightSectionWidth={45}
            type="number"
          />
        </Grid.Col>
      </Grid>

      <Group position="apart" className={classes.footer}>
        <TextButton
          onClick={handleCreateFilter}
          className={classes.clearFilterBtn}
        >
          Clear filters
        </TextButton>
        <Button type="submit" flavor="primary">
          Save filters
        </Button>
      </Group>
    </form>
  );
}

const useStyles = createStyles((theme) => ({
  footer: {
    paddingTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
    paddingRight: theme.spacing.xl,
    borderTop: `1px solid ${theme.colors.gray[1]}`,
    marginTop: theme.spacing.xl,
    marginLeft: theme.spacing.xl * -1,
    marginRight: theme.spacing.xl * -1,
  },
  clearFilterBtn: {
    fontSize: theme.spacing.lg,
  },
}));

interface MarketOffersFilterAmountFormValues {
  minimumCryptoAmount?: number | null;
  minimumBaseCurrencyAmount?: number | null;
  maximumCryptoAmount?: number | null;
  maximumBaseCurrencyAmount?: number | null;
}

const initialValues = {
  minimumCryptoAmount: undefined,
  minimumBaseCurrencyAmount: undefined,
  maximumCryptoAmount: undefined,
  maximumBaseCurrencyAmount: undefined,
};
