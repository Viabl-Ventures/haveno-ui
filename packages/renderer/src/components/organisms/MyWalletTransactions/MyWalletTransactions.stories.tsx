// =============================================================================
//  Copyright 2022 Haveno
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
// =============================================================================

import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { MyWalletTransactions } from "./MyWalletTransactions";
import type { TMyWalletTransaction } from "./_types";
import { MyWalletTransactionType } from "./_types";

export default {
  title: "organisms/MyWalletTransactions",
  component: MyWalletTransactions,
} as ComponentMeta<typeof MyWalletTransactions>;

const data = [
  {
    type: MyWalletTransactionType.Sent,
    date: "September 16, 2021",
    time: "13:21",
    amount: 17.275849365201,
    foreignAmount: 4108.5,
    amountCurrency: "XMR",
    foreignAmountCurrency: "EUR",
    transactionId:
      "a1b848fdf7fb77f1dae266331d23c522db267ced63566a6e35800421c988d9f1",
    transactionKey:
      "7631e90afdb723b1a798b39bfc5ec942i5d0e155dfa993f536827c7f9699740a",
    receiptAddress:
      "7631e90afdb723b1a798b39bfc5ec942i5d0e155dfa993f536827c7f9699740a",
    height: "2482937",
    fee: "0.000005096000",
  },
  {
    type: MyWalletTransactionType.Received,
    date: "September 16, 2021",
    time: "13:21",
    amount: 17.275849365201,
    foreignAmount: 4108.5,
    amountCurrency: "XMR",
    foreignAmountCurrency: "EUR",
    transactionId:
      "a1b848fdf7fb77f1dae266331d23c522db267ced63566a6e35800421c988d9f1",
    transactionKey:
      "7631e90afdb723b1a798b39bfc5ec942i5d0e155dfa993f536827c7f9699740a",
    receiptAddress:
      "7631e90afdb723b1a798b39bfc5ec942i5d0e155dfa993f536827c7f9699740a",
    height: 2482937,
    fee: 0.000005096,
  },
  {
    type: MyWalletTransactionType.Sent,
    date: "September 16, 2021",
    time: "13:21",
    amount: 17.275849365201,
    foreignAmount: 4108.5,
    amountCurrency: "XMR",
    foreignAmountCurrency: "EUR",
    transactionId:
      "a1b848fdf7fb77f1dae266331d23c522db267ced63566a6e35800421c988d9f1",
    transactionKey:
      "7631e90afdb723b1a798b39bfc5ec942i5d0e155dfa993f536827c7f9699740a",
    receiptAddress:
      "7631e90afdb723b1a798b39bfc5ec942i5d0e155dfa993f536827c7f9699740a",
    height: 2482937,
    fee: 0.000005096,
  },
] as TMyWalletTransaction[];

const Template: ComponentStory<typeof MyWalletTransactions> = () => {
  return <MyWalletTransactions data={data} />;
};

export const Default = Template.bind({});
Default.args = {};
