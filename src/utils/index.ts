export const parseCurrencyValue = (value: number | undefined) => {
  if (value === undefined) return undefined;
  return value / 100;
};
