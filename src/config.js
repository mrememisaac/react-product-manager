const config = {
  baseApiUrl: "https://localhost:4000",
};
export default config;

export const currencyFormatter = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});
