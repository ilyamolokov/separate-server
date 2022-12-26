const { getNetwork } = require("./getNetwork");

const isRebuy = (tournament) => {
  const name = tournament["@name"]?.toLowerCase();
  const network = getNetwork(tournament["@network"]);

  return network === "888"
    ? name?.includes("r&a")
    : tournament["@flags"]?.includes("R") && !tournament["@flags"]?.includes("RH");
};

module.exports = { isRebuy };