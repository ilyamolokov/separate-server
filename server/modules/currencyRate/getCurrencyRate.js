const { readFile } = require("../../utils/promisify");

const getCurrencyRate = async () => {
  let { currency } = JSON.parse(await readFile("server/store/currency/currency.json"));

  return currency ?? 0;
};

module.exports = { getCurrencyRate };