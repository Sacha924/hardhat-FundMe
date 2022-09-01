// function deployFunc(hre) {
//     console.log("Hi")
// }

const { networks } = require("../hardhat.config");

// //We're going to export this deploy function as the default function for Hardhead deploy to look for
// module.exports.default = deployFunc;

//another syntax :
//hre = hardhat runtime environment
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
};
