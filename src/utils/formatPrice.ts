export const formatPrice = (price: number) => {
  let stringifiedPrice = String(price);

  while (stringifiedPrice.length < 3) {
    stringifiedPrice = "0" + stringifiedPrice;
  }

  return (
    stringifiedPrice.substring(0, stringifiedPrice.length - 2) +
    "," +
    stringifiedPrice.substring(stringifiedPrice.length - 2) +
    "&euro;"
  );
};
