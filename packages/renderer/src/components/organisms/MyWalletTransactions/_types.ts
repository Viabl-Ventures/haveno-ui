export enum MyWalletTransactionType {
  Sent = "Sent",
  Received = "Received",
}

export type TMyWalletTransaction = {
  type: MyWalletTransactionType;
  date: string;
  time: string;
  amount: number;
  amountCurrency: string;
  foreignAmount: number;
  foreignAmountCurrency: string;
  transactionId: string;
  receiptAddress: string;
  transactionKey: string;
  fee: string;
  height: string;
};
