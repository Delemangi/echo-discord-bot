export const isNotNullish = (
  value: null | string | undefined,
): value is string => value !== undefined && value !== null;
