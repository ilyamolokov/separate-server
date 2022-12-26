const isSuperTurbo = (tournament) => {
    const name = (tournament["@name"] ?? "").toLowerCase();
    const superturbo = tournament["@flags"]?.includes("ST") || name?.includes("hyper");
  
    return superturbo;
  };
  
  module.exports = { isSuperTurbo };