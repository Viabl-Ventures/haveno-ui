import type { ButtonProps } from "@mantine/core";
import { Button } from "@mantine/core";

export function MarketOffersFilterButton({ ...props }: ButtonProps) {
  return (
    <Button color="gray" variant="outline" radius="md" size="md" {...props} />
  );
}
