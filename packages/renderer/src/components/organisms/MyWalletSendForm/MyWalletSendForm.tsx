import { joiResolver, useForm } from "@mantine/form";
import { Group, SimpleGrid, Stack, Text } from "@mantine/core";
import { TextInput } from "@atoms/TextInput";
import type { MyWalletSendFormValues } from "./_hooks";
import { useMyWalletSendFormValidation } from "./_hooks";
import { FormattedMessage, useIntl } from "react-intl";
import { LangKeys } from "@constants/lang";
import { Button } from "@atoms/Buttons";
import { useSetXmrSend } from "@hooks/haveno/useSetXmrSend";
import { showNotification } from "@mantine/notifications";

export function MyWalletSendForm() {
  const { formatMessage } = useIntl();
  const { mutateAsync: setXmrSend } = useSetXmrSend();
  const validation = useMyWalletSendFormValidation();

  const form = useForm<MyWalletSendFormValues>({
    initialValues: {
      amount: "",
      address: "",
      paymentId: "",
    },
    validate: joiResolver(validation),
  });

  const handleFormSubmit = (values: MyWalletSendFormValues) => {
    setXmrSend(values).then(() => {
      showNotification({
        color: "green",
        message: formatMessage({
          id: LangKeys.MyWalletSendSuccessNotif,
          defaultMessage: "The XMR transaction has been sent successfully.",
        }),
      });
      form.reset();
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleFormSubmit)}>
      <Stack spacing="xl">
        <SimpleGrid cols={2}>
          <TextInput
            id="amount"
            type="number"
            label={
              <FormattedMessage
                id={LangKeys.MyWalletSendFieldAmount}
                defaultMessage="Amount"
              />
            }
            rightSection={
              <Text mr="xl" weight={500} color="gray">
                XMR
              </Text>
            }
            {...form.getInputProps("amount")}
          />
        </SimpleGrid>
        <TextInput
          id="address"
          label={
            <FormattedMessage
              id={LangKeys.MyWalletSendFieldAddress}
              defaultMessage="Address"
            />
          }
          placeholder={formatMessage({
            id: LangKeys.MyWalletSendFieldAddressPlaceholder,
            defaultMessage: "Paste in address here...",
          })}
          {...form.getInputProps("address")}
        />
        <TextInput
          id="paymentId"
          label={
            <FormattedMessage
              id={LangKeys.MyWalletSendFieldPaymentId}
              defaultMessage="Payment ID"
            />
          }
          placeholder={formatMessage({
            id: LangKeys.MyWalletSendFieldPaymentIdPlaceholder,
            defaultMessage: "Paste in address here...",
          })}
          {...form.getInputProps("paymentId")}
        />
      </Stack>
      <Group position="right" mt="xl">
        <Button size="md" type="submit">
          <FormattedMessage id={LangKeys.Save} defaultMessage="Save" />
        </Button>
      </Group>
    </form>
  );
}
