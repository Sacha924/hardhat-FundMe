const networkConfig = {
  4: {
    name: "rinkeby",
    ethUsdPriceFeed: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e",
  },
  //this is how we go on a mainet or testnet but how do we test it locally, what about a local network
};

const developmentChains = ["hardhat", "localhost"];
module.exports = { networkConfig, developmentChains };
