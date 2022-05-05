import { LangKeys } from "@constants/lang";
import { ROUTES } from "@constants/routes";
import React from "react";
import { useIntl } from "react-intl";

export const WIDTH = 210;

export interface AccountSidebarItem {
  label: string;
  route: string;
}

export const useGetAccountSidebarMenu = () => {
  const intl = useIntl();

  return React.useMemo(
    () => [
      {
        label: intl.formatMessage({
          id: LangKeys.AccountSidebarPaymentAccounts,
          defaultMessage: "Payment Accounts",
        }),
        route: ROUTES.AccountPaymentAccounts,
      },
      {
        label: intl.formatMessage({
          id: LangKeys.AccountSidebarNodeSettings,
          defaultMessage: "Node Settings",
        }),
        route: ROUTES.AccountNodeSettings,
      },
      {
        label: intl.formatMessage({
          id: LangKeys.AccountSidebarSecurity,
          defaultMessage: "Security",
        }),
        route: ROUTES.AccountSecurity,
      },
      {
        label: intl.formatMessage({
          id: LangKeys.AccountSidebarWallet,
          defaultMessage: "Wallet",
        }),
        route: ROUTES.AccountWallet,
      },
      {
        label: intl.formatMessage({
          id: LangKeys.AccountSidebarBackup,
          defaultMessage: "Backup",
        }),
        route: ROUTES.AccountBackup,
      },
    ],
    []
  );
};
