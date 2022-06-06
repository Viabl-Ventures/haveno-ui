import { useForm } from "@mantine/hooks";
import { createStyles, Grid, Group, Text } from "@mantine/core";
import { TextInput } from "@atoms/TextInput";
import { Button, TextButton } from "@atoms/Buttons";

export function MarketOffersFilterAmountForm() {
  const form = useForm({
    initialValues: {
      minAmountFrom: null,
      minAmountTo: null,
      maxAmountFrom: null,
      maxAmountTo: null,
    },
  });
  const { classes } = useStyles();

  return (
    <form
      onSubmit={form.onSubmit((values: MarketOffersFilterAmountFormValues) =>
        console.log(values)
      )}
    >
      <Grid>
        <Grid.Col span={8}>
          <Text weight={500}>Minimum amount</Text>
          <Text color="gray">Set the minimum amount you want to buy.</Text>
        </Grid.Col>

        <Grid.Col span={4}>
          <TextInput
            id="minAmountFrom"
            {...form.getInputProps("minAmountFrom")}
            rightSection={<Text color="gray">EUR</Text>}
            mb="lg"
          />
          <TextInput
            id="minAmountTo"
            {...form.getInputProps("minAmountTo")}
            rightSection={<Text color="gray">XMR</Text>}
          />
        </Grid.Col>
      </Grid>

      <Grid mt="xl">
        <Grid.Col span={8}>
          <Text weight={500}>Maximum amount</Text>
          <Text color="gray">Set the maximum amount you want to buy.</Text>
        </Grid.Col>

        <Grid.Col span={4}>
          <TextInput
            id="maxAmountFrom"
            {...form.getInputProps("maxAmountFrom")}
            rightSection={<Text color="gray">XMR</Text>}
            mb="lg"
          />
          <TextInput
            id="maxAmountTo"
            {...form.getInputProps("maxAmountTo")}
            rightSection={<Text color="gray">EUR</Text>}
          />
        </Grid.Col>
      </Grid>

      <Group position="apart" className={classes.footer}>
        <TextButton className={classes.clearFilterBtn}>
          Clear filters
        </TextButton>
        <Button flavor="primary">Save filters</Button>
      </Group>
    </form>
  );
}

interface MarketOffersFilterAmountFormValues {
  maxAmountTo: string;
  maxAmountFrom: string;
  minAmountTo: string;
  minAmountFrom: string;
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
