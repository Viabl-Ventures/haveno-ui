import { useIntl } from "react-intl";
import { LangKeys } from "@constants/lang";
import { useBalances } from "@hooks/haveno/useBalances";
import { MoneroBalance } from "@organisms/MoneroBalance";
import { MyWalletMoneroBalanceSkeleton } from "./MyWalletMeneroBalanceSkeleton";

interface MyWalletMoneroBalanceBootProps {
  children: JSX.Element;
}

export function MyWalletMoneroBalanceContent() {
  const { formatMessage } = useIntl();
  const { isLoading: isBalancesLoading, data: balanceInfo } = useBalances();

  if (isBalancesLoading) {
    return <>Loading ...</>;
  }
  return (
    <MoneroBalance>
      <MoneroBalance.Detail
        label={formatMessage({
          id: LangKeys.MyWalletMoneroAvaliableBalance,
          defaultMessage: "Avaliable Balance",
        })}
      >
        {balanceInfo?.getBalance()}
      </MoneroBalance.Detail>

      <MoneroBalance.Detail
        label={formatMessage({
          id: LangKeys.MyWalletMoneroReserveredFunds,
          defaultMessage: "Reservered Funds",
        })}
      >
        {balanceInfo?.getReservedOfferBalance()}
      </MoneroBalance.Detail>

      <MoneroBalance.Detail
        label={formatMessage({
          id: LangKeys.MyWalletMoneroLockedFunds,
          defaultMessage: "Locked Funds",
        })}
      >
        {balanceInfo?.getLockedBalance()}
      </MoneroBalance.Detail>
    </MoneroBalance>
  );
}

export function MyWalletMoneroBalance() {
  return (
    <MyWalletMoneroBalanceBoot>
      <MyWalletMoneroBalanceContent />
    </MyWalletMoneroBalanceBoot>
  );
}

export function MyWalletMoneroBalanceBoot({
  children,
}: MyWalletMoneroBalanceBootProps): JSX.Element {
  const { isLoading: isBalancesLoading } = useBalances();

  return isBalancesLoading ? (
    <MyWalletMoneroBalanceSkeleton />
  ) : (
    <>{children}</>
  );
}
