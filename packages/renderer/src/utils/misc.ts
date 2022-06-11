import _ from "lodash";

export const transformToForm = (
  obj: Record<string, any>,
  emptyInitialValues: Record<string, any>
) => {
  return _.pickBy(
    obj,
    (val, key) => val !== null && Object.keys(emptyInitialValues).includes(key)
  );
};
