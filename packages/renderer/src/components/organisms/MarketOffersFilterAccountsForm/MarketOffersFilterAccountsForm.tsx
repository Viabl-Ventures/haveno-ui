import { TextInput } from "@atoms/TextInput";
import { Grid, Text, Checkbox } from "@mantine/core";
import { useForm } from "@mantine/form";

export function MarketOffersFilterAccountsForm() {
  const form = useForm({
    initialValues: {
      signedAccounts: false,
      minAccountAge: null,
      maxAmountTrades: null,
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Grid mb="xl">
        <Grid.Col span={8}>
          <Text weight={500}>Signed accounts </Text>
          <Text color="gray">
            Only show accounts that have been signed. Please be aware that new
            accounts need to get the chance to get signed.
          </Text>
        </Grid.Col>

        <Grid.Col sx={{ display: "flex" }} span={4}>
          <Checkbox
            id={"minAmountFrom"}
            {...form.getInputProps("signedAccounts")}
            radius="sm"
            size="md"
            sx={{ alignItems: "flex-start", marginLeft: "auto" }}
          />
        </Grid.Col>
      </Grid>

      <Grid mb="xl">
        <Grid.Col span={8}>
          <Text weight={500}>Minimum account age</Text>
          <Text color="gray">
            Only show trade offers with a minimum account age.
          </Text>
        </Grid.Col>

        <Grid.Col span={4}>
          <TextInput
            id={"minAmountFrom"}
            {...form.getInputProps("minAccountAge")}
            rightSection={
              <Text mr="xl" color="gray">
                Days
              </Text>
            }
          />
        </Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col span={8}>
          <Text weight={500}>Minimum amount of trades</Text>
          <Text color="gray">
            Only show trade offers from accounts with a minimum amount of
            completed trades
          </Text>
        </Grid.Col>

        <Grid.Col span={4}>
          <TextInput
            id={"minAmountFrom"}
            {...form.getInputProps("maxAmountTrades")}
            rightSection={
              <Text mr="xl" color="gray">
                Trades
              </Text>
            }
          />
        </Grid.Col>
      </Grid>
    </form>
  );
}

interface MarketOffersFilterAccountsForm {
  signedAccounts: boolean;
  minAccountAge: boolean;
  maxAmountTrades: boolean;
}
