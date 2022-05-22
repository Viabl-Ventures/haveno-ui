import { LangKeys } from "@constants/lang";
import { Skeleton } from "@mantine/core";
import { MoneroBalance } from "@organisms/MoneroBalance";
import { useIntl } from "react-intl";

export function MyWalletMoneroBalanceSkeleton() {
  const { formatMessage } = useIntl();

  return (
    <MoneroBalance>
      <MoneroBalance.Detail
        label={formatMessage({
          id: LangKeys.MyWalletMoneroAvaliableBalance,
          defaultMessage: "Avaliable Balance",
        })}
      >
        <Skeleton height={8} radius="xl" mt={6} />
      </MoneroBalance.Detail>

      <MoneroBalance.Detail
        label={formatMessage({
          id: LangKeys.MyWalletMoneroReserveredFunds,
          defaultMessage: "Reservered Funds",
        })}
      >
        <Skeleton height={8} radius="xl" mt={6} />
      </MoneroBalance.Detail>

      <MoneroBalance.Detail
        label={formatMessage({
          id: LangKeys.MyWalletMoneroLockedFunds,
          defaultMessage: "Locked Funds",
        })}
      >
        <Skeleton height={8} radius="xl" mt={6} />
      </MoneroBalance.Detail>
    </MoneroBalance>
  );
}
