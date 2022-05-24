import type { TWalletTransaction } from "@molecules/WalletTransactions/_types";
import { WalletTransactionType } from "@molecules/WalletTransactions/_types";
import type { XmrTx } from "haveno-ts";
import { isEmpty } from "lodash";

export const transfromXmrTxs = (
  xmrTxs: XmrTx.AsObject[]
): TWalletTransaction[] => {
  return xmrTxs.map(transfromXmrTx);
};

const transfromXmrTx = (xmrTx: XmrTx.AsObject): TWalletTransaction => {
  return {
    type: isEmpty(xmrTx.incomingTransfersList)
      ? WalletTransactionType.Sent
      : WalletTransactionType.Received,

    fee: parseFloat(xmrTx.fee),
    height: xmrTx.height,

    amount: !isEmpty(xmrTx.outgoingTransfer)
      ? parseFloat(xmrTx.outgoingTransfer?.amount || "")
      : parseFloat(xmrTx.incomingTransfersList[0]?.amount),

    amountCurrency: "XMR",
    transactionId: xmrTx.hash,

    date: xmrTx.timestamp,

    incomingAddresses: xmrTx.incomingTransfersList?.map((addr) => addr.address),
    destinationAddresses: xmrTx.outgoingTransfer?.destinationsList?.map(
      (addr) => addr.address
    ),
  };
};
