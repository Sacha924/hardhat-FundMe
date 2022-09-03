// function deployFunc(hre) {
//     console.log("Hi")
// }

const { ethers } = require("ethers");
const { networks } = require("../hardhat.config");

// //We're going to export this deploy function as the default function for Hardhat deploy to look for
// module.exports.default = deployFunc;

//another syntax :
//hre = hardhat runtime environment
const { getNamedAccounts, deployments, network } = require("hardhat");
const { networkConfig, developmentChains } = require("../helper-hardhat-config");
//this syntax with the bracket is equivalent to :
// const helperConfig = require("../helper-hardhat-config");
// const networkConfig = helperConfig.networkConfig;

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log, get } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  // if chainId is X use address Y
  // if chainId is Z use address K
  let ethUsdPriceFeedAddress;
  if (developmentChains.includes(network.name)) {
    const ethUsdAggregator = await get("MockV3Aggregator");
    ethUsdPriceFeedAddress = ethUsdAggregator.address;
  } else {
    ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];
  }

  //But what if we use a chain that doesn't even have a price feed address on it? What do we do there? This is where we actually create those mock contracts. The idea of mock contracts here is if the contract doesn't exist, we deploy a minimal version of it for our local testing, or our local testing. And deploying mocks is technically a deploy script.

  //what happens when we want to change chain.
  const fundMe = await deploy("FundMe", {
    from: deployer,
    args: [ethUsdPriceFeedAddress], //put price feed, without hardcoding it. We use the chaindId
    log: true,
  });
  log("------------------------------------------------------");
};

module.exports.tags = ["all", "fundme"];
