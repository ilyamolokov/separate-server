const { getNetwork } = require("./getNetwork");
const { isSat } = require("./IsSat");
const { isSuperTurbo } = require("./isSuperTurbo");

// пока корректно, ждем ответ
const isTurbo = (tournament) => {
    let flags = tournament["@flags"];
    const name = (tournament["@name"] ?? "").toLowerCase();
    const network = getNetwork(tournament["@network"]);
    const superturbo = isSuperTurbo(tournament);
    const sat = isSat(tournament);
    if ((sat && flags) || flags?.includes("SAT")) flags = flags.replace("SAT", "");

    const turbo =
        (flags?.includes("T") ||
            name?.includes("turbo") ||
            (network === "PS.eu" && name?.includes("hot"))) &&
        !superturbo;

    return turbo;
};

module.exports = { isTurbo };