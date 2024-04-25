export const isNotNullish = (
  value: string | undefined | null,
): value is string => {
  return value !== undefined && value !== null;
};
