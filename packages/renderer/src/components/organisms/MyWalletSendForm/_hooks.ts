import * as Joi from "joi";

export interface MyWalletSendFormValues {
  amount: string;
  address: string;
  paymentId: string;
}

export function useMyWalletSendFormValidation() {
  return Joi.object<MyWalletSendFormValues>({
    amount: Joi.number().required(),
    address: Joi.string().required(),
    paymentId: Joi.string().optional().empty(""),
  });
}
