const isNormal = (tournament) => {
    const name = (tournament["@name"] ?? "").toLowerCase();

    return !!(tournament["@flags"]?.includes("B") || name?.includes("bounty"));
};

module.exports = { isNormal };