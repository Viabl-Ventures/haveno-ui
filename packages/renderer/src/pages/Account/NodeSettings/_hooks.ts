import * as Joi from "joi";

export interface NodeLocalFormValues {
  blockchainLocation: string;
  startupFlags: string;
  deamonAddress: string;
  port: string;
}

export const useNodeLocalFormValidation = () => {
  return Joi.object<NodeLocalFormValues>({
    blockchainLocation: Joi.string().empty("").uri({ relativeOnly: true }),
    startupFlags: Joi.string().empty(""),
    deamonAddress: Joi.string().uri({ allowRelative: false }),
    port: Joi.number().port(),
  });
};
