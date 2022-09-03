//we're actually going to deploy our own mock price feed contracts. And in our deploy Fundme script, we're going to use our own contracts, instead of already established contracts ff we were on a network that doesn't have any price fee contracts, like hardhat or localhost, for example.
const { network } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");

const DECIMALS = "8";
const INITIAL_PRICE = "200000000000"; // 2000

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  //So now that we have our mock contract compiled, we now have a contract that we can use to deploy a fake price feed to a blockchain.

  if (developmentChains.includes(network.name)) {
    //checks if the name of the network is in the developmentChains tab
    log("Local network detected! Deploying mocks...");
    await deploy("MockV3Aggregator", {
      contract: "MockV3Aggregator",
      from: deployer,
      log: true,
      args: [DECIMALS, INITIAL_PRICE],
    });
    log("Mocks Deployed!");
    log("------------------------------------------------");
    log("You are deploying to a local network, you'll need a local network running to interact");
    log("Please run `npx hardhat console` to interact with the deployed smart contracts!");
    log("------------------------------------------------");
  }
};

//Is there a way that we could run only our deploy mock script? Well, yes, there is :
module.exports.tags = ["all", "mocks"];

//now we can do yarn hardhat deploy --tags and it will only run the deploy scripts that have a special tag. So we can write : yarn hardhat deploy --tags mocks
