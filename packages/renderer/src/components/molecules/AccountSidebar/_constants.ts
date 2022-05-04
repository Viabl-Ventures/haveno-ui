import { ROUTES } from "@constants/routes";

export const WIDTH = 210;

export interface AccountSidebarItem {
  label: string;
  route: string;
}

export const accountSidebarMenu = [
  {
    label: "Payment Accounts",
    route: ROUTES.AccountPaymentAccounts,
  },
  {
    label: "Node Settings",
    route: ROUTES.AccountNodeSettings,
  },
  {
    label: "Security",
    route: ROUTES.AccountSecurity,
  },
  {
    label: "Wallet",
    route: ROUTES.AccountWallet,
  },
  {
    label: "Backup",
    route: ROUTES.AccountBackup,
  },
] as AccountSidebarItem[];
