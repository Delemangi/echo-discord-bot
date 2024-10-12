export const isNotNullish = (
  value: null | string | undefined,
): value is string => {
  return value !== undefined && value !== null;
};
