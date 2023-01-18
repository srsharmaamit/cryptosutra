export const checkForValidNumber = (value: any) => {
  return /^[-*\d+.]+$/.test(value);
};
