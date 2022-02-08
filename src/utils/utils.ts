export const shortenAddress = (str: string) => {
  return str.substring(0, 4) + '...' + str.substring(str.length - 3, str.length);
};
