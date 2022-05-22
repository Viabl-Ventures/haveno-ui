import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { Box, Button, Group, Stack } from "@mantine/core";
import { LangKeys } from "@constants/lang";
import { Heading } from "@atoms/Typography";
import { AddressCard } from "@molecules/AddressCard/AddressCard";
import { useSetXmrNewSubaddress } from "@hooks/haveno/useSetXmrNewSubaddress";

export function MyWalletReceive() {
  const { mutateAsync: setXmrNewSubaddress } = useSetXmrNewSubaddress();
  const [addresses, setAddresses] = useState<string[]>([]);

  const handleGenerateAddressBtn = () => {
    setXmrNewSubaddress().then((newSubaddress: string) => {
      setAddresses((oldAddress) => [...oldAddress, newSubaddress]);
    });
  };
  return (
    <Box>
      <Heading order={4} stringId={LangKeys.MyWalletReceiveTitle}>
        Your Address
      </Heading>

      <Stack>
        {addresses.map((address) => (
          <AddressCard key={address} address={address} />
        ))}
      </Stack>

      <Group position="right" mt="md">
        <Button
          variant="subtle"
          color="dark"
          size="md"
          type="submit"
          onClick={handleGenerateAddressBtn}
        >
          <FormattedMessage
            id={LangKeys.MyWalletGenerateAddressBtn}
            defaultMessage="Generate a new stub address"
          />
        </Button>
      </Group>
    </Box>
  );
}
